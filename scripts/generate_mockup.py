"""
Portfolio Mockup Banner Generator
=================================
Generates high-resolution 16:9 (1280x720) device mockup showcases for portfolio cards.

Usage Examples:
---------------
1. Mobile App (3 Phones showcase):
   python scripts/generate_mockup.py mobile --center path/to/dashboard.png --left path/to/limits.png --right path/to/profile.png --title "Family Budget App" --subtitle "Flutter & Firebase Cloud Solution" --output public/images/my-project.png

2. Mobile App (Single Phone slide):
   python scripts/generate_mockup.py slide --screen path/to/screen.png --title "Activity Feed" --subtitle "Real-time updates" --output public/images/slide1.png

3. Web Application (Sleek Mac browser mockup):
   python scripts/generate_mockup.py web --screen path/to/website.png --title "KonceptHive" --url "koncepthive-frontend-779x.onrender.com" --output public/images/web-mockup.png
"""

import os
import argparse
from PIL import Image, ImageDraw, ImageFilter, ImageFont


def parse_color(hex_or_rgb, default=(20, 184, 166)):
    if not hex_or_rgb:
        return default
    if isinstance(hex_or_rgb, (tuple, list)):
        return tuple(hex_or_rgb[:3])
    hex_str = str(hex_or_rgb).lstrip('#')
    if len(hex_str) == 6:
        return tuple(int(hex_str[i:i+2], 16) for i in (0, 2, 4))
    return default


