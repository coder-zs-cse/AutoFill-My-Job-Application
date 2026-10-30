# feature: playground

Type a label, see exactly how autofill would answer it, and fix it in place.

| | |
|---|---|
| Screens | `S19_playground` → `PlaygroundScreen` |
| Endpoints | via fillmateNative.resolveForPlayground (Kotlin resolver = same code path as autofill); POST /answer-ai for Compare with AI |
| May import | kb (fix actions reuse useMoveAlias / useCreateQuestion). |
| Layers | domain/ → data/ → application/ → ui/ (copy the kb feature's pattern) |

Visual reference for each screen: `design/stitch/<screen id>/`. Full mapping: `.claude/screens.md`.
