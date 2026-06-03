import os
import subprocess
import threading
import time
from pathlib import Path
import socket
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

from app.schemas.testing import (
    TestingRunDiagnostics,
    TestingRunResponse,
    TestingRunWarmupEntry,
)

PLAYWRIGHT_TIMEOUT_SECONDS = 240
PREFLIGHT_TIMEOUT_SECONDS = 3
PLAYWRIGHT_COMMAND = ["run", "test:e2e", "--", "--workers=1"]
PLAYWRIGHT_COMMAND_DISPLAY = "npm run test:e2e -- --workers=1"
PLAYWRIGHT_REPORT_INDEX = Path("playwright-tests") / "playwright-report" / "index.html"
FRONTEND_URL = "http://127.0.0.1:3000/login"
BACKEND_HEALTH_URL = "http://127.0.0.1:8000/health"
FRONTEND_WARMUP_URLS = [
    "http://127.0.0.1:3000/login",
    "http://127.0.0.1:3000/",
    "http://127.0.0.1:3000/tasks",
    "http://127.0.0.1:3000/requests",
    "http://127.0.0.1:3000/articles",
    "http://127.0.0.1:3000/contact",
    "http://127.0.0.1:3000/testing-lab",
]

_test_run_lock = threading.Lock()


class TestRunAlreadyInProgressError(RuntimeError):
    pass


def get_repo_root() -> Path:
    backend_dir = Path(__file__).resolve().parents[2]
    return backend_dir.parent.parent


def _get_npm_executable() -> str:
    return "npm.cmd" if os.name == "nt" else "npm"


def _check_http_endpoint(url: str) -> bool:
    request = Request(url, method="GET")

    try:
        with urlopen(request, timeout=PREFLIGHT_TIMEOUT_SECONDS) as response:
            return 200 <= response.status < 400
    except (HTTPError, URLError, TimeoutError, OSError, ValueError):
        return False


def _warm_up_frontend_routes() -> tuple[bool, list[TestingRunWarmupEntry]]:
    warmup_results: list[TestingRunWarmupEntry] = []
    frontend_available = False

    for url in FRONTEND_WARMUP_URLS:
        request = Request(url, method="GET")

        try:
            with urlopen(request, timeout=PREFLIGHT_TIMEOUT_SECONDS) as response:
                warmup_results.append(
                    TestingRunWarmupEntry(
                        url=url,
                        ok=True,
                        statusCode=response.status,
                        error=None,
                    )
                )
                frontend_available = True
        except HTTPError as error:
            warmup_results.append(
                TestingRunWarmupEntry(
                    url=url,
                    ok=True,
                    statusCode=error.code,
                    error=None,
                )
            )
            frontend_available = True
        except (URLError, TimeoutError, socket.timeout, OSError, ValueError) as error:
            error_reason = getattr(error, "reason", None)
            error_message = str(error_reason if error_reason is not None else error)
            warmup_results.append(
                TestingRunWarmupEntry(
                    url=url,
                    ok=False,
                    statusCode=None,
                    error=error_message,
                )
            )

    return frontend_available, warmup_results


def build_testing_run_diagnostics(
    repo_root: Path,
    frontend_available: bool,
    backend_available: bool,
    warmup: list[TestingRunWarmupEntry] | None = None,
) -> TestingRunDiagnostics:
    return TestingRunDiagnostics(
        warmup=warmup or [],
        command=PLAYWRIGHT_COMMAND_DISPLAY,
        cwd=str(repo_root),
        repoRoot=str(repo_root),
        frontendUrl=FRONTEND_URL,
        backendHealthUrl=BACKEND_HEALTH_URL,
        frontendAvailable=frontend_available,
        backendAvailable=backend_available,
    )


def _get_report_metadata(repo_root: Path, started_at_wall_time: float) -> tuple[str | None, bool]:
    report_file = repo_root / PLAYWRIGHT_REPORT_INDEX
    report_is_fresh = report_file.exists() and report_file.stat().st_mtime >= started_at_wall_time - 1

    if not report_is_fresh:
        return None, False

    return PLAYWRIGHT_REPORT_INDEX.as_posix(), True


def run_playwright_tests() -> TestingRunResponse:
    if not _test_run_lock.acquire(blocking=False):
        raise TestRunAlreadyInProgressError("A test run is already in progress.")

    started_at = time.perf_counter()
    started_at_wall_time = time.time()
    repo_root = get_repo_root()
    command = [_get_npm_executable(), *PLAYWRIGHT_COMMAND]

    try:
        backend_available = _check_http_endpoint(BACKEND_HEALTH_URL)
        frontend_available, warmup_results = _warm_up_frontend_routes()
        diagnostics = build_testing_run_diagnostics(
            repo_root=repo_root,
            frontend_available=frontend_available,
            backend_available=backend_available,
            warmup=warmup_results,
        )

        if not backend_available or not frontend_available:
            duration_ms = int((time.perf_counter() - started_at) * 1000)
            failure_reasons: list[str] = []

            if not backend_available:
                failure_reasons.append(
                    f"Backend preflight failed: {BACKEND_HEALTH_URL} is unavailable."
                )

            if not frontend_available:
                failure_reasons.append("Frontend is not available before test run.")

            return TestingRunResponse(
                status="failed",
                exitCode=-1,
                stdout="",
                stderr=" ".join(failure_reasons),
                durationMs=duration_ms,
                reportPath=None,
                reportAvailable=False,
                diagnostics=diagnostics,
            )

        completed_process = subprocess.run(
            command,
            cwd=repo_root,
            shell=False,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            timeout=PLAYWRIGHT_TIMEOUT_SECONDS,
            check=False,
        )
        duration_ms = int((time.perf_counter() - started_at) * 1000)
        report_path, report_available = _get_report_metadata(repo_root, started_at_wall_time)

        return TestingRunResponse(
            status="finished" if completed_process.returncode == 0 else "failed",
            exitCode=completed_process.returncode,
            stdout=completed_process.stdout or "",
            stderr=completed_process.stderr or "",
            durationMs=duration_ms,
            reportPath=report_path,
            reportAvailable=report_available,
            diagnostics=diagnostics,
        )
    except subprocess.TimeoutExpired as error:
        duration_ms = int((time.perf_counter() - started_at) * 1000)
        timeout_message = f"Playwright run timed out after {PLAYWRIGHT_TIMEOUT_SECONDS} seconds."
        stderr_parts = [error.stderr or "", timeout_message]
        stderr = "\n".join(part for part in stderr_parts if part)
        report_path, report_available = _get_report_metadata(repo_root, started_at_wall_time)
        diagnostics = build_testing_run_diagnostics(
            repo_root=repo_root,
            frontend_available=True,
            backend_available=True,
            warmup=[],
        )

        return TestingRunResponse(
            status="failed",
            exitCode=-1,
            stdout=error.stdout or "",
            stderr=stderr,
            durationMs=duration_ms,
            reportPath=report_path,
            reportAvailable=report_available,
            diagnostics=diagnostics,
        )
    except OSError as error:
        duration_ms = int((time.perf_counter() - started_at) * 1000)
        diagnostics = build_testing_run_diagnostics(
            repo_root=repo_root,
            frontend_available=True,
            backend_available=True,
            warmup=[],
        )
        return TestingRunResponse(
            status="failed",
            exitCode=-1,
            stdout="",
            stderr=str(error),
            durationMs=duration_ms,
            reportPath=None,
            reportAvailable=False,
            diagnostics=diagnostics,
        )
    finally:
        _test_run_lock.release()
