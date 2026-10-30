// GENERATED from packages/design-tokens/tokens.json. Do not edit.
package ai.fillmate.autofill.ui.theme

// Plain ARGB longs and dp ints: no UI-toolkit dependency, so this compiles before Compose is added.
// Phase 3 adds ClayTheme.kt, which wraps these in Compose Color / Dp.

data class ClayColors(
    val canvas: Long,
    val surface: Long,
    val surfaceEnd: Long,
    val textPrimary: Long,
    val textSecondary: Long,
    val placeholder: Long,
    val primary: Long,
    val onPrimary: Long,
    val link: Long,
    val destructive: Long,
    val scrim: Long,
    val shadowDark: Long,
    val shadowLight: Long,
    val innerDark: Long,
    val innerLight: Long,
)

data class TagColors(val bg: Long, val fg: Long)

object ClayTokens {
    val Light = ClayColors(
        canvas = 0xFFF3F0FA,
        surface = 0xFFFFFFFF,
        surfaceEnd = 0xFFFAF8FF,
        textPrimary = 0xFF2A2440,
        textSecondary = 0xFF6B6485,
        placeholder = 0xFF9A93B3,
        primary = 0xFF7C6CF2,
        onPrimary = 0xFFFFFFFF,
        link = 0xFF5B4BD6,
        destructive = 0xFFB3261E,
        scrim = 0x592A2440,
        shadowDark = 0x2E6E5AB4,
        shadowLight = 0xE6FFFFFF,
        innerDark = 0x1A6E5AB4,
        innerLight = 0xCCFFFFFF,
    )
    val Dark = ClayColors(
        canvas = 0xFF1B1828,
        surface = 0xFF262238,
        surfaceEnd = 0xFF2B2740,
        textPrimary = 0xFFF1EEFA,
        textSecondary = 0xFFB3ACCB,
        placeholder = 0xFF8A83A3,
        primary = 0xFF9D90FF,
        onPrimary = 0xFF1B1828,
        link = 0xFFB8AEFF,
        destructive = 0xFFFFB4AB,
        scrim = 0x80000000,
        shadowDark = 0x73000000,
        shadowLight = 0x0DFFFFFF,
        innerDark = 0x40000000,
        innerLight = 0x0FFFFFFF,
    )

    object Tags {
        val alias = TagColors(bg = 0xFFC9F2E1, fg = 0xFF0F6A48)
        val semantic = TagColors(bg = 0xFFD4E6FF, fg = 0xFF1C4F94)
        val ai = TagColors(bg = 0xFFE6DCFF, fg = 0xFF5B3BB8)
        val skipped = TagColors(bg = 0xFFECEAF2, fg = 0xFF5E5874)
        val gap = TagColors(bg = 0xFFFFEDB8, fg = 0xFF7A5300)
        val error = TagColors(bg = 0xFFFFD9D4, fg = 0xFF9A2A1E)
    }

    object Radius {
        const val input = 20
        const val card = 28
        const val pill = 28
        const val sheet = 32
        const val chip = 16
    }

    object Space {
        const val unit = 4
        const val screen = 20
        const val card = 18
        const val gapSm = 12
        const val gapMd = 16
    }

    object Size {
        const val button = 56
        const val input = 56
        const val chip = 32
        const val tag = 24
        const val iconCircle = 40
    }
}
