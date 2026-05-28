from pydantic import BaseModel, Field


class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1)
    email: str = Field(..., pattern=r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
    topic: str = Field(..., min_length=1)
    message: str = Field(..., min_length=1)


class ContactResponse(BaseModel):
    success: bool
    message: str
