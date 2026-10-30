import React from 'react';
import { View } from 'react-native';
import { tokens, type TagKind } from '../tokens/tokens.generated';
import { Text } from './Text';

const DEFAULT_LABEL: Record<TagKind, string> = {
  alias: 'Alias',
  semantic: 'Semantic',
  ai: 'AI',
  skipped: 'Skipped',
  gap: 'Needs info',
  error: 'Error',
};

/**
 * Small pill that tells the user HOW an answer was chosen. Used in History, Playground,
 * Question detail and Import review. `detail` renders e.g. "Alias: current ctc".
 * Colour is never the only signal: the label always names the method.
 */
export function MethodTag({ kind, detail }: { kind: TagKind; detail?: string }) {
  const c = tokens.tag[kind];
  return (
    <View
      style={{
        height: tokens.size.tag,
        paddingHorizontal: 10,
        borderRadius: tokens.size.tag / 2,
        backgroundColor: c.bg,
        justifyContent: 'center',
        alignSelf: 'flex-start',
      }}>
      <Text variant="caption" style={{ color: c.fg, fontWeight: '600' }}>
        {detail ? `${DEFAULT_LABEL[kind]}: ${detail}` : DEFAULT_LABEL[kind]}
      </Text>
    </View>
  );
}
