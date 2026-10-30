import React, { useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { ClayButton, ClayInput, Text, tokens, useThemeColors } from '@design-system';
import { useQuestions } from '../../application/kbQueries';
import { QuestionCard } from '../components/QuestionCard';

/**
 * S10 Knowledge Base home. Visual reference: design/stitch/S10_kb_home (+ S10b empty).
 * Reference skeleton showing the four states every data screen handles:
 * loading, error, empty, populated. Cursor: build the full layout from the Stitch export
 * using design-system primitives; keep data access in kbQueries.ts.
 */
export function KnowledgeBaseScreen({ onOpenQuestion }: { onOpenQuestion: (id: string) => void }) {
  const colors = useThemeColors();
  const [search, setSearch] = useState('');
  const { data, isPending, isError, refetch } = useQuestions({ search: search || undefined });

  return (
    <View style={{ flex: 1, backgroundColor: colors.canvas, padding: tokens.space.screen, gap: 16 }}>
      <ClayInput label="Search" placeholder="Search questions or aliases" value={search} onChangeText={setSearch} />
      {isPending ? (
        <ActivityIndicator color={colors.primary} />
      ) : isError ? (
        <View style={{ gap: 12 }}>
          <Text>Couldn't load your answers.</Text>
          <ClayButton label="Try again" variant="secondary" onPress={() => refetch()} />
        </View>
      ) : data.length === 0 ? (
        <Text tone="secondary">Your answer bank is empty. {/* TODO(S10b): EmptyState pattern */}</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={q => q.id}
          contentContainerStyle={{ gap: 12, paddingBottom: 120 }}
          renderItem={({ item }) => <QuestionCard question={item} onPress={() => onOpenQuestion(item.id)} />}
        />
      )}
    </View>
  );
}
