package ai.fillmate.autofill.structure

import android.app.assist.AssistStructure
import android.app.assist.AssistStructure.ViewNode
import android.util.Log

/**
 * PHASE 1 SPIKE TOOL (debug builds only). Logs every node so we learn what Chrome really exposes.
 * Run on: a Google Form, a Greenhouse form, a Lever form. Save the logcat output to
 * docs/spikes/assist-structure/<site>.txt and decide LabelExtractors' order from evidence.
 *   adb logcat -s FillmateStructure
 */
object StructureDumper {
    private const val TAG = "FillmateStructure"

    fun dump(structure: AssistStructure) {
        for (i in 0 until structure.windowNodeCount) {
            dumpNode(structure.getWindowNodeAt(i).rootViewNode, depth = 0)
        }
    }

    private fun dumpNode(n: ViewNode, depth: Int) {
        val html = n.htmlInfo?.let { info -> "<${info.tag} ${info.attributes?.joinToString { "${it.first}=${it.second}" }}>" }
        Log.d(
            TAG,
            "${"  ".repeat(depth)}id=${n.autofillId} type=${n.autofillType} class=${n.className} " +
                "hint=${n.hint} text=${n.text?.take(60)} hints=${n.autofillHints?.joinToString()} " +
                "idEntry=${n.idEntry} domain=${n.webDomain} html=$html",
        )
        for (c in 0 until n.childCount) dumpNode(n.getChildAt(c), depth + 1)
    }
}