def create_canvas(w=1280, h=720, glow_color=(20, 184, 166)):
    """Creates a dark gradient background with soft ambient Gaussian glows."""
    canvas = Image.new('RGBA', (w, h), (10, 14, 23, 255))
    draw = ImageDraw.Draw(canvas)

    for y in range(h):
        factor = y / h
        r = int(11 * (1 - factor) + 16 * factor)
        g = int(17 * (1 - factor) + 28 * factor)
        b = int(28 * (1 - factor) + 38 * factor)
        draw.line([(0, y), (w, y)], fill=(r, g, b, 255))

    # Glow layer
    glow = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow)
    gdraw.ellipse([w//2 - 380, h//2 - 150, w//2 + 380, h//2 + 350], fill=(*glow_color, 70))
    gdraw.ellipse([100, 200, 500, 600], fill=(*glow_color, 40))
    gdraw.ellipse([w - 450, 150, w - 50, 550], fill=(*glow_color, 35))
    glow = glow.filter(ImageFilter.GaussianBlur(90))

    return Image.alpha_composite(canvas, glow)


def make_phone(screen_path, target_h=560, border_w=10, corner_r=30):
    """Wraps a mobile screenshot inside a sleek dark phone frame with camera pill."""
    scr = Image.open(screen_path).convert('RGBA')
    orig_w, orig_h = scr.size
    aspect = orig_w / orig_h
    scr_h = target_h - (border_w * 2)
    scr_w = int(scr_h * aspect)
    scr = scr.resize((scr_w, scr_h), Image.Resampling.LANCZOS)

    phone_w = scr_w + (border_w * 2)
    phone_h = target_h

    # Rounded screen mask
    scr_mask = Image.new('L', (scr_w, scr_h), 0)
    ImageDraw.Draw(scr_mask).rounded_rectangle([0, 0, scr_w, scr_h], corner_r - border_w, fill=255)

    # Phone bezel
    phone = Image.new('RGBA', (phone_w, phone_h), (0, 0, 0, 0))
    pdraw = ImageDraw.Draw(phone)
    pdraw.rounded_rectangle([0, 0, phone_w, phone_h], corner_r, fill=(24, 30, 42, 255), outline=(51, 65, 85, 255), width=2)
    phone.paste(scr, (border_w, border_w), scr_mask)

    # Top camera pill / Dynamic Island
    pill_w = max(36, int(phone_w * 0.2))
    pill_h = 10
    pill_x = (phone_w - pill_w) // 2
    pill_y = border_w + 6
    pdraw.rounded_rectangle([pill_x, pill_y, pill_x + pill_w, pill_y + pill_h], 5, fill=(15, 23, 42, 240))

    return phone


def add_badge(canvas, title, subtitle, icon_path=None, glow_color=(20, 184, 166)):
    """Draws a glassy brand badge pill in the upper-left corner."""
    if not title:
        return canvas

    w, h = canvas.size
    badge = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    bdraw = ImageDraw.Draw(badge)

    bx, by = 42, 38
    bw, bh = 380, 58

    bdraw.rounded_rectangle([bx, by, bx + bw, by + bh], 18, fill=(15, 23, 42, 220), outline=(51, 65, 85, 200), width=1)

    text_x = bx + 20
    if icon_path and os.path.isfile(icon_path):
        try:
            icon = Image.open(icon_path).convert('RGBA').resize((44, 44), Image.Resampling.LANCZOS)
            icon_mask = Image.new('L', (44, 44), 0)
            ImageDraw.Draw(icon_mask).rounded_rectangle([0, 0, 44, 44], 10, fill=255)
            badge.paste(icon, (bx + 8, by + 7), icon_mask)
            text_x = bx + 64
        except Exception:
            pass

    bdraw.text((text_x, by + 10), title, fill=(255, 255, 255, 240))
    if subtitle:
        bdraw.text((text_x, by + 30), subtitle, fill=(*glow_color, 230))

    return Image.alpha_composite(canvas, badge)


def generate_mobile_showcase(center_img, left_img=None, right_img=None, title=None, subtitle=None, icon_path=None, color='#14B8A6', output_path='mockup.png'):
    glow_col = parse_color(color)
    W, H = 1280, 720
    canvas = create_canvas(W, H, glow_col)

    p_center = make_phone(center_img, target_h=560, border_w=10, corner_r=32)

    shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)

    # 3-phone setup
    if left_img and right_img:
        p_left = make_phone(left_img, target_h=490, border_w=9, corner_r=28)
        p_right = make_phone(right_img, target_h=490, border_w=9, corner_r=28)

        left_x = W // 2 - p_center.size[0] // 2 - p_left.size[0] + 50
        left_y = (H - p_left.size[1]) // 2 + 30
        sdraw.rounded_rectangle([left_x - 10, left_y + 10, left_x + p_left.size[0] + 10, left_y + p_left.size[1] + 20], 30, fill=(0, 0, 0, 140))

        right_x = W // 2 + p_center.size[0] // 2 - 50
        right_y = (H - p_right.size[1]) // 2 + 30
        sdraw.rounded_rectangle([right_x - 10, right_y + 10, right_x + p_right.size[0] + 10, right_y + p_right.size[1] + 20], 30, fill=(0, 0, 0, 140))

    # Center phone positioning & shadow
    center_x = (W - p_center.size[0]) // 2
    center_y = (H - p_center.size[1]) // 2 + 10
    sdraw.rounded_rectangle([center_x - 14, center_y + 14, center_x + p_center.size[0] + 14, center_y + p_center.size[1] + 28], 36, fill=(0, 0, 0, 190))

    shadow = shadow.filter(ImageFilter.GaussianBlur(24))
    canvas = Image.alpha_composite(canvas, shadow)

    if left_img and right_img:
        canvas.paste(p_left, (left_x, left_y), p_left)
        canvas.paste(p_right, (right_x, right_y), p_right)

        # Subtle depth dimmer on side phones
        dimmer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
        ddraw = ImageDraw.Draw(dimmer)
        ddraw.rounded_rectangle([left_x, left_y, left_x + p_left.size[0], left_y + p_left.size[1]], 28, fill=(0, 0, 0, 35))
        ddraw.rounded_rectangle([right_x, right_y, right_x + p_right.size[0], right_y + p_right.size[1]], 28, fill=(0, 0, 0, 35))
        canvas = Image.alpha_composite(canvas, dimmer)

    # Paste center phone on top
    canvas.paste(p_center, (center_x, center_y), p_center)

    # Add badge
    canvas = add_badge(canvas, title, subtitle, icon_path, glow_col)

    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    canvas.convert('RGB').save(output_path, quality=95)
    print(f"[SUCCESS] Generated Mobile Showcase: {output_path}")


def generate_web_showcase(screen_img, title=None, subtitle=None, url_text=None, color='#7D52FD', output_path='web-mockup.png'):
    """Wraps a desktop/web screenshot inside a floating Mac-styled browser window."""
    glow_col = parse_color(color)
    W, H = 1280, 720
    canvas = create_canvas(W, H, glow_col)

    # Load web screenshot
    scr = Image.open(screen_img).convert('RGBA')
    orig_w, orig_h = scr.size

    frame_w = 1040
    header_h = 42
    frame_h = 580
    corner_r = 16

    content_w = frame_w
    content_h = frame_h - header_h

    scr = scr.resize((content_w, content_h), Image.Resampling.LANCZOS)

    # Browser window body
    window = Image.new('RGBA', (frame_w, frame_h), (0, 0, 0, 0))
    wdraw = ImageDraw.Draw(window)

    # Background window frame
    wdraw.rounded_rectangle([0, 0, frame_w, frame_h], corner_r, fill=(24, 30, 42, 255), outline=(51, 65, 85, 255), width=2)

    # Header bar
    wdraw.rounded_rectangle([0, 0, frame_w, header_h + 10], corner_r, fill=(18, 24, 38, 255))
    wdraw.rectangle([0, header_h, frame_w, frame_h], fill=(15, 23, 42, 255))

    # Mac dots
    dot_y = header_h // 2
    wdraw.ellipse([18, dot_y - 6, 30, dot_y + 6], fill=(239, 68, 68, 220))   # Red
    wdraw.ellipse([36, dot_y - 6, 48, dot_y + 6], fill=(245, 158, 11, 220))  # Yellow
    wdraw.ellipse([54, dot_y - 6, 66, dot_y + 6], fill=(16, 185, 129, 220))  # Green

    # URL bar in header
    bar_w = 460
    bar_x = (frame_w - bar_w) // 2
    bar_y = dot_y - 12
    wdraw.rounded_rectangle([bar_x, bar_y, bar_x + bar_w, bar_y + 24], 8, fill=(10, 14, 23, 200), outline=(40, 50, 70, 200), width=1)
    disp_url = url_text or title or 'https://my-app.com'
    wdraw.text((bar_x + 16, bar_y + 5), disp_url, fill=(148, 163, 184, 230))

    # Mask for bottom rounded content
    cmask = Image.new('L', (content_w, content_h), 255)
    # Clip bottom corners of content to match frame
    cdraw = ImageDraw.Draw(cmask)
    # Round bottom
    bottom_corner = Image.new('L', (corner_r * 2, corner_r * 2), 0)
    ImageDraw.Draw(bottom_corner).ellipse([0, 0, corner_r * 2, corner_r * 2], fill=255)

    window.paste(scr, (0, header_h))

    # Re-stroke outer border
    wdraw.rounded_rectangle([0, 0, frame_w, frame_h], corner_r, outline=(51, 65, 85, 255), width=2)

    # Shadow
    pos_x = (W - frame_w) // 2
    pos_y = (H - frame_h) // 2 + 15
    shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)
    sdraw.rounded_rectangle([pos_x - 16, pos_y + 10, pos_x + frame_w + 16, pos_y + frame_h + 26], corner_r + 8, fill=(0, 0, 0, 200))
    shadow = shadow.filter(ImageFilter.GaussianBlur(30))

    canvas = Image.alpha_composite(canvas, shadow)
    canvas.paste(window, (pos_x, pos_y), window)

    canvas = add_badge(canvas, title, subtitle, glow_color=glow_col)

    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    canvas.convert('RGB').save(output_path, quality=95)
    print(f"[SUCCESS] Generated Web Showcase: {output_path}")


