"""Render the PNG app icons (mirrors icons/icon.svg). Run: python tools/make_icons.py"""
from pathlib import Path
from PIL import Image, ImageDraw

ACCENT = (180, 83, 42)
CREAM = (250, 246, 240)
OUT = Path(__file__).resolve().parent.parent / 'icons'
SS = 4  # supersampling factor


def bezier(p0, p1, p2, p3, n=40):
    pts = []
    for i in range(n + 1):
        t = i / n
        mt = 1 - t
        pts.append(tuple(mt**3 * a + 3 * mt * mt * t * b + 3 * mt * t * t * c + t**3 * d
                         for a, b, c, d in zip(p0, p1, p2, p3)))
    return pts


def draw_icon(size, maskable=False, square=False):
    s = size * SS
    img = Image.new('RGBA', (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    if maskable:
        d.rectangle([0, 0, s, s], fill=ACCENT)
        k, off = s / 512 * 0.8, s * 0.1  # keep artwork inside the 80% safe zone
    elif square:  # iOS rounds the corners itself and turns transparency black
        d.rectangle([0, 0, s, s], fill=ACCENT)
        k, off = s / 512 * 0.9, s * 0.05
    else:
        d.rounded_rectangle([0, 0, s - 1, s - 1], radius=112 * s / 512, fill=ACCENT)
        k, off = s / 512, 0

    def P(x, y):
        return (off + x * k, off + y * k)

    # bowl: lower half of an ellipse centred at (256, 252)
    x0, y0 = P(96, 88)
    x1, y1 = P(416, 416)
    d.pieslice([x0, y0, x1, y1], 0, 180, fill=CREAM)
    # rim
    rx0, ry0 = P(80, 236)
    rx1, ry1 = P(432, 266)
    d.rounded_rectangle([rx0, ry0, rx1, ry1], radius=15 * k, fill=CREAM)
    # steam
    w = 18 * k
    for cx in (206, 256, 306):
        pts = [P(x, y) for x, y in bezier((cx, 196), (cx - 18, 174), (cx + 18, 158), (cx, 134))]
        d.line(pts, fill=CREAM, width=round(w), joint='curve')
        for x, y in (pts[0], pts[-1]):
            d.ellipse([x - w / 2, y - w / 2, x + w / 2, y + w / 2], fill=CREAM)
    return img.resize((size, size), Image.LANCZOS)


if __name__ == '__main__':
    OUT.mkdir(exist_ok=True)
    draw_icon(180, square=True).save(OUT / 'icon-180.png')
    for n in (192, 512):
        draw_icon(n).save(OUT / f'icon-{n}.png')
    draw_icon(512, maskable=True).save(OUT / 'icon-maskable-512.png')
    print('icons written to', OUT)
