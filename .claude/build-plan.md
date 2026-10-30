# Build plan

Each phase ends with a check you can run. Don't start a phase until the previous check passes.

## Phase 0: the scaffold builds (half a day)
- [ ] `cd apps/mobile && npm install && npm run typecheck && npm run lint && npm test` (passes today)
- [ ] `cd apps/mobile/android && ./gradlew :autofill-core:compileKotlin :autofill:assembleDebug :app:assembleDebug`
      **Not yet run anywhere: the scaffold was written without network access to Maven.** Fix whatever the first
      build reports (most likely: generated `NativeFillmateSpec` method signatures in `FillmateModule.kt`).
- [ ] `npm run android` shows the Sign-up placeholder (no session yet).
- [ ] `cd apps/api && pip install -e ".[dev]" && uvicorn app.main:app` → `GET /health` is ok.

## Phase 1: prove the core bet (the riskiest thing first)
Goal: **a Tier 1 fill on a Google Form in Chrome**, with no backend.
1. Implement `LabelNormalizer` and `AliasMatcher` → `./gradlew :autofill-core:test` passes every vector.
2. Debug build calls `StructureDumper.dump()` in `onFillRequest`. Capture Google Form, Greenhouse, Lever →
   save logs under `docs/spikes/assist-structure/`. Reorder/add `LabelExtractors` from evidence.
3. Hardcode a snapshot in `AutofillGraph` (email, full name, phone, current/expected CTC).
4. `DatasetFactory`: matched-answer dataset only (dropdown RemoteViews).
5. Enable Fillmate as the autofill service + Chrome setting → tap Email on a Google Form → it fills.
**Done when:** a screen recording shows the fill, and the dumps are committed.

## Phase 2: real data
Auth (signup/login, Kotlin `SessionStore`, refresh rotation) → KB CRUD API + S10/S11/S12 → `/kb/snapshot` +
Room store + `syncKb()` → Python normalizer passes vectors → OpenAPI types generated.
**Done when:** editing an answer in the app changes what Chrome fills, offline Tier 1 still works.

## Phase 3: Tier 2 + AI
Embeddings + `/resolve` (+ calibrate thresholds on your phase-1 labels) → Compose `AiAnswerActivity` (S32a–d) +
`/answer-ai` with the hallucination guard → AI + Save-for-later datasets.
**Done when:** a "Why do you want to join X?" field gets an editable AI draft over Chrome.

## Phase 4: trust loop
History (`/fill-events`, FillEventHistory) → Gaps inbox + resolve → Playground (S19–S19e) using the bridge.
**Done when:** a wrong fill can be found in History and fixed from the Playground, and the next fill is right.

## Phase 5: everything else
Onboarding flow, resume upload + import review, stories/preferences, settings, profile/usage, upgrade placeholder,
Chrome guide, dark mode pass.
