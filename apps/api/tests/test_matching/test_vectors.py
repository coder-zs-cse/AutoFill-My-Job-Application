import json

import pytest

from app.matching.normalizer import normalize
from app.matching.rules import CONTRACTS, load_rules

VECTORS = json.loads((CONTRACTS / "vectors.json").read_text())


@pytest.mark.parametrize("case", VECTORS["cases"], ids=lambda c: c["label"])
def test_normalize_matches_contract(case):
    assert " ".join(normalize(case["label"], load_rules())) == case["normalized"], case["why"]

# Phase 2: add test_alias_tier_matches_contract once alias_tier is implemented.
