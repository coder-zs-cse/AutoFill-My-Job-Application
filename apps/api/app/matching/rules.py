import json
from dataclasses import dataclass
from functools import lru_cache
from pathlib import Path

CONTRACTS = Path(__file__).resolve().parents[4] / "packages" / "contracts" / "matching"


@dataclass(frozen=True)
class LemmaRule:
    suffix: str
    replace: str
    min_length: int
    not_after: tuple[str, ...] = ()


@dataclass(frozen=True)
class MatchingRules:
    possessive_suffixes: tuple[str, ...]
    stopwords: frozenset[str]
    qualifiers: frozenset[str]
    lemma_rules: tuple[LemmaRule, ...]


@lru_cache
def load_rules() -> MatchingRules:
    raw = json.loads((CONTRACTS / "rules.json").read_text())
    return MatchingRules(
        possessive_suffixes=tuple(raw["possessive_suffixes"]),
        stopwords=frozenset(raw["stopwords"]),
        qualifiers=frozenset(raw["qualifiers"]),
        lemma_rules=tuple(
            LemmaRule(r["suffix"], r["replace"], r["min_length"], tuple(r.get("not_after", ())))
            for r in raw["lemma_rules"]
        ),
    )
