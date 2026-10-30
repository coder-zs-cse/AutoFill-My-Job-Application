/**
 * Wire shapes, exactly as the API sends them (see .claude/api-contract.md).
 * TODO(phase 2): replace with types generated from the FastAPI OpenAPI schema
 * (packages/contracts/openapi.json) so drift becomes a compile error.
 */
export interface AliasDto {
  id: string;
  phrase: string;
  times_suggested: number;
  times_chosen: number;
  times_overridden_ai: number;
  last_used_at: string | null;
}

export interface QuestionDto {
  id: string;
  label: string;
  category: string;
  answer_type: 'short_text' | 'long_text';
  answer: string;
  source: 'manual' | 'resume' | 'gap';
  aliases: AliasDto[];
  updated_at: string;
}
