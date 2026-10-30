# S31_af_inline_chips: Keyboard inline suggestions (over Chrome)

Drop the Stitch export here: `export.html`, `export.css` (if any), `screenshot.png`.

## RN mapping (fill in after export)
- Route / component: `src/features/autofill (Kotlin Activities)/...`
- Reused components:
- Deviations from Stitch export (and why):

> Not built in RN. `InlinePresentation` (Android 11+) via androidx.autofill `InlineSuggestionUi`; the keyboard (IME) controls much of the styling. Mockup is content-only.
