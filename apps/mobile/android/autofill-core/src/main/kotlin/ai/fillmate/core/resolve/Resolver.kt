package ai.fillmate.core.resolve

import ai.fillmate.core.match.AliasMatcher
import ai.fillmate.core.model.FieldQuery
import ai.fillmate.core.model.KbSnapshot
import ai.fillmate.core.model.MatchResult
import ai.fillmate.core.model.ResolutionTrace
import ai.fillmate.core.model.SemanticCandidate
import ai.fillmate.core.normalize.LabelNormalizer
import ai.fillmate.core.normalize.MatchingRules

/**
 * PORT for Tier 2. Core defines what it needs; the autofill module implements it over HTTP.
 * Core never knows about OkHttp, JSON, or timeouts' mechanics, only the contract.
 */
fun interface SemanticTier {
    /** Batch call for every label Tier 1 missed. Must return within [timeoutMs] or throw. */
    fun resolve(labels: List<String>, timeoutMs: Long): Map<String, SemanticOutcome>
}

data class SemanticOutcome(val result: MatchResult, val candidates: List<SemanticCandidate>)

/**
 * The one resolver used by BOTH the AutofillService and the Playground (via the RN bridge).
 * A pipeline (chain of responsibility): each tier only sees what earlier tiers left unresolved.
 * Tier 3 (LLM) is deliberately NOT here: it only runs when the user taps "AutoFill with AI".
 */
class Resolver(
    rules: MatchingRules,
    private val semanticTier: SemanticTier?,
    private val semanticTimeoutMs: Long = 800,
) {
    private val normalizer = LabelNormalizer(rules)
    private val aliasMatcher = AliasMatcher()
    private val qualifiers = rules.qualifiers.flatMap { normalizer.normalize(it) }.toSet()

    fun resolve(fields: List<FieldQuery>, snapshot: KbSnapshot): Map<String, ResolutionTrace> {
        val tier1 = fields.associate { field ->
            val tokens = normalizer.normalize(field.label)
            val labelQualifiers = tokens.filter { it in qualifiers }.toSet()
            val outcome = aliasMatcher.match(tokens, labelQualifiers, snapshot)
            field.key to ResolutionTrace(field.label, tokens, labelQualifiers, outcome.blocked, emptyList(), outcome.result)
        }

        val misses = tier1.filterValues { it.result is MatchResult.NoMatch }
        if (misses.isEmpty() || semanticTier == null) return tier1

        val semantic = try {
            semanticTier.resolve(misses.values.map { it.label }.distinct(), semanticTimeoutMs)
        } catch (e: Exception) {
            // Timeout/offline: those fields simply get the AI + Save-for-later suggestions.
            return tier1
        }

        return tier1.mapValues { (_, trace) ->
            val s = semantic[trace.label] ?: return@mapValues trace
            if (trace.result !is MatchResult.NoMatch) trace
            else trace.copy(result = s.result, semanticCandidates = s.candidates)
        }
    }
}
