from typing import Protocol

from app.llm.contract import AnswerAiResult


class LlmProvider(Protocol):
    """Port. Services depend on this; openai_provider.py implements it. Model choice is server config."""

    async def answer_field(self, label: str, page_context: dict, kb_context: str) -> AnswerAiResult: ...
