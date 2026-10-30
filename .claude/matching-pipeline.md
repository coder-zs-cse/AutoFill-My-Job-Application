# Matching pipeline

Contract files: `packages/contracts/matching/rules.json` (data) and `vectors.json` (behavior).
Implementations: Kotlin `autofill-core` (on device, authoritative for autofill) and Python `app/matching` (server).
**Both must pass every vector.** Change a rule → add a vector first → change both implementations.

## Normalize (identical in both languages)

1. Lowercase.
2. Remove possessive suffixes from `possessive_suffixes` at word end (`father's` → `father`).
3. Replace every run of non `[a-z0-9]` characters with one space.
4. Split on spaces; drop tokens in `stopwords`.
5. For each token, apply the **first** `lemma_rules` entry whose `suffix` matches, whose `min_length`
   is met, and whose preceding character is not in `not_after`. No NLP library.

Aliases and qualifiers are normalized with the same function at snapshot-load time.

> The vectors already caught one bug in the first draft of these rules: `previous` was lemmatized to
> `previou`, so it stopped being a qualifier and "Previous CTC" matched *Current CTC*. That is why
> `not_after` includes `u`. Every rule change gets a vector.

## Tier 1: alias match (device, offline)

- An alias **matches** when its full token sequence appears contiguously in the label tokens.
- **Qualifier block:** if the label contains a qualifier the alias lacks, that alias is blocked
  (recorded in the trace as `BlockedAlias` for the Playground's "Not Current CTC: your question says 'expected'").
- **Longest alias wins** (token count). A tie between different questions → no match.
- No fuzzy or edit-distance matching.

## Tier 2: semantic (server, one batched call)

- Only labels Tier 1 missed. One `POST /resolve` per fill request, client timeout ~800 ms (tune in phase 3).
- Match only if `score ≥ SEMANTIC_MIN_SCORE` **and** `score − runner_up ≥ SEMANTIC_MIN_MARGIN` **and** not
  qualifier-blocked. Thresholds are server config, starting at 0.85 / 0.08; calibrate on real labels.
- Timeout or offline → those fields get only "AutoFill with AI" and "Save for later".

## Tier 3: LLM (server, on demand only)

- Only when the user taps "AutoFill with AI". Synchronous. No Batch API.
- Input: label, page context, the user's whole KB (facts, stories, preferences, resume text). No RAG: it fits.
- Output contract and the hallucination guard: `api-contract.md` §`POST /answer-ai`.

## Same code path guarantee (Playground)

`FillmateAutofill.resolveForPlayground()` calls the same `Resolver` instance with the same snapshot as
`FillRequestHandler`. Never add a separate "playground matcher" in TS or Python.
