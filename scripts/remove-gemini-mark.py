"""
Uklanja Gemini znak (svetlu zvezdicu u donjem desnom uglu) sa slika proizvoda.

Pokretanje (posle `npm run images`):
    python scripts/remove-gemini-mark.py

Obrađuje samo slike čiji je izvor Gemini (ime izvornog fajla u scripts/images.json
sadrži "Gemini", ili je slika iz brand/source-images). Ako u uglu nađe svetlu
zvezdicu, popunjava je okolnom pozadinom; bez znaka slika ostaje netaknuta,
pa je skriptu bezbedno pokrenuti više puta.
"""
import json
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
PRODUCTS = ROOT / "public/images/products"


def gemini_images():
    """Putanje slika proizvoda koje potiču od Gemini izvora."""
    jobs = json.loads((ROOT / "scripts/images.json").read_text(encoding="utf-8"))
    out = []
    for job in jobs:
        for i, url in enumerate(job["urls"], 1):
            if "Gemini" in url or "source-images" in url:
                out += [PRODUCTS / job["slug"] / f"{i}.webp", PRODUCTS / job["slug"] / f"{i}-lg.webp"]
    return out

# okvir u kom se znak nalazi (relativno na širinu/visinu slike)
BOX = (0.825, 0.855, 0.915, 0.935)


def find_mask(a: np.ndarray, x0, y0, x1, y1):
    """Maska svetlih piksela zvezdice unutar okvira (True = znak)."""
    reg = a[y0:y1, x0:x1].astype(np.float32)
    gray = reg.mean(axis=2)
    # pozadina = jako zamućen region
    bg = np.asarray(
        Image.fromarray(gray.astype(np.uint8)).filter(ImageFilter.GaussianBlur(max(6, (x1 - x0) // 6))),
        dtype=np.float32,
    )
    diff = gray - bg
    # znak stoji na glatkoj pozadini; izražena tekstura (pletivo, kanap) = nema znaka
    if np.abs(diff).std() > 6:
        return None
    m = diff > 4
    # znak je svetliji od pozadine i čini kompaktnu mrlju; bez njega nema posla
    if m.mean() < 0.003:
        return None
    # proširi masku (meke ivice znaka)
    mi = Image.fromarray((m * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(11))
    return np.asarray(mi) > 0


def fill(reg: np.ndarray, mask: np.ndarray, iters: int = 400) -> np.ndarray:
    """Popunjava masku difuzijom iz okolnih piksela (glatka pozadina)."""
    out = reg.astype(np.float32).copy()
    # početna vrednost: prosek okoline
    out[mask] = out[~mask].mean(axis=0)
    for _ in range(iters):
        p = np.pad(out, ((1, 1), (1, 1), (0, 0)), mode="edge")
        avg = (p[:-2, 1:-1] + p[2:, 1:-1] + p[1:-1, :-2] + p[1:-1, 2:]) / 4
        out[mask] = avg[mask]
    # blago zrno da popunjeno mesto ne bude „plastično"
    noise = np.random.default_rng(1).normal(0, 1.2, out.shape).astype(np.float32)
    out[mask] += noise[mask]
    return np.clip(out, 0, 255).astype(np.uint8)


def process(path: Path) -> bool:
    im = Image.open(path)
    has_alpha = im.mode == "RGBA"
    rgb = im.convert("RGB")
    a = np.asarray(rgb).copy()
    h, w = a.shape[:2]
    x0, y0, x1, y1 = int(w * BOX[0]), int(h * BOX[1]), int(w * BOX[2]), int(h * BOX[3])
    mask = find_mask(a, x0, y0, x1, y1)
    if mask is None:
        return False
    a[y0:y1, x0:x1] = fill(a[y0:y1, x0:x1], mask)
    out = Image.fromarray(a)
    if has_alpha:
        out.putalpha(im.getchannel("A"))
    if path.suffix.lower() == ".webp":
        out.save(path, quality=80 if not path.stem.endswith("-lg") else 78)
    else:
        out.save(path, quality=90)
    return True


changed = 0
paths = gemini_images() + sorted((ROOT / "brand/source-images").glob("*.jpg"))
for p in paths:
    if p.exists() and process(p):
        changed += 1
        print("  ok", p.relative_to(ROOT))
    elif p.exists():
        print("  -- bez znaka:", p.relative_to(ROOT))
print(f"Gotovo: znak uklonjen sa {changed} slika.")
sys.exit(0)
