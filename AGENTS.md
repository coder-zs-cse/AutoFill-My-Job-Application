# AGENTS.md

Instructions for any AI coding agent (Cursor, Claude Code, Codex) working in this repo.
**Before writing code, read `KARPATHY.md`** (behavior contract) and the docs below that match your task.

## What this is
Fillmate autofills job-application text fields on Android from a personal answer bank.
React Native app (manage answers) + Kotlin AutofillService (fills in Chrome) + FastAPI backend.

## Map

```
apps/mobile/                 React Native 0.88 (TypeScript, New Architecture), Android only for now
  src/app/                   composition root: providers (DI), navigation
  src/core/                  http client, ApiError, native bridge facade, query client, env
  src/design-system/         clay tokens (generated), primitives, patterns
  src/features/<name>/       domain/ data/ application/ ui/ + index.ts (public API). kb = reference
  android/app/               RN host + bridge/ (JS ↔ Kotlin translator only)
  android/autofill/          AutofillService, structure parsing, datasets, activities, cache, session
  android/autofill-core/     pure Kotlin matching (Tier 1 + resolver), JVM tests
apps/api/                    FastAPI: routes → services → repositories → models; matching/, llm/
packages/contracts/matching/ rules.json + vectors.json, shared by Kotlin and Python
packages/design-tokens/      tokens.json → generated TS + Kotlin
design/stitch/<SCREEN_ID>/   Stitch prompt, export, notes (owner, file, route) per screen
.claude/                     specs (below)
```

## Read before…

| Task | Read |
|---|---|
| Any code | `KARPATHY.md`, `ARCHITECTURE.md`, `.claude/conventions.md` |
| Building a screen | `.claude/screens.md`, `design/stitch/<ID>/notes.md`, `.claude/design-system.md`, `.claude/prompts/implement-screen.md` |
| A feature's data layer | the `kb` feature, `.claude/api-contract.md`, `.claude/prompts/implement-feature-slice.md` |
| Kotlin / autofill | `.claude/autofill-service.md`, `.claude/matching-pipeline.md` |
| Backend | `.claude/api-contract.md`, `.claude/data-model.md`, `.claude/matching-pipeline.md` |
| Why it's structured this way | `.claude/lld-guide.md` |
| What to build next | `.claude/build-plan.md` |

## Commands

```bash
cd apps/mobile && npm run typecheck && npm run lint && npm test   # must pass before any PR
cd apps/mobile && npm run tokens                                   # after editing tokens.json
cd apps/mobile/android && ./gradlew :autofill-core:test            # matching vectors (Kotlin)
cd apps/api && pytest                                              # backend + vectors (Python)
```

## Hard rules
1. Respect layer and feature boundaries (ESLint enforces them; don't disable the rule).
2. Stitch exports are visual references. Never port their HTML/CSS; use design-system primitives.
3. Matching behavior changes start with a new case in `vectors.json`; both implementations must pass.
4. Tokens live in Kotlin only; the LLM is never called from `onFillRequest`.
5. Every KB write in RN ends with `fillmateNative.kb.sync()` (see `afterKbWrite`).
6. Ask before adding a dependency, a navigator, a global store, or a new bridge method.
