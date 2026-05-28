from app.schemas.tasks import Task


tasks: list[Task] = [
    Task(id=1, title="Prepare smoke test checklist", completed=False),
]
next_task_id: int = 2
