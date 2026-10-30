import React from 'react';
import { View } from 'react-native';
import { Text } from '../primitives/Text';
import { useThemeColors } from '../tokens/theme';

/**
 * Temporary stand-in so navigation is fully wired before screens exist.
 * Each feature's index.ts exports `createScreenPlaceholder('S16_story_editor')` until
 * the real screen is built from design/stitch/S16_story_editor/. Delete when none remain.
 */
export function createScreenPlaceholder(screenId: string) {
  function Placeholder() {
    const colors = useThemeColors();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.canvas }}>
        <Text variant="title">{screenId}</Text>
        <Text tone="secondary">Not built yet. See design/stitch/{screenId}/</Text>
      </View>
    );
  }
  Placeholder.displayName = `Placeholder(${screenId})`;
  return Placeholder;
}
