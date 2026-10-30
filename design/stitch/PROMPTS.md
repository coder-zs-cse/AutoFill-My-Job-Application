# Stitch prompts — Fillmate (placeholder name)

Every prompt below already starts with the design-system preamble. Copy one block, paste into Stitch (Mobile), generate, export into `design/stitch/<SCREEN_ID>/`.

## Generation order (Stitch has a daily credit limit, so batch across days)

1. **Day 1, anchor the look:** `S00_style_sheet` → `S10_kb_home` → `S11_question_detail` → `S32b_ai_answer_answered`. Stop and judge. If the clay is too heavy or too flat, edit the preamble once and regenerate these four before going further.
2. **Day 1–2, core loop:** Knowledge Base group, then Autofill surfaces, then Gaps and History.
3. **Day 2–3, the rest:** Auth, Onboarding, Playground, Account.
4. **Dark checks:** only `S10_kb_home` and `S32b_ai_answer_answered` have `prompt.dark.md`. Clay in dark mode is where the style usually breaks; validate it there before committing to dark everywhere.

Keep all screens in **one Stitch project** so it also sees prior screens, but still paste the full prompt every time: the preamble is the contract, the project history is just a bonus.

## Screen index (50 prompts)

| Screen ID | Area | Screen | State | Prompt chars |
|---|---|---|---|---|
| `S00_style_sheet` | Foundation | Component style sheet | reference | 3,914 |
| `S01_splash` | Auth | Splash | default | 3,285 |
| `S02_sign_up` | Auth | Sign up | default | 3,476 |
| `S02b_sign_up_error` | Auth | Sign up | validation error | 3,330 |
| `S03_log_in` | Auth | Log in | default | 3,275 |
| `S04_onb_welcome` | Onboarding | Welcome | default | 3,546 |
| `S05_onb_resume_upload` | Onboarding | Resume upload | idle | 3,532 |
| `S05b_onb_resume_parsing` | Onboarding | Resume upload | parsing | 3,549 |
| `S06_import_review` | Onboarding | Import review | populated | 3,925 |
| `S06b_conflict_sheet` | Onboarding | Conflict resolve sheet | open | 3,346 |
| `S07_onb_enable_autofill` | Onboarding | Enable autofill service | not enabled | 3,567 |
| `S07b_onb_autofill_enabled` | Onboarding | Enable autofill service | enabled | 3,256 |
| `S08_onb_chrome_setup` | Onboarding | Chrome setup | default | 3,632 |
| `S09_onb_done` | Onboarding | Done | default | 3,341 |
| `S10_kb_home` | Knowledge Base | Knowledge Base home | populated | 4,151 |
| `S10b_kb_empty` | Knowledge Base | Knowledge Base home | empty | 3,309 |
| `S10c_kb_filter_sheet` | Knowledge Base | Filter sheet | open | 3,288 |
| `S11_question_detail` | Knowledge Base | Question detail / edit | populated | 3,775 |
| `S12_add_question` | Knowledge Base | Add question | filling in | 3,545 |
| `S13_alias_insights_sheet` | Knowledge Base | Alias insights sheet | open | 3,471 |
| `S14_move_alias_sheet` | Knowledge Base | Move alias sheet | open | 3,299 |
| `S15_stories_prefs` | Knowledge Base | Stories & Preferences | populated | 3,706 |
| `S16_story_editor` | Knowledge Base | Story editor | editing | 3,564 |
| `S17_preference_editor` | Knowledge Base | Preference editor | editing | 3,383 |
| `S18_resume` | Knowledge Base | Resume | populated | 3,537 |
| `S19_playground` | Playground | Playground | empty | 3,452 |
| `S19b_playground_trace` | Playground | Playground | matched, with explanation | 3,845 |
| `S19c_playground_no_match` | Playground | Playground | no match | 3,751 |
| `S19d_playground_fix_sheet` | Playground | Playground fix sheet | open | 3,628 |
| `S19e_playground_tech_details` | Playground | Playground | technical details expanded | 3,651 |
| `S20_history_list` | History | History list | populated | 3,489 |
| `S20b_history_empty` | History | History list | empty | 3,194 |
| `S21_history_session` | History | History session detail | populated | 3,638 |
| `S22_history_row_sheet` | History | History row actions sheet | open | 3,405 |
| `S23_gaps_inbox` | Gaps | Gaps inbox | populated | 3,618 |
| `S23b_gaps_empty` | Gaps | Gaps inbox | empty | 3,138 |
| `S24_gap_resolve_sheet` | Gaps | Gap resolve sheet | answer selected | 3,402 |
| `S25_drawer` | Account | Side drawer | open | 3,466 |
| `S26_settings` | Account | Settings | default | 3,505 |
| `S26b_delete_account_dialog` | Account | Delete account dialog | open | 3,276 |
| `S27_profile_usage` | Account | Profile & usage | populated | 3,401 |
| `S28_upgrade` | Account | Upgrade | default | 3,446 |
| `S29_chrome_guide` | Account | Chrome setup guide | default | 3,650 |
| `S30_af_dropdown` | Autofill surfaces | Autofill dropdown suggestions | over Chrome | 3,714 |
| `S31_af_inline_chips` | Autofill surfaces | Keyboard inline suggestions | over Chrome | 3,379 |
| `S32_ai_answer_loading` | Autofill surfaces | AI Answer | loading | 3,442 |
| `S32b_ai_answer_answered` | Autofill surfaces | AI Answer | answered | 3,756 |
| `S32c_ai_answer_insufficient` | Autofill surfaces | AI Answer | insufficient info | 3,584 |
| `S32d_ai_answer_decision` | Autofill surfaces | AI Answer | needs decision | 3,572 |
| `S33_save_for_later` | Autofill surfaces | Save for later confirmation | confirmed | 3,261 |

