# S32_ai_answer_loading: AI Answer (loading)

Drop the Stitch export here: `export.html`, `export.css` (if any), `screenshot.png`.

## RN mapping (fill in after export)
- Route / component: `src/features/autofill (Kotlin Activities)/...`
- Reused components:
- Deviations from Stitch export (and why):

> Launched via Dataset authentication `IntentSender`. Decide: native Kotlin Activity (fast cold start, recommended) vs. RN Activity (shared UI, slower start over Chrome). Measure cold-start before committing.
