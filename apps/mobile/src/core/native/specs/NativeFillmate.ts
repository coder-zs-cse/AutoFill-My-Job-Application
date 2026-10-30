/**
 * Turbo Native Module spec. React Native codegen reads this file (see `codegenConfig`
 * in package.json) and generates the Kotlin base class `NativeFillmateSpec`, which
 * android/app/.../bridge/FillmateModule.kt implements.
 *
 * Rules: only codegen-supported types (string, number, boolean, Object, arrays,
 * Promise). Keep it small: every method here is a contract you maintain in two languages.
 * Verify the exact spec rules against the RN docs for the version in package.json.
 */
import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  // Session: Kotlin is the single owner of tokens (see .claude/autofill-service.md).
  saveSession(accessToken: string, refreshToken: string, userId: string): Promise<void>;
  getAccessToken(): Promise<string | null>;
  refreshSession(): Promise<string | null>;
  clearSession(): Promise<void>;

  // KB snapshot: the AutofillService reads Room; RN asks Kotlin to re-sync after edits.
  syncKb(): Promise<number>; // resolves with the synced KB version
  getKbVersion(): Promise<number>;

  // Same resolver code path as real autofill (Playground). Returns JSON-encoded trace.
  resolveForPlayground(label: string): Promise<string>;

  // Onboarding / settings status.
  isAutofillServiceEnabled(): Promise<boolean>;
  openAutofillSettings(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('Fillmate');
