# Prompt template: build a feature's data slice (before its screens)

---

Build the data slice for feature **{FEATURE}** following the `kb` feature exactly.

Read: `features/{FEATURE}/README.md` (endpoints), `.claude/api-contract.md`, `features/kb/` (all four layers).

Create, in this order, and stop after each for review:
1. `domain/`: types in domain words + the repository port + any pure rule (with a unit test).
2. `data/`: `dto.ts`, `mappers.ts`, `<Name>ApiRepository.ts` implementing the port.
3. `application/`: provider/context + use-case hooks with query keys; every write that affects autofill
   ends by syncing the native snapshot (see `afterKbWrite` in kb).
4. Register the repository in `src/app/providers/AppProviders.tsx` and export the hooks from `index.ts`.

Done when typecheck, lint (layer rules) and tests pass. No screens in this task.
