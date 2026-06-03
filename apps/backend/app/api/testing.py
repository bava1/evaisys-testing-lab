from fastapi import APIRouter, status
from fastapi.responses import JSONResponse

from app.core.testing_runner import (
    TestRunAlreadyInProgressError,
    build_testing_run_diagnostics,
    get_repo_root,
    run_playwright_tests,
)
from app.schemas.testing import TestingRunResponse

router = APIRouter(prefix="/testing", tags=["testing"])


@router.post("/run", response_model=TestingRunResponse)
def run_testing_suite() -> TestingRunResponse | JSONResponse:
    try:
        return run_playwright_tests()
    except TestRunAlreadyInProgressError as error:
        conflict_response = TestingRunResponse(
            status="running",
            exitCode=None,
            stdout="",
            stderr=str(error),
            durationMs=0,
            reportPath=None,
            reportAvailable=False,
            diagnostics=build_testing_run_diagnostics(
                repo_root=get_repo_root(),
                frontend_available=False,
                backend_available=False,
                warmup=[],
            ),
        )
        return JSONResponse(
            status_code=status.HTTP_409_CONFLICT,
            content=conflict_response.model_dump(),
        )
