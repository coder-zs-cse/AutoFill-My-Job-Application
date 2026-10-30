# apps/api — FastAPI backend

Layered: `api/routes` (HTTP only) → `services` (business rules) → `repositories` (DB queries) → `models` (tables).
`schemas` = Pydantic request/response shapes. `matching/` and `llm/` are domain modules with their own ports.

```bash
python -m venv .venv && source .venv/bin/activate
pip install -e ".[dev]"
cp .env.example .env
uvicorn app.main:app --reload       # http://localhost:8000/health
pytest                              # test_vectors fails until phase 2 implements normalize()
```

Contracts: `.claude/api-contract.md` (endpoints), `.claude/data-model.md` (tables), `packages/contracts/matching/` (Tier 1 rules + vectors).
