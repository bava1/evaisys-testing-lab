$ErrorActionPreference = "Stop"

$rootDir = Split-Path -Parent $PSScriptRoot
$frontendDir = Join-Path $rootDir "apps/frontend"
$backendSetupScript = Join-Path $PSScriptRoot "setup-backend.ps1"

Write-Host "[1/3] Installing root npm dependencies..."
Push-Location $rootDir
try {
    npm install
}
finally {
    Pop-Location
}

Write-Host "[2/3] Installing frontend npm dependencies..."
Push-Location $frontendDir
try {
    npm install
}
finally {
    Pop-Location
}

Write-Host "[3/3] Setting up backend environment..."
& $backendSetupScript

Write-Host "Setup completed successfully."
