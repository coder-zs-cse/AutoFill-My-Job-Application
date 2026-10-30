# feature: onboarding

First-run flow: welcome, resume, import review, enable autofill, Chrome setup, done.

| | |
|---|---|
| Screens | `S04_onb_welcome` → `WelcomeScreen`, `S05_onb_resume_upload` → `ResumeUploadStepScreen`, `S07_onb_enable_autofill` → `EnableAutofillScreen`, `S08_onb_chrome_setup` → `ChromeSetupStepScreen`, `S09_onb_done` → `OnboardingDoneScreen` |
| Endpoints | none directly; composes resume, importReview, chromeGuide |
| May import | resume, importReview, chromeGuide (public APIs only). No domain/data layer: it orchestrates other features. |
| Layers | ui/ only |

Visual reference for each screen: `design/stitch/<screen id>/`. Full mapping: `.claude/screens.md`.
