import re
from functools import lru_cache

from app.matching.rules import LemmaRule, MatchingRules

_NON_ALNUM = re.compile(r"[^a-z0-9]+")


@lru_cache
def _possessive_patterns(rules: MatchingRules) -> tuple[re.Pattern[str], ...]:
    # "Word end" = not followed by [a-z0-9]; text is already lowercase when these run.
    return tuple(re.compile(re.escape(s) + r"(?![a-z0-9])") for s in rules.possessive_suffixes)


def _applies(rule: LemmaRule, token: str) -> bool:
    if not token.endswith(rule.suffix) or len(token) < rule.min_length:
        return False
    stem = token[: -len(rule.suffix)]
    return not stem or stem[-1] not in rule.not_after


def _lemmatize(token: str, rules: MatchingRules) -> str:
    rule = next((r for r in rules.lemma_rules if _applies(r, token)), None)
    return token if rule is None else token[: -len(rule.suffix)] + rule.replace


def normalize(text: str, rules: MatchingRules) -> list[str]:
    """Same 5 steps as autofill-core LabelNormalizer (.claude/matching-pipeline.md §Normalize)."""
    s = text.lower()
    for pattern in _possessive_patterns(rules):
        s = pattern.sub("", s)
    tokens = _NON_ALNUM.sub(" ", s).split()
    return [_lemmatize(t, rules) for t in tokens if t not in rules.stopwords]
