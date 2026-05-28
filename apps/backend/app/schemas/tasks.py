from pydantic import BaseModel, Field


class Task(BaseModel):
    id: int
    title: str = Field(..., min_length=1)
    completed: bool = False


class TaskCreate(BaseModel):
    title: str = Field(..., min_length=1)


class TaskUpdate(BaseModel):
    title: str | None = Field(default=None, min_length=1)
    completed: bool | None = None