def main():
    parser = argparse.ArgumentParser(description="Generate 16:9 portfolio device mockups")
    subparsers = parser.add_subparsers(dest="mode", required=True)

    # Mobile mode
    mob_parser = subparsers.add_parser("mobile", help="Generate 3-phone mobile app showcase")
    mob_parser.add_argument("--center", required=True, help="Center screenshot path")
    mob_parser.add_argument("--left", default=None, help="Left screenshot path (optional)")
    mob_parser.add_argument("--right", default=None, help="Right screenshot path (optional)")
    mob_parser.add_argument("--title", default=None, help="Badge title")
    mob_parser.add_argument("--subtitle", default=None, help="Badge subtitle")
    mob_parser.add_argument("--icon", default=None, help="Badge icon path")
    mob_parser.add_argument("--color", default="#14B8A6", help="Ambient glow color hex (e.g. #7D52FD)")
    mob_parser.add_argument("--output", default="mockup.png", help="Output file path")

    # Web mode
    web_parser = subparsers.add_parser("web", help="Generate browser window web showcase")
    web_parser.add_argument("--screen", required=True, help="Web screenshot path")
    web_parser.add_argument("--title", default=None, help="App title")
    web_parser.add_argument("--subtitle", default=None, help="App category/tech")
    web_parser.add_argument("--url", default=None, help="URL shown in browser bar")
    web_parser.add_argument("--color", default="#7D52FD", help="Ambient glow color hex")
    web_parser.add_argument("--output", default="web-mockup.png", help="Output file path")

    args = parser.parse_args()

    if args.mode == "mobile":
        generate_mobile_showcase(
            center_img=args.center,
            left_img=args.left,
            right_img=args.right,
            title=args.title,
            subtitle=args.subtitle,
            icon_path=args.icon,
            color=args.color,
            output_path=args.output
        )
    elif args.mode == "web":
        generate_web_showcase(
            screen_img=args.screen,
            title=args.title,
            subtitle=args.subtitle,
            url_text=args.url,
            color=args.color,
            output_path=args.output
        )


if __name__ == "__main__":
    main()
