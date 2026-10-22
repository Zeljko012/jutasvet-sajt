"""
Shopify CSV izvoz -> scripts/products-source.json

Pokretanje:
    python scripts/parse_csv.py                      (podrazumevano: ../products_export_1 (1).csv)
    python scripts/parse_csv.py "C:/putanja/do/products_export.csv"

Čuva sve što sajtu treba: naslov, opis, status, opcije (npr. Debljina + Dužina),
sve varijante sa cenama i slikama, i slike proizvoda.
"""
import csv, json, re, sys, html, os

HERE = os.path.dirname(os.path.abspath(__file__))
DEFAULT_SRC = os.path.join(HERE, "..", "..", "products_export_1 (1).csv")
SRC = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_SRC
OUT = os.path.join(HERE, "products-source.json")


def clean_lines(h):
    """HTML opis -> lista čistih redova teksta."""
    if not h:
        return []
    t = re.sub(r"<(br|/p|/li|/h\d|/div)[^>]*>", "\n", h, flags=re.I)
    t = re.sub(r"<[^>]+>", "", t)
    t = html.unescape(t).replace("\r", "").replace("\u0435\u043d", "en")  # ćirilično "ен" -> "en"
    lines = [re.sub(r"[ \t\u00a0]+", " ", ln).strip() for ln in t.split("\n")]
    return [ln for ln in lines if ln]


def num(s):
    try:
        return float((s or "0").replace(",", ""))
    except ValueError:
        return 0.0


products = {}
order = []

with open(SRC, encoding="utf-8-sig", newline="") as f:
    for row in csv.DictReader(f):
        h = (row.get("Handle") or "").strip()
        if not h:
            continue
        if h not in products:
            products[h] = {
                "handle": h,
                "title": (row.get("Title") or "").strip(),
                "body_lines": clean_lines(row.get("Body (HTML)") or ""),
                "status": (row.get("Status") or "").strip(),
                "seo_title": (row.get("SEO Title") or "").strip(),
                "seo_description": (row.get("SEO Description") or "").strip(),
                "option_names": [
                    (row.get("Option1 Name") or "").strip(),
                    (row.get("Option2 Name") or "").strip(),
                    (row.get("Option3 Name") or "").strip(),
                ],
                "variants": [],
                "images": [],
            }
            order.append(h)
        p = products[h]
        opts = [
            (row.get("Option1 Value") or "").strip(),
            (row.get("Option2 Value") or "").strip(),
            (row.get("Option3 Value") or "").strip(),
        ]
        if opts[0]:
            p["variants"].append({
                "options": opts,
                "price": num(row.get("Variant Price")),
                "compare_at": num(row.get("Variant Compare At Price")),
                "image": (row.get("Variant Image") or "").strip(),
            })
        img = (row.get("Image Src") or "").strip()
        if img:
            p["images"].append({
                "src": img,
                "pos": int(num(row.get("Image Position"))),
                "alt": (row.get("Image Alt Text") or "").strip(),
            })

result = [products[h] for h in order]
for p in result:
    p["images"].sort(key=lambda im: im["pos"] or 999)

with open(OUT, "w", encoding="utf-8") as f:
    json.dump(result, f, ensure_ascii=False, indent=1)

print(f"Wrote {len(result)} products -> {OUT}")