## Design-system preamble (also lives in `.claude/design-system.md`)

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.
```

## Dark-mode override (append after the preamble)

```text
DARK MODE OVERRIDE (replaces the light values above): canvas #1B1828; clay surfaces #262238 to #2B2740; outer shadow rgba(0,0,0,0.45); outer highlight rgba(255,255,255,0.05); inner highlight rgba(255,255,255,0.06); text primary #F1EEFA, secondary #B3ACCB; primary #9D90FF with #1B1828 button text; tags keep hue but use 25% opacity fills with light text.
```

## Prompts

### `S00_style_sheet` — Component style sheet · reference

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: A single scrolling "component sheet" that shows the design system, used as the visual anchor for every later screen. No real app content.
LAYOUT top to bottom:
1. Title "Fillmate components" in Display.
2. Buttons row: primary clay pill "Add question", secondary clay pill "Cancel", text button "Skip", a pressed primary button (shadow shrunk, looks pushed in).
3. Inputs: an empty pressed-in field "Username", a filled field "aarav.m", an error field with coral helper text "Username already taken".
4. Method tags row: Alias, Semantic, AI, Skipped, Needs info, Error.
5. Alias chips row: "current ctc", "present salary", "ctc (current)", "+ Add alias".
6. One question card: label "Current CTC", answer "18 LPA", 3 alias chips, small "Compensation" category label.
7. One list row with a 40px mint icon circle, title "docs.google.com", caption "Today, 10:42 AM".
8. Toggles on and off, a checkbox, a segmented control "Questions | Stories & Prefs".
9. A bottom navigation bar with Knowledge active and a Gaps badge "3".
```

### `S01_splash` — Splash · default

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Splash shown while the session is restored.
LAYOUT: full canvas, vertically centered: 1) a 120px clay app icon: rounded square in lavender holding a small white clay form card with two lines and a peach sparkle; 2) wordmark "Fillmate" in Display; 3) tagline "Your answers, ready in every form." in Body secondary. Bottom: three small bouncing clay dots in lavender, mint, peach. Nothing else.
```

### `S02_sign_up` — Sign up · default

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Sign up (first launch). No app bar, no bottom nav.
LAYOUT top to bottom: 1) small clay illustration of a key resting on a form card (about 140px tall); 2) "Create your account" in Display; 3) Body secondary "One account keeps your answers in sync with the web version later."; 4) field "Username" placeholder "e.g. aarav.m"; 5) field "Password" with eye icon, helper caption "At least 8 characters"; 6) field "Confirm password"; 7) primary button full width "Create account"; 8) centered caption "Already have an account?" with text button "Log in".
Fields are empty, button enabled.
```

### `S02b_sign_up_error` — Sign up · validation error

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Sign up, validation error state. Same layout as the sign-up screen: illustration, "Create your account", subtitle, Username / Password / Confirm password fields, "Create account" button, "Log in" link.
DIFFERENCES: Username field filled "aarav" with coral outline glow and helper "That username is taken. Try aarav.mehta"; Confirm password field shows coral helper "Passwords don't match". Primary button shown slightly faded (disabled).
```

### `S03_log_in` — Log in · default

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Log in. No app bar, no bottom nav.
LAYOUT: 1) small clay illustration of a waving hand above a form card; 2) "Welcome back" in Display; 3) Body secondary "Log in once. You'll stay signed in on this phone."; 4) field "Username" filled "aarav.m"; 5) field "Password" filled with dots and eye icon; 6) primary full-width "Log in"; 7) caption "New here?" + text button "Create account".
```

### `S04_onb_welcome` — Welcome · default

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Onboarding step 1, Welcome.
LAYOUT: 1) Top: a row of 5 small clay dots showing onboarding progress, step 1 of 5 highlighted lavender and stretched into a pill; a text button "Skip" at top-right. 2) large clay illustration: a phone showing a job form whose fields are being filled by small floating clay answer chips; 3) "Stop typing the same answers" in Display; 4) three value rows, each with a 40px pastel icon circle and Body text: "Build your answer bank once" (book icon, lavender), "Tap a field in Chrome to fill it" (touch icon, mint), "Let AI draft the long answers" (sparkle icon, peach); 5) primary full-width "Get started" pinned near bottom.
```

### `S05_onb_resume_upload` — Resume upload · idle

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Onboarding step 2, upload resume.
LAYOUT: 1) Top: a row of 5 small clay dots showing onboarding progress, step 2 of 5 highlighted lavender and stretched into a pill; a text button "Skip" at top-right. 2) "Start with your resume" in Display; 3) Body secondary "We'll read it and suggest answers. You review everything before it's saved."; 4) a large white clay drop card (240px tall) with a dashed lavender inner outline, a clay PDF document illustration, Title "Upload resume (PDF)", caption "Max 5 MB"; 5) a small mint info card: lock icon + "Only you can see your resume."; 6) bottom: primary "Choose PDF" and text button "Skip for now".
```

