---
name: Tactile Claymorphism
colors:
  surface: '#fdf7ff'
  surface-dim: '#dfd5fa'
  surface-bright: '#fdf7ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f1ff'
  surface-container: '#f2ebff'
  surface-container-high: '#ede4ff'
  surface-container-highest: '#e7deff'
  on-surface: '#1d1733'
  on-surface-variant: '#474554'
  inverse-surface: '#322c49'
  inverse-on-surface: '#f5eeff'
  outline: '#787585'
  outline-variant: '#c8c4d6'
  surface-tint: '#5a48ce'
  primary: '#5845cb'
  on-primary: '#ffffff'
  primary-container: '#7160e6'
  on-primary-container: '#fffbff'
  inverse-primary: '#c7bfff'
  secondary: '#5544d0'
  on-secondary: '#ffffff'
  secondary-container: '#6e60ea'
  on-secondary-container: '#fffbff'
  tertiary: '#845000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a66600'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4dfff'
  primary-fixed-dim: '#c7bfff'
  on-primary-fixed: '#170065'
  on-primary-fixed-variant: '#422bb5'
  secondary-fixed: '#e4dfff'
  secondary-fixed-dim: '#c6bfff'
  on-secondary-fixed: '#160066'
  on-secondary-fixed-variant: '#3f2aba'
  tertiary-fixed: '#ffddba'
  tertiary-fixed-dim: '#ffb865'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#673d00'
  background: '#fdf7ff'
  on-background: '#1d1733'
  surface-variant: '#e7deff'
  canvas-light: '#F3F0FA'
  canvas-dark: '#1B1828'
  text-primary-light: '#2A2440'
  text-secondary-light: '#6B6485'
  text-placeholder: '#9A93B3'
  text-primary-dark: '#F1EEFA'
  text-secondary-dark: '#B3ACCB'
  destructive: '#B3261E'
  tag-alias-bg: '#C9F2E1'
  tag-alias-text: '#0F6A48'
  tag-semantic-bg: '#D4E6FF'
  tag-semantic-text: '#1C4F94'
  tag-ai-text: '#5B3BB8'
  tag-skipped-bg: '#ECEAF2'
  tag-skipped-text: '#5E5874'
  tag-gap-bg: '#FFEDB8'
  tag-gap-text: '#7A5300'
  tag-error-bg: '#FFD9D4'
  tag-error-text: '#9A2A1E'
  icon-bg-lavender: '#E9E4FF'
  icon-bg-mint: '#DDF7EC'
  icon-bg-peach: '#FFE8DC'
  icon-bg-sky: '#E2EEFF'
typography:
  display-lg:
    fontFamily: Nunito Sans
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 34px
  title-md:
    fontFamily: Nunito Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 26px
  body-md:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Nunito Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
  caption-sm:
    fontFamily: Nunito Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 12px
  margin: 20px
  space-xs: 4px
  space-sm: 8px
  space-md: 12px
  space-lg: 16px
  space-xl: 18px
---

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
DARK MODE OVERRIDE (replaces the light values above): canvas #1B1828; clay surfaces #262238 to #2B2740; outer shadow rgba(0,0,0,0.45); outer highlight rgba(255,255,255,0.05); inner highlight rgba(255,255,255,0.06); text primary #F1EEFA, secondary #B3ACCB; primary #9D90FF with #1B1828 button text; tags keep hue but use 25% opacity fills with light text.