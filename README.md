# EVAISYS Testing Lab

EVAISYS Testing Lab is a controlled web application for practical frontend/backend testing, Playwright automation, and AI-assisted testing workflows.

## Stack

- Frontend: Next.js 15, React 18, TypeScript, MUI
- Backend: FastAPI, Pydantic, Uvicorn
- Automation: Playwright test scenarios and supporting test documentation

## Implemented Modules

- Authentication
- Protected Routes
- Tasks CRUD
- Requests Workflow
- Articles Search
- Contacts & Feedback

## Local Run

1. Install root dependencies:

```powershell
npm install
```

2. Prepare backend virtual environment and Python dependencies:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/setup-backend.ps1
```

3. Run frontend + backend together:

```powershell
npm run dev
```

`npm run dev` automatically frees dev ports `3000` and `8000` from stale local processes before startup.

4. Open:
- Frontend: `http://localhost:3000`
- Backend API: `http://127.0.0.1:8000`
- Swagger: `http://127.0.0.1:8000/docs`
- Health: `http://127.0.0.1:8000/health`

## Project Structure

```text
apps/
  frontend/   # Next.js application under test
  backend/    # FastAPI backend for API/UI integration scenarios
docs/         # Testing and project documentation
scripts/      # Local setup and run scripts
tests/        # Automation tests (Playwright and related assets)
```
