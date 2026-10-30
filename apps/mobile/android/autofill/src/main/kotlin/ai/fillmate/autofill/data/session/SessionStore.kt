package ai.fillmate.autofill.data.session

/**
 * SINGLE OWNER of auth tokens for the whole app (RN asks for tokens through the bridge).
 * Why one owner: refresh tokens usually ROTATE. If RN and Kotlin both refreshed, the second
 * refresh would present an already-used token and log the user out: the "no re-login" promise breaks.
 *
 * Phase 2 implementation: Jetpack DataStore + Tink AEAD, key in Android Keystore.
 * androidx.security-crypto (EncryptedSharedPreferences) is deprecated; do not use it.
 * Refresh must be serialized (one in-flight refresh; others await its result).
 */
interface SessionStore {
    fun save(accessToken: String, refreshToken: String, userId: String)
    fun accessToken(): String?
    /** Performs (or joins) a refresh. Returns the new access token, or null if the session is dead. */
    fun refresh(): String?
    fun clear()
}
