# Sitio CIDIT – Astro + React

Sitio web estático del CIDIT construido con [Astro](https://astro.build), usando React solo para secciones interactivas y el CSS del template original.

- Renderiza a HTML estático (ideal para GitHub Pages u hosting estático).
- Stack principal: Astro 5, React 19, Tailwind CSS 4 + CSS del template.

---

## 1. Instalación y entorno de desarrollo

### 1.1 Requisitos

- Node.js 20.x LTS (recomendado)
- npm (gestor por defecto del proyecto)
- Git 2.x

### 1.2 Instalación

En una terminal:

```bash
git clone <URL_DEL_REPOSITORIO>
cd cidit-website/html
npm install
```

> Si existe un archivo `.env.example`, copiarlo a `.env`. Actualmente el proyecto no requiere variables de entorno para correr en local.

### 1.3 Correr el entorno de desarrollo

Desde la raíz del proyecto (`/html`):

```bash
npm run dev
```

Luego abrir el navegador en:

- http://localhost:4321 (o la URL/puerto que imprima la consola)

El comando levanta el servidor de desarrollo de Astro con recarga en caliente (hot reload) para archivos `.astro`, `.tsx`, `.ts`, etc.

---

## 2. Estructura de la web y secciones principales

Las rutas públicas están definidas en `src/pages/`:

- [index.astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/index.astro) → `/`
- [nosotros.astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/nosotros.astro) → `/nosotros`
- [proyectos.astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/proyectos.astro) → `/proyectos`
- [cursos.astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/cursos.astro) → `/cursos`
- [cursos/[slug].astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/cursos/%5Bslug%5D.astro) → `/cursos/:slug`
- [publicaciones.astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/publicaciones.astro) → `/publicaciones`
- [contacto.astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/contacto.astro) → `/contacto`

### 2.1 Inicio (`/`)

Composición principal: [index.astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/index.astro).

- Hero: mensaje principal “Innovación tecnológica que transforma Paraguay” y links a redes sociales.
- About: bloque que presenta a CIDIT como organización que impulsa innovación tecnológica en Paraguay articulando academia, empresas y Estado.
- Cursos destacados: carrusel/sección con algunos cursos próximos.
- Proyectos destacados: tarjetas con proyectos clave.
- Testimonios: reseñas y opiniones de aliados/participantes.
- Marcas/aliados: logos de organizaciones vinculadas.

### 2.2 Nosotros (`/nosotros`)

Definido en [nosotros.astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/nosotros.astro).

- Hero y bloque de presentación institucional.
- Sección “About”: historia y propósito de CIDIT.
- Valores: lista de principios y enfoques de trabajo.
- Equipo: personas clave del equipo.
- Partners: instituciones aliadas y socios estratégicos.

### 2.3 Proyectos (`/proyectos` + detalle)

- Página general: [proyectos.astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/proyectos.astro) muestra un overview de los proyectos.
- Páginas de proyecto con layout específico en `src/pages/proyectos/`:
  - [bootcamp.astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/proyectos/bootcamp.astro)
  - [cofar.astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/proyectos/cofar.astro)
  - [proteia.astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/proyectos/proteia.astro)
  - [guarania.astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/proyectos/guarania.astro)
  - [covida.astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/proyectos/covida.astro)

Cada página de proyecto:

- Usa `ProjectLayout` para mantener una estructura consistente.
- Detalla objetivos, contexto, funcionamiento y equipo involucrado.
- Incluye secciones específicas (video, sponsors, testimonios, etc.) según el proyecto.

### 2.4 Cursos (`/cursos` y `/cursos/:slug`)

- Listado de cursos: [cursos.astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/cursos.astro) + [CoursesPageContent.tsx](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/components/courses/CoursesPageContent.tsx).
- Cada curso incluye:
  - Título y año/mes (por ejemplo, cursos 2026).
  - Imágenes de portada.
  - Docentes.
  - Link a la página de detalle.

Las páginas de detalle se generan en:

- [cursos/[slug].astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/cursos/%5Bslug%5D.astro)

`getStaticPaths` define los slugs disponibles (por ejemplo: `curso-costo-4w-2026`, `control-de-obras-viales`, etc.), y cada ruta muestra el contenido extendido del curso.

### 2.5 Publicaciones (`/publicaciones`)

Definido en:

- [publicaciones.astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/publicaciones.astro)
- [components/publications/List.tsx](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/components/publications/List.tsx)

Sección pensada como archivo documental:

- Agrupa documentos por año (2016, 2017, 2018, 2024, 2025, etc.).
- Cada ítem tiene título, sub-título opcional y enlace de descarga (por ahora apuntando a PDFs de ejemplo).

### 2.6 Contacto (`/contacto`)

Definido en:

- [contacto.astro](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/pages/contacto.astro)
- [ContactPageContent.tsx](file:///Volumes/external-ssd/work/borealis/cidit-website/html/src/components/contact/ContactPageContent.tsx)

Incluye:

- Cabecera animada de página (“Contacto”).
- Formulario con campos:
  - Nombre
  - Email
  - Teléfono
  - Mensaje
- Botón “Enviar” (actualmente el formulario no está conectado a un backend; el manejo real del submit se puede integrar más adelante).

---

## 3. Scripts y comandos disponibles

Todos los comandos se ejecutan desde la raíz del proyecto (`/html`):

| Comando           | Descripción                                                         |
| ----------------- | ------------------------------------------------------------------- |
| `npm install`     | Instala las dependencias del proyecto                               |
| `npm run dev`     | Inicia el servidor de desarrollo (por defecto en `4321`)            |
| `npm run build`   | Genera el build de producción en la carpeta `dist/`                 |
| `npm run preview` | Sirve el build de `dist/` para probarlo localmente                  |
| `npm run astro`   | Acceso directo al CLI de Astro (`astro check`, `astro add`, etc.)   |
| `npm run format`  | Formatea el código con Prettier según la configuración del proyecto |

Ejemplos de uso del CLI de Astro:

```bash
npm run astro -- check    # typecheck + diagnóstico de Astro
npm run astro -- --help   # ayuda general del CLI
```

---

## 4. Build y despliegue a producción

### 4.1 Generar el build de producción

Desde la raíz del proyecto:

```bash
npm run build
```

Esto ejecuta internamente:

- `astro build`

y genera una salida estática optimizada en la carpeta:

- `dist/`

### 4.2 Previsualizar el build localmente

Para validar el resultado final antes de subirlo a producción:

```bash
npm run preview
```

Esto levanta un servidor que sirve directamente el contenido de `dist/`. La consola mostrará la URL (generalmente `http://localhost:4321` o un puerto cercano disponible).

### 4.3 Despliegue

El proyecto compila a archivos estáticos, por lo que se puede desplegar en:

- GitHub Pages
- Netlify, Vercel (modo estático)
- Cualquier hosting de archivos estáticos

Pasos genéricos:

1. Ejecutar `npm run build`.
2. Subir el contenido de la carpeta `dist/` al hosting elegido.

Para despliegues específicos (por ejemplo, GitHub Pages de una organización), seguir las instrucciones de la infraestructura donde se vaya a alojar el sitio.

---

## 5. Notas para desarrollo futuro

- Mantener la fidelidad visual al template original (spacing, tipografía, grillas).
- Usar componentes Astro para contenido estático y React solo cuando haya interactividad real.
- Si se agregan nuevos comandos (lint, test, etc.), documentarlos en este archivo y en `docs/05_RUNBOOK.md`.
