from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env")

    database_url: str = "postgresql+asyncpg://fillmate:fillmate@localhost:5432/fillmate"
    redis_url: str = "redis://localhost:6379/0"
    jwt_secret: str = "change-me"
    access_token_ttl_minutes: int = 30
    refresh_token_ttl_days: int = 180
    openai_api_key: str = ""
    llm_model: str = ""
    embedding_model: str = ""
    semantic_min_score: float = 0.85
    semantic_min_margin: float = 0.08


settings = Settings()
