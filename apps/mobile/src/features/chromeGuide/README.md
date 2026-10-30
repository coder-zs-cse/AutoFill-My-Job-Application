# feature: chromeGuide

How to make Chrome use Fillmate as its autofill service, and verify it.

| | |
|---|---|
| Screens | `S29_chrome_guide` → `ChromeGuideScreen` |
| Endpoints | none (static content + fillmateNative.autofill.isEnabled) |
| May import | core only. UI-only feature: no domain/data/application layers (layers are earned, not mandatory). Exports ChromeSteps for onboarding S08. |
| Layers | ui/ only |

Visual reference for each screen: `design/stitch/<screen id>/`. Full mapping: `.claude/screens.md`.
