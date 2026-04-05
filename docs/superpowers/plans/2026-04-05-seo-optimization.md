# SEO Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add comprehensive SEO meta tags, Open Graph, Twitter Cards, canonical URLs, and hybrid OG image generation to every page on the CIDIT website.

**Architecture:** A reusable `<SEO>` Astro component replaces the existing empty meta tags in both layouts. SEO data lives in a centralized config file (`seoData.ts`). Static OG images are used for main sections; dynamic OG images are generated at build time via a Satori + sharp Astro endpoint for projects and courses.

**Tech Stack:** Astro 5.17.1, Satori (JSX→SVG), sharp (SVG→PNG), TypeScript

**Spec:** `docs/superpowers/specs/2026-04-05-seo-optimization-design.md`

---

## File Structure

| Action | File | Responsibility |
|--------|------|---------------|
| Create | `src/data/seoData.ts` | Centralized SEO metadata per route/slug |
| Create | `src/components/SEO.astro` | Reusable meta tag component |
| Create | `src/pages/og/[slug].png.ts` | Dynamic OG image generation endpoint |
| Create | `public/assets/img/og/og-default.png` | Fallback OG image (placeholder) |
| Modify | `src/layouts/mainLayout.astro:9-29` | Add SEO props + replace head meta tags |
| Modify | `src/layouts/projectLayout.astro:6-60` | Add SEO props + replace head meta tags |
| Modify | `src/pages/index.astro:11` | Pass SEO props to layout |
| Modify | `src/pages/nosotros.astro:12` | Pass SEO props to layout |
| Modify | `src/pages/proyectos.astro` | Pass SEO props to layout |
| Modify | `src/pages/cursos.astro` | Pass SEO props to layout |
| Modify | `src/pages/contacto.astro` | Pass SEO props to layout |
| Modify | `src/pages/publicaciones.astro` | Pass SEO props to layout |
| Modify | `src/pages/proyectos/bootcamp.astro` | Pass SEO props to layout |
| Modify | `src/pages/proyectos/cofar.astro:75-79` | Pass SEO props to layout |
| Modify | `src/pages/proyectos/covida.astro` | Pass SEO props to layout |
| Modify | `src/pages/proyectos/proteia.astro` | Pass SEO props to layout |
| Modify | `src/pages/proyectos/guarania/index.astro` | Pass SEO props to layout |
| Modify | `src/pages/cursos/[slug].astro:5-63` | Add SEO data to getStaticPaths + pass to layout |
| Modify | `src/pages/proyectos/guarania/galeria/[slug].astro:30-34` | Pass SEO props to layout |
| Modify | `astro.config.mjs:13-14` | Update site URL to www.ciditpy.org |

---

### Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install satori and sharp**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website && npm install satori sharp
```

Expected: packages added to `dependencies` in package.json.

- [ ] **Step 2: Verify installation**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website && node -e "require('satori'); require('sharp'); console.log('OK')"
```

Expected: `OK`

- [ ] **Step 3: Commit**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website
git add package.json package-lock.json
git commit -m "chore: add satori and sharp for OG image generation"
```

---

### Task 2: Update Site Config

**Files:**
- Modify: `astro.config.mjs:13-14`

- [ ] **Step 1: Update astro.config.mjs**

Change the `site` and `base` config to the production domain. The `base` path override for production is no longer needed since this will be the main website at `www.ciditpy.org`.

In `astro.config.mjs`, replace:

```javascript
    site: "https://cidit.website.io",
    base: process.env.NODE_ENV === "production" ? "/cidit-website" : "/",
```

With:

```javascript
    site: "https://www.ciditpy.org",
```

- [ ] **Step 2: Verify the dev server starts**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website && npx astro check 2>&1 | head -20
```

Expected: no config-related errors.

- [ ] **Step 3: Commit**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website
git add astro.config.mjs
git commit -m "config: update site URL to www.ciditpy.org"
```

---

### Task 3: Create SEO Data Config

**Files:**
- Create: `src/data/seoData.ts`

- [ ] **Step 1: Create the SEO data file**

Create `src/data/seoData.ts` with the following content:

```typescript
export interface SEOEntry {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  projectLogo?: string;
}

