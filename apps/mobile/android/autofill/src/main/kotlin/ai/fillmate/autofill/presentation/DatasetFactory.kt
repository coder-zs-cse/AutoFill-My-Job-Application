package ai.fillmate.autofill.presentation

import ai.fillmate.autofill.R
import ai.fillmate.autofill.structure.ParsedPage
import ai.fillmate.core.model.MatchResult
import ai.fillmate.core.model.ResolutionTrace
import android.content.Context
import android.service.autofill.Dataset
import android.service.autofill.FillResponse
import android.view.autofill.AutofillValue
import android.widget.RemoteViews

/**
 * Builds the suggestions the user sees under a field (S30 dropdown, S31 keyboard chips).
 * Per text field, in this order (spec §Autofill mechanism):
 *  1. Matched answer (Alias/Semantic): answer snippet + method tag, value = answer. Tap fills.
 *  2. "AutoFill with AI": Dataset with authentication IntentSender -> AiAnswerActivity.
 *  3. "Save for later": Dataset with authentication IntentSender -> SaveForLaterActivity.
 *
 * Phase 1 builds (1) only. (2) and (3) arrive in phase 3.
 *
 * Constraints to respect (verify against current Android docs during phase 1):
 *  - Dropdown presentation is RemoteViews: limited view set, no custom shadows, so S30 is FLAT.
 *  - Inline (keyboard) suggestions need InlinePresentation built from the IME's InlinePresentationSpec
 *    in the FillRequest; the keyboard controls most styling (S31). Not built yet: dropdown only.
 *  - Each IntentSender needs a unique request code, or extras from one field leak into another.
 */
class DatasetFactory {
    /** Null when nothing matched: FillResponse.Builder.build() throws on a response with no datasets. */
    fun build(context: Context, page: ParsedPage, traces: Map<String, ResolutionTrace>): FillResponse? {
        val response = FillResponse.Builder()
        var datasetCount = 0
        for (field in page.fields) {
            val result = traces[field.key]?.result ?: continue
            val (answer, source) = when (result) {
                is MatchResult.Alias -> result.answer to context.getString(R.string.suggestion_alias, result.alias)
                is MatchResult.Semantic -> result.answer to context.getString(R.string.suggestion_semantic)
                MatchResult.NoMatch -> continue
            }
            val presentation = RemoteViews(context.packageName, R.layout.autofill_suggestion).apply {
                setTextViewText(R.id.suggestion_answer, answer)
                setTextViewText(R.id.suggestion_source, source)
            }
            // API 33+ replaces Dataset.Builder(RemoteViews) and setValue(id, value) with
            // Dataset.Builder(Presentations) and setField(id, Field). The old pair works on 29-34+.
            val dataset = Dataset.Builder(presentation)
                .setValue(field.autofillId, AutofillValue.forText(answer))
                .build()
            response.addDataset(dataset)
            datasetCount++
        }
        return if (datasetCount == 0) null else response.build()
    }
}
