import React, { useMemo, type PropsWithChildren } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createHttpClient, env, nativeTokenProvider, queryClient } from '@core';
import { KbApiRepository, KbRepositoryProvider } from '@features/kb';

/**
 * COMPOSITION ROOT. The only place that knows concrete implementations.
 * Features declare ports; this file plugs adapters into them. Swapping an adapter
 * (fake repo in a demo build, a web transport later) is a one-line change here.
 */
export function AppProviders({ children }: PropsWithChildren) {
  const http = useMemo(() => createHttpClient(env.apiBaseUrl, nativeTokenProvider), []);
  const kbRepository = useMemo(() => new KbApiRepository(http), [http]);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <KbRepositoryProvider repository={kbRepository}>{children}</KbRepositoryProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
