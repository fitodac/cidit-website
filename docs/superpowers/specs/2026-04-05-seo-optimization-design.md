# SEO Optimization Design — CIDIT Website

**Date:** 2026-04-05
**Domain:** www.ciditpy.org
**Framework:** Astro 5.17.1
**Language:** Spanish (es-PY), with English brand terms preserved (Bootcamp, AI, FIDIC)

---

## 1. Overview

Comprehensive SEO optimization for the CIDIT website: meta tags, Open Graph, Twitter Cards, canonical URLs, and OG image generation. The site serves prospective students/professionals (primary), research partners, institutional stakeholders, and the general public.

**Approach:** Reusable `<SEO>` Astro component + hybrid OG images (static for main sections, dynamic for projects/courses).

---

## 2. SEO Copy — Titles & Meta Descriptions

### Main Pages

| Route | Title | Meta Description |
|-------|-------|-----------------|
| `/` | CIDIT — Innovación Tecnológica que Transforma Paraguay | Centro de innovación en ingeniería y tecnología. Cursos especializados, proyectos de investigación en IA y desarrollo de talento en Paraguay. |
| `/nosotros` | Sobre CIDIT — Centro de Innovación en Ingeniería | Desde 2014 articulamos academia, empresa y gobierno para convertir investigación en soluciones reales. Conocé nuestra misión, equipo y valores. |
| `/proyectos` | Proyectos de Investigación — CIDIT | Proyectos en inteligencia artificial, inclusión social e innovación. Desde predicción farmacológica hasta digitalización del guaraní. |
| `/cursos` | Cursos de Ingeniería y Construcción 2026 — CIDIT | Calendario 2026 de cursos especializados: contratos FIDIC, hormigón, obras viales, puentes y más. Formación profesional con expertos. |
| `/contacto` | Contacto — CIDIT | Contactanos para consultas sobre cursos, proyectos de investigación o alianzas. Estamos en Paraguay listos para colaborar. |
| `/publicaciones` | Publicaciones y Recursos — CIDIT | Accedé al repositorio de documentos del CIDIT: boletines, informes, guías y materiales descargables sobre ingeniería e innovación. |

### Project Pages

| Route | Title | Meta Description |
|-------|-------|-----------------|
| `/proyectos/bootcamp` | Bootcamp Desarrollo Joven — CIDIT | Programa de formación tecnológica para jóvenes. Más de 1.000 participantes en 5 departamentos impulsando empleabilidad e inclusión digital. |
| `/proyectos/cofar` | CoFar — Predicción Inteligente de Riesgos Farmacológicos | Modelos de machine learning para predecir efectos secundarios de terapias combinadas. Investigación en IA aplicada a seguridad farmacológica. |
| `/proyectos/covida` | CoVIDA — Reposicionamiento de Fármacos con IA | Colaboración internacional que usa inteligencia artificial para identificar medicamentos existentes contra enfermedades infecciosas como COVID-19. |
| `/proyectos/proteia` | Proteia — IA para Identificación de Complejos Proteicos | Aplicamos inteligencia artificial para predecir complejos proteicos en organismos nuevos. Un puente entre la biología y la tecnología. |
| `/proyectos/guarania` | GuaranIA — Integrando el Guaraní en el Mundo Digital | Herramientas de IA para llevar el idioma guaraní al ámbito digital, mejorando el acceso a servicios para comunidades guaraní-hablantes. |

### Course Pages

