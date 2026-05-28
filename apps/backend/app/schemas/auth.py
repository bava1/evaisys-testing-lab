from pydantic import BaseModel


class LoginRequest(BaseModel):
    username: str
    password: str


class DemoUser(BaseModel):
    username: str
    role: str


class LoginResponse(BaseModel):
    success: bool
    user: DemoUser
    token: str
