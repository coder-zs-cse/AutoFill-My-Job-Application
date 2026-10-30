# feature: importReview

Classify resume-derived Q&As as New / Duplicate / Conflict and let the user choose.

| | |
|---|---|
| Screens | `S06_import_review` → `ImportReviewScreen` |
| Endpoints | GET /resume/{id}/candidates, POST /resume/{id}/import |
| May import | kb (to invalidate kbKeys after import). |
| Layers | domain/ → data/ → application/ → ui/ (copy the kb feature's pattern) |

Visual reference for each screen: `design/stitch/<screen id>/`. Full mapping: `.claude/screens.md`.
