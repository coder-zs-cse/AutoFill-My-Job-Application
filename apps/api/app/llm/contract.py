from typing import Literal

from pydantic import BaseModel, model_validator


class AnswerAiResult(BaseModel):
    """LLM structured output (.claude/api-contract.md §POST /answer-ai)."""

    status: Literal["answered", "insufficient_info", "needs_user_decision"]
    answer: str | None
    used_fact_ids: list[str]
    missing: str | None

    @model_validator(mode="after")
    def hallucination_guard(self) -> "AnswerAiResult":
        # An answer that cites no facts is treated as a guess, never shown as an answer.
        if self.status == "answered" and not self.used_fact_ids:
            self.status = "insufficient_info"
            self.missing = self.missing or "No supporting facts found in your answer bank."
        return self
