package ai.fillmate.autofill.data.remote

import ai.fillmate.core.model.KbSnapshot
import ai.fillmate.core.resolve.SemanticOutcome

/**
 * The slice of the backend the native side calls (.claude/api-contract.md). The RN app calls
 * everything else. Implementation (phase 2/3): OkHttp + the access token from SessionStore.
 */
interface FillmateApi {
    /** GET /kb/snapshot?since={version}. Returns null when the device is already current. */
    fun fetchSnapshot(sinceVersion: Long?): KbSnapshot?

    /** POST /resolve: Tier 2 batch. Called with a short client timeout. */
    fun resolveSemantic(labels: List<String>, pageContext: PageContext, timeoutMs: Long): Map<String, SemanticOutcome>

    /** POST /answer-ai: Tier 3, one field, synchronous. Called only from AiAnswerActivity. */
    fun answerWithAi(label: String, pageContext: PageContext): AiAnswer

    /** POST /fill-events: history + usage metering. Batched; retried from a local queue. */
    fun logFillEvents(events: List<FillEvent>)
}

data class PageContext(val packageName: String, val webDomain: String?, val pageTitle: String?)

/** Mirrors the LLM output contract. `status` drives which AI Answer state (S32b/c/d) is shown. */
data class AiAnswer(
    val status: Status,
    val answer: String?,
    val usedFactIds: List<String>,
    val missing: String?,
) {
    enum class Status { ANSWERED, INSUFFICIENT_INFO, NEEDS_USER_DECISION }
}

data class FillEvent(
    val sessionKey: String,
    val label: String,
    val method: String, // alias | semantic | ai | skipped
    val questionId: String?,
    val alias: String?,
    val value: String?,
    val webDomain: String?,
    val occurredAtEpochMs: Long,
)
