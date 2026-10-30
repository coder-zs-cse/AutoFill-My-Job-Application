import type { Question, QuestionCategory } from '../domain/Question';
import type { QuestionDto } from './dto';

const CATEGORIES: readonly QuestionCategory[] = [
  'personal', 'contact', 'work', 'compensation', 'education', 'links', 'other',
];

/** The single place where wire format becomes domain. Unknown enum values degrade safely. */
export function toQuestion(dto: QuestionDto): Question {
  return {
    id: dto.id,
    label: dto.label,
    category: (CATEGORIES as readonly string[]).includes(dto.category)
      ? (dto.category as QuestionCategory)
      : 'other',
    answerType: dto.answer_type,
    answer: dto.answer,
    source: dto.source,
    updatedAt: new Date(dto.updated_at),
    aliases: dto.aliases.map(a => ({
      id: a.id,
      phrase: a.phrase,
      insight: {
        timesSuggested: a.times_suggested,
        timesChosen: a.times_chosen,
        timesOverriddenWithAi: a.times_overridden_ai,
        lastUsedAt: a.last_used_at ? new Date(a.last_used_at) : null,
      },
    })),
  };
}
