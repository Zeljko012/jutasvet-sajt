# Pravi sve ikone (aplikacija + sajt) i sliku za deljenje iz brand/logo-source.png.
# Pokretanje: python brand/make-icons.py
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parent.parent
src = Image.open(root / "brand" / "logo-source.png").convert("RGBA")
mark = src.crop(src.getbbox())  # znak bez praznih ivica

BG = (236, 229, 216)  # --ground


def icon(size: int, fill: float, bg=BG) -> Image.Image:
    """fill = koliki deo ikone zauzima znak (maskable ikona traži manje, zbog isecanja ivica)"""
    canvas = Image.new("RGBA", (size, size), bg + (255,) if bg else (0, 0, 0, 0))
    mw, mh = mark.size
    scale = size * fill / max(mw, mh)
    m = mark.resize((max(1, round(mw * scale)), max(1, round(mh * scale))), Image.LANCZOS)
    canvas.alpha_composite(m, ((size - m.width) // 2, (size - m.height) // 2))
    return canvas if not bg else canvas.convert("RGB")


def save(img: Image.Image, rel: str):
    p = root / rel
    p.parent.mkdir(parents=True, exist_ok=True)
    img.save(p, optimize=True)


# aplikacija (admin)
a = "admin/public/"
save(icon(64, 0.74), a + "pwa-64x64.png")
save(icon(192, 0.74), a + "pwa-192x192.png")
save(icon(512, 0.74), a + "pwa-512x512.png")
save(icon(512, 0.56), a + "maskable-icon-512x512.png")
save(icon(180, 0.7), a + "apple-touch-icon-180x180.png")
save(icon(256, 0.86, bg=None), a + "favicon.png")
icon(256, 0.92, bg=None).save(root / a / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

# sajt
save(icon(512, 0.74), "public/icon.png")
save(icon(180, 0.7), "public/apple-touch-icon.png")
icon(256, 0.92, bg=None).save(root / "public/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
save(icon(48, 0.92, bg=None), "public/favicon-48.png")
save(icon(96, 1.0, bg=None), "public/logo-mark.png")  # znak u zaglavlju sajta

# slika za deljenje (Open Graph) 1200x630
og = Image.new("RGB", (1200, 630), BG)
d = ImageDraw.Draw(og)
d.rectangle((0, 0, 1200, 12), fill=(107, 67, 48))
m = mark.resize((300, round(300 * mark.height / mark.width)), Image.LANCZOS)
og.paste(m, (820, (630 - m.height) // 2), m)


def font(names, size):
    for n in names:
        try:
            return ImageFont.truetype(n, size)
        except OSError:
            pass
    return ImageFont.load_default()


serif = font(["georgia.ttf", "DejaVuSerif.ttf"], 96)
sans = font(["arial.ttf", "DejaVuSans.ttf"], 34)
small = font(["arial.ttf", "DejaVuSans.ttf"], 26)
d.text((96, 210), "Juta Svet", font=serif, fill=(42, 36, 32))
d.text((100, 340), "Prirodni kanapi i dekoracija od jute", font=sans, fill=(110, 100, 89))
d.text((100, 395), "Kanap na metar · Penjanje · Nameštaj · Rasveta", font=small, fill=(110, 100, 89))
og.save(root / "public/og-default.jpg", quality=86)

print("OK ikone i public/og-default.jpg")
