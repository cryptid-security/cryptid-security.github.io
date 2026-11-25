# cryptid-security.github.io

The landing page for [Cryptid Security](https://github.com/cryptid-security) —
open-source defensive security tooling.

Built with **Vite + React + TypeScript + Tailwind v4 + Framer Motion**. The hero's
nocturnal aurora backdrop is adapted from a 21st.dev component, re-tuned to the
brand's brass/pine palette; the lantern torch-reveal interaction is carried over
from the original static page.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
```

## Deploy

Pushing to `main` builds the site and publishes `dist/` via GitHub Actions
(`.github/workflows/deploy.yml`). Repo **Settings → Pages → Source** must be set
to **GitHub Actions**.

The previous zero-dependency static page is preserved at `public/legacy.html`
(served at `/legacy.html`) as a fallback.