export const seoData: Record<string, SEOEntry> = {
  // Main pages
  "/": {
    title: "CIDIT — Innovación Tecnológica que Transforma Paraguay",
    description:
      "Centro de innovación en ingeniería y tecnología. Cursos especializados, proyectos de investigación en IA y desarrollo de talento en Paraguay.",
    ogImage: "/assets/img/og/og-home.png",
  },
  "/nosotros": {
    title: "Sobre CIDIT — Centro de Innovación en Ingeniería",
    description:
      "Desde 2014 articulamos academia, empresa y gobierno para convertir investigación en soluciones reales. Conocé nuestra misión, equipo y valores.",
    ogImage: "/assets/img/og/og-nosotros.png",
  },
  "/proyectos": {
    title: "Proyectos de Investigación — CIDIT",
    description:
      "Proyectos en inteligencia artificial, inclusión social e innovación. Desde predicción farmacológica hasta digitalización del guaraní.",
    ogImage: "/assets/img/og/og-proyectos.png",
  },
  "/cursos": {
    title: "Cursos de Ingeniería y Construcción 2026 — CIDIT",
    description:
      "Calendario 2026 de cursos especializados: contratos FIDIC, hormigón, obras viales, puentes y más. Formación profesional con expertos.",
    ogImage: "/assets/img/og/og-cursos.png",
  },
  "/contacto": {
    title: "Contacto — CIDIT",
    description:
      "Contactanos para consultas sobre cursos, proyectos de investigación o alianzas. Estamos en Paraguay listos para colaborar.",
    ogImage: "/assets/img/og/og-contacto.png",
  },
  "/publicaciones": {
    title: "Publicaciones y Recursos — CIDIT",
    description:
      "Accedé al repositorio de documentos del CIDIT: boletines, informes, guías y materiales descargables sobre ingeniería e innovación.",
    ogImage: "/assets/img/og/og-publicaciones.png",
  },

  // Project pages
  bootcamp: {
    title: "Bootcamp Desarrollo Joven — CIDIT",
    description:
      "Programa de formación tecnológica para jóvenes. Más de 1.000 participantes en 5 departamentos impulsando empleabilidad e inclusión digital.",
    ogType: "article",
  },
  cofar: {
    title: "CoFar — Predicción Inteligente de Riesgos Farmacológicos",
    description:
      "Modelos de machine learning para predecir efectos secundarios de terapias combinadas. Investigación en IA aplicada a seguridad farmacológica.",
    ogType: "article",
    projectLogo: "/projects/img/cofar/logo.svg",
  },
  covida: {
    title: "CoVIDA — Reposicionamiento de Fármacos con IA",
    description:
      "Colaboración internacional que usa inteligencia artificial para identificar medicamentos existentes contra enfermedades infecciosas como COVID-19.",
    ogType: "article",
  },
  proteia: {
    title: "Proteia — IA para Identificación de Complejos Proteicos",
    description:
      "Aplicamos inteligencia artificial para predecir complejos proteicos en organismos nuevos. Un puente entre la biología y la tecnología.",
    ogType: "article",
    projectLogo: "/projects/img/proteia/logo.svg",
  },
  guarania: {
    title: "GuaranIA — Integrando el Guaraní en el Mundo Digital",
    description:
      "Herramientas de IA para llevar el idioma guaraní al ámbito digital, mejorando el acceso a servicios para comunidades guaraní-hablantes.",
    ogType: "article",
    projectLogo: "/projects/img/guarania/logo.svg",
  },

  // Course pages
  "gestion-de-contratos-de-obra-publica-con-experiencia-fidici": {
    title: "Gestión de Contratos FIDIC — Curso CIDIT 2026",
    description:
      "Curso de 12 horas sobre gestión de contratos de obra pública con experiencia FIDIC. Formación práctica para profesionales de infraestructura.",
  },
  "curso-costo-4w-2026": {
    title: "Curso Costo 4W 2026 — CIDIT",
    description:
      "Curso de 24 horas sobre estimación y control de costos en proyectos de ingeniería. Metodología 4W aplicada a obras civiles.",
  },
  "proceso-de-estabilizacion-de-subrasantes-y-bases-de-camino": {
    title: "Estabilización de Subrasantes y Bases — Curso CIDIT 2026",
    description:
      "Curso de 42 horas sobre procesos de estabilización de subrasantes y bases de camino. Técnicas avanzadas para ingeniería vial.",
  },
  "tecnologias-de-hormigon-aplicada": {
    title: "Tecnología de Hormigón Aplicada — Curso CIDIT 2026",
    description:
      "Curso intensivo de 105 horas sobre tecnologías de hormigón. Formación técnica especializada para ingenieros y constructores.",
  },
  "planificacion-y-administracion-de-la-red-vial-concesiones-crema-gmans": {
    title: "Planificación de Red Vial y Concesiones — Curso CIDIT 2026",
    description:
      "Curso de 24 horas sobre planificación y administración de la red vial, concesiones CREMA y GMANS para profesionales del sector.",
  },
  "inspeccion-evaluacion-y-gerenciamiento-de-puentes": {
    title: "Inspección y Gerenciamiento de Puentes — Curso CIDIT 2026",
    description:
      "Curso de 24 horas sobre inspección, evaluación y gerenciamiento de puentes. Formación especializada en infraestructura vial.",
  },
  "control-de-obras-viales": {
    title: "Control de Obras Viales — Curso CIDIT 2026",
    description:
      "Curso de 18 horas sobre control y supervisión de obras viales. Herramientas prácticas para gestión de proyectos de infraestructura.",
  },
  "perfil-4w-2026": {
    title: "Perfil 4W 2026 — Curso CIDIT",
    description:
      "Curso de 24 horas sobre perfiles de proyectos con metodología 4W. Planificación y formulación de proyectos de ingeniería civil.",
  },
  "mantenimiento-de-hospitales": {
    title: "Mantenimiento de Hospitales — Curso CIDIT 2026",
    description:
      "Curso de 10 horas sobre mantenimiento integral de hospitales. Gestión técnica de infraestructura hospitalaria para profesionales.",
  },
};

