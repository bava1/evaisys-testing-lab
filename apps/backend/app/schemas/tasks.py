from pydantic import BaseModel, Field


class Task(BaseModel):
    id: int
    title: str = Field(...)
    completed: bool = False


class TaskCreate(BaseModel):
    title: str = Field(...)


class TaskUpdate(BaseModel):
    title: str | None = Field(default=None, min_length=1)
    completed: bool | None = None