### `S05b_onb_resume_parsing` — Resume upload · parsing

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Onboarding step 2, resume being processed.
LAYOUT: 1) Top: a row of 5 small clay dots showing onboarding progress, step 2 of 5 highlighted lavender and stretched into a pill; a text button "Skip" at top-right. 2) "Reading your resume" in Display; 3) file card: red-pink PDF icon circle, "Aarav_Mehta_Resume.pdf", caption "182 KB", small x; 4) a clay progress bar 64% filled with a lavender-to-peach gradient, caption "Extracting text... 64%"; 5) checklist card with three rows: "Text extracted" (mint check), "Finding answers" (small spinner), "Comparing with your answer bank" (grey empty circle); 6) bottom primary button faded/disabled "Review answers".
```

### `S06_import_review` — Import review · populated

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Import Review, choosing which resume answers to add (used in onboarding and after resume re-upload). App bar: back arrow, title "Review answers", caption "18 found".
LAYOUT: 1) segmented clay control: "All 18" (active), "New 12", "Duplicate 4", "Conflict 2"; 2) list of selectable cards, each with a round clay checkbox on the left:
 - checked card: label "Email address", answer "aarav.mehta@gmail.com", mint tag "New";
 - checked card: label "Total experience", answer "4.5 years", mint tag "New";
 - unchecked, slightly faded card: label "Phone number", answer "+91 98xxx 12345", grey tag "Duplicate, same answer", text button "Merge aliases";
 - butter-tinted card: label "Current company", two mini rows "Resume: Zeta Systems" and "Your answer: Finch Labs", butter tag "Conflict", small secondary button "Choose";
 - checked card: label "Highest degree", answer "B.Tech, Computer Science, NIT Goa", mint tag "New".
3) sticky bottom clay bar: caption "12 selected" on the left, primary pill "Add to Knowledge Base" on the right.
```

### `S06b_conflict_sheet` — Conflict resolve sheet · open

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Bottom sheet over Import Review (dimmed behind) for resolving one conflict.
SHEET: grab handle; Title "Current company"; caption "Your resume and your answer bank disagree."; two side-by-side selectable clay cards: left "From resume" with "Zeta Systems", right "In your answers" with "Finch Labs" (right card selected: lavender ring and check badge); below, text button "Write a different answer"; bottom row: secondary "Cancel", primary "Use selected".
```

### `S07_onb_enable_autofill` — Enable autofill service · not enabled

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Onboarding step 3, turn on the Android autofill service.
LAYOUT: 1) Top: a row of 5 small clay dots showing onboarding progress, step 3 of 5 highlighted lavender and stretched into a pill; a text button "Skip" at top-right. 2) clay illustration: a phone with a text field and a small floating suggestion card under it; 3) "Turn on autofill" in Display; 4) numbered step card with three rows, each a lavender number circle + Body: "1. Tap Open settings below", "2. Choose Fillmate as your autofill service", "3. Come back here"; 5) status card butter-tinted: hourglass icon + "Not enabled yet"; 6) primary full-width "Open Android settings"; text button "I'll do this later".
```

### `S07b_onb_autofill_enabled` — Enable autofill service · enabled

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Onboarding step 3 after returning from Android settings, success.
LAYOUT: same as the turn-on-autofill screen (progress dots step 3, illustration, title "Turn on autofill", numbered steps faded) but the status card is mint: big check icon + "Fillmate is your autofill service"; primary full-width "Continue". A few small clay confetti shapes near the status card.
```

### `S08_onb_chrome_setup` — Chrome setup · default

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Onboarding step 4, let Chrome use Fillmate.
LAYOUT: 1) Top: a row of 5 small clay dots showing onboarding progress, step 4 of 5 highlighted lavender and stretched into a pill; a text button "Skip" at top-right. 2) "One switch in Chrome" in Display; 3) Body secondary "Chrome fills forms itself unless you tell it to use your autofill service."; 4) vertical stepper card with 4 steps, each a lavender number circle, Body text and a tiny grey mock of the Chrome screen: "Open Chrome, tap the three-dot menu, then Settings", "Tap Autofill services", "Select Autofill using another service", "Restart Chrome"; 5) small butter note card: "Can't find it? Update Chrome from the Play Store."; 6) primary "Open Chrome", secondary "I've done this".
```

### `S09_onb_done` — Done · default

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Onboarding step 5, done.
LAYOUT: 1) progress dots all filled; 2) large clay celebration illustration (a form card with a check badge, floating confetti blobs); 3) "You're all set" in Display; 4) Body secondary "Open any job form in Chrome and tap a text field."; 5) a lavender-tinted tip card: sparkle icon + "Long questions? Tap AutoFill with AI on any field."; 6) primary full-width "Try a sample Google Form"; text button "Go to Knowledge Base".
```

### `S10_kb_home` — Knowledge Base home · populated

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Knowledge Base, the home tab. App bar: hamburger left, title "Knowledge Base", avatar circle "AM" right. Bottom nav with Knowledge active, Gaps badge "3".
LAYOUT: 1) segmented control "Questions" (active) | "Stories & Prefs"; 2) pressed-in search field "Search questions or aliases" with filter icon button on the right; 3) horizontally scrolling category chips: "All" (active, lavender), "Personal", "Contact", "Work", "Compensation", "Education", "Links"; 4) row of two small stat tiles: "42 questions", "126 aliases"; 5) list of question cards (label Title-ish 17px Bold, answer preview Body secondary single line, up to 3 alias chips + "+2", tiny source icon at top-right):
 - "Email address" / "aarav.mehta@gmail.com" / chips "email", "e-mail id", "your email";
 - "Current CTC" / "18 LPA (fixed 15 + variable 3)" / chips "current ctc", "present salary", "+3";
 - "Expected CTC" / "26 LPA" / chips "expected ctc", "salary expectation";
 - "Notice period" / "30 days" / chips "notice period", "joining time";
 - "Hardest problem you've solved" with a small "Long" label / "Cut checkout latency from 2.1s to 400ms by..." / chips "hardest problem", "toughest challenge".
6) floating lavender clay FAB bottom-right above the nav: plus icon + "Add question".
```

