package ai.fillmate.core

import ai.fillmate.core.model.FieldQuery
import ai.fillmate.core.model.KbSnapshot
import ai.fillmate.core.model.MatchResult
import ai.fillmate.core.model.SnapshotQuestion
import ai.fillmate.core.normalize.LabelNormalizer
import ai.fillmate.core.normalize.MatchingRules
import ai.fillmate.core.resolve.Resolver
import com.google.gson.Gson
import com.google.gson.JsonObject
import org.junit.Assert.assertEquals
import org.junit.Test

/**
 * Runs every case in packages/contracts/matching/vectors.json. The Python backend runs the
 * same file (apps/api/tests/test_matching/test_vectors.py). Phase 1 is done when this passes.
 */
class MatchingVectorsTest {
    private val rules = MatchingRules.loadDefault()
    private val vectors: JsonObject = javaClass.classLoader!!.getResourceAsStream("vectors.json")!!
        .reader().use { Gson().fromJson(it, JsonObject::class.java) }

    private val snapshot = KbSnapshot(
        version = 1,
        questions = vectors.getAsJsonArray("kb").map { q ->
            val o = q.asJsonObject
            SnapshotQuestion(
                id = o["question_id"].asString,
                answer = "answer-of-${o["question_id"].asString}",
                aliases = o.getAsJsonArray("aliases").map { it.asString },
            )
        },
    )

    @Test
    fun everyVectorMatchesTheContract() {
        val normalizer = LabelNormalizer(rules)
        val resolver = Resolver(rules, semanticTier = null)

        vectors.getAsJsonArray("cases").forEach { c ->
            val case = c.asJsonObject
            val label = case["label"].asString
            val why = case["why"].asString

            assertEquals("normalize('$label'): $why", case["normalized"].asString, normalizer.normalize(label).joinToString(" "))

            val result = resolver.resolve(listOf(FieldQuery("f", label)), snapshot).getValue("f").result
            val expected = case["expected"]
            if (expected.isJsonNull) {
                assertEquals("'$label' must not match: $why", MatchResult.NoMatch, result)
            } else {
                val e = expected.asJsonObject
                val alias = result as? MatchResult.Alias ?: error("'$label' expected alias match, got $result. $why")
                assertEquals("question for '$label': $why", e["question_id"].asString, alias.questionId)
                assertEquals("alias for '$label': $why", e["alias"].asString, alias.alias)
            }
        }
    }
}
