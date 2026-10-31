package ai.fillmate.autofill.service

import ai.fillmate.autofill.BuildConfig
import ai.fillmate.autofill.data.cache.KbSnapshotStore
import ai.fillmate.autofill.presentation.DatasetFactory
import ai.fillmate.autofill.structure.StructureDumper
import ai.fillmate.autofill.structure.StructureParser
import ai.fillmate.core.model.FieldQuery
import ai.fillmate.core.resolve.Resolver
import android.content.Context
import android.service.autofill.FillRequest
import android.service.autofill.FillResponse

/**
 * Orchestrates one fill request:  parse structure -> resolve labels -> build suggestions.
 * Each step is a collaborator injected by AutofillGraph, so each can be replaced in tests.
 */
class FillRequestHandler(
    private val parser: StructureParser,
    private val snapshots: KbSnapshotStore,
    private val resolver: Resolver,
    private val datasets: DatasetFactory,
) {
    fun handle(request: FillRequest, context: Context): FillResponse? {
        val structure = request.fillContexts.lastOrNull()?.structure ?: return null
        if (BuildConfig.DEBUG) StructureDumper.dump(structure) // phase-1 spike: before any early return
        val page = parser.parse(structure)
        if (page.fields.isEmpty()) return null

        val snapshot = snapshots.current() ?: return null // not synced yet: suggest nothing
        val traces = resolver.resolve(page.fields.map { FieldQuery(it.key, it.label) }, snapshot)

        return datasets.build(context, page, traces)
    }
}