### `S10b_kb_empty` — Knowledge Base home · empty

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Knowledge Base home, empty state. App bar: hamburger, "Knowledge Base". Segmented control "Questions | Stories & Prefs". Bottom nav, Knowledge active.
LAYOUT: centered empty state: clay illustration of an empty open box with a floating question-mark blob; Title "Your answer bank is empty"; Body secondary "Import from your resume or add your first question."; primary "Import from resume"; secondary "Add manually".
```

### `S10c_kb_filter_sheet` — Filter sheet · open

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Bottom sheet over the Knowledge Base list (dimmed).
SHEET: Title "Filter"; section "Category" with multi-select chips: Personal, Contact, Work (selected), Compensation (selected), Education, Links; section "Source": chips "Added manually", "From resume" (selected), "From Gaps"; section "Answer type": segmented "Any | Short | Long"; bottom row: text button "Reset", primary "Show 14 questions".
```

### `S11_question_detail` — Question detail / edit · populated

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Question detail and edit. App bar: back arrow, title "Question", delete icon right.
LAYOUT: 1) clay card: Label "Question", pressed-in field "Current CTC"; row with category dropdown chip "Compensation" and segmented "Short | Long" (Short active); 2) clay card: Label "Answer", pressed-in field "18 LPA (fixed 15 + variable 3)"; 3) clay card: Title "Aliases" with caption "Forms that use these exact phrases get this answer."; chips "current ctc", "present salary", "current salary", "ctc (current)", "existing ctc", plus a dashed chip "+ Add alias"; caption "Tap an alias to see how it performs"; 4) small sky-tinted info card with shield icon: "Labels with 'expected' or 'previous' will never match these aliases."; 5) clay insights card: four mini stats in a row: "Suggested 12", "Chosen 9", "AI instead 4", "Last used 2d ago"; 6) primary full-width "Save changes" pinned bottom.
```

### `S12_add_question` — Add question · filling in

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Add question. App bar: close icon, title "New question".
LAYOUT: 1) field "Question" filled "Years of experience"; 2) row: dropdown "Category: Work", segmented "Short | Long" (Short active); 3) field "Answer" filled "4.5 years"; 4) clay card "Aliases": a pressed-in input "Add another way forms ask this" with chips already added "total experience", "experience (years)", "work experience"; caption "Exact phrases only. 'Current' and 'expected' are treated as different questions."; 5) mint preview card: Label "Will fill fields like", list "Total experience", "Years of experience", "Work experience (in years)"; 6) primary full-width "Save question".
```

### `S13_alias_insights_sheet` — Alias insights sheet · open

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Bottom sheet over Question detail (dimmed) showing one alias's performance.
SHEET: grab handle; caption "Alias of Current CTC"; Title chip-styled "present salary"; 2x2 grid of clay stat tiles: "Suggested 12x", "Chosen 9x", "AI used instead 4x", "Last used Oct 27"; a clay progress bar "Chosen 75% of the time" in mint; Label "Recent uses" with three rows: "jobs.lever.co, Oct 27" + mint Chosen tag; "boards.greenhouse.io, Oct 24" + AI tag; "docs.google.com, Oct 20" + mint Chosen tag; bottom actions: secondary "Move to another question", destructive text button "Remove alias".
```

### `S14_move_alias_sheet` — Move alias sheet · open

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN (addition): Bottom sheet to move one alias to another question.
SHEET: Title "Move 'present salary' to..."; search field "Search questions"; list of radio rows: "Current CTC" (caption "current"), "Expected CTC" (selected, lavender ring), "Fixed salary component", "Variable pay"; caption "This only changes where this alias points. Nothing else is edited."; bottom: secondary "Cancel", primary "Move alias".
```

### `S15_stories_prefs` — Stories & Preferences · populated

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Knowledge Base tab with the "Stories & Prefs" segment active. App bar: hamburger, "Knowledge Base". Bottom nav, Knowledge active.
LAYOUT: 1) segmented control "Questions | Stories & Prefs" (second active); 2) lavender-tinted info card: sparkle icon + "Used only as context when AI drafts an answer. Never filled directly."; 3) section Title "Stories" with caption "4 of 6 written"; 2-column grid of clay cards: "Hardest problem" (mint check, "320 words"), "Best project" (mint check), "Leadership" (mint check), "Why I'm leaving" (mint check), "Conflict" (dashed card, plus icon, "Add story"), "A failure" (dashed, "Add story"); 4) section Title "Preferences": list cards with icon circles: "Relocation: Bangalore, Pune, Remote", "Work mode: Hybrid or remote", "Notice period: 30 days, can do 15"; 5) FAB "+ New".
```

### `S16_story_editor` — Story editor · editing

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Story editor. App bar: back, title "Hardest problem", text button "Save".
LAYOUT: 1) caption "Answer in STAR format. AI will reshape it for each form."; 2) four stacked clay cards, each with a small pastel letter badge and a pressed-in multiline field:
 S "Situation": "Checkout API at Finch Labs averaged 2.1s at peak; drop-offs rising."
 T "Task": "Own the latency fix before the Diwali sale, 3 weeks out."
 A "Action": "Profiled with traces, moved price rules to Redis, batched DB calls, added a circuit breaker."
 R "Result": "p95 fell to 400ms; checkout conversion +6%."
3) caption "142 words"; 4) peach tip card: lightbulb icon + "Numbers make AI answers stronger."
```

