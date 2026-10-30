# feature: history

Past fill sessions and per-field corrections.

| | |
|---|---|
| Screens | `S20_history_list` → `HistoryScreen`, `S21_history_session` → `SessionDetailScreen` |
| Endpoints | GET /fill-sessions, GET /fill-sessions/{id} |
| May import | kb (row actions reuse kb use cases). |
| Layers | domain/ → data/ → application/ → ui/ (copy the kb feature's pattern) |

Visual reference for each screen: `design/stitch/<screen id>/`. Full mapping: `.claude/screens.md`.
