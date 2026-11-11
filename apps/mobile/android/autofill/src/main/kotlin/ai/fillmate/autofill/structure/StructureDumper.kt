package ai.fillmate.autofill.structure

import android.app.assist.AssistStructure
import android.app.assist.AssistStructure.ViewNode
import android.util.Log
import java.lang.reflect.Method

/**
 * PHASE 1 SPIKE TOOL (debug builds only). Recursively logs every public ViewNode property
 * (via reflection) plus full HtmlInfo, so spike dumps do not miss fields when designing
 * LabelExtractors. Save logcat to docs/spikes/assist-structure/<site>.txt:
 *   adb logcat -s FillmateStructure
 */
object StructureDumper {
    private const val TAG = "FillmateStructure"
    /** Logcat truncates ~4k; leave headroom and continue on the next line. */
    private const val MAX_LOG_CHARS = 3500

    private val skipMethodNames = setOf(
        "getClass",
        "getChildAt", // needs index; children are walked explicitly
    )

    private val viewNodeAccessors: List<Method> by lazy {
        ViewNode::class.java.methods
            .filter { m ->
                m.parameterCount == 0 &&
                    (m.name.startsWith("get") || m.name.startsWith("is")) &&
                    m.name !in skipMethodNames
            }
            .sortedBy { it.name }
    }

    fun dump(structure: AssistStructure) {
        Log.d(TAG, "assistStructure windows=${structure.windowNodeCount} activity=${structure.activityComponent}")
        for (i in 0 until structure.windowNodeCount) {
            val window = structure.getWindowNodeAt(i)
            Log.d(
                TAG,
                "window[$i] title=${window.title} displayId=${window.displayId} " +
                    "bounds=${window.left},${window.top} ${window.width}x${window.height}",
            )
            dumpNode(window.rootViewNode, depth = 0)
        }
    }

    private fun dumpNode(n: ViewNode, depth: Int) {
        val indent = "  ".repeat(depth)
        val props = LinkedHashMap<String, String>()

        for (method in viewNodeAccessors) {
            val key = accessorKey(method.name)
            val value = runCatching { method.invoke(n) }.getOrElse { "ERR:${it.javaClass.simpleName}" }
            props[key] = stringify(value)
        }

        // Explicit HtmlInfo expansion (attributes are the usual label source on web).
        val html = n.htmlInfo
        if (html != null) {
            props["html.tag"] = html.tag ?: "null"
            props["html.attrs"] = html.attributes
                ?.joinToString(prefix = "[", postfix = "]") { "${it.first}=${it.second}" }
                ?: "null"
        } else {
            props["html.tag"] = "null"
            props["html.attrs"] = "null"
        }

        logChunked("$indent${props.entries.joinToString(" ") { "${it.key}=${it.value}" }}")
        for (c in 0 until n.childCount) dumpNode(n.getChildAt(c), depth + 1)
    }

    private fun accessorKey(methodName: String): String = when {
        methodName.startsWith("get") && methodName.length > 3 ->
            methodName[3].lowercaseChar() + methodName.substring(4)
        methodName.startsWith("is") && methodName.length > 2 ->
            methodName[2].lowercaseChar() + methodName.substring(3)
        else -> methodName
    }

    private fun stringify(value: Any?): String = when (value) {
        null -> "null"
        is Array<*> -> value.joinToString(prefix = "[", postfix = "]") { stringify(it) }
        is BooleanArray -> value.contentToString()
        is IntArray -> value.contentToString()
        is LongArray -> value.contentToString()
        is FloatArray -> value.contentToString()
        is DoubleArray -> value.contentToString()
        is CharArray -> value.concatToString()
        is CharSequence -> value.toString().replace('\n', ' ').replace('\r', ' ')
        else -> value.toString().replace('\n', ' ').replace('\r', ' ')
    }

    private fun logChunked(message: String) {
        if (message.length <= MAX_LOG_CHARS) {
            Log.d(TAG, message)
            return
        }
        var offset = 0
        var part = 0
        while (offset < message.length) {
            val end = (offset + MAX_LOG_CHARS).coerceAtMost(message.length)
            val suffix = if (end < message.length) " …" else ""
            val prefix = if (part == 0) "" else "…cont[$part] "
            Log.d(TAG, prefix + message.substring(offset, end) + suffix)
            offset = end
            part++
        }
    }
}
