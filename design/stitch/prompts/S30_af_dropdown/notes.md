# S30_af_dropdown: Autofill dropdown suggestions (over Chrome)

Drop the Stitch export here: `export.html`, `export.css` (if any), `screenshot.png`.

## RN mapping (fill in after export)
- Route / component: `src/features/autofill (Kotlin Activities)/...`
- Reused components:
- Deviations from Stitch export (and why):

> Not built in RN. Built as Android `RemoteViews` inside the Kotlin AutofillService. RemoteViews support a limited view set; no custom shadows. Use this mockup for content and hierarchy only.
