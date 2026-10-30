from app.matching.rules import MatchingRules


def normalize(text: str, rules: MatchingRules) -> list[str]:
    """Same 5 steps as autofill-core LabelNormalizer (.claude/matching-pipeline.md §Normalize)."""
    raise NotImplementedError("phase 2: port the Kotlin implementation; vectors must pass")
