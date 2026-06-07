# srenault93.github.io

Personal portfolio of Sebastien A. Renault — built with **React + Vite** and hand-written **CSS**, animated with [Motion](https://motion.dev), and deployed to GitHub Pages via GitHub Actions.

## Develop

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # production build to /dist
npm run preview  # preview the production build locally
```

## Project structure

```
index.html            Vite entry HTML
src/
  main.jsx            React root
  App.jsx             Page composition
  index.css           Design system (CSS variables, base, helpers)
  data/content.js     All copy and project data — edit here
  components/         One component + matching .css each
public/
  images/             Screenshots and static assets
.github/workflows/    GitHub Actions deploy pipeline
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `/dist` to GitHub Pages.

**One-time setup:** in the repo, go to **Settings → Pages → Build and
deployment → Source** and select **GitHub Actions**.

## Editing content

All text, projects, experience, and skills live in `src/data/content.js`.
Update that file and the UI follows — no component changes needed.
