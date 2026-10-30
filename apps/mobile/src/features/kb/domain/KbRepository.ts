import type { NewQuestion, Question, QuestionFilter } from './Question';

/**
 * PORT. The application layer depends on this interface, not on HTTP.
 * Implementations: data/KbApiRepository (real), test fakes (in __tests__).
 * Why an interface with one real implementation is justified here: it is the seam
 * that lets every use-case hook be tested without a server, and lets a future web
 * build swap transport without touching screens.
 */
export interface KbRepository {
  list(filter: QuestionFilter): Promise<Question[]>;
  get(id: string): Promise<Question>;
  create(input: NewQuestion): Promise<Question>;
  update(id: string, patch: Partial<NewQuestion>): Promise<Question>;
  remove(id: string): Promise<void>;
  addAlias(questionId: string, phrase: string): Promise<Question>;
  removeAlias(aliasId: string): Promise<void>;
  /** Re-point one alias to another question. Nothing else changes (FR: user-decided only). */
  moveAlias(aliasId: string, toQuestionId: string): Promise<void>;
}
