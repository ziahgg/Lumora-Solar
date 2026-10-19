# Lumora Solar — Homepage

**Live site:** https://ziahgg.github.io/Lumora-Solar/

Responsive single-page site for Lumora Solar, built from the Figma file `ziahdesign`
(desktop frame `110:2706`, mobile frame `110:3051`).

Stack: Vite, React 19, TypeScript, Tailwind CSS v4. The Geist font is self-hosted via `@fontsource`.
No backend, database or paid services.

## Scripts

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to dist/ (base /Lumora-Solar/)
npm run preview    # serve dist/ at /Lumora-Solar/
npm run lint
```

## Structure

- `src/sections/` — one component per Figma section (Header, Hero, TrustBar, Services, WhyChooseUs, HowItWorks,
  Packages, Projects, Savings, Testimonials, Faq, FinalCta, Footer)
- `src/components/` — `Icon` (the Figma `Icon/*` set), shared UI (`Button`, `Eyebrow`, `IconBadge`, `CheckDot`) and
  form fields
- `src/content/site.ts` — page copy (bracketed values such as `[City, State]` are placeholders from the design)
- `src/assets/images/` — photos exported from the Figma file
- `src/index.css` — design tokens and text styles

## Forms

The hero estimate card, quote form and newsletter signup confirm on the page only — they are not connected to any
service yet. Point them at a form endpoint before launch.

## Deployment (GitHub Pages)

Repository: `ziahgg/Lumora-Solar` → `https://ziahgg.github.io/Lumora-Solar/`.

`.github/workflows/deploy.yml` builds and deploys on every push to `main`. In the repository settings set
**Pages → Source** to **GitHub Actions**. The base path lives in `vite.config.ts` and must match the repository
name (case-sensitive); set `BASE_PATH=/` when building for a custom domain.
