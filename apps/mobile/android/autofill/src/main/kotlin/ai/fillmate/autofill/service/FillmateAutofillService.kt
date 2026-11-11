package ai.fillmate.autofill.service

import ai.fillmate.autofill.di.AutofillGraph
import android.os.CancellationSignal
import android.service.autofill.AutofillService
import android.service.autofill.FillCallback
import android.service.autofill.FillRequest
import android.service.autofill.SaveCallback
import android.service.autofill.SaveRequest
import android.util.Log
import java.util.concurrent.Executors

/**
 * THIN framework adapter. All decisions live in [FillRequestHandler], which is testable without
 * a device. Rules for this class:
 *  - Never block the main thread; never call the LLM here (system timeout is a few seconds).
 *  - Always answer the callback exactly once: success(null) means "nothing to suggest".
 */
class FillmateAutofillService : AutofillService() {
    private val executor = Executors.newSingleThreadExecutor()
    private val handler by lazy { AutofillGraph.get(applicationContext).fillRequestHandler }

    override fun onFillRequest(request: FillRequest, cancellationSignal: CancellationSignal, callback: FillCallback) {
        val task = executor.submit {
            try {
                callback.onSuccess(handler.handle(request, this))
            } catch (e: Exception) {
                Log.w("FillmateAutofill", "fill request failed", e) // spec: log, then show nothing
                callback.onSuccess(null) // spec: unusable input shows nothing, no error UI
            }
        }
        cancellationSignal.setOnCancelListener { task.cancel(true) }
    }

    // We never use the framework's save flow: learning is explicit (History / Gaps), not automatic.
    override fun onSaveRequest(request: SaveRequest, callback: SaveCallback) = callback.onSuccess()

    override fun onDestroy() {
        executor.shutdownNow()
        super.onDestroy()
    }
}
