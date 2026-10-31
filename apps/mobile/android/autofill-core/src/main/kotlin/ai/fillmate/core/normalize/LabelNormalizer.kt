package ai.fillmate.core.normalize

/**
 * Turns a raw label ("What is your Current CTC (in LPA)?") into tokens (["current","ctc","lpa"]).
 * Steps, in this exact order (spec: .claude/matching-pipeline.md §Normalize):
 *  1. lowercase
 *  2. remove possessive suffixes ("father's" -> "father")
 *  3. replace every non [a-z0-9] run with a single space
 *  4. split on spaces, drop stopwords
 *  5. apply the FIRST matching lemma rule to each token
 * Aliases and qualifiers go through this same function, so both sides always agree.
 *
 * No NLP library: the Python side must produce byte-identical tokens, and a library would make
 * that impossible. The contract is packages/contracts/matching/vectors.json.
 */
class LabelNormalizer(private val rules: MatchingRules) {
    // "Word end" = not followed by [a-z0-9]; text is already lowercase when these run.
    private val possessives = rules.possessiveSuffixes.map { Regex(Regex.escape(it) + "(?![a-z0-9])") }

    fun normalize(text: String): List<String> {
        var s = text.lowercase()
        possessives.forEach { s = it.replace(s, "") }
        return NON_ALNUM.replace(s, " ")
            .split(' ')
            .filter { it.isNotEmpty() && it !in rules.stopwords }
            .map(::lemmatize)
    }

    private fun lemmatize(token: String): String {
        val rule = rules.lemmaRules.firstOrNull { applies(it, token) } ?: return token
        return token.dropLast(rule.suffix.length) + rule.replace
    }

    private fun applies(rule: MatchingRules.LemmaRule, token: String): Boolean {
        if (!token.endsWith(rule.suffix) || token.length < rule.minLength) return false
        val before = token.getOrNull(token.length - rule.suffix.length - 1) ?: return true
        return rule.notAfter.orEmpty().none { it == before.toString() }
    }

    private companion object {
        val NON_ALNUM = Regex("[^a-z0-9]+")
    }
}
