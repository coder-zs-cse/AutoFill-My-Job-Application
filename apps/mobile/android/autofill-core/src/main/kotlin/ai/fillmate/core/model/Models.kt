package ai.fillmate.core.model

/** The on-device copy of the user's answer bank: only what Tier 1 needs. */
data class KbSnapshot(
    val version: Long,
    val questions: List<SnapshotQuestion>,
)

data class SnapshotQuestion(
    val id: String,
    val answer: String,
    val aliases: List<String>,
)

/** One text field the service wants answered. `key` is opaque to core (autofill uses the AutofillId). */
data class FieldQuery(
    val key: String,
    val label: String,
)

/** How a field was (or wasn't) resolved. Sealed: every consumer must handle every case. */
sealed interface MatchResult {
    data class Alias(val questionId: String, val alias: String, val answer: String) : MatchResult
    data class Semantic(val questionId: String, val score: Double, val margin: Double, val answer: String) : MatchResult
    data object NoMatch : MatchResult
}

/** A Tier 1 candidate rejected because the label carries a qualifier the alias lacks. */
data class BlockedAlias(val questionId: String, val alias: String, val missingQualifier: String)

/**
 * Full explanation of one resolution. Autofill uses `result`; the Playground renders the whole
 * trace. Same object, same code path: that is what makes the Playground trustworthy.
 */
data class ResolutionTrace(
    val label: String,
    val normalizedTokens: List<String>,
    val qualifiers: Set<String>,
    val blocked: List<BlockedAlias>,
    val semanticCandidates: List<SemanticCandidate>,
    val result: MatchResult,
)

data class SemanticCandidate(val questionId: String, val score: Double, val blocked: Boolean)
