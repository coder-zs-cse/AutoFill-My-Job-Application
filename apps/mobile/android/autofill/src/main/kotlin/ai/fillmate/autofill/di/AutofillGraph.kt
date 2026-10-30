package ai.fillmate.autofill.di

import ai.fillmate.autofill.data.cache.InMemoryKbSnapshotStore
import ai.fillmate.autofill.data.cache.KbSnapshotStore
import ai.fillmate.autofill.presentation.DatasetFactory
import ai.fillmate.autofill.service.FillRequestHandler
import ai.fillmate.autofill.structure.LabelExtractors
import ai.fillmate.autofill.structure.StructureParser
import ai.fillmate.core.normalize.MatchingRules
import ai.fillmate.core.resolve.Resolver
import android.content.Context

/**
 * Manual dependency injection: the native composition root. Every concrete class is chosen HERE.
 * Why not Hilt: ~10 objects don't justify annotation processing and generated code you can't
 * read yet. Revisit if the graph grows past what fits on one screen.
 *
 * One instance per process, shared by the AutofillService, the auth activities and the RN bridge,
 * so they all see the same snapshot and the same session.
 */
class AutofillGraph private constructor(context: Context) {
    private val appContext = context.applicationContext

    val rules: MatchingRules by lazy { MatchingRules.loadDefault() }
    val snapshotStore: KbSnapshotStore by lazy { InMemoryKbSnapshotStore() } // phase 2: Room
    val resolver: Resolver by lazy { Resolver(rules, semanticTier = null) } // phase 3: HTTP SemanticTier

    val fillRequestHandler: FillRequestHandler by lazy {
        FillRequestHandler(
            parser = StructureParser(LabelExtractors.defaultOrder),
            snapshots = snapshotStore,
            resolver = resolver,
            datasets = DatasetFactory(),
        )
    }

    companion object {
        @Volatile private var instance: AutofillGraph? = null
        fun get(context: Context): AutofillGraph =
            instance ?: synchronized(this) { instance ?: AutofillGraph(context).also { instance = it } }
    }
}
