# Fillmate

> Your job-application answers, ready in every form.

Job seekers type the same answers into every application, and on a phone they often give up. Fillmate keeps a
personal answer bank and plugs into Android's autofill: tap a field in Chrome, pick your saved answer, or
let AI draft the long ones from your own stories and resume. Nothing is filled without a tap.

## Stack

| Part | Tech |
|---|---|
| App | React Native 0.88 (New Architecture), TypeScript, React Navigation 7, TanStack Query 5 |
| Autofill | Kotlin `AutofillService`, pure-Kotlin matching module, Compose sheets (phase 3) |
| Backend | FastAPI, Postgres + pgvector, Redis, OpenAI (model chosen server-side) |
| Design | Google Stitch exports + generated clay design tokens |

## Run it

Requirements: Node ≥ 22.11, JDK 17+, Android SDK (compileSdk 37), Python 3.12, Postgres 16 with pgvector.

```bash
# App
cd apps/mobile
npm install
npm run typecheck && npm run lint && npm test
npm start            # Metro
npm run android      # in another terminal, with an emulator/device on Android 10+

# Backend
cd apps/api
python -m venv .venv && source .venv/bin/activate
pip install -e ".[dev]" && cp .env.example .env
uvicorn app.main:app --reload
```

Then: Android Settings → Passwords & autofill → Autofill service → Fillmate; Chrome → Settings → Autofill services →
"Autofill using another service" (exact names vary by version; see `.claude/autofill-service.md`).

## Structure

```
apps/mobile          React Native app + android/ (bridge, autofill, autofill-core)
apps/api             FastAPI backend
packages/contracts   shared matching rules + test vectors (Kotlin and Python both run them)
packages/design-tokens  one token file → generated TS + Kotlin
design/stitch        one folder per screen: Stitch prompt, export, implementation notes
.claude/             specs: architecture, screens, autofill, matching, API, data model, build plan
.cursor/rules/       scoped Cursor rules pointing at the specs
```

Start with `ARCHITECTURE.md`, then `.claude/lld-guide.md`.

## Contributing

Branches `feature/`, `fix/`, `chore/`; conventional commits. CI gate: typecheck, lint (architecture rules), tests,
both matching-vector suites. A PR that changes a screen links its `design/stitch/<ID>/` folder and a screenshot.

## License

MIT (placeholder, choose before publishing).
