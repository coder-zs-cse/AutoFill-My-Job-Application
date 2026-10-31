package ai.fillmate.core.match

import ai.fillmate.core.model.BlockedAlias
import ai.fillmate.core.model.KbSnapshot
import ai.fillmate.core.model.MatchResult
import ai.fillmate.core.normalize.LabelNormalizer

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
class AliasMatcher(private val normalizer: LabelNormalizer) {
    data class Outcome(val result: MatchResult, val blocked: List<BlockedAlias>)

    private class IndexedAlias(val questionId: String, val alias: String, val answer: String, val tokens: List<String>)

    private class Index(val snapshot: KbSnapshot, val aliases: List<IndexedAlias>)

    @Volatile private var index: Index? = null

    fun match(labelTokens: List<String>, labelQualifiers: Set<String>, snapshot: KbSnapshot): Outcome {
        val blocked = mutableListOf<BlockedAlias>()
        val candidates = mutableListOf<IndexedAlias>()
        for (alias in indexFor(snapshot)) {
            if (!containsRun(labelTokens, alias.tokens)) continue
            val missing = labelTokens.firstOrNull { it in labelQualifiers && it !in alias.tokens }
            if (missing != null) blocked += BlockedAlias(alias.questionId, alias.alias, missing) else candidates += alias
        }

        val longest = candidates.maxOfOrNull { it.tokens.size } ?: return Outcome(MatchResult.NoMatch, blocked)
        val best = candidates.filter { it.tokens.size == longest }
        if (best.map { it.questionId }.distinct().size > 1) return Outcome(MatchResult.NoMatch, blocked)
        val winner = best.first()
        return Outcome(MatchResult.Alias(winner.questionId, winner.alias, winner.answer), blocked)
    }

    private fun indexFor(snapshot: KbSnapshot): List<IndexedAlias> {
        index?.takeIf { it.snapshot === snapshot }?.let { return it.aliases }
        val aliases = snapshot.questions.flatMap { q ->
            q.aliases.mapNotNull { alias ->
                // An alias that normalizes to nothing ("the") would match every label.
                normalizer.normalize(alias).takeIf { it.isNotEmpty() }?.let { IndexedAlias(q.id, alias, q.answer, it) }
            }
        }
        index = Index(snapshot, aliases)
        return aliases
    }

    private fun containsRun(label: List<String>, alias: List<String>): Boolean =
        alias.size <= label.size &&
            (0..label.size - alias.size).any { start -> alias.indices.all { label[start + it] == alias[it] } }
}
