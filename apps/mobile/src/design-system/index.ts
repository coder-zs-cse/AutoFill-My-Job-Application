// Public API of the design system. Features import from '@design-system' only, never deep paths.
export { tokens } from './tokens/tokens.generated';
export type { TagKind, TypeRole } from './tokens/tokens.generated';
export { useThemeColors, clayShadow } from './tokens/theme';
export { Text } from './primitives/Text';
export { ClayCard } from './primitives/ClayCard';
export { ClayButton } from './primitives/ClayButton';
export { ClayInput } from './primitives/ClayInput';
export { MethodTag } from './primitives/MethodTag';
export { createScreenPlaceholder } from './patterns/ScreenPlaceholder';
