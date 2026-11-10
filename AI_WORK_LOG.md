# AI_WORK_LOG
# AI Coding Collaboration History

This document maintains a concise, append-only history of development sessions and decisions made while collaborating with AI coding agents.

It is shared across compatible AI IDEs and agents working on this repository.

**Rules:**
- Append entries; never rewrite historical entries.
- Record every user request that receives a response.
- Summarise prompts rather than duplicating unnecessarily large messages.
- Record actual implementation and verification outcomes.
- Never record secrets, credentials or sensitive personal information.
- Keep entries concise and useful for future agents.
- Agents must follow `AGENTS.md` → SESSION START and keep this file updated each session.

---

## PROJECT CONTEXT

| Field | Value |
|---|---|
| Project | Fillmate |
| Assignment / Organisation | Personal product (Android autofill for job applications) |
| Primary language | TypeScript, Kotlin, Python |
| Framework | React Native 0.88 (mobile), Android AutofillService, FastAPI (api) |
| Repository | `c:\j` |
| Current status | In Progress — Phase 1 spike (`feature/phase-1-spike`) |

---

## CURRENT STATE

**Objective:**  
Prove Phase 1 of `.claude/build-plan.md`: a Tier 1 fill on a Google Form in Chrome with **no backend**, using dummy hardcoded answers.

**Implemented (Phase 1 core bet, via hardcoding / debug spike):**
- Scaffold + Tier 1 matching on both sides (`LabelNormalizer` / `AliasMatcher`, shared `vectors.json`)
- Debug-only `StructureDumper` in `onFillRequest`
- Debug-only hardcoded `SpikeSnapshot` (email, full name, phone, current/expected CTC) wired into `AutofillGraph` / `InMemoryKbSnapshotStore` (release stub returns null)
- `DatasetFactory` matched-answer dataset (dropdown RemoteViews)
- Debug logging of parsed fields + handler failures
- On-device spike runbook: `docs/spikes/README.md`

**Pending (Phase 1 “done when”):**
- Commit AssistStructure dumps under `docs/spikes/assist-structure/` (local `google-form.txt` exists, untracked)
- Reorder/add `LabelExtractors` from dump evidence if needed
- On-device proof: Fillmate enabled + Chrome “another service” → tap Email on Google Form → fill; screen recording
- Capture Greenhouse / Lever dumps as in the runbook

**Known issues / open items:**
- Chrome autofill-service menu names still need empirical verification (called out in runbook / `.claude/autofill-service.md`)
- Phase 0 full Android Gradle/Maven build may still need a clean network run (build-plan note)

**Important decisions:**
- Phase 1 deliberately uses fake hardcoded KB data in **debug only**; real sync/Room is Phase 2
- No backend required for the Phase 1 bet
- Matching rules/aliases from contracts, not ad-hoc stopwords in service code

---

# DEVELOPMENT HISTORY

Append new entries below. Do not modify previous entries.
History below is reconstructed from git on `feature/phase-1-spike` / precursors (not a live agent transcript).

---

## [2026-10-30] — SCAFFOLD + PHASE 0 FOUNDATION

**Agent:** Claude (and collaborators on early commits)  
**Branch lineage:** `main` → `feature/phase-0-1` → merge into path toward spike

**User request / goal:**
Stand up the Fillmate monorepo scaffold so Phase 1 can prove autofill without rewriting structure later.

**Work performed (selected commits):**
- `4dd60a0` initial setup scaffold
- `8bb3592` directory structure for global context
- `c1ce698` Stitch exports into per-screen folders
- `5076dd1` make `gradlew` executable
- `5a7f426` / `8d7eda0` FastAPI packaging / build-system fixes
- `7a5ba72` API Tier 1 normalizer + alias matcher + vector tests
- `bf8fd00` Android `LabelNormalizer` + `AliasMatcher` for Tier 1
- `bcd7fd5` merge `feature/phase-0-1`

**Technical decisions:**
- Chose **bare React Native CLI (0.88, New Architecture)** over Expo managed/prebuild: we ship a native AutofillService plus custom Gradle modules (`:autofill`, `:autofill-core`); owning `android/` directly is simpler than Expo config plugins
- Shared matching contracts in `packages/contracts/matching/`
- Kotlin autofill split: `:app` → `:autofill` → `:autofill-core` (pure matching)

**Validation:**
- Vector-backed Tier 1 work landed in API and Android (run `./gradlew :autofill-core:test` / `pytest` to reconfirm locally)
- Full Phase 0 checkboxes in build-plan not all marked complete historically (Maven network / on-device Sign-up still open items there)

**Unresolved items:**
- Phase 0 “scaffold builds” checklist still has unchecked items in `.claude/build-plan.md`

**Git context:**
- Culminates in merge `bcd7fd5`

---

## [2026-10-31] — PHASE 1 SPIKE: PROVE CORE BET WITH DUMMY HARDCODINGS

**Agent:** Claude  
**Branch:** `feature/phase-1-spike`  
**Commits:** `fc6d533` … `231eb1f`

**User request / goal:**
Phase 1 of `.claude/build-plan.md` — prove the riskiest bet first: Chrome asks Fillmate, service parses the form, Tier 1 match fills a field. No backend, no login. Use dummy hardcoded answers.

**Work performed:**
- `fc6d533` — debug builds call `StructureDumper.dump()` in fill handling; capture AssistStructure for Google Form / Greenhouse / Lever
- `6558450` — seed debug-only `SpikeSnapshot` (fake email/name/phone/CTC answers + aliases) into `AutofillGraph`; release stub returns `null`
- `2a87e19` — `DatasetFactory` matched-answer datasets only (suggestion RemoteViews / strings)
- `cdda065` — log parsed fields in debug; log handler failures
- `231eb1f` — `docs/spikes/README.md` on-device runbook (install, enable service, Chrome setting, three forms, logcat dump, proof recording)

