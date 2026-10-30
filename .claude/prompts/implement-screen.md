# Prompt template: implement one screen from its Stitch export

Copy, fill the two placeholders, paste into Cursor (Agent mode).

---

Implement screen **{SCREEN_ID}** (e.g. `S11_question_detail`).

Context to read first, in order:
1. `design/stitch/{SCREEN_ID}/notes.md`: owner feature, target file, route.
2. `design/stitch/{SCREEN_ID}/screen.png` and `code.html`: the visual reference.
3. `.cursor/rules/40-stitch-to-rn.mdc` and `.claude/design-system.md`.
4. The owner feature's `README.md` and `index.ts`; the `kb` feature as the reference pattern.

Do:
- Build the screen in the file named in notes.md using only `@design-system` primitives/patterns.
  If a needed primitive is missing, stop and propose it (name, props) before building it.
- Get data only through the feature's `application/` hooks. If a hook is missing, add it following `kbQueries.ts`.
- Handle loading, error, empty and populated states. Other states with their own Stitch folder
  ({SCREEN_ID}b, c...) must match those exports.
- Replace the `createScreenPlaceholder(...)` export in the feature's `index.ts`.
- Fill in the "Translation notes" section of notes.md.

Don't: copy CSS/Tailwind from the export, hardcode colors or sample text, call `fetch` or the native module
from the screen, or touch files outside the owner feature (except design-system additions you proposed).

Done when: `npm run typecheck && npm run lint && npm test` pass, and the screen matches `screen.png` side by side.
