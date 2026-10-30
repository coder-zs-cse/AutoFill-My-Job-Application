import React from 'react';
import { ActivityIndicator, Pressable } from 'react-native';
import { tokens } from '../tokens/tokens.generated';
import { clayShadow, useThemeColors } from '../tokens/theme';
import { Text } from './Text';

type Variant = 'primary' | 'secondary' | 'text' | 'destructive';

type Props = {
  label: string;
  onPress: () => void;
  variant?: Variant;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
};

export function ClayButton({ label, onPress, variant = 'primary', disabled, loading, fullWidth }: Props) {
  const colors = useThemeColors();
  const filled = variant === 'primary' || variant === 'secondary';
  const bg = variant === 'primary' ? colors.primary : colors.surface;
  const fg = variant === 'primary' ? colors.onPrimary : variant === 'destructive' ? colors.destructive : colors.link;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: disabled || loading }}
      disabled={disabled || loading}
      onPress={onPress}
      style={({ pressed }) => ({
        height: tokens.size.button,
        borderRadius: tokens.radius.pill,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: fullWidth ? 'stretch' : 'auto',
        opacity: disabled ? 0.5 : 1,
        backgroundColor: filled ? bg : 'transparent',
        boxShadow: filled ? clayShadow(pressed ? 'pressed' : 'raised', colors) : undefined,
      })}>
      {loading ? (
        <ActivityIndicator color={fg} />
      ) : (
        <Text variant="body" style={{ color: fg, fontWeight: '700' }}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}
