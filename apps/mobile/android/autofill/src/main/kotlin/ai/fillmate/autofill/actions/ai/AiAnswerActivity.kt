package ai.fillmate.autofill.actions.ai

import android.app.Activity
import android.os.Bundle

/**
 * S32 / S32b / S32c / S32d. Opened over Chrome when the user taps "AutoFill with AI".
 * Flow: read field label + page context from the intent -> POST /answer-ai -> show state ->
 * user edits -> return a Dataset via EXTRA_AUTHENTICATION_RESULT -> finish().
 * Built native (Compose, phase 3) rather than RN: it must open fast over Chrome and cannot
 * wait for a JS runtime to boot. Visuals: design/stitch/S32*; tokens: ui/theme/ClayTokens.kt.
 */
class AiAnswerActivity : Activity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        TODO("phase 3")
    }
}
