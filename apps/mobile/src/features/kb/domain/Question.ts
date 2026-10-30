/**
 * Domain types: the app's own vocabulary. No DTO field names (snake_case), no React,
 * no fetch. If the API renames a field, only data/mappers.ts changes.
 */
export type AnswerType = 'short_text' | 'long_text';
export type QuestionSource = 'manual' | 'resume' | 'gap';
export type QuestionCategory =
  | 'personal'
  | 'contact'
  | 'work'
  | 'compensation'
  | 'education'
  | 'links'
  | 'other';

export interface AliasInsight {
  timesSuggested: number;
  timesChosen: number;
  timesOverriddenWithAi: number;
  lastUsedAt: Date | null;
}

export interface Alias {
  id: string;
  phrase: string;
  insight: AliasInsight;
}

export interface Question {
  id: string;
  label: string;
  category: QuestionCategory;
  answerType: AnswerType;
  answer: string;
  source: QuestionSource;
  aliases: Alias[];
  updatedAt: Date;
}

export interface QuestionFilter {
  search?: string;
  categories?: QuestionCategory[];
  sources?: QuestionSource[];
  answerType?: AnswerType;
}

export type NewQuestion = Pick<Question, 'label' | 'category' | 'answerType' | 'answer'> & {
  aliases: string[];
};
