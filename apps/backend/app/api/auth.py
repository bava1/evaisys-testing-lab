from fastapi import APIRouter, HTTPException, status

from app.schemas.auth import DemoUser, LoginRequest, LoginResponse

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/login", response_model=LoginResponse)
def login(payload: LoginRequest) -> LoginResponse:
    if payload.username != "admin" or payload.password != "123456":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password",
        )

    user = DemoUser(username="admin", role="tester")
    return LoginResponse(success=True, user=user, token="demo-token")


@router.get("/me", response_model=DemoUser)
def me() -> DemoUser:
    return DemoUser(username="admin", role="tester")
