# Runbook

## 1) Requisitos

- **Node.js:** 20.x LTS (recomendado)
- **Package manager:** npm (default) _(o pnpm si el proyecto ya lo usa; no mezclar)_
- **Git:** 2.x
- **Docker:** No requerido (v1) _(solo si más adelante agregamos servicios)_
- **PHP/DB:** No aplica (v1)

## 2) Setup desde cero

1. **Clonar**
   - `git clone <repo>`
   - `cd <repo>`

2. **Variables de entorno**
   - Si existe: `cp .env.example .env`
   - Si **no** existe `.env.example`, crear `.env` solo si el proyecto realmente lo necesita.

3. **Instalar deps**
   - `npm install`

4. **Migrar/seed**
   - No aplica (v1)

5. **Correr dev**
   - `npm run dev`
   - Abrir la URL que muestre la consola (por defecto suele ser `http://localhost:4321`)

## 3) Comandos útiles

- **dev:** `npm run dev`
- **build:** `npm run build`
- **preview:** `npm run preview`
- **lint:** `npm run lint` _(si está configurado)_
- **format:** `npm run format` _(si está configurado)_
- **test:** `npm run test` _(si está configurado)_

> Regla: si un script no existe en `package.json`, no se “asume”: se agrega como decisión/tarea explícita.

## 4) Debug rápido

- **Logs:**
  - Ver consola del dev server (`npm run dev`).
  - Si hay endpoints (`src/pages/api/*`), loguear con `console.error` solo en errores y sin PII.

- **Breakpoints:**
  - VS Code: usar “JavaScript Debug Terminal” o debug de Node.
  - Para React: React DevTools (si el componente está hidratado).
  - Para Astro: inspeccionar la página y revisar la salida SSR/HTML renderizado.

- **DB/seed:**
  - No aplica (v1)

## 5) Troubleshooting

- **“No levanta”**
  - Confirmar versión Node: `node -v` (debería ser 20.x)
  - Borrar y reinstalar deps:
    - `rm -rf node_modules package-lock.json`
    - `npm install`
  - Revisar puerto ocupado (cambiar puerto):
    - `npm run dev -- --port 4322`

- **“No conecta DB”**
  - No aplica (v1).
  - Si se agregó DB luego, documentar acá con:
    - variables `.env`
    - servicio (Docker/local)
    - comando de migración/seed

- **“CORS/auth”**
  - No aplica (v1).
  - Si hay endpoints y se llama desde otro origen:
    - Confirmar desde dónde se consume (mismo dominio vs externo).
    - Resolver en el endpoint (headers) o con proxy, según necesidad.
    - Documentar la decisión en `docs/04_DECISIONS.md`.

---

## Notas operativas

- **Ramas (workflow):**
  - Cada feature/bugfix va en una rama nueva desde `main`:
    - `feature/<slug>` / `fix/<slug>`
- **Fidelidad al template:**
  - Si algo “se ve distinto”, primero comparar:
    - assets (rutas)
    - CSS cargado en el orden correcto
    - fuentes (fonts) y fallbacks
