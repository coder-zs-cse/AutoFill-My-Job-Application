import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fillmateNative } from '@core';
import type { NewQuestion, QuestionFilter } from '../domain/Question';
import { useKbRepository } from './KbRepositoryContext';

/** Query keys live with the feature that owns the data. Other features invalidate via these. */
export const kbKeys = {
  all: ['kb'] as const,
  list: (f: QuestionFilter) => [...kbKeys.all, 'list', f] as const,
  detail: (id: string) => [...kbKeys.all, 'detail', id] as const,
};

/**
 * USE CASES as hooks. Screens call these; they never call the repository or fetch.
 * Every KB write ends with `afterKbWrite`: refresh server state AND the native snapshot
 * the AutofillService reads. Forgetting the second half is the classic bug here:
 * the app shows the fix, Chrome keeps filling the old answer.
 */
function useAfterKbWrite() {
  const qc = useQueryClient();
  return async () => {
    await qc.invalidateQueries({ queryKey: kbKeys.all });
    await fillmateNative.kb.sync();
  };
}

export function useQuestions(filter: QuestionFilter) {
  const repo = useKbRepository();
  return useQuery({ queryKey: kbKeys.list(filter), queryFn: () => repo.list(filter) });
}

export function useQuestion(id: string) {
  const repo = useKbRepository();
  return useQuery({ queryKey: kbKeys.detail(id), queryFn: () => repo.get(id) });
}

export function useCreateQuestion() {
  const repo = useKbRepository();
  const after = useAfterKbWrite();
  return useMutation({ mutationFn: (input: NewQuestion) => repo.create(input), onSuccess: after });
}

export function useMoveAlias() {
  const repo = useKbRepository();
  const after = useAfterKbWrite();
  return useMutation({
    mutationFn: (v: { aliasId: string; toQuestionId: string }) => repo.moveAlias(v.aliasId, v.toQuestionId),
    onSuccess: after,
  });
}

// TODO(phase 2): useUpdateQuestion, useDeleteQuestion, useAddAlias, useRemoveAlias (same pattern).