/**
 * Look up SEO data by route path or slug.
 * Falls back to a generic CIDIT entry if no match is found.
 */
export function getSEO(key: string): SEOEntry {
  return (
    seoData[key] ?? {
      title: "CIDIT — Centro de Innovación en Ingeniería y Tecnología",
      description:
        "Centro de innovación en ingeniería y tecnología en Paraguay. Cursos, proyectos de investigación y desarrollo de talento.",
      ogImage: "/assets/img/og/og-default.png",
    }
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website
git add src/data/seoData.ts
git commit -m "feat(seo): add centralized SEO data config for all pages"
```

---

### Task 4: Create the SEO Component

**Files:**
- Create: `src/components/SEO.astro`

- [ ] **Step 1: Create the SEO Astro component**

Create `src/components/SEO.astro`:

```astro
---
interface Props {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
}

const SITE_URL = "https://www.ciditpy.org";
const DEFAULT_OG_IMAGE = "/assets/img/og/og-default.png";

const {
  title,
  description,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  canonical,
  noindex = false,
} = Astro.props;

const canonicalURL = canonical
  ? canonical
  : new URL(Astro.url.pathname, SITE_URL).href;

const ogImageURL = ogImage.startsWith("http")
  ? ogImage
  : new URL(ogImage, SITE_URL).href;
---

<title>{title}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonicalURL} />

{noindex && <meta name="robots" content="noindex,nofollow" />}

<!-- Open Graph -->
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={canonicalURL} />
<meta property="og:image" content={ogImageURL} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:type" content={ogType} />
<meta property="og:site_name" content="CIDIT" />
<meta property="og:locale" content="es_PY" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogImageURL} />
```

- [ ] **Step 2: Commit**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website
git add src/components/SEO.astro
git commit -m "feat(seo): create reusable SEO Astro component"
```

---

### Task 5: Integrate SEO into mainLayout.astro

**Files:**
- Modify: `src/layouts/mainLayout.astro:1-29`

- [ ] **Step 1: Update the mainLayout Props and imports**

In `src/layouts/mainLayout.astro`, update the frontmatter to add SEO props and import the SEO component.

Replace the entire frontmatter block (lines 1-19):

```astro
---
import { staticPath } from "../utils/staticPath";
import "../styles/global.css";

import Header from "../components/Header.tsx";
import OffCanvas from "../components/OffCanvas.tsx";
import Footer from "../components/Footer.tsx";

interface Props {
	title?: string;
	baseLogoColor?: "white" | "black";
	baseMenuLight?: boolean;
}

const {
	title = "CIDIT",
	baseMenuLight = true,
	baseLogoColor = "white",
} = Astro.props;
```

