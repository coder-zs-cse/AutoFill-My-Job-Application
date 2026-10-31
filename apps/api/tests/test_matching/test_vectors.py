import json

import pytest

from app.matching.alias_tier import AliasMatch, AliasQuestion, match_alias
from app.matching.normalizer import normalize
from app.matching.rules import CONTRACTS, load_rules

VECTORS = json.loads((CONTRACTS / "vectors.json").read_text())


@pytest.mark.parametrize("case", VECTORS["cases"], ids=lambda c: c["label"])
def test_normalize_matches_contract(case):
    assert " ".join(normalize(case["label"], load_rules())) == case["normalized"], case["why"]


QUESTIONS = [AliasQuestion(q["question_id"], tuple(q["aliases"])) for q in VECTORS["kb"]]


@pytest.mark.parametrize("case", VECTORS["cases"], ids=lambda c: c["label"])
def test_alias_tier_matches_contract(case):
    match = match_alias(case["label"], QUESTIONS, load_rules()).match
    expected = case["expected"]
    if expected is None:
        assert match is None, case["why"]
    else:
        assert match == AliasMatch(expected["question_id"], expected["alias"]), case["why"]
