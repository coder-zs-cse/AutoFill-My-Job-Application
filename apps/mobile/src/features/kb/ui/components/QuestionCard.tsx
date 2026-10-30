import React from 'react';
import { View } from 'react-native';
import { ClayCard, Text, tokens } from '@design-system';
import type { Question } from '../../domain/Question';

const MAX_CHIPS = 3;

/** Presentational only: props in, callbacks out. No hooks that fetch. (S10 list item) */
export function QuestionCard({ question, onPress }: { question: Question; onPress: () => void }) {
  const shown = question.aliases.slice(0, MAX_CHIPS);
  const hidden = question.aliases.length - shown.length;
  return (
    <ClayCard onPress={onPress} style={{ gap: 8 }}>
      <Text variant="title" numberOfLines={1}>
        {question.label}
      </Text>
      <Text tone="secondary" numberOfLines={1}>
        {question.answer}
      </Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
        {shown.map(a => (
          // TODO(S10): replace with design-system AliasChip once built.
          <Text key={a.id} variant="caption" style={{ paddingHorizontal: 10, paddingVertical: 4, borderRadius: tokens.radius.chip }}>
            {a.phrase}
          </Text>
        ))}
        {hidden > 0 ? <Text variant="caption" tone="secondary">+{hidden}</Text> : null}
      </View>
    </ClayCard>
  );
}
