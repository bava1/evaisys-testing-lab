from pydantic import BaseModel, Field
from typing import Literal


RequestStatus = Literal["new", "in_progress", "resolved"]
RequestPriority = Literal["low", "medium", "high"]


class ServiceRequest(BaseModel):
    id: int
    title: str = Field(..., min_length=1)
    status: RequestStatus
    priority: RequestPriority


class ServiceRequestCreate(BaseModel):
    title: str = Field(..., min_length=1)
    status: RequestStatus = "new"
    priority: RequestPriority = "medium"


class ServiceRequestUpdate(BaseModel):
    status: RequestStatus | None = None
    priority: RequestPriority | None = None
