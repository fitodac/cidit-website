# AGENTS.md — Project rules (source of truth)

## Source of truth (MUST READ)

Before proposing a plan or writing code, read these files:

- docs/01_PROJECT_CONTEXT.md
- docs/02_ARCHITECTURE.md
- docs/03_STANDARDS.md
- docs/04_DECISIONS.md
- docs/05_RUNBOOK.md (if present)

If anything conflicts, docs/04_DECISIONS.md wins.

## Non-negotiable constraints

- Minimal changes only (no unrelated refactors).
- Do NOT invent libraries, APIs, routes, or components.
- If info is missing, ask OR leave clear TODOs—don’t guess.

## Required output format for every task

1. Plan (3–7 bullets)
2. Files to change (list)
3. Implementation steps
4. Tests (what to add/update + how to run)
5. Final checklist (lint/test/build)

## Definition of Done

- All checks pass (lint/typecheck/tests/build).
- No breaking changes outside the requested scope.
