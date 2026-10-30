import type { HttpClient } from '@core';
import type { KbRepository } from '../domain/KbRepository';
import type { NewQuestion, Question, QuestionFilter } from '../domain/Question';
import type { QuestionDto } from './dto';
import { toQuestion } from './mappers';

/** ADAPTER: implements the KbRepository port over HTTP. Knows URLs and DTOs; nothing else does. */
export class KbApiRepository implements KbRepository {
  constructor(private readonly http: HttpClient) {}

  async list(filter: QuestionFilter): Promise<Question[]> {
    const q = new URLSearchParams();
    if (filter.search) q.set('search', filter.search);
    filter.categories?.forEach(c => q.append('category', c));
    filter.sources?.forEach(s => q.append('source', s));
    if (filter.answerType) q.set('answer_type', filter.answerType);
    const dtos = await this.http.get<QuestionDto[]>(`/questions?${q.toString()}`);
    return dtos.map(toQuestion);
  }

  async get(id: string) {
    return toQuestion(await this.http.get<QuestionDto>(`/questions/${id}`));
  }

  async create(input: NewQuestion) {
    return toQuestion(await this.http.post<QuestionDto>('/questions', toBody(input)));
  }

  async update(id: string, patch: Partial<NewQuestion>) {
    return toQuestion(await this.http.patch<QuestionDto>(`/questions/${id}`, toBody(patch)));
  }

  async remove(id: string) {
    await this.http.delete<void>(`/questions/${id}`);
  }

  async addAlias(questionId: string, phrase: string) {
    return toQuestion(await this.http.post<QuestionDto>(`/questions/${questionId}/aliases`, { phrase }));
  }

  async removeAlias(aliasId: string) {
    await this.http.delete<void>(`/aliases/${aliasId}`);
  }

  async moveAlias(aliasId: string, toQuestionId: string) {
    await this.http.post<void>(`/aliases/${aliasId}/move`, { to_question_id: toQuestionId });
  }
}

function toBody(input: Partial<NewQuestion>) {
  return {
    label: input.label,
    category: input.category,
    answer_type: input.answerType,
    answer: input.answer,
    aliases: input.aliases,
  };
}
