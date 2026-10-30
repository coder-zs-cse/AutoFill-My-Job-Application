package ai.fillmate.autofill.structure

import android.app.assist.AssistStructure
import android.app.assist.AssistStructure.ViewNode
import android.view.View
import android.view.autofill.AutofillId

/** One fillable text field found on the page. */
data class FieldCandidate(
    val key: String, // stable string form of autofillId, used as the map key in core
    val autofillId: AutofillId,
    val label: String,
    val labelSource: String, // which strategy produced the label (logged; shown in debug dumps)
)

data class ParsedPage(
    val packageName: String,
    val webDomain: String?,
    val fields: List<FieldCandidate>,
)

/**
 * STRATEGY: how to find a human label for a node depends on where the node came from.
 * Order matters: first strategy that returns non-blank wins.
 */
fun interface LabelExtractor {
    fun extract(node: ViewNode): String?
}

/**
 * Walks the AssistStructure tree and keeps TEXT fields only (spec: no dropdowns, radios,
 * checkboxes, uploads). Which ViewNode properties Chrome actually populates for Google Forms,
 * Greenhouse and Lever is UNKNOWN until the phase-1 spike: run StructureDumper first.
 */
class StructureParser(private val extractors: List<LabelExtractor>) {

    fun parse(structure: AssistStructure): ParsedPage {
        val fields = mutableListOf<FieldCandidate>()
        var webDomain: String? = null
        for (i in 0 until structure.windowNodeCount) {
            walk(structure.getWindowNodeAt(i).rootViewNode) { node ->
                if (webDomain == null) webDomain = node.webDomain
                val id = node.autofillId ?: return@walk
                if (node.autofillType != View.AUTOFILL_TYPE_TEXT) return@walk
                for (extractor in extractors) {
                    val label = extractor.extract(node)?.trim()
                    if (!label.isNullOrBlank()) {
                        fields += FieldCandidate(id.toString(), id, label, extractor.javaClass.simpleName)
                        break
                    }
                }
            }
        }
        return ParsedPage(structure.activityComponent.packageName, webDomain, fields)
    }

    private fun walk(node: ViewNode, visit: (ViewNode) -> Unit) {
        visit(node)
        for (i in 0 until node.childCount) walk(node.getChildAt(i), visit)
    }
}