### `S17_preference_editor` — Preference editor · editing

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Preference editor for relocation. App bar: back, title "Relocation", text button "Save".
LAYOUT: 1) clay card "Cities I'd move to": chips "Bangalore", "Pune", "Hyderabad" each with x, dashed chip "+ Add city"; 2) clay card with toggles: "Open to remote" (on), "Open to relocating abroad" (off); 3) clay card "Notes for AI": pressed-in multiline field "Prefer Bangalore. Hyderabad only for senior roles."; 4) caption "AI uses this to answer questions like 'Willing to relocate to Chennai?'".
```

### `S18_resume` — Resume · populated

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Resume (reached from the side drawer). App bar: back, title "Resume".
LAYOUT: 1) clay file card: PDF icon circle, "Aarav_Mehta_Resume_v3.pdf", caption "Version 3, uploaded Oct 21"; row of buttons: secondary "Re-upload", primary "Review suggestions"; 2) Title "Extracted text" with caption "This is what AI reads."; a tall clay card with scrollable plain text in Body: "AARAV MEHTA, Backend Engineer, Bangalore ... EXPERIENCE Finch Labs, SDE-2, 2023 to present ... Zeta Systems, SDE-1 ..." with a soft fade at the bottom and text button "Show all"; 3) Title "Earlier versions": two rows "Version 2, Aug 3" and "Version 1, May 12" with a chevron.
```

### `S19_playground` — Playground · empty

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Playground tab, before any query. App bar: hamburger, "Playground". Bottom nav, Playground active.
LAYOUT: 1) Body secondary "Type any form question and see exactly how autofill would answer it."; 2) large pressed-in input "Type a form question..." with a lavender clay send button; 3) Label "Try one" + chips "Expected CTC", "Your email id", "Why do you want to join us?", "Willing to relocate?"; 4) centered clay illustration of a magnifying glass over a flask; caption "Uses the exact same matcher as real autofill, so what you see here is what forms get."
```

### `S19b_playground_trace` — Playground · matched, with explanation

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Playground after a query that found an answer. Written for a job seeker, not an engineer: plain words, no raw scores. App bar: hamburger, "Playground". Bottom nav, Playground active.
LAYOUT: 1) input filled "Expected salary (in LPA)" with send button; 2) big result clay card: Label "Autofill would fill", large text "26 LPA", sky tag "Semantic"; Body "Your question looks like Expected CTC."; a confidence row: three filled lavender dots + "Very likely match"; 3) clay card Title "Why this answer", three short rows with small icon circles: (a) mint check "No saved phrase matched exactly"; (b) sky check "Closest question: Expected CTC"; (c) coral shield "Not Current CTC: your question says 'expected'"; 4) feedback row: Label "Is this right?" with two clay pills "Yes, correct" (mint) and "No, fix it" (coral text); 5) secondary button with sparkle "Compare with AI"; 6) collapsed row at the bottom "Show technical details" with a chevron (closed).
```

### `S19c_playground_no_match` — Playground · no match

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Playground after a query with no saved answer. App bar: hamburger, "Playground". Bottom nav, Playground active.
LAYOUT: 1) input filled "Total years in backend development" with send button; 2) butter-tinted result card: question-mark icon circle, Title "No saved answer", Body "In a real form you'd see AutoFill with AI and Save for later."; 3) clay card Title "Closest questions you have", two tappable rows with chevrons: "Total experience" caption "Similar, but not close enough to fill automatically"; "Years with Python" caption "Different question"; 4) Title "Teach it", three clay action cards stacked, each with icon circle and one-line caption: "Add as a phrase for Total experience" (link icon, mint), "Create a new question" (add icon, lavender), "Let AI answer this one" (sparkle, peach); 5) caption "Changes apply to autofill right after sync."
```

### `S19d_playground_fix_sheet` — Playground fix sheet · open

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Bottom sheet over Playground (dimmed) after tapping "No, fix it" on a wrong match.
SHEET: grab handle; Title "Fix this answer"; caption "Your question: 'Expected salary (in LPA)'. Currently fills 26 LPA from Expected CTC."; four selectable clay option cards (radio): 1. "It should use a different question" (selected, expanded: search field "Search questions" and radio list "Current CTC", "Fixed salary component" (selected), "Variable pay"); 2. "Create a new question for this"; 3. "Fix the answer of Expected CTC"; 4. "Never fill this automatically"; caption "We'll save 'expected salary (in lpa)' as a phrase of the question you pick."; bottom: secondary "Cancel", primary "Save fix"; under it caption "Then run it again to check."
```

### `S19e_playground_tech_details` — Playground · technical details expanded

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Playground with the "Show technical details" section expanded under a matched result (for power users). App bar: hamburger, "Playground". Bottom nav, Playground active.
LAYOUT: 1) input filled "Expected salary (in LPA)"; 2) compact result card "26 LPA" with sky tag "Semantic"; 3) expanded clay card "Technical details" with a vertical timeline connected by a dotted lavender line: Step "Cleaned words": chips "expect", "salary", "lpa", caption "Qualifier: expected"; Step "Exact phrase": grey tag "No match"; Step "Similar meaning": three rows with thin score bars "Expected CTC 0.91" (highlighted), "Current CTC 0.78" with coral tag "Blocked", "Notice period 0.32"; caption "Lead over next best 0.13 (needs 0.08)"; 4) collapse row "Hide technical details".
```

### `S20_history_list` — History list · populated

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: History tab. App bar: hamburger, "History", filter icon. Bottom nav, History active.
LAYOUT: 1) chips "All apps" (active), "This week"; 2) section label "Today"; session cards, each with a pastel icon circle (globe), title domain, caption page title and time, and a row of tiny method counters:
 - "jobs.lever.co" / "Razorpay, Backend Engineer, 10:42 AM" / mint "6", sky "1", AI "1", grey "1";
 - "docs.google.com" / "Campus hiring form, 9:15 AM" / mint "8";
3) section label "Yesterday": "boards.greenhouse.io" / "Postman, SDE-2, 7:30 PM" / mint "5", AI "2", butter "1".
Each card has a chevron.
```

