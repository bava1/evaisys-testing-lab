$ErrorActionPreference = "Stop"

# Backend-only runner used by root "npm run dev" workflow.
& "$PSScriptRoot/run-backend.ps1"
