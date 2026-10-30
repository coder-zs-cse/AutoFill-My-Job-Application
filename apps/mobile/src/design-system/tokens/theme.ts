import { useColorScheme, type BoxShadowValue } from 'react-native';
import { tokens, type ClayDepth, type ColorToken } from './tokens.generated';

export type ThemeColors = Record<ColorToken, string>;

export function useThemeColors(): ThemeColors {
  return useColorScheme() === 'dark' ? tokens.color.dark : tokens.color.light;
}

/**
 * Turns the clay recipe in tokens.json into RN `boxShadow` values.
 * `boxShadow` (incl. inset) needs the New Architecture; inset needs Android 10+,
 * which is why minSdk is 29. Measure scroll performance before stacking 4 shadows
 * on every list row (see .claude/design-system.md, "Performance budget").
 */
export function clayShadow(depth: ClayDepth, colors: ThemeColors): BoxShadowValue[] {
  return tokens.clay[depth].map(([offsetX, offsetY, blurRadius, colorToken, inset]) => ({
    offsetX,
    offsetY,
    blurRadius,
    color: colors[colorToken as ColorToken],
    inset: inset as boolean,
  }));
}
