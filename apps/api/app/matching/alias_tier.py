"""Tier 1 on the server. Used by the playground-on-web (later) and by /resolve to skip labels the
device should already have matched. Same rules as AliasMatcher.kt."""

from collections.abc import Sequence
from dataclasses import dataclass
from functools import lru_cache

from app.matching.normalizer import normalize
from app.matching.rules import MatchingRules


@dataclass(frozen=True)
class AliasQuestion:
    question_id: str
    aliases: tuple[str, ...]


@dataclass(frozen=True)
class AliasMatch:
    question_id: str
    alias: str


@dataclass(frozen=True)
class BlockedAlias:
    question_id: str
    alias: str
    missing_qualifier: str


@dataclass(frozen=True)
class AliasOutcome:
    match: AliasMatch | None
    blocked: tuple[BlockedAlias, ...]


@lru_cache
def _qualifier_tokens(rules: MatchingRules) -> frozenset[str]:
    return frozenset(t for q in rules.qualifiers for t in normalize(q, rules))


def _contains_run(label: list[str], alias: list[str]) -> bool:
    return any(label[i : i + len(alias)] == alias for i in range(len(label) - len(alias) + 1))


def match_alias(label: str, questions: Sequence[AliasQuestion], rules: MatchingRules) -> AliasOutcome:
    """Contiguous alias match, qualifier blocking, longest alias wins, cross-question tie -> no match."""
    tokens = normalize(label, rules)
    qualifiers = _qualifier_tokens(rules)
    blocked: list[BlockedAlias] = []
    candidates: list[tuple[AliasMatch, int]] = []
    for q in questions:
        for alias in q.aliases:
            alias_tokens = normalize(alias, rules)
            # An alias that normalizes to nothing ("the") would match every label.
            if not alias_tokens or not _contains_run(tokens, alias_tokens):
                continue
            missing = next((t for t in tokens if t in qualifiers and t not in alias_tokens), None)
            if missing is not None:
                blocked.append(BlockedAlias(q.question_id, alias, missing))
            else:
                candidates.append((AliasMatch(q.question_id, alias), len(alias_tokens)))

    if not candidates:
        return AliasOutcome(None, tuple(blocked))
    longest = max(size for _, size in candidates)
    best = [m for m, size in candidates if size == longest]
    if len({m.question_id for m in best}) > 1:
        return AliasOutcome(None, tuple(blocked))
    return AliasOutcome(best[0], tuple(blocked))
