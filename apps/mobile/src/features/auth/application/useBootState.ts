import { useEffect, useState } from 'react';
import { nativeTokenProvider } from '@core';

export type BootState = 'loading' | 'signedOut' | 'onboarding' | 'ready';

/**
 * Decides which navigator RootNavigator renders. "No re-login ever": a stored refresh
 * token in the Kotlin session means signed in, even offline.
 * TODO(phase 2): read `onboarded_at` from GET /me (cached) to choose onboarding vs ready,
 * and re-run when sign-in / sign-out happens (expose a tiny session event from auth).
 */
export function useBootState(): BootState {
  const [state, setState] = useState<BootState>('loading');
  useEffect(() => {
    nativeTokenProvider
      .getAccessToken()
      .then(token => setState(token ? 'ready' : 'signedOut'))
      .catch(() => setState('signedOut'));
  }, []);
  return state;
}