| Route | Title | Meta Description |
|-------|-------|-----------------|
| `/cursos/gestion-de-contratos-de-obra-publica-con-experiencia-fidici` | Gestión de Contratos FIDIC — Curso CIDIT 2026 | Curso de 12 horas sobre gestión de contratos de obra pública con experiencia FIDIC. Formación práctica para profesionales de infraestructura. |
| `/cursos/curso-costo-4w-2026` | Curso Costo 4W 2026 — CIDIT | Curso de 24 horas sobre estimación y control de costos en proyectos de ingeniería. Metodología 4W aplicada a obras civiles. |
| `/cursos/proceso-de-estabilizacion-de-subrasantes-y-bases-de-camino` | Estabilización de Subrasantes y Bases — Curso CIDIT 2026 | Curso de 42 horas sobre procesos de estabilización de subrasantes y bases de camino. Técnicas avanzadas para ingeniería vial. |
| `/cursos/tecnologias-de-hormigon-aplicada` | Tecnología de Hormigón Aplicada — Curso CIDIT 2026 | Curso intensivo de 105 horas sobre tecnologías de hormigón. Formación técnica especializada para ingenieros y constructores. |
| `/cursos/planificacion-y-administracion-de-la-red-vial-concesiones-crema-gmans` | Planificación de Red Vial y Concesiones — Curso CIDIT 2026 | Curso de 24 horas sobre planificación y administración de la red vial, concesiones CREMA y GMANS para profesionales del sector. |
| `/cursos/inspeccion-evaluacion-y-gerenciamiento-de-puentes` | Inspección y Gerenciamiento de Puentes — Curso CIDIT 2026 | Curso de 24 horas sobre inspección, evaluación y gerenciamiento de puentes. Formación especializada en infraestructura vial. |
| `/cursos/control-de-obras-viales` | Control de Obras Viales — Curso CIDIT 2026 | Curso de 18 horas sobre control y supervisión de obras viales. Herramientas prácticas para gestión de proyectos de infraestructura. |
| `/cursos/perfil-4w-2026` | Perfil 4W 2026 — Curso CIDIT | Curso de 24 horas sobre perfiles de proyectos con metodología 4W. Planificación y formulación de proyectos de ingeniería civil. |
| `/cursos/mantenimiento-de-hospitales` | Mantenimiento de Hospitales — Curso CIDIT 2026 | Curso de 10 horas sobre mantenimiento integral de hospitales. Gestión técnica de infraestructura hospitalaria para profesionales. |

---

## 3. OG Image Strategy

### 3.1 Static OG Images (7 — manually designed)

Dimensions: **1200×630px**, PNG format, stored in `/public/assets/img/og/`.

| Filename | Page | Concept |
|----------|------|---------|
| `og-home.png` | Home | CIDIT logo centered + tagline "Innovación tecnológica que transforma Paraguay" on dark/gradient background with subtle tech pattern |
| `og-nosotros.png` | Nosotros | CIDIT logo + "Centro de Innovación en Ingeniería" + team/collaboration visual element |
| `og-proyectos.png` | Proyectos | CIDIT logo + "Proyectos de Investigación" + grid/mosaic of project icons or abstract AI/science motif |
| `og-cursos.png` | Cursos | CIDIT logo + "Cursos 2026" + engineering/construction visual elements |
| `og-contacto.png` | Contacto | CIDIT logo + "Contacto" + minimal branded design |
| `og-publicaciones.png` | Publicaciones | CIDIT logo + "Publicaciones y Recursos" + document/knowledge visual |
| `og-default.png` | Fallback | CIDIT logo + domain "ciditpy.org" on branded background |

**Design guidelines:**
- Brand colors from existing site palette
- White CIDIT logo (from `/public/assets/img/logo-white.svg`)
- Clean, professional, minimal — avoid clutter
- Text must be readable at small sizes (social feed thumbnails)

### 3.2 Dynamic OG Images (~14 — auto-generated at build time)

Generated via Astro endpoint using **Satori** (JSX → SVG) + **sharp** (SVG → PNG).

**Template layout (1200×630px):**
- Background: Brand color gradient
- Top-left: Page title in bold white text (max 3 lines, auto-sized)
- Bottom-left: CIDIT logo (white, small)
- Bottom-right: `ciditpy.org` in light text
- Right/center: Project logo if available (CoFar, Proteia, GuaranIA have SVG logos), otherwise subtle geometric pattern

**Pages that get dynamic OG images:**
- 5 project pages (bootcamp, cofar, covida, proteia, guarania)
- 9 course pages

**Endpoint:** `src/pages/og/[slug].png.ts`
- Uses `getStaticPaths()` to generate all slugs at build time
- Looks up title/subtitle/logo from `seoData.ts` config
- Returns PNG response

### 3.3 Fallback Chain

1. Page-specific static OG image (main sections)
2. Dynamic OG image (projects, courses)
3. `og-default.png` (any page without specific image, e.g., gallery detail pages)

