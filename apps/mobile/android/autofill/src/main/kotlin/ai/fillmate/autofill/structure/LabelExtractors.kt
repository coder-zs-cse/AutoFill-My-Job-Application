package ai.fillmate.autofill.structure

/**
 * Candidate label sources, best first. Their real-world usefulness in Chrome is a HYPOTHESIS to
 * confirm with StructureDumper output (phase 1). Expect to reorder or add strategies after the spike;
 * e.g. Google Forms may only expose the question text as a sibling/ancestor node's text.
 */
object LabelExtractors {
    /** <input aria-label="..."> / placeholder / name exposed through HtmlInfo (web content). */
    val htmlAttributes = LabelExtractor { node ->
        val attrs = node.htmlInfo?.attributes?.associate { it.first to it.second } ?: return@LabelExtractor null
        attrs["aria-label"] ?: attrs["label"] ?: attrs["placeholder"] ?: attrs["name"]
    }

    /** Native views (and some web fields): the hint text. */
    val hint = LabelExtractor { it.hint }

    /** Developer-declared autofillHints, e.g. "emailAddress". Useful as a weak fallback. */
    val autofillHints = LabelExtractor { node -> node.autofillHints?.firstOrNull() }

    /** Resource id entry like "current_ctc" -> "current ctc". Last resort. */
    val idEntry = LabelExtractor { node -> node.idEntry?.replace('_', ' ') }

    val defaultOrder = listOf(htmlAttributes, hint, autofillHints, idEntry)
}