With:

```astro
---
import { staticPath } from "../utils/staticPath";
import "../styles/global.css";

import Header from "../components/Header.tsx";
import OffCanvas from "../components/OffCanvas.tsx";
import Footer from "../components/Footer.tsx";
import SEO from "../components/SEO.astro";

interface Props {
	title?: string;
	description?: string;
	ogImage?: string;
	ogType?: string;
	baseLogoColor?: "white" | "black";
	baseMenuLight?: boolean;
}

const {
	title = "CIDIT",
	description = "",
	ogImage,
	ogType,
	baseMenuLight = true,
	baseLogoColor = "white",
} = Astro.props;
```

- [ ] **Step 2: Replace the title and description meta tags in the head**

In the `<head>` section, replace lines 27-28:

```html
		<title>{title === "CIDIT" ? "CIDIT" : `${title} - CIDIT`}</title>
		<meta name="description" content="" />
```

With:

```html
		<SEO
			title={title === "CIDIT" ? "CIDIT" : `${title} - CIDIT`}
			description={description}
			ogImage={ogImage}
			ogType={ogType}
		/>
```

- [ ] **Step 3: Verify build**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website && npx astro build 2>&1 | tail -20
```

Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website
git add src/layouts/mainLayout.astro
git commit -m "feat(seo): integrate SEO component into mainLayout"
```

---

### Task 6: Integrate SEO into projectLayout.astro

**Files:**
- Modify: `src/layouts/projectLayout.astro:1-60`

- [ ] **Step 1: Update the projectLayout Props and imports**

In `src/layouts/projectLayout.astro`, replace the frontmatter (lines 1-18):

```astro
---
import { staticPath } from "../utils/staticPath";
import Header from "../projectsComponents/Header";
import Footer from "../projectsComponents/Footer";

interface Props {
	title?: string;
	logoSrc: string;
	logoHeight?: string;
	footerLogoSrc: string;
}

const {
	title = "CIDIT",
	logoSrc = "",
	footerLogoSrc = "",
	logoHeight = "",
} = Astro.props;
```

With:

```astro
---
import { staticPath } from "../utils/staticPath";
import Header from "../projectsComponents/Header";
import Footer from "../projectsComponents/Footer";
import SEO from "../components/SEO.astro";

interface Props {
	title?: string;
	description?: string;
	ogImage?: string;
	ogType?: string;
	logoSrc: string;
	logoHeight?: string;
	footerLogoSrc: string;
}

const {
	title = "CIDIT",
	description = "",
	ogImage,
	ogType,
	logoSrc = "",
	footerLogoSrc = "",
	logoHeight = "",
} = Astro.props;
```

- [ ] **Step 2: Replace the head meta tags with SEO component**

In the `<head>` section, replace lines 25-60 (the title, meta description, keywords, author, and the entire Facebook Metadata block):

```html
		<title>{title === "CIDIT" ? "CIDIT" : `${title} - CIDIT`}</title>

		<!-- Meta Tags -->
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<meta name="author" content="mix_design" />

		<!-- Viewport Meta-->
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0, viewport-fit=cover"
		/>

		<!-- Template Favicon & Icons Start -->
		<link rel="icon" href={staticPath("/favicon.svg")} sizes="any" />
		<link
			rel="icon"
			href={staticPath("/favicon.svg")}
			type="image/svg+xml"
		/>
		<link rel="apple-touch-icon" href={staticPath("/favicon.svg")} />
		<link rel="manifest" href={staticPath("/site.webmanifest")} />
		<!-- Template Favicon & Icons End -->

		<!-- Facebook Metadata Start -->
		<meta property="og:image:height" content="1200" />
		<meta property="og:image:width" content="1200" />
		<meta
			property="og:title"
			content={title === "CIDIT" ? "CIDIT" : `${title} - CIDIT`}
		/>
		<meta property="og:description" content="" />
		<meta property="og:url" content="" />
		<meta property="og:image" content="" />
		<!-- Facebook Metadata End -->
```

With:

