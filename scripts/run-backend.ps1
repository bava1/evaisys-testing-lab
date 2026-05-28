$ErrorActionPreference = "Stop"

$rootDir = Split-Path -Parent $PSScriptRoot
$backendDir = Join-Path $rootDir "apps/backend"
$venvDir = Join-Path $backendDir ".venv"
$activateScript = Join-Path $venvDir "Scripts/Activate.ps1"
$uvicornExe = Join-Path $venvDir "Scripts/uvicorn.exe"

if (-not (Test-Path $venvDir)) {
    Write-Host "Run scripts/setup-backend.ps1 first"
    exit 1
}

Push-Location $backendDir
try {
    . $activateScript
    & $uvicornExe app.main:app --reload
}
finally {
    Pop-Location
}
