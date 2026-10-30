import React from 'react';
import { Text as RNText, type TextProps } from 'react-native';
import { tokens, type TypeRole } from '../tokens/tokens.generated';
import { useThemeColors } from '../tokens/theme';

type Props = TextProps & { variant?: TypeRole; tone?: 'primary' | 'secondary' | 'link' | 'destructive' };

const TONE = {
  primary: 'textPrimary',
  secondary: 'textSecondary',
  link: 'link',
  destructive: 'destructive',
} as const;

/** The only way screens render text. Variants map 1:1 to the type scale in tokens.json. */
export function Text({ variant = 'body', tone = 'primary', style, ...rest }: Props) {
  const colors = useThemeColors();
  const t = tokens.type[variant];
  return (
    <RNText
      {...rest}
      style={[
        {
          fontFamily: tokens.type.family,
          fontSize: t.size,
          lineHeight: t.lineHeight,
          fontWeight: String(t.weight) as '400',
          color: colors[TONE[tone]],
        },
        style,
      ]}
    />
  );
}