```html
		<SEO
			title={title === "CIDIT" ? "CIDIT" : `${title} - CIDIT`}
			description={description}
			ogImage={ogImage}
			ogType={ogType}
		/>

		<!-- Viewport Meta-->
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0, viewport-fit=cover"
		/>

		<!-- Template Favicon & Icons Start -->
		<link rel="icon" href={staticPath("/favicon.svg")} sizes="any" />
		<link
			rel="icon"
			href={staticPath("/favicon.svg")}
			type="image/svg+xml"
		/>
		<link rel="apple-touch-icon" href={staticPath("/favicon.svg")} />
		<link rel="manifest" href={staticPath("/site.webmanifest")} />
		<!-- Template Favicon & Icons End -->
```

- [ ] **Step 3: Verify build**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website && npx astro build 2>&1 | tail -20
```

Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website
git add src/layouts/projectLayout.astro
git commit -m "feat(seo): integrate SEO component into projectLayout"
```

---

### Task 7: Wire SEO Data into Main Site Pages

**Files:**
- Modify: `src/pages/index.astro:1-11`
- Modify: `src/pages/nosotros.astro:1-12`
- Modify: `src/pages/proyectos.astro`
- Modify: `src/pages/cursos.astro`
- Modify: `src/pages/contacto.astro`
- Modify: `src/pages/publicaciones.astro`

- [ ] **Step 1: Update index.astro**

Add the SEO data import and pass props to the layout. In `src/pages/index.astro`, add after the existing imports (before the closing `---`):

```astro
import { getSEO } from "../data/seoData";
const seo = getSEO("/");
```

Then replace the layout opening tag:

```astro
<MainLayout title="CIDIT">
```

With:

```astro
<MainLayout title={seo.title} description={seo.description} ogImage={seo.ogImage}>
```

- [ ] **Step 2: Update nosotros.astro**

In `src/pages/nosotros.astro`, add the import after existing imports:

```astro
import { getSEO } from "../data/seoData";
const seo = getSEO("/nosotros");
```

Replace:

```astro
<MainLayout title="Nosotros">
```

With:

```astro
<MainLayout title={seo.title} description={seo.description} ogImage={seo.ogImage}>
```

- [ ] **Step 3: Update proyectos.astro**

In `src/pages/proyectos.astro`, add the import after existing imports:

```astro
import { getSEO } from "../data/seoData";
const seo = getSEO("/proyectos");
```

Replace the `<MainLayout title="..."` opening tag to pass `description={seo.description}` and `ogImage={seo.ogImage}`, and update the title to `title={seo.title}`.

- [ ] **Step 4: Update cursos.astro**

Same pattern. Import `getSEO`, call `getSEO("/cursos")`, pass `title`, `description`, `ogImage` to `<MainLayout>`.

- [ ] **Step 5: Update contacto.astro**

Same pattern with `getSEO("/contacto")`.

- [ ] **Step 6: Update publicaciones.astro**

Same pattern with `getSEO("/publicaciones")`.

- [ ] **Step 7: Verify build**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website && npx astro build 2>&1 | tail -20
```

Expected: build succeeds with all pages generating.

- [ ] **Step 8: Commit**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website
git add src/pages/index.astro src/pages/nosotros.astro src/pages/proyectos.astro src/pages/cursos.astro src/pages/contacto.astro src/pages/publicaciones.astro
git commit -m "feat(seo): wire SEO data into all main site pages"
```

---

### Task 8: Wire SEO Data into Project Pages

**Files:**
- Modify: `src/pages/proyectos/bootcamp.astro`
- Modify: `src/pages/proyectos/cofar.astro:75-79`
- Modify: `src/pages/proyectos/covida.astro`
- Modify: `src/pages/proyectos/proteia.astro`
- Modify: `src/pages/proyectos/guarania/index.astro`

- [ ] **Step 1: Update bootcamp.astro**

Add the import in the frontmatter:

```astro
import { getSEO } from "../../data/seoData";
const seo = getSEO("bootcamp");
```

Update the `<ProjectLayout>` opening tag to include SEO props:

```astro
<ProjectLayout
	title={seo.title}
	description={seo.description}
	ogImage={`/og/bootcamp.png`}
	ogType={seo.ogType}
	...existing props (logoSrc, logoHeight, footerLogoSrc)...
>
```

Keep the existing `logoSrc`, `logoHeight`, and `footerLogoSrc` props unchanged.

- [ ] **Step 2: Update cofar.astro**

