#!/usr/bin/env python3

from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "public" / "brand"
FONT_DIR = Path("/Users/a1-6/.codex/skills/canvas-design/canvas-fonts")

BG = (10, 15, 24, 255)
PANEL = (14, 22, 36, 255)
PANEL_EDGE = (255, 255, 255, 24)
TEXT = (237, 244, 255, 255)
MUTED = (153, 176, 204, 255)
CYAN = (109, 224, 255, 255)
CYAN_SOFT = (109, 224, 255, 70)
LIME = (219, 255, 102, 255)


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONT_DIR / name), size)


def with_alpha(color, alpha):
    return (color[0], color[1], color[2], alpha)


def rounded_panel(size: int) -> Image.Image:
    image = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    glow = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse((size * 0.08, size * 0.03, size * 0.92, size * 0.62), fill=with_alpha(CYAN, 95))
    glow_draw.ellipse((size * 0.42, size * 0.48, size * 0.94, size * 0.98), fill=with_alpha(LIME, 55))
    glow = glow.filter(ImageFilter.GaussianBlur(size // 14))
    image.alpha_composite(glow)

    panel = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    panel_draw = ImageDraw.Draw(panel)
    inset = int(size * 0.05)
    panel_draw.rounded_rectangle(
        (inset, inset, size - inset, size - inset),
        radius=int(size * 0.2),
        fill=PANEL,
        outline=PANEL_EDGE,
        width=max(2, size // 220),
    )

    grid = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    grid_draw = ImageDraw.Draw(grid)
    step = size // 8
    for offset in range(inset + step, size - inset, step):
      grid_draw.line((offset, inset, offset, size - inset), fill=(255, 255, 255, 10), width=1)
      grid_draw.line((inset, offset, size - inset, offset), fill=(255, 255, 255, 10), width=1)
    grid = grid.filter(ImageFilter.GaussianBlur(0.3))

    image.alpha_composite(panel)
    image.alpha_composite(grid)
    return image


def draw_signal_mark(draw: ImageDraw.ImageDraw, x: int, y: int, size: int, include_microtype: bool):
    left = x + size * 0.17
    top = y + size * 0.18
    right = x + size * 0.83
    bottom = y + size * 0.82
    mid_x = x + size * 0.5
    stroke = max(12, int(size * 0.078))

    # Angular frame
    frame_width = max(3, int(size * 0.016))
    frame = [
        ((x + size * 0.15, y + size * 0.14), (x + size * 0.44, y + size * 0.14)),
        ((x + size * 0.14, y + size * 0.15), (x + size * 0.14, y + size * 0.44)),
        ((x + size * 0.86, y + size * 0.56), (x + size * 0.86, y + size * 0.85)),
        ((x + size * 0.56, y + size * 0.86), (x + size * 0.85, y + size * 0.86)),
    ]
    for start, end in frame:
        draw.line((start, end), fill=with_alpha(CYAN, 180), width=frame_width)

    # Stylized M
    path = [
        (left, bottom),
        (left, top),
        (mid_x - size * 0.13, y + size * 0.56),
        (mid_x, y + size * 0.42),
        (mid_x + size * 0.16, top),
        (right, top),
        (right, bottom),
    ]
    glow_layer = Image.new("RGBA", draw._image.size, (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_layer)
    glow_draw.line(path, fill=with_alpha(CYAN, 130), width=stroke + max(12, size // 28), joint="curve")
    glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(max(6, size // 36)))
    draw._image.alpha_composite(glow_layer)
    draw.line(path, fill=CYAN, width=stroke, joint="curve")

    # Node and guide accents
    node_center = (x + size * 0.74, y + size * 0.245)
    node_radius = int(size * 0.05)
    draw.ellipse(
        (
            node_center[0] - node_radius,
            node_center[1] - node_radius,
            node_center[0] + node_radius,
            node_center[1] + node_radius,
        ),
        fill=LIME,
    )
    draw.line(
        (
            x + size * 0.35,
            y + size * 0.72,
            x + size * 0.58,
            y + size * 0.72,
        ),
        fill=with_alpha(TEXT, 80),
        width=max(2, size // 180),
    )
    draw.line(
        (
            x + size * 0.62,
            y + size * 0.32,
            x + size * 0.84,
            y + size * 0.32,
        ),
        fill=with_alpha(TEXT, 70),
        width=max(2, size // 180),
    )

    if include_microtype:
        micro_font = font("IBMPlexMono-Bold.ttf", max(24, size // 10))
        draw.text(
            (x + size * 0.585, y + size * 0.72),
            "2·7",
            fill=TEXT,
            font=micro_font,
            anchor="la",
        )


def save_mark_assets():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    mark_size = 1024
    mark = rounded_panel(mark_size)
    draw = ImageDraw.Draw(mark)
    draw_signal_mark(draw, 0, 0, mark_size, include_microtype=True)
    mark_path = OUTPUT_DIR / "minimax-m27-mark.png"
    mark.save(mark_path)

    favicon_source = rounded_panel(mark_size)
    favicon_draw = ImageDraw.Draw(favicon_source)
    draw_signal_mark(favicon_draw, 0, 0, mark_size, include_microtype=False)
    favicon_path = OUTPUT_DIR / "minimax-m27-favicon-source.png"
    favicon_source.save(favicon_path)

    logo = Image.new("RGBA", (1680, 420), (0, 0, 0, 0))
    logo_draw = ImageDraw.Draw(logo)

    chip = mark.resize((320, 320), Image.Resampling.LANCZOS)
    logo.alpha_composite(chip, (32, 50))

    title_font = font("BricolageGrotesque-Bold.ttf", 120)
    sub_font = font("IBMPlexMono-Regular.ttf", 30)
    guide_font = font("IBMPlexMono-Bold.ttf", 26)

    logo_draw.text((410, 88), "MiniMax", fill=TEXT, font=title_font)
    logo_draw.text((1012, 116), "M2.7", fill=CYAN, font=title_font)
    logo_draw.text((414, 228), "PRECISION SIGNAL / API / AGENTS / BENCHMARKS", fill=MUTED, font=sub_font)

    logo_draw.rounded_rectangle(
        (414, 280, 586, 328),
        radius=24,
        outline=with_alpha(CYAN, 120),
        width=2,
        fill=(255, 255, 255, 10),
    )
    logo_draw.text((444, 290), "GUIDE", fill=LIME, font=guide_font)
    logo_draw.line((414, 362, 1560, 362), fill=with_alpha(TEXT, 48), width=2)

    logo_path = OUTPUT_DIR / "minimax-m27-logo.png"
    logo.save(logo_path)

    print(f"Generated {mark_path}")
    print(f"Generated {favicon_path}")
    print(f"Generated {logo_path}")


if __name__ == "__main__":
    save_mark_assets()
