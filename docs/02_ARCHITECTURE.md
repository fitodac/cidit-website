# Architecture

## 1) Principios

- **Separación de responsabilidades:**
  - **Astro** maneja: routing, layouts, estructura de páginas, carga de datos (si aplica) y composición.
  - **React** maneja: UI interactiva (componentes con estado, handlers, UI dinámica).
  - **Estilos**: una única fuente de verdad (CSS del template o Tailwind), evitando duplicación.
  - **Assets** (imágenes, íconos, fuentes) centralizados y referenciados de forma consistente.

- **SOLID (aplicado a UI):**
  - **S (Single Responsibility):** un componente = una intención clara (ej: `Hero`, `Navbar`, `FeatureGrid`).
  - **O (Open/Closed):** extender con props/slots, no editando componentes base para casos puntuales.
  - **L (Liskov):** variantes compatibles (ej: `Button` mantiene contrato de props).
  - **I (Interface Segregation):** props chicas y específicas (evitar “props bolsa” gigantes).
  - **D (Dependency Inversion):** componentes UI consumen **interfaces/contratos** (tipos/DTOs), no detalles de infraestructura.

- **Estilo de arquitectura:**
  - **Modular por features + capas livianas** (adaptado a frontend).
  - No “hexagonal pura” porque es un sitio estático/SSR liviano, pero se respeta:
    - **Domain** sin dependencias de infraestructura.
    - **Application** orquesta casos de uso.
    - **Infrastructure** implementa integración (fetch, CMS, endpoints, etc.).
    - **UI** renderiza y maneja interacción.

## 2) Mapa de módulos/capas

> En este proyecto el “backend” puede no existir; igual mantenemos capas para que el código no se vuelva un menjunje.

- **UI (Presentación)**
  - Páginas Astro (`src/pages`) y layouts (`src/layouts`)
  - Componentes React (`src/ui/react`)
  - Componentes Astro de composición (`src/ui/astro`)
  - Estilos (`src/styles`) y assets

- **Application (Casos de uso / Orquestación)**
  - Use-cases: funciones que coordinan tareas (ej: obtener data, mapear, validar, devolver listo para UI)
  - Mappers / Transformers
  - Validaciones de entrada (si aplica)

- **Domain (Modelo de negocio del sitio)**
  - Tipos/Entidades: `Project`, `Post`, `Testimonial`, etc. (si aplica)
  - Reglas: validaciones puras, helpers sin side-effects
  - Contratos: interfaces de repositorios/fuentes de datos

- **Infrastructure (Integraciones)**
  - Data sources: fetch a API, CMS, archivos locales, endpoints serverless
  - Implementaciones de repositorios
  - Clientes HTTP, adaptadores

## 3) Reglas de dependencia (prohibiciones)

- **UI -> OK:** Application
- **Application -> OK:** Domain, Infrastructure (**solo mediante interfaces/contratos**)
- **Domain -> NO:** Infrastructure, UI
- **UI -> NO:** Infrastructure (evitar `fetch` directo desde componentes; usar Application)
- **Infrastructure -> OK:** Domain (para mapear a entidades/tipos), pero sin depender de UI

## 4) Convenciones de estructura

### Carpetas (propuesta)

- `src/pages/`
  - Rutas Astro (cada archivo = una página)
- `src/layouts/`
  - Layouts Astro (shell general, wrappers)
- `src/ui/`
  - `src/ui/astro/` componentes Astro (composición, wrappers)
  - `src/ui/react/` componentes React (interactivos)
  - `src/ui/shared/` componentes puros reutilizables (si aplica)
- `src/application/`
  - `use-cases/` (casos de uso)
  - `mappers/` (transformaciones)
  - `validators/` (validaciones)
  - `dto/` (contratos de entrada/salida para UI)
- `src/domain/`
  - `entities/` (tipos/entidades)
  - `rules/` (reglas puras)
  - `contracts/` (interfaces de repos)
- `src/infrastructure/`
  - `repositories/` (implementaciones)
  - `clients/` (http/cms/etc)
  - `sources/` (archivos locales / endpoints)
- `src/styles/`
  - CSS base del template o Tailwind entrypoints
- `public/`
  - assets estáticos (imágenes, fonts) tal como exige Astro

### Naming

- Componentes React: `PascalCase.tsx` (ej: `Navbar.tsx`, `Hero.tsx`)
- Componentes Astro: `PascalCase.astro`
- Use-cases: `verbNoun.ts` (ej: `getHomePageData.ts`, `submitContactForm.ts`)
- DTOs: `NounDto.ts` (ej: `ProjectDto.ts`)
- Repos/Contracts: `NounRepository.ts` (contract) + `NounRepositoryImpl.ts` (infra)
- Mappers: `mapXToY.ts`

### Dónde vive cada cosa (ejemplos)

- **Controllers/Routes:**
  - En Astro: `src/pages/*.astro`
  - Si hay endpoints: `src/pages/api/*` (Astro endpoints)
- **Services/Use-cases:**
  - `src/application/use-cases/`
- **DTOs/Validators:**
  - DTOs: `src/application/dto/`
  - Validators: `src/application/validators/`
- **Repositories:**
  - Interfaces: `src/domain/contracts/`
  - Implementaciones: `src/infrastructure/repositories/`

## 5) Puntos de extensión

- **Cómo agregar un módulo nuevo (feature)**
  1. Crear carpeta/archivos necesarios en:
     - `src/domain/` (si hay entidad/regla/contrato)
     - `src/application/` (use-case + mapper/dto)
     - `src/ui/` (componentes)
  2. Conectar desde una página Astro o layout.
  3. Mantener consistencia visual con el template (spacing, tipografía, componentes base).
  4. Agregar/actualizar `04_DECISIONS.md` si se toma una decisión arquitectónica nueva.

- **Cómo agregar un endpoint / una pantalla**
  - **Pantalla (page):**
    - Crear `src/pages/nueva-ruta.astro`
    - Componer UI y llamar a Application para data
  - **Endpoint (si aplica):**
    - Crear `src/pages/api/nombre.ts`
    - Validar input (Application validators)
    - Llamar use-case
    - Responder DTO

## Regla de trabajo con ramas (IA)

- Todo feature/bugfix asignado a la IA se implementa en una **rama nueva** basada en `main`.
- Naming sugerido:
  - `feature/<slug-corto>`
  - `fix/<slug-corto>`
- La rama debe incluir:
  - Cambios de código
  - Actualización de docs si corresponde (standards/decisions/runbook)
