from typing import Literal

from pydantic import BaseModel


TestingRunStatus = Literal["finished", "failed", "running"]


class TestingRunWarmupEntry(BaseModel):
    url: str
    ok: bool
    statusCode: int | None
    error: str | None


class TestingRunDiagnostics(BaseModel):
    warmup: list[TestingRunWarmupEntry]
    command: str
    cwd: str
    repoRoot: str
    frontendUrl: str
    backendHealthUrl: str
    frontendAvailable: bool
    backendAvailable: bool


class TestingRunResponse(BaseModel):
    status: TestingRunStatus
    exitCode: int | None
    stdout: str
    stderr: str
    durationMs: int
    reportPath: str | None
    reportAvailable: bool
    diagnostics: TestingRunDiagnostics
