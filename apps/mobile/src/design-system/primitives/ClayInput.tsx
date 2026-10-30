import React from 'react';
import { TextInput, View, type TextInputProps } from 'react-native';
import { tokens } from '../tokens/tokens.generated';
import { clayShadow, useThemeColors } from '../tokens/theme';
import { Text } from './Text';

type Props = TextInputProps & { label: string; error?: string; helper?: string };

/** Concave ("pressed-in") field with label above and helper/error below. */
export function ClayInput({ label, error, helper, multiline, style, ...rest }: Props) {
  const colors = useThemeColors();
  return (
    <View style={{ gap: 6 }}>
      <Text variant="label" tone="secondary">
        {label}
      </Text>
      <TextInput
        {...rest}
        multiline={multiline}
        accessibilityLabel={label}
        placeholderTextColor={colors.placeholder}
        style={[
          {
            minHeight: tokens.size.input,
            borderRadius: tokens.radius.input,
            paddingHorizontal: 16,
            paddingVertical: multiline ? 14 : 0,
            backgroundColor: colors.canvas,
            color: colors.textPrimary,
            fontFamily: tokens.type.family,
            fontSize: tokens.type.body.size,
            boxShadow: clayShadow('pressed', colors),
            textAlignVertical: multiline ? 'top' : 'center',
          },
          error ? { borderWidth: 1.5, borderColor: tokens.tag.error.fg } : null,
          style,
        ]}
      />
      {error || helper ? (
        <Text variant="caption" tone={error ? 'destructive' : 'secondary'}>
          {error ?? helper}
        </Text>
      ) : null}
    </View>
  );
}