Add the import, then update the `<ProjectLayout>` tag at line 75. Replace:

```astro
<ProjectLayout
	title="Cofar"
	logoSrc={staticPath("/projects/img/cofar/logo.svg")}
	logoHeight="h-20!"
	footerLogoSrc={staticPath("/projects/img/cofar/logo-black.svg")}
```

With:

```astro
<ProjectLayout
	title={seo.title}
	description={seo.description}
	ogImage={`/og/cofar.png`}
	ogType={seo.ogType}
	logoSrc={staticPath("/projects/img/cofar/logo.svg")}
	logoHeight="h-20!"
	footerLogoSrc={staticPath("/projects/img/cofar/logo-black.svg")}
```

- [ ] **Step 3: Update covida.astro**

Same pattern with `getSEO("covida")`, `ogImage={"/og/covida.png"}`.

- [ ] **Step 4: Update proteia.astro**

Same pattern with `getSEO("proteia")`, `ogImage={"/og/proteia.png"}`.

- [ ] **Step 5: Update guarania/index.astro**

Same pattern with `getSEO("guarania")`, `ogImage={"/og/guarania.png"}`. Import path needs three levels: `../../../data/seoData`.

- [ ] **Step 6: Verify build**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website && npx astro build 2>&1 | tail -20
```

Expected: build succeeds.

- [ ] **Step 7: Commit**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website
git add src/pages/proyectos/bootcamp.astro src/pages/proyectos/cofar.astro src/pages/proyectos/covida.astro src/pages/proyectos/proteia.astro src/pages/proyectos/guarania/index.astro
git commit -m "feat(seo): wire SEO data into all project pages"
```

---

### Task 9: Wire SEO Data into Course Pages

**Files:**
- Modify: `src/pages/cursos/[slug].astro:5-63`

- [ ] **Step 1: Update the course dynamic route**

In `src/pages/cursos/[slug].astro`, replace the entire file content:

```astro
---
import MainLayout from "../../layouts/mainLayout.astro";
import CourseContent from "../../components/course/CourseContent.tsx";
import { getSEO } from "../../data/seoData";

export function getStaticPaths() {
	return [
		{
			params: {
				slug: "gestion-de-contratos-de-obra-publica-con-experiencia-fidici",
			},
			props: {
				title: "Gestión de Contratos de Obra Pública con Experiencia FIDIC",
			},
		},
		{
			params: { slug: "curso-costo-4w-2026" },
			props: { title: "Curso Costo 4W 2026" },
		},
		{
			params: {
				slug: "proceso-de-estabilizacion-de-subrasantes-y-bases-de-camino",
			},
			props: {
				title: "Proceso de estabilización de subrasantes y bases de camino",
			},
		},
		{
			params: { slug: "tecnologias-de-hormigon-aplicada" },
			props: { title: "Tecnologías de hormigón aplicada" },
		},
		{
			params: {
				slug: "planificacion-y-administracion-de-la-red-vial-concesiones-crema-gmans",
			},
			props: {
				title:
					"Planificación y administración de la red vial concesiones crema gmans",
			},
		},
		{
			params: { slug: "inspeccion-evaluacion-y-gerenciamiento-de-puentes" },
			props: { title: "Inspección evaluación y gerenciamiento de puentes" },
		},
		{
			params: { slug: "control-de-obras-viales" },
			props: { title: "Control de obras viales" },
		},
		{
			params: { slug: "perfil-4w-2026" },
			props: { title: "Perfil 4W 2026" },
		},
		{
			params: { slug: "mantenimiento-de-hospitales" },
			props: { title: "Mantenimiento de hospitales" },
		},
	];
}

const { slug } = Astro.params;
const { title } = Astro.props;
const seo = getSEO(slug!);
---

<MainLayout
	title={seo.title}
	description={seo.description}
	ogImage={`/og/${slug}.png`}
	baseMenuLight={false}
	baseLogoColor="black"
>
	<CourseContent title={title} />
</MainLayout>
```

Note: `CourseContent` still receives the original display `title` (not the SEO title) since it renders the heading on the page.

- [ ] **Step 2: Verify build**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website && npx astro build 2>&1 | tail -20
```

Expected: build succeeds, all 9 course pages generated.

- [ ] **Step 3: Commit**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website
git add src/pages/cursos/\[slug\].astro
git commit -m "feat(seo): wire SEO data into course dynamic route"
```

