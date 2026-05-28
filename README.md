# EVAISYS Testing Lab

EVAISYS Testing Lab is an AI-assisted QA workflow demonstration project.

Reactex is used as the application under test, while EVAISYS is used as the AI QA Assistant.

Current stage: project foundation and QA documentation.

## Quick Start

1. Clone repository

2. Run setup

```powershell
powershell -ExecutionPolicy Bypass -File scripts/setup.ps1
```

3. Run project

```powershell
npm run dev
```

4. URLs

Frontend: `http://localhost:3000`

Backend: `http://127.0.0.1:8000`

Swagger: `http://127.0.0.1:8000/docs`

## Local Development

### Backend setup

```powershell
powershell -ExecutionPolicy Bypass -File scripts/setup-backend.ps1
```

### Backend run

```powershell
powershell -ExecutionPolicy Bypass -File scripts/run-backend.ps1
```

### Dev environment

```powershell
powershell -ExecutionPolicy Bypass -File scripts/dev.ps1
```

### Swagger

`http://127.0.0.1:8000/docs`

### Health endpoint

`http://127.0.0.1:8000/health`

## Unified Development Workflow

### Frontend setup

```powershell
cd apps/frontend
npm install
```

### Root setup

```powershell
npm install
```

### Run full project

```powershell
npm run dev
```

### URLs

Frontend: `http://localhost:3000`

Backend: `http://127.0.0.1:8000`

Swagger: `http://127.0.0.1:8000/docs`
