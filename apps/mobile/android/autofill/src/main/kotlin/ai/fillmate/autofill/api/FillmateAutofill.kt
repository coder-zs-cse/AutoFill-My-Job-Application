package ai.fillmate.autofill.api

import ai.fillmate.autofill.di.AutofillGraph
import ai.fillmate.core.model.FieldQuery
import ai.fillmate.core.model.ResolutionTrace
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.provider.Settings
import android.view.autofill.AutofillManager

/**
 * FACADE: the only entry point the app module (and its RN bridge) may use. The bridge stays a
 * dumb translator (JS types <-> these calls); internals of this module can change freely.
 */
class FillmateAutofill(private val context: Context) {
    private val graph get() = AutofillGraph.get(context)

    fun isServiceEnabled(): Boolean =
        context.getSystemService(AutofillManager::class.java)?.hasEnabledAutofillServices() == true

    fun openServiceSettings() {
        val intent = Intent(Settings.ACTION_REQUEST_SET_AUTOFILL_SERVICE)
            .setData(Uri.parse("package:${context.packageName}"))
            .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        context.startActivity(intent)
    }

    fun kbVersion(): Long = graph.snapshotStore.current()?.version ?: 0

    /** Phase 2: fetch GET /kb/snapshot and replace the store. Returns the new version. */
    fun syncKb(): Long = TODO("phase 2")

    /** Same Resolver instance and snapshot as the AutofillService: the Playground's trust guarantee. */
    fun resolveForPlayground(label: String): ResolutionTrace? {
        val snapshot = graph.snapshotStore.current() ?: return null
        return graph.resolver.resolve(listOf(FieldQuery("playground", label)), snapshot)["playground"]
    }
}
