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
 * Phase 1 task: implement, then make MatchingVectorsTest pass. No NLP library: the Python
 * side must produce byte-identical tokens, and a library would make that impossible.
 */
class LabelNormalizer(private val rules: MatchingRules) {
    fun normalize(text: String): List<String> = TODO("phase 1: implement per KDoc; verify with MatchingVectorsTest")
}
