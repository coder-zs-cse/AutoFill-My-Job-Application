package ai.fillmate.core.match

import ai.fillmate.core.model.BlockedAlias
import ai.fillmate.core.model.KbSnapshot
import ai.fillmate.core.model.MatchResult

/**
 * TIER 1 (on device, offline). Rules, from .claude/matching-pipeline.md:
 *  - An alias matches when ALL its tokens appear as one contiguous run inside the label tokens.
 *  - Qualifier blocking: if the label has a qualifier the alias lacks, that alias is blocked.
 *  - Among unblocked matches, the alias with the most tokens wins.
 *  - A tie between two DIFFERENT questions is ambiguous -> NoMatch (let Tier 2 / the user decide).
 *  - No fuzzy / Levenshtein. A miss is fixed by adding an alias, not by loosening the matcher.
 *
 * Performance: build an index once per snapshot version (normalized alias tokens per question),
 * not per fill request. onFillRequest has a hard time budget.
 */
class AliasMatcher {
    data class Outcome(val result: MatchResult, val blocked: List<BlockedAlias>)

    fun match(labelTokens: List<String>, labelQualifiers: Set<String>, snapshot: KbSnapshot): Outcome =
        TODO("phase 1: implement per KDoc; verify with MatchingVectorsTest")
}