---

### Task 10: Wire SEO Data into Gallery Pages

**Files:**
- Modify: `src/pages/proyectos/guarania/galeria/[slug].astro:30-34`

- [ ] **Step 1: Update gallery detail page**

In `src/pages/proyectos/guarania/galeria/[slug].astro`, the gallery pages are dynamic from the DB. Since we don't have per-gallery SEO data, we use the gallery title for the SEO title and a generic GuaranIA description with the fallback OG image.

Add in the frontmatter (after the existing imports):

```astro
const galleryTitle = gallery.title.replace(/<\/?[^>]+(>|$)/g, "");
const seoTitle = `${galleryTitle} — GuaranIA / CIDIT`;
const seoDescription = `Galería del proyecto GuaranIA: ${galleryTitle}. Integrando el idioma guaraní en el ámbito digital.`;
```

Then update the `<ProjectLayout>` opening tag. Replace:

```astro
<ProjectLayout
	title={gallery.title.replace(/<\/?[^>]+(>|$)/g, "")}
	logoSrc={staticPath("projects/img/guarania/logo-dark.svg")}
	logoHeight="h-20!"
	footerLogoSrc={staticPath("projects/img/guarania/logo-black.svg")}
>
```

With:

```astro
<ProjectLayout
	title={seoTitle}
	description={seoDescription}
	logoSrc={staticPath("projects/img/guarania/logo-dark.svg")}
	logoHeight="h-20!"
	footerLogoSrc={staticPath("projects/img/guarania/logo-black.svg")}
>
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website && npx astro build 2>&1 | tail -20
```

Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website
git add src/pages/proyectos/guarania/galeria/\[slug\].astro
git commit -m "feat(seo): add SEO metadata to gallery detail pages"
```

---

### Task 11: Create Dynamic OG Image Endpoint

**Files:**
- Create: `src/pages/og/[slug].png.ts`

- [ ] **Step 1: Create the OG image generation endpoint**

Create `src/pages/og/[slug].png.ts`:

```typescript
import type { APIRoute, GetStaticPaths } from "astro";
import satori from "satori";
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { seoData } from "../../data/seoData";

// Collect all project and course slugs that need dynamic OG images
const dynamicSlugs = [
  "bootcamp",
  "cofar",
  "covida",
  "proteia",
  "guarania",
  "gestion-de-contratos-de-obra-publica-con-experiencia-fidici",
  "curso-costo-4w-2026",
  "proceso-de-estabilizacion-de-subrasantes-y-bases-de-camino",
  "tecnologias-de-hormigon-aplicada",
  "planificacion-y-administracion-de-la-red-vial-concesiones-crema-gmans",
  "inspeccion-evaluacion-y-gerenciamiento-de-puentes",
  "control-de-obras-viales",
  "perfil-4w-2026",
  "mantenimiento-de-hospitales",
];

export const getStaticPaths: GetStaticPaths = () => {
  return dynamicSlugs.map((slug) => ({ params: { slug } }));
};

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug!;
  const entry = seoData[slug];
  const title = entry?.title ?? "CIDIT";

  // Load a font for Satori — use a system sans-serif or bundle one.
  // We read Inter from Google Fonts at build time, or fall back to a local file.
  const fontPath = path.join(
    process.cwd(),
    "src",
    "assets",
    "fonts",
    "Inter-Bold.ttf"
  );

  let fontData: ArrayBuffer;
  if (fs.existsSync(fontPath)) {
    fontData = fs.readFileSync(fontPath).buffer as ArrayBuffer;
  } else {
    // Fetch Inter Bold from Google Fonts as fallback
    const fontResponse = await fetch(
      "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf"
    );
    fontData = await fontResponse.arrayBuffer();
  }

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          color: "white",
          fontFamily: "Inter",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "52px",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      maxWidth: "900px",
                      overflow: "hidden",
                    },
                    children: title,
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "28px",
                      fontWeight: 700,
                      opacity: 0.9,
                    },
                    children: "CIDIT",
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "20px",
                      opacity: 0.7,
                    },
                    children: "ciditpy.org",
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
```

- [ ] **Step 2: Create the fonts directory and download Inter Bold**

```bash
mkdir -p /Users/everdaniel/Code/CIDIT/cidit-website/src/assets/fonts
curl -L -o /Users/everdaniel/Code/CIDIT/cidit-website/src/assets/fonts/Inter-Bold.ttf "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf"
```

- [ ] **Step 3: Verify build generates OG images**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website && npx astro build 2>&1 | tail -30
```

