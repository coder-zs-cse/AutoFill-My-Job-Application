package ai.fillmate.autofill.data.cache

import ai.fillmate.core.model.KbSnapshot
import ai.fillmate.core.model.SnapshotQuestion

/**
 * Phase-1 spike data. Lives in src/debug so it cannot ship: src/release has a same-named stub
 * that returns null. Answers are fake on purpose. Replaced by the real synced snapshot in phase 2.
 */
object SpikeSnapshot {
    fun orNull(): KbSnapshot? = KbSnapshot(
        version = 0,
        questions = listOf(
            SnapshotQuestion("q_email", "alex.sharma@example.com", listOf("email", "email address", "e-mail address")),
            SnapshotQuestion("q_full_name", "Alex Sharma", listOf("full name", "name", "candidate name")),
            SnapshotQuestion("q_phone", "+91 98765 43210", listOf("phone number", "mobile number", "contact number", "phone")),
            SnapshotQuestion("q_current_ctc", "12 LPA", listOf("current ctc", "present ctc", "current salary")),
            SnapshotQuestion("q_expected_ctc", "15 LPA", listOf("expected ctc", "expected salary", "salary expectation")),
        ),
    )
}
