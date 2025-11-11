# Chair Store (Static Website)

A small static website for a furniture / chair store. This repository contains the HTML, CSS and JavaScript used to render the storefront pages (home, shop, product listing, about, team, blog, contact).

## Contents

- `index.html` — Homepage
- `shop.html` — Product listing / shop page
- `about.html` — About the store
- `team.html` — Team page
- `blog.html` — Blog / articles
- `contact.html` — Contact form page (static form placeholder)
- `chair.js` — Site JavaScript (product interactions, small UI behavior)
- `css/` — Stylesheets
  - `chair.css` — Project stylesheet
  - `all.min.css` — Third-party or bundled CSS
- `img/` — Project images (product photos, icons)
- `webfonts/` — Local webfonts used by the site
- `README.md` — This file

## Project purpose

This repository is a simple static site intended to showcase chairs and related products. It is suitable for hosting on any static-file host (GitHub Pages, Netlify, Vercel, Amazon S3, etc.).

## Quick start (view locally)

You can preview the site locally by opening `index.html` in your browser directly. For a better experience (correct relative paths and to avoid CORS for local fetches), run a simple static server. Example using Python 3:

```
# from repository root
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or, if you have Node.js installed, you can use a quick server such as `serve`:

```
npx serve .
```

## Development notes

- Editing HTML: pages are simple static HTML files — update markup directly in the corresponding `.html` file.
- Styles: modify `css/chair.css` for project-specific styles. `css/all.min.css` appears to be a bundled stylesheet — avoid editing minified vendor files unless you rebuild them.
- JavaScript: site behavior lives in `chair.js`. Keep JavaScript small and unobtrusive for best compatibility.
- Images and fonts: store new assets in `img/` and `webfonts/` respectively and reference them with relative paths.

## Adding a new product or page

1. Add or update HTML in `shop.html` (or create a new product page).
2. Add product images to `img/` and reference them with relative paths.
3. Update `chair.js` only if new interactive behavior is required (for example, a product modal or cart simulation).

## Accessibility & best practices

- Keep markup semantic (use heading levels and ARIA attributes where appropriate).
- Provide `alt` attributes for images in `img/` for screen reader users.
- Test pages responsively and ensure the site works without JavaScript where possible.

## How to contribute

1. Fork the repository and create a branch for your change.
2. Make changes and verify the site locally.
3. Open a pull request describing the change.

If you want me to add a build step (Sass, bundler, or image optimization), CI configuration, or a deploy workflow, open an issue or request it and I can add a minimal setup.

## Suggested next steps

- Add a minimal product data source (JSON) and make `shop.html` render dynamically from that data.
- Add a simple test step (link checker) to CI to ensure pages and assets return 200.
- Add deployment instructions for GitHub Pages or Netlify if you plan to host the site.

## License

This project is provided under the MIT License — add a `LICENSE` file if you want a formal license file in the repo.

## Contact

If you want help extending this project (adding a product API, shopping cart, or deployment), open an issue or email the project owner.

Generated: README updated to document the Chair_Store static website.

## View on GitHub Pages

This site can be served using GitHub Pages. If you enable GitHub Pages for this repository (Settings → Pages → Source: `main` branch / `root`), the site will be available at:

https://Abdogoda.github.io/Chair_Store/
