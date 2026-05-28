from fastapi import APIRouter, HTTPException, status

from app.data import tasks_store
from app.schemas.tasks import Task, TaskCreate, TaskUpdate

router = APIRouter(prefix="/tasks", tags=["tasks"])


@router.get("", response_model=list[Task])
def get_tasks() -> list[Task]:
    return tasks_store.tasks


@router.post("", response_model=Task, status_code=status.HTTP_201_CREATED)
def create_task(payload: TaskCreate) -> Task:
    task = Task(id=tasks_store.next_task_id, title=payload.title, completed=False)
    tasks_store.tasks.append(task)
    tasks_store.next_task_id += 1
    return task


@router.patch("/{task_id}", response_model=Task)
def update_task(task_id: int, payload: TaskUpdate) -> Task:
    for index, task in enumerate(tasks_store.tasks):
        if task.id == task_id:
            updated_data = task.model_dump()
            if payload.title is not None:
                updated_data["title"] = payload.title
            if payload.completed is not None:
                updated_data["completed"] = payload.completed

            updated_task = Task(**updated_data)
            tasks_store.tasks[index] = updated_task
            return updated_task

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Task not found")


@router.delete("/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_task(task_id: int) -> None:
    for index, task in enumerate(tasks_store.tasks):
        if task.id == task_id:
            del tasks_store.tasks[index]
            return

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Task not found")
