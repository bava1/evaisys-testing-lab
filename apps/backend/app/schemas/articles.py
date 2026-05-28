from pydantic import BaseModel, Field


class Article(BaseModel):
    id: int
    title: str = Field(..., min_length=1)
    category: str = Field(..., min_length=1)
    summary: str = Field(..., min_length=1)
    content: str = Field(..., min_length=1)
