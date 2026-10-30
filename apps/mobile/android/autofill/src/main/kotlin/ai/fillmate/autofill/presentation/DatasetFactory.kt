package ai.fillmate.autofill.presentation

import ai.fillmate.autofill.structure.ParsedPage
import ai.fillmate.core.model.ResolutionTrace
import android.content.Context
import android.service.autofill.FillResponse

/**
 * Builds the suggestions the user sees under a field (S30 dropdown, S31 keyboard chips).
 * Per text field, in this order (spec §Autofill mechanism):
 *  1. Matched answer (Alias/Semantic): answer snippet + method tag, value = answer. Tap fills.
 *  2. "AutoFill with AI": Dataset with authentication IntentSender -> AiAnswerActivity.
 *  3. "Save for later": Dataset with authentication IntentSender -> SaveForLaterActivity.
 *
 * Constraints to respect (verify against current Android docs during phase 1):
 *  - Dropdown presentation is RemoteViews: limited view set, no custom shadows, so S30 is FLAT.
 *  - Inline (keyboard) suggestions need InlinePresentation built from the IME's InlinePresentationSpec
 *    in the FillRequest; the keyboard controls most styling (S31).
 *  - Each IntentSender needs a unique request code, or extras from one field leak into another.
 */
class DatasetFactory {
    fun build(context: Context, page: ParsedPage, traces: Map<String, ResolutionTrace>): FillResponse? =
        TODO("phase 1: matched-answer dataset only; phase 3: AI + Save-for-later datasets")
}
