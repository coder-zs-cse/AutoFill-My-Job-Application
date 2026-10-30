package ai.fillmate.core.normalize

import com.google.gson.Gson
import com.google.gson.annotations.SerializedName

/**
 * Mirrors packages/contracts/matching/rules.json, which is packaged as a classpath resource
 * (see autofill-core/build.gradle). The Python backend reads the very same file.
 */
data class MatchingRules(
    val version: Int,
    @SerializedName("possessive_suffixes") val possessiveSuffixes: List<String>,
    val stopwords: Set<String>,
    val qualifiers: Set<String>,
    @SerializedName("lemma_rules") val lemmaRules: List<LemmaRule>,
) {
    data class LemmaRule(
        val suffix: String,
        val replace: String,
        @SerializedName("min_length") val minLength: Int,
        @SerializedName("not_after") val notAfter: List<String>? = null,
    )

    companion object {
        fun loadDefault(): MatchingRules {
            val stream = requireNotNull(MatchingRules::class.java.classLoader?.getResourceAsStream("rules.json")) {
                "rules.json missing from classpath; check sourceSets in autofill-core/build.gradle"
            }
            return stream.reader().use { Gson().fromJson(it, MatchingRules::class.java) }
        }
    }
}
