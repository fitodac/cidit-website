# Standards

## 1) Code style

- **Lint:**
  - ESLint habilitado para TypeScript + React + Astro.
  - Regla general: 0 errores en CI/local antes de merge.

- **Format:**
  - Prettier como formateador único.
  - 2 espacios, comillas simples (salvo que el tooling diga lo contrario), trailing commas donde aplique.

- **Naming:**
  - Componentes React/Astro: `PascalCase`
    - `Navbar.tsx`, `Hero.tsx`, `Footer.astro`
  - Hooks: `useXxx`
  - Use-cases (application): `verbNoun.ts` (ej: `getHomePageData.ts`)
  - DTOs: `NounDto.ts`
  - Constantes: `SCREAMING_SNAKE_CASE` solo para constantes globales reales.
  - Archivos de estilos: `kebab-case.css` o según convención del template.

- **Imports/aliases:**
  - Preferir imports absolutos con alias (si está configurado): `@/ui/...`, `@/application/...`
  - Orden de imports:
    1. externos
    2. internos (alias)
    3. relativos
    4. styles
  - Prohibido: deep relative imports tipo `../../../../`.

## 2) Testing

- **Tipos de tests:**
  - Unit: reglas puras (domain) + mappers/validators (application)
  - Integration liviano: use-cases que consumen repos (mockeados)
  - E2E/visual: opcional (solo si se define herramienta; no inventar)

- **Dónde van:**
  - Tests junto al módulo o en carpeta `__tests__` cercana:
    - `src/domain/**/__tests__/*.test.ts`
    - `src/application/**/__tests__/*.test.ts`

- **Qué se testea sí o sí:**
  - Mappers que transforman data a DTOs.
  - Validators (inputs de forms / endpoints).
  - Helpers/reglas de domain (si existen).
  - No se testea “markup pixel-perfect” salvo que haya suite visual definida.

## 3) Error handling

- **Manejo de errores (excepciones / returns / Result types):**
  - En **Domain**: funciones puras, retornar `null/undefined` o `Result` simple si aplica (sin throw salvo casos realmente excepcionales).
  - En **Application**:
    - Validar inputs y devolver errores tipados/estructurados.
    - Capturar errores de infraestructura y mapear a un error “amigable” para UI.
  - En **UI**:
    - Mostrar mensajes cortos y accionables.
    - No exponer stack traces ni mensajes internos.

- **Mensajes para usuario vs logs:**
  - Usuario: “No se pudo enviar el formulario. Probá de nuevo.”
  - Logs: detalle técnico (status code, payload reducido, contexto) sin PII.

## 4) Logging/observabilidad

- **Qué loguear:**
  - Errores inesperados (con contexto mínimo: dónde falló, qué use-case, status).
  - Eventos importantes: submit de form (éxito/fallo), fetch a fuente de datos (fallo).
  - Performance básica (si aplica): tiempos de respuesta de endpoints.

- **Qué NO loguear (PII/secrets):**
  - Emails, teléfonos, direcciones, mensajes completos de contacto.
  - Tokens, API keys, cookies, headers sensibles.
  - Cualquier dato del usuario que lo identifique.

## 5) Performance y DX

- **Reglas simples:**
  - Mantener la mayoría del sitio como **Astro (SSG)** y usar React solo donde sea interactivo.
  - Evitar hidratar React “por defecto”:
    - usar `client:load`, `client:idle`, `client:visible` según convenga.
  - Imágenes:
    - preferir formatos modernos (webp/avif si ya existen), lazy loading.
    - no subir imágenes gigantes sin optimizar.
  - CSS:
    - evitar duplicar estilos del template + Tailwind a la vez (definir una estrategia).
  - Bundle:
    - no agregar dependencias nuevas sin justificación.
  - DX:
    - scripts claros en `package.json` (`dev`, `build`, `preview`, `lint`, `format`, `test` si aplica).

## 6) Reglas para IA

1. **Antes de escribir código:** resumir en 3 bullets lo que vas a cambiar.
2. **No inventar librerías/APIs.** Si algo no está instalado/definido, proponer alternativa con lo existente.
3. **Cambios mínimos:** no tocar archivos no relacionados al feature/bug.
4. **Seguir la arquitectura** definida en `docs/02_ARCHITECTURE.md`.
5. **Actualizar tests/docs si aplica:**
   - Si se agrega un use-case/mapper/validator → agregar/actualizar tests.
   - Si se toma una decisión nueva → actualizar `docs/04_DECISIONS.md`.
6. **Ramas:**
   - Implementar cada feature/bugfix en una rama nueva basada en `main`.
   - Naming: `feature/<slug>` o `fix/<slug>`.
7. **Fidelidad visual al template:**
   - No “reinterpretar” el diseño.
   - Mantener spacing/typography/components del template salvo pedido explícito.
8. **React dentro de Astro:**
   - React solo para interacción real.
   - Preferir componentes Astro para contenido estático.