---

## 4. Technical Architecture

### 4.1 SEO Component

**File:** `src/components/SEO.astro`

```typescript
interface Props {
  title: string;
  description: string;
  ogImage?: string;       // Relative path to OG image, falls back to og-default.png
  ogType?: string;        // "website" | "article" — defaults to "website"
  canonical?: string;     // Override canonical URL
  noindex?: boolean;      // For pages that shouldn't be indexed
}
```

**Output tags:**
- `<title>{title}</title>`
- `<meta name="description" content={description}>`
- `<link rel="canonical" href={canonical || https://www.ciditpy.org + pathname}>`
- `<meta property="og:title" content={title}>`
- `<meta property="og:description" content={description}>`
- `<meta property="og:image" content={absolute ogImage URL}>`
- `<meta property="og:url" content={canonical URL}>`
- `<meta property="og:type" content={ogType}>`
- `<meta property="og:site_name" content="CIDIT">`
- `<meta property="og:locale" content="es_PY">`
- `<meta property="og:image:width" content="1200">`
- `<meta property="og:image:height" content="630">`
- `<meta name="twitter:card" content="summary_large_image">`
- `<meta name="twitter:title" content={title}>`
- `<meta name="twitter:description" content={description}>`
- `<meta name="twitter:image" content={absolute ogImage URL}>`

### 4.2 SEO Data Config

**File:** `src/data/seoData.ts`

Centralized map of SEO metadata per route/slug:

```typescript
interface SEOEntry {
  title: string;
  description: string;
  ogImage?: string;        // Path to static OG image or dynamic slug
  ogType?: string;
  projectLogo?: string;    // For dynamic OG generation
}

export const seoData: Record<string, SEOEntry> = {
  "/": { title: "CIDIT — ...", description: "...", ogImage: "/assets/img/og/og-home.png" },
  // ... all pages
};
```

### 4.3 Dynamic OG Endpoint

**File:** `src/pages/og/[slug].png.ts`

Dependencies: `satori`, `sharp`, `@resvg/resvg-js` (alternative to sharp for SVG→PNG)

```typescript
// getStaticPaths() returns all project + course slugs
// GET handler:
// 1. Look up slug in config for title, subtitle, logo
// 2. Build JSX template via Satori
// 3. Convert SVG to PNG via sharp
// 4. Return Response with content-type: image/png
```

### 4.4 Layout Changes

**`src/layouts/mainLayout.astro`:**
- Remove existing `<title>` and empty `<meta name="description">` from `<head>`
- Add `<SEO>` component, receive props from pages
- Add `description` to the layout's `Props` interface

**`src/layouts/projectLayout.astro`:**
- Remove existing empty OG meta tags block
- Remove empty `<meta name="description">` and `<meta name="keywords">`
- Add `<SEO>` component, receive props from pages

**Each page file** (index.astro, nosotros.astro, etc.):
- Import SEO data or pass title/description/ogImage directly to layout

### 4.5 File Structure

```
src/
  components/
    SEO.astro                    # Reusable SEO meta tag component
  data/
    seoData.ts                   # Centralized SEO config per page
  pages/
    og/[slug].png.ts             # Dynamic OG image generation endpoint
  layouts/
    mainLayout.astro             # Updated — uses <SEO> component
    projectLayout.astro          # Updated — uses <SEO> component
public/
  assets/img/og/
    og-home.png                  # Static OG images (manually designed)
    og-nosotros.png
    og-proyectos.png
    og-cursos.png
    og-contacto.png
    og-publicaciones.png
    og-default.png               # Fallback
```

---

## 5. Out of Scope (for now)

These are valuable but not included in this iteration:
- `robots.txt` and `sitemap.xml` generation
- JSON-LD structured data (Organization, Course, ResearchProject schemas)
- `hreflang` tags (no multilingual version planned)
- Image alt text audit
- Analytics/SEO monitoring integration

---

## 6. Dependencies to Install

```
satori           # JSX → SVG rendering for OG images
sharp            # Image processing (SVG → PNG)
```

Both are well-supported in Astro's Node.js build environment.
