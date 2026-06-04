from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.api.articles import router as articles_router
from app.api.auth import router as auth_router
from app.api.contact import router as contact_router
from app.api.health import router as health_router
from app.api.requests import router as requests_router
from app.api.tasks import router as tasks_router
from app.api.testing import router as testing_router
from app.core.config import settings
from app.core.testing_runner import get_repo_root

playwright_report_dir = get_repo_root() / "playwright-tests" / "playwright-report"

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Demo backend for automated testing workflows",
    version=settings.API_VERSION,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount(
    "/testing/report",
    StaticFiles(directory=str(playwright_report_dir), check_dir=False),
    name="testing-report",
)

app.include_router(health_router)
app.include_router(auth_router)
app.include_router(tasks_router)
app.include_router(requests_router)
app.include_router(articles_router)
app.include_router(contact_router)
app.include_router(testing_router)
