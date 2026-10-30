# feature: resume

PDF upload, extracted text, versions.

| | |
|---|---|
| Screens | `S18_resume` → `ResumeScreen` |
| Endpoints | POST /resume (multipart), GET /resume, GET /resume/versions |
| May import | core only. Exports ResumeUploader component used by onboarding (S05). |
| Layers | domain/ → data/ → application/ → ui/ (copy the kb feature's pattern) |

Visual reference for each screen: `design/stitch/<screen id>/`. Full mapping: `.claude/screens.md`.
