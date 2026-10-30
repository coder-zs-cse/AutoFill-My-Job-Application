# LLD guide: how this codebase is designed, and why

Read this once before writing code. Every rule in `conventions.md` comes from one of the ideas below.

## 1. The one idea: dependencies point inward, toward what changes least

Things change at different speeds. Screens change weekly (designs iterate). HTTP details change
monthly (endpoints get renamed). Business rules ("a qualifier blocks an alias") change rarely.
Clean architecture arranges code so **fast-changing code depends on slow-changing code, never the reverse**.

```
   ui  (changes most)          screens, sheets, styling
    │
    ▼
application                    use cases: "move this alias, then re-sync the device"
    │
    ▼
 domain  (changes least)  ◄──  data    types, ports (interfaces), pure rules
                                       data implements the ports with HTTP/DTOs
```

`data` points at `domain`, not the other way. That inversion is the whole trick: the domain *declares*
`KbRepository`; the data layer *implements* it. So the domain never imports `fetch`, and swapping HTTP for
anything else touches one folder.

**Test yourself:** open `features/kb/domain/`. It imports nothing from React, React Native, TanStack, or
`data/`. If it ever does, the arrow has flipped.

## 2. Vocabulary, mapped to real files

| Term | Meaning | Where you'll see it |
|---|---|---|
| **Port** | An interface the inner layer needs | `KbRepository.ts`, Kotlin `SemanticTier`, `KbSnapshotStore`, Python `LlmProvider` |
| **Adapter** | Implements a port using a concrete technology | `KbApiRepository.ts`, `FillmateModule.kt` (JS ↔ Kotlin), `InMemoryKbSnapshotStore` |
| **Use case** | One user intention, orchestrated | `useMoveAlias()` in `kbQueries.ts` |
| **Mapper** | Wire format → domain type, in one place | `kb/data/mappers.ts` |
| **Composition root** | The only place concrete classes are chosen | `src/app/providers/AppProviders.tsx`, Kotlin `AutofillGraph` |
| **Facade** | One small entry point hiding a subsystem | `FillmateAutofill.kt`, `core/native/fillmateNative.ts` |
| **Public API of a module** | What other modules may import | each feature's `index.ts`, Gradle module boundaries |

## 3. Design patterns actually used (and only these)

| Pattern | Where | Problem it solves here |
|---|---|---|
| Repository | `KbRepository` / `KbApiRepository` | Screens shouldn't know URLs or DTO field names |
| Adapter | bridge, repositories, `SemanticTier` impl | Plug technologies into ports without touching the domain |
| Strategy | `LabelExtractor` list in `StructureParser` | Different sources (HTML attrs, hint, id) find labels differently; order is data, not if/else |
| Chain of responsibility (pipeline) | `Resolver`: Tier 1 → Tier 2 | Each tier only sees what earlier tiers didn't resolve |
| Facade | `FillmateAutofill`, `fillmateNative` | The bridge and features see 8 methods, not the whole native module |
| Sealed result type | Kotlin `MatchResult` | The compiler forces every consumer to handle Alias / Semantic / NoMatch |
| Dependency injection (manual) | React context providers, `AutofillGraph` | Tests and future web build swap implementations in one place |
| Contract tests | `packages/contracts/matching/vectors.json` | Two languages, one behavior |

Not used on purpose: Redux, Hilt, a generic `BaseRepository<T>`, event buses. Each would add indirection
before there's a second case that needs it. **An abstraction earns its place by having a second user or a test.**

## 4. Trace one tap through every layer

The user moves alias "present salary" from *Current CTC* to *Expected CTC* (sheet S14):

1. **ui** `MoveAliasSheet` calls `moveAlias.mutate({ aliasId, toQuestionId })`. It knows nothing else.
2. **application** `useMoveAlias()` gets the repository from context, calls the port, then `afterKbWrite`.
3. **domain** `KbRepository.moveAlias(aliasId, toQuestionId)`: just a signature.
4. **data** `KbApiRepository` → `POST /aliases/{id}/move` with `{ to_question_id }` (snake_case lives only here).
5. **backend** route → `AliasService.move` (checks ownership, bumps KB version) → repository → Postgres.
6. **application again** invalidates `kbKeys.all` (screens refetch) and calls `fillmateNative.kb.sync()`.
7. **Kotlin** `FillmateAutofill.syncKb()` fetches the new snapshot into Room. The next Chrome fill uses it.

Questions to check your understanding:
- Why is step 6 in `application/` and not in the sheet component?
- If the backend renamed `to_question_id`, how many files change? (Answer: one.)
- What breaks, for the user, if step 7 fails silently? How would you surface it?

## 5. Module boundaries are a compile-time fact

- **TypeScript**: `@features/kb` resolves to `kb/index.ts`; deep imports fail ESLint.
- **Kotlin**: `:autofill-core` is a plain JVM module. It *cannot* import Android classes: the SDK isn't
  on its classpath. Its tests run on your laptop in milliseconds.
- **Python**: `services` receive repositories and providers as parameters (FastAPI dependencies).

## 6. When to break a rule

Rules exist for change cost. A UI-only feature (`chromeGuide`) has no domain or data layer, because there's
nothing to protect. If a layer would contain only pass-through code, skip it and note why in the feature README.
