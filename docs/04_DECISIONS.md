# Decisions

> Formato ADR liviano. Una entrada por decisión.  
> Regla: si una decisión afecta arquitectura, tooling o convenciones, se registra acá.

## 2026-02-02 - Estructura por capas + features (Astro + React)

- **Contexto:**
  - El proyecto migra un template HTML a Astro manteniendo fidelidad visual.
  - Habrá componentes reutilizables, potencialmente features nuevos, y queremos evitar un “frankenstein” de carpetas.
- **Decisión:**
  - Adoptar estructura **por capas livianas** (`ui / application / domain / infrastructure`) y modularidad por features cuando aplique, según `docs/02_ARCHITECTURE.md`.
- **Alternativas consideradas:**
  - **A:** Estructura “todo en components” (rápida al inicio, difícil de escalar).
  - **B:** Hexagonal estricta (más pesada para un sitio mayormente estático).
- **Consecuencias:**
  - Mejor mantenibilidad y límites claros (UI no depende directo de infraestructura).
  - Leve overhead inicial para ubicar archivos correctamente.
- **Link/Referencia:**
  - `docs/02_ARCHITECTURE.md`

## 2026-02-02 - React solo para interactividad, Astro para lo estático

- **Contexto:**
  - La mayor parte del template es contenido/markup estático.
  - Hidratar todo React empeora performance y complejiza.
- **Decisión:**
  - Usar **Astro** para composición y páginas estáticas, y **React** solo donde haya estado/interacción real.
  - Elegir estrategia de hidratación por componente (`client:load/idle/visible`) según necesidad.
- **Alternativas consideradas:**
  - **A:** Pasar todo a React (simple mentalmente, peor performance).
  - **B:** Cero React (limita features interactivos).
- **Consecuencias:**
  - Mejor performance y bundle más chico.
  - Requiere criterio para decidir qué va en Astro vs React.
- **Link/Referencia:**
  - `docs/03_STANDARDS.md`

## 2026-02-02 - Workflow: cada feature en rama nueva (no se commitea en main)

- **Contexto:**
  - La IA va a implementar features y necesitamos control y trazabilidad.
- **Decisión:**
  - Todo cambio de feature/bugfix se hace en **rama nueva** basada en `main` (`feature/<slug>` o `fix/<slug>`).
- **Alternativas consideradas:**
  - **A:** Trabajar directo en `main` (rápido, riesgoso).
  - **B:** Ramas por release (más complejo para este tamaño).
- **Consecuencias:**
  - Menos riesgo y PRs más claros.
  - Un paso extra por cada cambio.
- **Link/Referencia:**
  - `docs/03_STANDARDS.md`

---

## Template (copiar/pegar para nuevas decisiones)

## YYYY-MM-DD - <título corto de la decisión>

- **Contexto:**
- **Decisión:**
- **Alternativas consideradas:**
  - **A:**
  - **B:**
- **Consecuencias:**
- **Link/Referencia:**
