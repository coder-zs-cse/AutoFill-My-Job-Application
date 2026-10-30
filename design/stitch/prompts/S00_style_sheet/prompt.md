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
