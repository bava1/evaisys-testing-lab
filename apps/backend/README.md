# EVAISYS Testing Lab Backend

Demo backend for EVAISYS Testing Lab automated testing workflows.

## Install dependencies

```powershell
powershell -ExecutionPolicy Bypass -File ../../scripts/setup-backend.ps1
```

## Run locally

```powershell
powershell -ExecutionPolicy Bypass -File ../../scripts/run-backend.ps1
```

## Available endpoints

- `GET /health`
- `POST /auth/login`
- `GET /auth/me`
- `GET /tasks`
- `POST /tasks`
- `PATCH /tasks/{task_id}`
- `DELETE /tasks/{task_id}`
- `GET /requests`
- `POST /requests`
- `PATCH /requests/{request_id}`
- `GET /articles`
- `GET /articles/{article_id}`
- `POST /contact`
