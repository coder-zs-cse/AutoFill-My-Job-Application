# feature: gaps

Inbox of fields saved for later or that the LLM could not answer.

| | |
|---|---|
| Screens | `S23_gaps_inbox` → `GapsScreen` |
| Endpoints | GET /gaps, POST /gaps/{id}/resolve, DELETE /gaps/{id} |
| May import | kb, stories (resolutions create questions / preferences). |
| Layers | domain/ → data/ → application/ → ui/ (copy the kb feature's pattern) |

Visual reference for each screen: `design/stitch/<screen id>/`. Full mapping: `.claude/screens.md`.
