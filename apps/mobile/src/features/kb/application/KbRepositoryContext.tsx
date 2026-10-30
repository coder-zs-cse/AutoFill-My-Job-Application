import React, { createContext, useContext, type PropsWithChildren } from 'react';
import type { KbRepository } from '../domain/KbRepository';

/**
 * Dependency injection without a framework. The feature declares what it needs (a port);
 * the composition root (src/app/providers) decides which implementation to give it.
 * Tests wrap hooks in this provider with a fake repository.
 */
const KbRepositoryContext = createContext<KbRepository | null>(null);

export function KbRepositoryProvider({ repository, children }: PropsWithChildren<{ repository: KbRepository }>) {
  return <KbRepositoryContext.Provider value={repository}>{children}</KbRepositoryContext.Provider>;
}

export function useKbRepository(): KbRepository {
  const repo = useContext(KbRepositoryContext);
  if (!repo) throw new Error('useKbRepository must be used inside <KbRepositoryProvider>');
  return repo;
}
