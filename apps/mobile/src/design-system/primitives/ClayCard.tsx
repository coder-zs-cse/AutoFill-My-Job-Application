import React from 'react';
import { Pressable, View, type ViewProps } from 'react-native';
import { tokens } from '../tokens/tokens.generated';
import { clayShadow, useThemeColors } from '../tokens/theme';

type Props = ViewProps & { onPress?: () => void };

/** Raised clay surface. Pressable when `onPress` is given (depth flips to "pressed" while held). */
export function ClayCard({ onPress, style, children, ...rest }: Props) {
  const colors = useThemeColors();
  const base = {
    backgroundColor: colors.surface,
    borderRadius: tokens.radius.card,
    padding: tokens.space.card,
  };

  if (!onPress) {
    return (
      <View {...rest} style={[base, { boxShadow: clayShadow('raised', colors) }, style]}>
        {children}
      </View>
    );
  }
  return (
    <Pressable
      {...rest}
      onPress={onPress}
      style={({ pressed }) => [
        base,
        { boxShadow: clayShadow(pressed ? 'pressed' : 'raised', colors) },
        style as object,
      ]}>
      {children}
    </Pressable>
  );
}
