# feature: kb (reference implementation)

The answer bank: questions, answers, aliases, alias insights. **This is the pattern every other data feature copies.**

| | |
|---|---|
| Screens | `S10_kb_home` → `KnowledgeBaseScreen`, `S11_question_detail` → `QuestionDetailScreen`, `S12_add_question` → `AddQuestionScreen`; sheets S10c, S13, S14 live in `ui/components/` |
| Endpoints | `GET/POST /questions`, `GET/PATCH/DELETE /questions/{id}`, `POST /questions/{id}/aliases`, `DELETE /aliases/{id}`, `POST /aliases/{id}/move` |
| May import | `@core`, `@design-system` only. kb is a leaf: nothing in kb imports another feature. |

```
domain/       Question.ts (types) · KbRepository.ts (port) · aliasInsight.ts (pure rule + test)
data/         dto.ts (wire) · mappers.ts (wire → domain) · KbApiRepository.ts (adapter)
application/  KbRepositoryContext.tsx (DI) · kbQueries.ts (use-case hooks, query keys)
ui/           screens/ (route-level) · components/ (presentational)
index.ts      the public API; everything else is private
```

Trace of one action, top to bottom: `MoveAliasSheet` (ui) → `useMoveAlias()` (application) →
`KbRepository.moveAlias` (domain port) → `KbApiRepository` → `POST /aliases/{id}/move` (data) →
`afterKbWrite`: invalidate `kbKeys.all` + `fillmateNative.kb.sync()` so Chrome sees the change.
