# AI Prompt Base

## Fuente de verdad (leer antes de hacer nada)

Usá como fuente de verdad y no contradigas estos docs:

- `docs/01_PROJECT_CONTEXT.md`
- `docs/02_ARCHITECTURE.md`
- `docs/03_STANDARDS.md`
- `docs/04_DECISIONS.md` (si la decisión ya existe, respetarla; si hace falta una nueva, documentarla)

---

## Regla de workflow (obligatoria)

- Implementá la tarea en una **rama nueva** basada en `main`:
  - `feature/<slug-corto>` o `fix/<slug-corto>`
- No commitear directo a `main`.

---

## Tarea

<describir tarea concreta en 1–3 líneas>

### Contexto adicional (si aplica)

- Pantalla/ruta afectada (Astro page):
- Componentes afectados (React/Astro):
- Regla de negocio:
- Casos borde:

---

## Restricciones

- Cambios mínimos (no tocar archivos no relacionados).
- No inventar librerías/APIs.
- Respetar arquitectura `docs/02_ARCHITECTURE.md`.
- Respetar estándares `docs/03_STANDARDS.md`.
- Mantener fidelidad visual al template (no “reinterpretar” diseño).
- React **solo** donde haya interactividad real (si es estático, preferir Astro).
- Agregar/actualizar tests **si aplica** (mappers/validators/use-cases).
- Si aparece una decisión nueva, documentarla en `docs/04_DECISIONS.md`.

---

## Entrega obligatoria (formato)

### 1) Plan (3–7 bullets)

- (máx 7 bullets, concretos)

### 2) Archivos a tocar (lista)

- `path/to/file`
- `path/to/other`

> Si no podés listar archivos con certeza, explicá por qué y proponé una búsqueda/inspección breve del repo (sin inventar).

### 3) Implementación (paso a paso)

- Paso 1:
- Paso 2:
- Paso 3:

> En cada paso, indicar qué archivo cambia y qué cambia (alto nivel). No pegar código gigante si no hace falta.

### 4) Tests

- Qué tests agregaste/actualizaste:
- Cómo correrlos:
  - `npm run test` _(solo si existe)_
- Si no aplica, justificar en 1 línea (ej: “solo markup estático sin lógica”).

### 5) Checklist final

- `npm run lint` _(si existe)_: OK
- `npm run test` _(si existe)_: OK
- `npm run build`: OK
- Verificación visual básica (páginas afectadas): OK

---

## Nota rápida (calidad)

- Si un script (lint/test/format) no existe en `package.json`, **no lo asumas**: mencionarlo y proponer agregarlo como tarea/decisión.
- No loguear PII/secrets.
