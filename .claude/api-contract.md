# API contract (v1)

Base: `/api/v1`. JSON, snake_case. Auth: `Authorization: Bearer <access>`. Errors: `{ "detail": str, "field_errors"?: {field: msg} }`
with 401 / 404 / 409 / 422 / 5xx (mapped to `ApiError.kind` in the app).
Phase 2: FastAPI's OpenAPI output is committed to `packages/contracts/openapi.json` and TS types are generated from it.

| Area | Method & path | Caller | Notes |
|---|---|---|---|
| Auth | `POST /auth/signup` `{username, password}` → `{access_token, refresh_token, user_id}` | RN | |
| | `POST /auth/login` (same) | RN | |
| | `POST /auth/refresh` `{refresh_token}` → new pair | **Kotlin only** | Refresh token rotates. |
| Me | `GET /me` → `{username, plan, onboarded_at, created_at}` · `PATCH /me` · `DELETE /me` | RN | |
| | `GET /me/usage?month=` → `{autofills, ai_answers, gaps_resolved, weekly:[...]}` | RN | S27 |
| | `GET/PATCH /me/settings` `{show_match_tags, show_save_for_later}` | RN, Kotlin reads via snapshot | |
| | `POST /me/export` → JSON file | RN | |
| Questions | `GET /questions?search&category&source&answer_type` · `POST /questions` | RN | |
| | `GET/PATCH/DELETE /questions/{id}` | RN | |
| Aliases | `POST /questions/{id}/aliases` `{phrase}` · `DELETE /aliases/{id}` | RN | |
| | `POST /aliases/{id}/move` `{to_question_id}` | RN | Only re-points the alias. |
| KB | `GET /kb/snapshot?since={version}` → `{version, questions:[{id, answer, aliases[]}], settings}` or 204 | Kotlin | Every KB write bumps `version`. |
| Stories | `GET/POST /stories` · `GET/PATCH/DELETE /stories/{id}` | RN | STAR fields |
| Preferences | `GET /preferences` · `PUT /preferences/{key}` | RN | |
| Resume | `POST /resume` (multipart PDF) → `{id, version, status}` · `GET /resume` · `GET /resume/versions` | RN | |
| | `GET /resume/{id}/candidates` → `[{label, answer, class: new|duplicate|conflict, existing_question_id?, existing_answer?}]` | RN | S06 |
| | `POST /resume/{id}/import` `{accept:[...], merges:[...], conflict_choices:[...]}` | RN | |
| Matching | `POST /resolve` `{labels[], page:{package, domain, title}, kb_version}` → `{kb_version, results:{label: {question_id?, score?, margin?, candidates[]}}}` | Kotlin | Tier 2 only |
| | `POST /answer-ai` `{label, page}` → `{status, answer, used_fact_ids[], missing}` | Kotlin | Tier 3. `answered` with empty `used_fact_ids` is downgraded to `insufficient_info` server-side. |
| Events | `POST /fill-events` `{events:[{session_key, label, method, question_id?, alias?, value?, domain, occurred_at}]}` | Kotlin | History + usage metering |
| History | `GET /fill-sessions?cursor` · `GET /fill-sessions/{id}` | RN | |
| Gaps | `GET /gaps?type` · `POST /gaps` (from device) · `POST /gaps/{id}/resolve` `{action, payload}` · `DELETE /gaps/{id}` | RN, Kotlin | actions: `new_question`, `context`, `alias_to_existing`, `dismiss` |

Every AI call and every fill event writes a `usage_events` row (metering from day one).