### `S20b_history_empty` — History list · empty

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: History tab, empty. App bar: hamburger, "History". Bottom nav, History active.
Centered empty state: clay illustration of a clock with a small form card; Title "No fills yet"; Body secondary "Fields you fill with Fillmate show up here so you can fix them."; secondary button "Open Chrome setup guide".
```

### `S21_history_session` — History session detail · populated

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: One fill session. App bar: back, title "Session".
LAYOUT: 1) header clay card: globe icon circle, "jobs.lever.co", caption "Razorpay, Backend Engineer", caption "Oct 29, 10:42 AM, 9 fields"; 2) list of field rows (white clay rows, each with label in Label style, filled value in Body, method tag, and a three-dot icon):
 - "Full name" / "Aarav Mehta" / mint "Alias: full name";
 - "Email" / "aarav.mehta@gmail.com" / mint "Alias: email";
 - "Expected CTC (LPA)" / "26" / sky "Semantic: Expected CTC";
 - "Why Razorpay?" / two-line preview "I've built payment flows at Finch Labs and want to work on..." / AI tag;
 - "Portfolio website" / "Not filled" in secondary italic / grey "Skipped";
 - "Current CTC" / "18 LPA" / mint "Alias: current ctc".
```

### `S22_history_row_sheet` — History row actions sheet · open

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN (addition): Bottom sheet over the session detail for one filled field.
SHEET: caption "Filled on jobs.lever.co"; Title "Current CTC (in INR)"; row "Filled: 18 LPA" with mint tag "Alias: current ctc"; list of action rows, each with a pastel icon circle and chevron: "Unlink this alias" (link-off), "Move alias to another question" (swap), "Create a new question from this label" (add), "Save AI answer as a question" (sparkle, shown faded/disabled with caption "Only for AI answers"), "Add missing context" (note).
```

### `S23_gaps_inbox` — Gaps inbox · populated

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Gaps tab. App bar: hamburger, "Gaps". Bottom nav, Gaps active with badge "3".
LAYOUT: 1) Body secondary "3 fields need your input"; 2) chips "All" (active), "Saved for later", "AI needs info", "Your decision"; 3) gap cards (white clay, butter left accent strip):
 - "Visa sponsorship required?" / caption "boards.greenhouse.io, Stripe, Oct 28" / butter tag "Needs your decision" / caption "Missing: your stance on sponsorship" / primary small pill "Resolve";
 - "Years with Kubernetes" / caption "jobs.lever.co, Razorpay, Oct 27" / butter tag "AI needs info" / caption "Missing: no Kubernetes experience recorded" / "Resolve";
 - "GitHub username" / caption "docs.google.com, Oct 26" / grey tag "Saved for later" / "Resolve".
```

### `S23b_gaps_empty` — Gaps inbox · empty

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Gaps tab, empty. App bar: hamburger, "Gaps". Bottom nav, Gaps active, no badge.
Centered empty state: clay illustration of an empty inbox tray with a mint check blob; Title "No gaps"; Body secondary "Every field had an answer. Nice."; no button.
```

### `S24_gap_resolve_sheet` — Gap resolve sheet · answer selected

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Bottom sheet over Gaps (dimmed) resolving one gap.
SHEET: Title "Years with Kubernetes"; caption "From jobs.lever.co, Razorpay"; butter note "AI needs info: no Kubernetes experience recorded"; four selectable clay option cards (radio):
 1. "Answer and save as a new question" (selected, expanded): field "Answer" filled "1.5 years (EKS, Helm)"; caption "The label becomes an alias."
 2. "Add as context or preference"
 3. "Add as alias to an existing question"
 4. "Dismiss"
Bottom: primary full-width "Save".
```

### `S25_drawer` — Side drawer · open

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN (addition): Navigation drawer open over the Knowledge Base (dimmed at right).
DRAWER: white clay panel, right corners radius 32px. Header: 56px clay avatar "AM", "aarav.m", lavender tag "Free plan". Section "My data": "Resume" (description icon), "Stories & Preferences" (auto_stories). Section "Account": "Profile & usage" (person), "Upgrade" (workspace_premium) with AI-gradient pill "Premium", "Settings" (settings). Section "Help": "Chrome setup guide" (public), "Help & feedback" (help). Footer: text button "Log out", caption "v0.1.0". Active row = lavender clay blob.
```

### `S26_settings` — Settings · default

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Settings. App bar: back, "Settings".
LAYOUT, grouped clay cards with section labels:
1) "Autofill": row "Autofill service" with mint tag "Enabled"; toggle row "Show match tags on suggestions" (on), caption "e.g. Alias: current ctc"; toggle row "Show Save for later suggestion" (on).
2) "Sync": row "Answer bank version 214", caption "Synced 2 minutes ago", secondary small pill "Sync now".
3) "Appearance": segmented "Light | Dark | System" (System active).
4) "Data": row "Export my data", caption "JSON file of questions, aliases, stories".
5) "Account": row "Log out"; row "Delete account" in destructive red.
```

