# Conventions

## TypeScript (apps/mobile/src)
- Feature folders are camelCase (`importReview`); components PascalCase files; hooks `useX`; one component per file.
- Import order: react/libs → `@core` / `@design-system` / `@features/x` → relative. No deep feature imports.
- Domain types use domain words (`answerType`), DTOs use wire words (`answer_type`). Only mappers touch both.
- Data screens handle 4 states explicitly: loading, error (with retry), empty, populated.
- Errors: data layer throws `ApiError`; screens switch on `error.kind`. No `try/catch` in components.
- No `any`. If unavoidable, `// eslint-disable-next-line` with the reason.
- Styles: tokens only. Static style objects → `StyleSheet.create` at file bottom; themed values inline.
- Tests: domain rules get unit tests next to the file (`x.test.ts`). Hooks are tested with a fake repository
  passed through the feature's provider.

## Kotlin (android/)
- Packages mirror the folder tree in `autofill-service.md`. `:autofill-core` never imports `android.*`.
- Results are sealed types, not nullable-plus-flag.
- No work on the main thread in the service; no network in `onFillRequest` except the single Tier 2 call.
- Every TODO names its phase: `TODO("phase 2")`.

## Python (apps/api)
- Routes thin (parse → service → schema). Services hold rules. Repositories hold SQL. Ruff clean.
- Every KB write bumps `kb_version` inside the same transaction.

## Shared
- Behavior changes to matching start with a new vector in `packages/contracts/matching/vectors.json`.
- Token changes happen in `tokens.json` only; regenerate; commit generated files.
- Git: `feature/`, `fix/`, `chore/` branches; conventional commits (`feat(kb): move alias sheet`).
- A PR touching a screen links its `design/stitch/<id>/` folder and includes a screenshot.
