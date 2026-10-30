import { QueryClient } from '@tanstack/react-query';
import { ApiError } from '../http/ApiError';

/** Server state lives in TanStack Query. There is no global client-state store yet (YAGNI). */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      retry: (failures, error) =>
        error instanceof ApiError && error.kind === 'network' && failures < 2,
    },
  },
});
