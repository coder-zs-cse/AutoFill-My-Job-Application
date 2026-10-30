package ai.fillmate.autofill.data.cache

import ai.fillmate.core.model.KbSnapshot

/**
 * The AutofillService reads the KB from HERE, never from the network and never from JS.
 * Why Kotlin owns this storage (not the RN app): the service can be woken by Chrome while the
 * RN runtime is not running at all. Single owner, single writer = no cross-runtime locking.
 */
interface KbSnapshotStore {
    fun current(): KbSnapshot?
    fun replace(snapshot: KbSnapshot)
}

/** Phase 1: lets the spike fill a Google Form from a hardcoded snapshot. Phase 2: Room-backed store. */
class InMemoryKbSnapshotStore(initial: KbSnapshot? = null) : KbSnapshotStore {
    @Volatile private var snapshot: KbSnapshot? = initial
    override fun current() = snapshot
    override fun replace(snapshot: KbSnapshot) { this.snapshot = snapshot }
}