Expected: build succeeds, `og/*.png` files appear in the dist output. If errors occur with Satori or sharp, check the error message and adjust.

- [ ] **Step 4: Verify a generated image exists**

```bash
ls -la /Users/everdaniel/Code/CIDIT/cidit-website/dist/og/ 2>/dev/null || echo "Check dist output path"
```

Expected: PNG files for each slug.

- [ ] **Step 5: Commit**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website
git add src/pages/og/\[slug\].png.ts src/assets/fonts/Inter-Bold.ttf
git commit -m "feat(seo): add dynamic OG image generation endpoint"
```

---

### Task 12: Create Fallback OG Image Placeholder

**Files:**
- Create: `public/assets/img/og/og-default.png`

- [ ] **Step 1: Create the og directory and a placeholder default image**

Since the static OG images (og-home.png, og-nosotros.png, etc.) will be designed manually, we need at least the fallback `og-default.png` to exist so the build doesn't break on pages referencing it.

Generate a simple branded placeholder using sharp:

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website
mkdir -p public/assets/img/og
node -e "
const sharp = require('sharp');
const svg = \`<svg width=\"1200\" height=\"630\" xmlns=\"http://www.w3.org/2000/svg\">
  <defs>
    <linearGradient id=\"bg\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">
      <stop offset=\"0%\" style=\"stop-color:#1a1a2e\"/>
      <stop offset=\"50%\" style=\"stop-color:#16213e\"/>
      <stop offset=\"100%\" style=\"stop-color:#0f3460\"/>
    </linearGradient>
  </defs>
  <rect width=\"1200\" height=\"630\" fill=\"url(#bg)\"/>
  <text x=\"600\" y=\"280\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"72\" font-weight=\"bold\" fill=\"white\">CIDIT</text>
  <text x=\"600\" y=\"360\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"28\" fill=\"white\" opacity=\"0.8\">Centro de Innovación en Ingeniería y Tecnología</text>
  <text x=\"600\" y=\"420\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"22\" fill=\"white\" opacity=\"0.6\">ciditpy.org</text>
</svg>\`;
sharp(Buffer.from(svg)).png().toFile('public/assets/img/og/og-default.png').then(() => console.log('OK'));
"
```

Expected: `og-default.png` created in `public/assets/img/og/`.

- [ ] **Step 2: Copy og-default.png as placeholder for the 6 static images**

Until a designer creates the final versions, copy the default as placeholders:

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website/public/assets/img/og
for name in og-home og-nosotros og-proyectos og-cursos og-contacto og-publicaciones; do
  cp og-default.png "${name}.png"
done
```

- [ ] **Step 3: Commit**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website
git add public/assets/img/og/
git commit -m "feat(seo): add placeholder OG images for all main sections"
```

---

### Task 13: Final Build Verification

- [ ] **Step 1: Full build**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website && npx astro build 2>&1 | tail -30
```

Expected: build succeeds with all pages and OG images generated.

- [ ] **Step 2: Spot-check the HTML output for meta tags**

```bash
cd /Users/everdaniel/Code/CIDIT/cidit-website
# Check home page
grep -A1 'og:title\|og:description\|og:image\|twitter:card\|canonical' dist/index.html | head -20
# Check a course page
grep -A1 'og:title\|og:description\|og:image' dist/cursos/curso-costo-4w-2026/index.html 2>/dev/null | head -10
# Check a project page
grep -A1 'og:title\|og:description\|og:image' dist/proyectos/cofar/index.html 2>/dev/null | head -10
```

Expected: all meta tags populated with the correct titles, descriptions, and image paths.

- [ ] **Step 3: Verify OG images were generated**

```bash
ls -la /Users/everdaniel/Code/CIDIT/cidit-website/dist/og/ 2>/dev/null
```

Expected: 14 PNG files (5 projects + 9 courses).

- [ ] **Step 4: Final commit if any fixes were needed**

Only if adjustments were made during verification.
