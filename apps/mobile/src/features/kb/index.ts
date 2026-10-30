/**
 * PUBLIC API of the kb feature. Other features and src/app import ONLY from here
 * (enforced by ESLint). Anything not exported is private and free to change.
 */
import { createScreenPlaceholder } from '@design-system';

// Types other features legitimately need
export type { Question, QuestionCategory, NewQuestion } from './domain/Question';
export type { KbRepository } from './domain/KbRepository';

// Wiring (used by the composition root)
export { KbApiRepository } from './data/KbApiRepository';
export { KbRepositoryProvider } from './application/KbRepositoryContext';

// Use cases other features call (history, gaps, playground reuse these)
export { kbKeys, useQuestions, useQuestion, useCreateQuestion, useMoveAlias } from './application/kbQueries';

// Screens
export { KnowledgeBaseScreen } from './ui/screens/KnowledgeBaseScreen';
export const QuestionDetailScreen = createScreenPlaceholder('S11_question_detail');
export const AddQuestionScreen = createScreenPlaceholder('S12_add_question');
