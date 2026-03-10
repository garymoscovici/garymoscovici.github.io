# Saul Crinier Portfolio — Content Guide

This site is fully static (HTML/CSS/JS only). To update videos and images, edit the HTML and replace files in `images/` and `thumbnails/`.

## Add or Change Videos (Animation Page)
File: `animation.html`

Videos are loaded from `data/videos.json`. Update or add a new item like this:

```json
{
  "id": "YOUTUBE_ID",
  "title": "Video Title",
  "desc": "Short description"
}
```

Tips:
- `YOUTUBE_ID` is the part after `v=` in a YouTube URL.
  - Example: `https://www.youtube.com/watch?v=3fumBcKC6RE` -> `YOUTUBE_ID = 3fumBcKC6RE`
- The first item in the list becomes the default main video.

### Local Preview (so JSON works)
Most browsers block `fetch()` for JSON when opening files directly (file://). Use one of these local servers instead:

**Option A: Python (if installed)**
```bash
python -m http.server 8000
```
Then open: `http://localhost:8000/animation.html`

**Option B: Node (if installed)**
```bash
npx serve .
```
Then open the URL shown in the terminal.

## Add or Change Images (Figure Drawing / Landscapes)
Files:
- `figure-drawing.html`
- `landscapes.html`

Each page uses a large viewer and thumbnail strip. Replace the SVGs (or use JPG/PNG) in:
- `images/` (full size)
- `thumbnails/` (small size)

Example button (replace file paths + alt text):

```html
<button data-full-src="images/figure-1.jpg" data-alt="Figure study 1">
  <img src="thumbnails/figure-1.jpg" alt="Figure thumb 1" />
</button>
```

Tips:
- Keep filenames consistent between full-size and thumbnail versions.
- The active thumbnail gets a dashed highlight automatically.
- If you add more thumbnails, just copy/paste another `<button>` inside `.thumbnail-strip`.

## Replace the Profile Image (About Page)
File: `about.html`

Replace the file `images/profile.svg` with your own image (JPG/PNG/SVG). Keep the filename the same to avoid editing HTML, or update the `src` in the `<img>` tag.

## Optional: Update the Home Page Hero Image
File: `index.html`

Replace `images/hero-sketch.svg` with your own image, or change its `src` in the `<img>` tag.

## File Locations
- HTML pages: root folder
- Styles: `css/style.css`
- Scripts: `js/main.js`
- Full images: `images/`
- Thumbnails: `thumbnails/`
- Video list: `data/videos.json`

If you want, I can also add a script to auto-generate thumbnails or convert images for you.