**Technical decisions:**
- Hardcoded snapshot is **debug source set only** so it cannot ship; Phase 2 replaces with synced KB/Room
- Spike answers are intentionally fake (`alex.sharma@example.com`, etc.)
- Phase 1 store remains `InMemoryKbSnapshotStore(SpikeSnapshot.orNull())`

**Validation:**
- Code + runbook committed on `feature/phase-1-spike` (tip `231eb1f`)
- On-device “Email fills on Google Form” + committed dumps + proof recording: not fully closed in git (local untracked `docs/spikes/assist-structure/google-form.txt` present)

**Unresolved items:**
- Finish Phase 1 done-when: commit dumps, verify LabelExtractors from evidence, complete on-device fill + screen recording
- Do not treat hardcoded `SpikeSnapshot` as product data — remove/replace in Phase 2

**Git context:**
- Branch: `feature/phase-1-spike` (tracks `origin/feature/phase-1-spike`)
- Working tree (as of log bootstrap): also has local docs/agent-workflow edits uncommitted

---

## [2026-11-10 22:31:01 +05:30] — SESSION START

**Agent:** Cursor  
**Branch:** `feature/phase-1-spike`  
**Working directory:** `c:\j`

**Repository state:**
- Phase 1 spike code at tip `231eb1f`; proving core bet via debug hardcodings
- Local: `AGENTS.md` / `.cursor/rules/00-project.mdc` gaining SESSION START + work-log ownership; `AI_WORK_LOG.md` new; `docs/spikes/assist-structure/google-form.txt` untracked

---

## [2026-11-10 23:55:15 +05:30] — EXHAUSTIVE StructureDumper

**Agent:** Cursor  
**Branch:** `feature/phase-1-spike`

**User request:**
Replace curated `StructureDumper` fields with a full dump of every public `ViewNode` property so spike captures cannot miss AssistStructure signals.

**Work performed:**
- Rewrote `StructureDumper.kt` to reflect all public `get*` / `is*` on `ViewNode` (skip `getChildAt` / `getClass`), expand `html.tag` + `html.attrs`, log window metadata, chunk long logcat lines
- Noted new dump shape in `docs/spikes/README.md`

**Technical decisions:**
- Reflection over public API only (no private fields / Parcel hex) — readable evidence without hidden-API fragility
- Explicit HtmlInfo expansion kept because web labels usually live in attributes

**Validation:**
- Tests: `./gradlew :autofill:compileDebugKotlin` passed
- Outcome: ready for a fresh on-device capture under `docs/spikes/assist-structure/`

**Unresolved items:**
- Google Forms often exposes `Your answer` instead of question titles; exhaustive dump confirms absence rather than inventing labels
- Re-capture dumps with the new dumper after installing the new debug APK

**Git context:**
- Branch: `feature/phase-1-spike`
- Working tree: uncommitted (`StructureDumper.kt`, `docs/spikes/README.md`, prior docs/workflow files)

---

# IMPORTANT ARCHITECTURAL DECISIONS

Keep decisions that future agents must understand or preserve here.

| Date | Decision | Reason |
|---|---|---|
| 2026-10-30 | Bare React Native CLI, not Expo | Native AutofillService + Gradle modules; owning `android/` beats config-plugin indirection |
| 2026-10-31 | Phase 1 uses debug-only hardcoded `SpikeSnapshot`, no backend | Prove Chrome ↔ AutofillService ↔ Tier 1 fill before auth/KB sync |
| 2026-10-31 | Structure dumps drive LabelExtractor tuning | Real AssistStructure evidence beats guessing |
| 2026-11-10 | Agents run SESSION START and update this log | Shared memory across tools; preserve prior spike decisions |
| (ongoing) | Layer boundaries; Stitch visual-only; vectors-first matching; no LLM in `onFillRequest`; KB sync after RN writes | See `AGENTS.md` hard rules |

# COMMANDS AND EXECUTION

| Purpose | Command |
|---|---|
| Mobile typecheck + lint + test | `cd apps/mobile && npm run typecheck && npm run lint && npm test` |
| Regenerate design tokens | `cd apps/mobile && npm run tokens` |
| Kotlin matching vector tests | `cd apps/mobile/android && ./gradlew :autofill-core:test` |
| Install debug APK (spike) | `cd apps/mobile/android && ./gradlew :app:installDebug` |
| Request autofill service picker | `adb shell am start -a android.settings.REQUEST_SET_AUTOFILL_SERVICE -d package:ai.fillmate` |
| API + vector tests | `cd apps/api && pytest` |
| Spike runbook | `docs/spikes/README.md` |

# HANDOFF NOTES

**Current implementation status:**  
Phase 1 spike with debug hardcodings; `StructureDumper` now logs every public `ViewNode` property for site evidence. On-device proof / committed dumps still open.

**Last completed task (product):**  
Exhaustive reflection-based `StructureDumper` (compileDebugKotlin ok).

**Next recommended task:**  
Reinstall debug APK, re-capture `docs/spikes/assist-structure/<site>.txt` with the new dumper, then close Phase 1 done-when (dumps + Chrome fill recording).

**Important files to inspect:**  
`SpikeSnapshot.kt` (debug/release), `AutofillGraph.kt`, `DatasetFactory.kt`, `FillRequestHandler.kt`, `StructureDumper.kt`, `docs/spikes/README.md`, `.claude/build-plan.md`

**Known blockers:**  
None coded; remaining work is empirical on-device capture/proof.

---

*End of current log. Append future entries above this line or at the end of the document. Never delete historical entries.*
