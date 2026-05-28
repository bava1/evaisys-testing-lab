$ErrorActionPreference = "Stop"

$rootDir = Split-Path -Parent $PSScriptRoot
$backendDir = Join-Path $rootDir "apps/backend"
$venvDir = Join-Path $backendDir ".venv"
$pythonExe = Join-Path $venvDir "Scripts/python.exe"
$activateScript = Join-Path $venvDir "Scripts/Activate.ps1"

Push-Location $backendDir
try {
    if (-not (Test-Path $venvDir)) {
        python -m venv .venv
    }

    . $activateScript
    & $pythonExe -m pip install -r requirements.txt

    Write-Host "Backend environment setup completed successfully."
}
finally {
    Pop-Location
}