### `S26b_delete_account_dialog` — Delete account dialog · open

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Confirmation dialog over Settings (dimmed).
DIALOG: centered white clay card, radius 28px: coral icon circle with warning; Title "Delete your account?"; Body "This permanently removes your questions, stories, resume and history from all devices."; pressed-in field "Type DELETE to confirm"; buttons: secondary "Cancel", destructive red clay pill "Delete forever" (faded until typed).
```

### `S27_profile_usage` — Profile & usage · populated

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Profile and usage. App bar: back, "Profile".
LAYOUT: 1) centered 80px clay avatar "AM", "aarav.m", caption "Member since Oct 2026"; 2) plan clay card with lavender tint: "Free plan", caption "Unlimited during early access", primary small pill "Upgrade"; 3) Title "This month"; three clay stat tiles: "Autofills 64", "AI answers 11", "Gaps resolved 7"; 4) clay card with a soft rounded bar chart "Fills per week" over 4 weeks (bars 9, 14, 18, 23, lavender to peach); 5) row "Manage subscription" with chevron.
```

### `S28_upgrade` — Upgrade · default

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Upgrade. App bar: close, "Upgrade".
LAYOUT: 1) clay illustration of a crown resting on a form card; 2) "Fillmate Premium" in Display; 3) mint note card: "Both plans are unlimited during early access."; 4) two stacked plan cards: "Free" (current, grey "Current plan" tag) listing "Autofill in Chrome", "AI answers", "History & Gaps"; "Premium" card with AI-gradient border glow and "Coming soon" tag listing "Everything in Free", "Priority AI", "Web dashboard", "Chrome extension"; 5) primary full-width "Notify me" and caption "No payment is taken yet."
```

### `S29_chrome_guide` — Chrome setup guide · default

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Chrome setup guide (from drawer or onboarding). App bar: back, "Chrome setup".
LAYOUT: 1) status card mint: check icon + "Fillmate is your Android autofill service"; status card butter: "Chrome: not verified yet"; 2) Title "Set Chrome to use Fillmate"; numbered stepper (4 steps) with grey mini-mock screenshots: "Chrome, three-dot menu, Settings", "Autofill services", "Autofill using another service", "Restart Chrome"; 3) Title "Check it works"; clay card: "Open the sample form and tap the Email field. You should see your email as a suggestion." + primary "Open sample form"; 4) Title "Not seeing suggestions?"; three collapsed accordion clay rows: "Chrome option missing", "Suggestions show Google's autofill instead", "Nothing appears on some sites".
```

### `S30_af_dropdown` — Autofill dropdown suggestions · over Chrome

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Mockup of Chrome on Android showing a job form with Fillmate's autofill dropdown. IMPORTANT: the dropdown is a native Android autofill popup with limited styling, so draw the dropdown rows FLAT (white rows, 12px radius, thin dividers, no clay shadows). Only the screen around it follows the theme loosely.
LAYOUT: 1) Chrome address bar "jobs.lever.co/razorpay/apply"; 2) a plain web form: field "Full name" filled "Aarav Mehta"; field "Current CTC (in INR)" focused with blue underline; 3) directly under the focused field a dropdown with three rows:
 - row 1: Body "18 LPA (fixed 15 + variable 3)" with a small mint tag below "Alias: current ctc";
 - row 2: sparkle icon + "AutoFill with AI";
 - row 3: skip icon + "Save for later";
 - tiny footer caption "Fillmate";
4) Android keyboard partially visible at the bottom.
```

### `S31_af_inline_chips` — Keyboard inline suggestions · over Chrome

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Mockup of Chrome on Android with keyboard inline autofill suggestions. IMPORTANT: inline chips are rendered inside the keyboard's suggestion strip; draw them as simple pills (no clay depth).
LAYOUT: 1) Chrome address bar "boards.greenhouse.io/postman"; 2) web form field "Expected CTC" focused; 3) keyboard at bottom with a suggestion strip above the keys containing three pills: "26 LPA" with a tiny sky dot, "AI" with sparkle icon, "Later" with skip icon; 4) normal QWERTY keys below.
```

### `S32_ai_answer_loading` — AI Answer · loading

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Compact Fillmate activity launched over Chrome (Chrome job form visible and dimmed behind). A white clay bottom panel covering the lower 70% of the screen, top radius 32px, grab handle. Header row: sparkle icon in AI-gradient circle, Title "AI answer", close icon right. Below: Label "Field" and Body "Why do you want to join Razorpay?"; context chips "jobs.lever.co", "Razorpay".
STATE loading: three shimmering clay placeholder lines (lavender to peach shimmer); caption "Drafting from your stories and resume..."; bottom: secondary "Cancel" only.
```

### `S32b_ai_answer_answered` — AI Answer · answered

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Compact Fillmate activity launched over Chrome (Chrome job form visible and dimmed behind). A white clay bottom panel covering the lower 70% of the screen, top radius 32px, grab handle. Header row: sparkle icon in AI-gradient circle, Title "AI answer", close icon right. Below: Label "Field" and Body "Why do you want to join Razorpay?"; context chips "jobs.lever.co", "Razorpay".
STATE answered: pressed-in multiline editable field containing: "At Finch Labs I cut checkout latency from 2.1s to 400ms, and payments reliability is the problem I enjoy most. Razorpay operates that problem at a scale I want to learn from, and the platform team's work on routing is close to what I've built."; caption "64 words, editable"; Label "Based on" + chips "Story: Hardest problem", "Resume", "Pref: fintech"; bottom row: secondary "Regenerate", primary "Fill this answer".
```

