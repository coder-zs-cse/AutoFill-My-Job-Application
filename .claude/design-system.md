# Design system: clay

Source of truth: `packages/design-tokens/tokens.json` → `npm run tokens` (in apps/mobile) generates
`src/design-system/tokens/tokens.generated.ts` and `android/autofill/.../ui/theme/ClayTokens.kt`.
The Stitch preamble (in every `design/stitch/*/prompt.md`) describes the same values in prose.

## Layers

```
tokens/      generated values + theme.ts (useThemeColors, clayShadow)
primitives/  Text, ClayCard, ClayButton, ClayInput, MethodTag          ← built (reference)
             AliasChip, ClayToggle, ClayCheckbox, SegmentedControl,    ← build next, from S00_style_sheet
             IconCircle, StatTile, ProgressBar
patterns/    ScreenPlaceholder (temporary)                              ← built
             AppBar, FloatingTabBar, BottomSheet, EmptyState, ListRow,  ← build as screens need them
             ConfirmDialog, Stepper
```

Primitives know nothing about features. Patterns compose primitives. Screens compose patterns + primitives.

## Rules

- No hex, rgba, or magic numbers in feature code. Tokens only.
- `Text` with a `variant` is the only way to render text (never RN `Text` directly in features).
- Method tags always show a word ("Alias: current ctc"), never color alone.
- Clay depth only on cards and interactive objects; max 3 depth levels per screen.

## Performance budget (clay is expensive)

`clayShadow('raised')` is 4 stacked shadows, 2 of them inset. Before building S10's list:
render 40 `QuestionCard`s on a mid-range Android 10–12 phone and check scrolling stays smooth.
If not, try in order: (1) only 2 outer shadows on list rows, keep 4 on hero cards; (2) a pre-rendered 9-patch
background; (3) Skia. Record the result here.

## Stitch → React Native translation

Read `.cursor/rules/40-stitch-to-rn.mdc`. Short version: the export is a picture with measurements.
Map every box to a primitive; fix spacing to the 4px grid; replace fake text with hook data.
