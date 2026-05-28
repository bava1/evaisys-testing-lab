# EVAISYS Testing Lab

EVAISYS Testing Lab is an AI-assisted QA workflow demonstration project.

Reactex is used as the application under test, while EVAISYS is used as the AI QA Assistant.

Current stage: project foundation and QA documentation.

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