### `S32c_ai_answer_insufficient` — AI Answer · insufficient info

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Compact Fillmate activity launched over Chrome (Chrome job form visible and dimmed behind). A white clay bottom panel covering the lower 70% of the screen, top radius 32px, grab handle. Header row: sparkle icon in AI-gradient circle, Title "AI answer", close icon right. Below: Label "Field" and Body "Years of experience with Kubernetes"; context chips "jobs.lever.co", "Razorpay".
STATE insufficient info: butter card with info icon: Title "Not enough info to answer", Body "Missing: your Kubernetes experience."; pressed-in field "Add it now (optional)" placeholder "e.g. 1.5 years, EKS and Helm"; bottom row: secondary "Save to Gaps", primary "Fill my answer" (faded until text entered).
```

### `S32d_ai_answer_decision` — AI Answer · needs decision

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Compact Fillmate activity launched over Chrome (Chrome job form visible and dimmed behind). A white clay bottom panel covering the lower 70% of the screen, top radius 32px, grab handle. Header row: sparkle icon in AI-gradient circle, Title "AI answer", close icon right. Below: Label "Field" and Body "Willing to relocate to Chennai?"; context chips "jobs.lever.co", "Razorpay".
STATE needs decision: lavender card with a fork icon: Title "This one's your call", Body "Chennai isn't in your relocation preferences."; three quick-answer clay pills "Yes", "No", "Open to discuss" (none selected); bottom row: secondary "Save to Gaps", primary "Fill" (faded until a pill is chosen).
```

### `S33_save_for_later` — Save for later confirmation · confirmed

```text
DESIGN SYSTEM (apply exactly): App "Fillmate" (placeholder name). Android phone, portrait 412x915, Material 3 structure rendered in a CLAYMORPHISM style.
MOOD: friendly, calm, trustworthy productivity tool for job seekers. Soft, tactile, "inflated clay" objects resting on a warm canvas. Playful, never childish.
CANVAS: #F3F0FA (lavender cream). TEXT: primary #2A2440, secondary #6B6485 (never lighter; keep WCAG AA contrast).
CLAY SURFACE (cards, sheets, buttons): fill white with a faint top-to-bottom gradient #FFFFFF to #FAF8FF, corner radius 28px, no borders. Depth = outer shadow 12px 12px 24px rgba(110,90,180,0.18) + outer highlight -8px -8px 18px rgba(255,255,255,0.9) + inner shadow inset -4px -4px 8px rgba(110,90,180,0.10) + inset 4px 4px 8px rgba(255,255,255,0.8). Objects look puffy and pressable.
INPUT FIELDS: concave "pressed-in" clay: canvas-colored, radius 20px, inner shadow only, 56px tall, label above in Label style, placeholder #9A93B3.
PRIMARY COLOR #7C6CF2 (lavender). Primary button = lavender clay pill, 56px tall, radius 28px, white bold text, soft white inner highlight on top edge. Secondary button = white clay pill with #5B4BD6 text. Text button = #5B4BD6, no fill. Destructive text #B3261E.
METHOD TAGS (small clay pills, 24px tall, icon + label): ALIAS mint bg #C9F2E1 text #0F6A48 "link icon Alias"; SEMANTIC sky bg #D4E6FF text #1C4F94 "approx icon Semantic"; AI gradient bg #E6DCFF to #FFE3D3 text #5B3BB8 "sparkle icon AI"; SKIPPED bg #ECEAF2 text #5E5874; GAP / NEEDS INFO butter bg #FFEDB8 text #7A5300; ERROR coral bg #FFD9D4 text #9A2A1E.
ALIAS CHIPS: small white clay pills, 32px tall, lowercase text, optional small x.
TYPOGRAPHY: Nunito. Display 28/34 ExtraBold; Title 20/26 Bold; Body 16/24 Regular; Label 13/18 SemiBold; Caption 12/16 Regular.
SPACING: 4px grid; screen side padding 20px; card padding 18px; vertical gaps 12-16px.
ICONS: Material Symbols Rounded, filled; standalone icons sit inside 40px clay circles tinted with a pastel (lavender #E9E4FF, mint #DDF7EC, peach #FFE8DC, sky #E2EEFF).
APP BAR: transparent over canvas; hamburger menu icon left (opens side drawer) on top-level screens, back arrow on sub-screens; title in Title style; actions right.
BOTTOM NAV (top-level screens only): floating white clay bar, 16px from screen edges and bottom, radius 32px, 4 tabs: Knowledge (book icon), History (history icon), Gaps (inbox icon, butter badge with count), Playground (science icon). Active tab = lavender clay blob behind icon + label.
BOTTOM SHEETS: white clay, top radius 32px, grab handle, scrim rgba(42,36,64,0.35).
EMPTY STATES: one soft 3D clay illustration of rounded blobby objects (lavender/mint/peach), Title text, one Body line, one primary button.
RESTRAINT: clay depth only on cards and interactive objects; never place text on gradients except tags; max 3 depth levels per screen; generous whitespace.

SCREEN: Tiny Fillmate confirmation over Chrome (Chrome form fully visible behind, only lightly dimmed).
Centered near the bottom: a compact white clay card (about 340x120): mint check circle, Title "Saved to Gaps", caption "'GitHub username' from jobs.lever.co"; text button "Undo" at the right; a thin lavender progress line along the card's bottom edge showing auto-dismiss.
```
