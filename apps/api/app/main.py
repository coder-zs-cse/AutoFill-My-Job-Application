from fastapi import FastAPI

from app.api.routes import health


def create_app() -> FastAPI:
    app = FastAPI(title="Fillmate API", version="0.1.0")
    app.include_router(health.router, tags=["health"])
    # Phase 2+: auth, questions, aliases, kb (snapshot), stories, preferences, resume,
    # resolve, answer_ai, fill_events, gaps, playground, me. See .claude/api-contract.md.
    return app


app = create_app()
