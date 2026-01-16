# The Legend of Kenji

[![Pages](https://github.com/Shivikanegi/The-Legend-of-Kenji/actions/workflows/gh-pages.yml/badge.svg)](https://shivikanegi.github.io/The-Legend-of-Kenji/)

A single-page prototype that reimagines a story showcase with a traditional oil‑painted, epic‑fantasy aesthetic. The project focuses on painterly textures, golden‑hour lighting, sumi‑e iconography, and lacquered UI chrome to present narrative content with a handcrafted, gallery-like feel.

**Quick summary**
- **Type:** Static single-page prototype
- **Style:** Warm golden ochres, deep sunset oranges, cherry‑blossom pinks, charcoal/indigo accents
- **Focus:** Visual storytelling, painterly UI, subtle motion and lighting

## Demo / Preview

- Open `index.html` in your browser to preview the prototype.
- Or serve locally (recommended) for correct asset loading and smoother testing:

```powershell
# Using Python 3 (PowerShell)
python -m http.server 8000; Start-Process "http://localhost:8000/index.html"

# Or using Node.js http-server (if installed)
npx http-server -p 8000
```

## Features

- **Painterly aesthetic:** Textures and lighting that feel like oil painting at golden hour.
- **Sumi-e iconography:** Minimal, brush-stroke inspired icons and UI elements.
- **Lacquered UI chrome:** Polished overlays and subtle gloss effects for controls.
- **Single-file prototype:** Easy to fork, experiment, and iterate on visuals and copy.

## Tech & Assets

- **HTML / CSS / JS:** Lightweight static stack, intentionally simple for iterative design.
- **Assets:** Images and textures included in the project directory (keep under source control).

## Development

1. Clone the repo:

```powershell
git clone https://github.com/Shivikanegi/The-Legend-of-Kenji.git
cd The-Legend-of-Kenji
```

2. Preview locally (see the commands in the Demo section).

3. Make changes to `index.html`, `styles/`, or the `assets/` folder and refresh the browser.

## Contribution

- Open an issue to discuss major changes (layout, UX patterns, performance).
- Send small, focused pull requests for bug fixes, copy updates, or new assets.
- When adding large images, keep file sizes optimized and add source files where possible.

## Suggestions / Next Steps

- Add screenshots or a short GIF in `docs/` to show the site at a glance on GitHub.
- Consider adding a `LICENSE` file and a simple `CONTRIBUTING.md`.
- Add CI to validate links and optimize images on push.

## Deployment (GitHub Pages)

This repository includes a GitHub Actions workflow that can deploy the repository root to GitHub Pages automatically when you push to the `main` branch.

- The workflow file is: `.github/workflows/gh-pages.yml`
- A `.nojekyll` file is present so files are served verbatim (no Jekyll processing).

To publish the site:

1. Create a GitHub repository named `The-Legend-of-Kenji` (or any name you prefer).
2. On your machine, if not already a git repo, run:

```powershell
git init
git add -A
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Shivikanegi/The-Legend-of-Kenji.git
git push -u origin main
```

3. After pushing, GitHub Actions will run the `gh-pages.yml` workflow and deploy the site. The Pages site will appear under the repository's Pages settings — typically at `https://shivikanegi.github.io/The-Legend-of-Kenji/`.

4. The Pages badge is already included at the top of this `README.md` and will show the deployment status.

## License

MIT License — see the `LICENSE` file for details.

## Credits

Design and concept by the author. Built as a visual prototype for showcasing narrative content.
