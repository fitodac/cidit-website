# CIDIT Website — Project CLAUDE.md

## Project Overview

Public-facing website for **CIDIT** (Centro de Innovación en Ingeniería y Tecnología), a Paraguayan research and innovation center. The site showcases courses, research projects, publications, and organizational info.

- **Production domain:** `www.ciditpy.org`
- **Framework:** Astro 5.17.1 (static site generation)
- **UI:** Tailwind CSS v4 + custom Bootstrap-based CSS + jQuery plugins
- **Interactive components:** React 19 via `@astrojs/react`
- **Database:** Astro DB (used for GuaranIA gallery content)
- **Language:** All UI text is in **Spanish (es-PY)**. Code, commits, and comments in English.

## Architecture

### Layouts

- `src/layouts/mainLayout.astro` — Main site pages (home, about, courses index, projects index, contact, publications)
- `src/layouts/projectLayout.astro` — Individual project pages (bootcamp, cofar, covida, proteia, guarania)

Both layouts accept SEO props (`title`, `description`, `ogImage`, `ogType`) and use the `<SEO>` component.

### SEO

- `src/components/SEO.astro` — Reusable component that outputs `<title>`, meta description, canonical URL, Open Graph, and Twitter Card tags
- `src/data/seoData.ts` — Centralized SEO metadata for all pages. Lookup by route path (e.g., `"/"`) or slug (e.g., `"cofar"`)
- `src/pages/og/[slug].png.ts` — Dynamic OG image generation at build time using Satori + sharp. Generates PNGs for all project and course pages.
- `public/assets/img/og/` — Static OG images for main sections (currently placeholders — need designer replacements)
- SEO titles already include the brand name (e.g., "CoFar — Predicción Inteligente... "). Layouts pass `title` directly to `<SEO>` without appending "- CIDIT".

### Pages

- **Main pages:** index, nosotros, proyectos, cursos, contacto, publicaciones (use `mainLayout`)
- **Project pages:** bootcamp, cofar, covida, proteia, guarania (use `projectLayout`)
- **Course pages:** `src/pages/cursos/[slug].astro` — dynamic route with 9 courses defined in `getStaticPaths()`
- **Gallery pages:** `src/pages/proyectos/guarania/galeria/[slug].astro` — dynamic from Astro DB

### Key Directories

- `src/components/` — React + Astro components for main site
- `src/projectsComponents/` — React components specific to project pages
- `src/data/` — Static data (`staticData.ts`) and SEO config (`seoData.ts`)
- `src/utils/` — Utilities (`staticPath.ts` for base-path-aware asset URLs, `cn.ts` for Tailwind class merging)
- `public/assets/` — Static assets (CSS, JS, images, fonts)
- `public/projects/` — Project-specific assets (images, CSS, JS)

## Development

```bash
npm run dev       # Start dev server
npm run build     # Production build (~60s, generates 48+ pages)
npm run preview   # Preview production build
```

## Conventions

- No `base` path override — site is deployed at root of `www.ciditpy.org`
- `staticPath()` utility handles asset URLs; use it for all asset references in templates
- Course and project data is mostly inline in page files (not in a CMS)
- GuaranIA gallery data comes from Astro DB (`db/seed.ts` and `db/config.ts`)

## Known TODOs

- Replace placeholder OG images in `public/assets/img/og/` with designer-created branded versions
- Consider JSON-LD structured data (Organization, Course, ResearchProject schemas)
- The `types.d.ts` in `src/pages/proyectos/` triggers a build warning (Astro treats it as a route) — harmless but could be moved to `src/types/`
