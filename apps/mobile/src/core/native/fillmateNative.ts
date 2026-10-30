import NativeFillmate from './specs/NativeFillmate';
import type { TokenProvider } from '../http/httpClient';

/**
 * Typed facade over the native module. Features import THIS, never the spec.
 * Why: the spec speaks codegen types (JSON strings); this file speaks domain types.
 * For the future web target, add `fillmateNative.web.ts` with the same exports;
 * Metro/webpack pick the platform file automatically.
 */
export type PlaygroundTier = 'alias' | 'semantic' | 'none';

export interface PlaygroundTrace {
  label: string;
  normalizedTokens: string[];
  qualifiers: string[];
  tier: PlaygroundTier;
  questionId: string | null;
  matchedAlias: string | null;
  answer: string | null;
  blocked: Array<{ questionId: string; alias: string; missingQualifier: string }>;
  semanticCandidates: Array<{ questionId: string; score: number; blocked: boolean }>;
  margin: number | null;
}

export const fillmateNative = {
  session: {
    save: NativeFillmate.saveSession,
    clear: NativeFillmate.clearSession,
  },
  kb: {
    sync: NativeFillmate.syncKb,
    version: NativeFillmate.getKbVersion,
  },
  async resolveForPlayground(label: string): Promise<PlaygroundTrace> {
    return JSON.parse(await NativeFillmate.resolveForPlayground(label)) as PlaygroundTrace;
  },
  autofill: {
    isEnabled: NativeFillmate.isAutofillServiceEnabled,
    openSettings: NativeFillmate.openAutofillSettings,
  },
};

export const nativeTokenProvider: TokenProvider = {
  getAccessToken: NativeFillmate.getAccessToken,
  refresh: NativeFillmate.refreshSession,
};
