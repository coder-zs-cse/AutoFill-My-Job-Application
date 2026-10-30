import type { AliasInsight } from './Question';

export type AliasHealth = 'unused' | 'healthy' | 'often_overridden';

export interface AliasInsightSummary {
  chosenRate: number | null; // 0..1, null when never suggested
  health: AliasHealth;
}

/** Below this many suggestions we don't judge an alias; too little evidence. */
export const MIN_SUGGESTIONS_TO_JUDGE = 5;
const OVERRIDE_WARNING_RATE = 0.4;

/**
 * Pure domain rule behind S13 ("Chosen 75% of the time"). No React, no I/O,
 * so it is unit-tested directly. The app only *flags*; removal stays a user decision.
 */
export function summarizeAliasInsight(i: AliasInsight): AliasInsightSummary {
  if (i.timesSuggested === 0) return { chosenRate: null, health: 'unused' };
  const chosenRate = i.timesChosen / i.timesSuggested;
  const overrideRate = i.timesOverriddenWithAi / i.timesSuggested;
  const health =
    i.timesSuggested >= MIN_SUGGESTIONS_TO_JUDGE && overrideRate >= OVERRIDE_WARNING_RATE
      ? 'often_overridden'
      : 'healthy';
  return { chosenRate, health };
}
