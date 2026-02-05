# Project Context

## 1) Qué es este proyecto

- Objetivo: Creación de un sitio web en Astro a partir de un template html existente
- Usuarios/roles:
  - **Visitante (público):** navega páginas, lee contenido, completa formularios (si aplica).
- Alcance v1:
  - Maquetación en Astro replicando el template (layout + componentes).
  - Rutas/páginas principales: `Inicio`, `Nosotros`, `Proyectos`, `Cursos`, `Publicaciones`, `Contacto`.
  - Responsive + accesibilidad básica (labels, contraste, navegación teclado).
  - SEO base: titles, meta, OG, sitemap, robots.
  - Performance: imágenes optimizadas + lazy loading cuando corresponda.
- Fuera de alcance:
  - Login/roles/permisos.
  - Panel admin completo.
  - E-commerce/pagos.
  - Internacionalización (i18n) salvo que se pida explícito.
  - Backend propio (API, DB) salvo que se defina.

## 2) Stack exacto

- Frontend: Astro + React. Debe compilar a HTML estático para que pueda ser levantado en github pages.
  - Styling: Bootstrap 5.3.7
- Backend: Sin backend
- DB: Sin base de datos
- Infra/local: Sin servidor local, se debe poder levantar en github pages.
- Auth: Sin autenticación, solo acceso público.
- Observabilidad (logs/metrics): Se deben aplicar buenas prácticas de maquetación, SEO y rendimiento para lograr un buen ranking en lighthouse

## 3) Comandos

- Setup:
- Dev:
- Test:
- Lint/format:

## 4) Dominio (en criollo)

- **Entidades (contenido):**
  - Páginas (Home/About/Servicios/Contacto)
  - Secciones reutilizables (Hero, Features, CTA, Footer, Nav)
  - Assets (imágenes, íconos, fuentes)
- Reglas clave:
  - El objetivo es **fidelidad visual** al template + estructura mantenible.
  - Nada de “copiar/pegar” HTML gigante en cada ruta.
  - Vamos a separar secciones de una pagina en componentes React
- Flujos:
  - Visitante navega → lee → (opcional) completa contacto → se muestra confirmación.

## 5) “No tocar” / zonas sensibles

- **Estructura base del template:** spacing, tipografías, grid, breakpoints (si cambia, se rompe todo).
- **Sistema de estilos:** una sola fuente de verdad (Tailwind o CSS del template, no ambos mezclados sin criterio).
- **Layout principal:** header/nav/footer (cualquier cambio impacta todo el sitio).
- **Assets:** nombres/rutas de imágenes si están referenciadas por CSS/JS del template.

## 6) Definition of Done (DoD)

- Build **OK** sin warnings críticos (`npm run build`)
- Responsive **OK** (mobile/tablet/desktop) en páginas v1
- Accesibilidad básica **OK** (inputs con label, foco visible, navegación teclado)
- SEO base **OK** (title/meta/OG + sitemap/robots si aplica)
- Lint/format **OK** (si existen scripts)
- Documentación **OK**:
  - Este doc actualizado
  - `docs/02-architecture.md` (estructura de carpetas + decisiones)
  - `docs/03-workflow.md` (cómo laburamos PR/commits)
