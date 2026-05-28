from pydantic import BaseModel


class Settings(BaseModel):
    PROJECT_NAME: str = "EVAISYS Testing Lab Backend"
    API_VERSION: str = "0.1.0"
    ALLOWED_ORIGINS: list[str] = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]


settings = Settings()
