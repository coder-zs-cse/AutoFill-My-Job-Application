import { summarizeAliasInsight } from './aliasInsight';

const base = { timesSuggested: 0, timesChosen: 0, timesOverriddenWithAi: 0, lastUsedAt: null };

describe('summarizeAliasInsight', () => {
  it('does not judge an alias that was never suggested', () => {
    expect(summarizeAliasInsight(base)).toEqual({ chosenRate: null, health: 'unused' });
  });

  it('computes chosen rate (S13: 9 of 12 = 75%)', () => {
    const s = summarizeAliasInsight({ ...base, timesSuggested: 12, timesChosen: 9, timesOverriddenWithAi: 3 });
    expect(s.chosenRate).toBe(0.75);
    expect(s.health).toBe('healthy');
  });

  it('flags aliases the user keeps replacing with AI, but only with enough evidence', () => {
    const few = summarizeAliasInsight({ ...base, timesSuggested: 2, timesOverriddenWithAi: 2 });
    const many = summarizeAliasInsight({ ...base, timesSuggested: 10, timesChosen: 4, timesOverriddenWithAi: 6 });
    expect(few.health).toBe('healthy');
    expect(many.health).toBe('often_overridden');
  });
});
