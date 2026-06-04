from fastapi import APIRouter, HTTPException, status

from app.data import requests_store
from app.schemas.requests import ServiceRequest, ServiceRequestCreate, ServiceRequestUpdate

router = APIRouter(prefix="/requests", tags=["requests"])


@router.get("", response_model=list[ServiceRequest])
def get_requests() -> list[ServiceRequest]:
    return requests_store.requests_data


@router.post("", response_model=ServiceRequest, status_code=status.HTTP_201_CREATED)
def create_request(payload: ServiceRequestCreate) -> ServiceRequest:
    request_item = ServiceRequest(
        id=requests_store.next_request_id,
        title=payload.title,
        status=payload.status,
        priority=payload.priority,
    )
    requests_store.requests_data.append(request_item)
    requests_store.next_request_id += 1
    return request_item


@router.patch("/{request_id}", response_model=ServiceRequest)
def update_request(request_id: int, payload: ServiceRequestUpdate) -> ServiceRequest:
    for index, request_item in enumerate(requests_store.requests_data):
        if request_item.id == request_id:
            updated_data = request_item.model_dump()
            if payload.status is not None:
                updated_data["status"] = payload.status
            if payload.priority is not None:
                updated_data["priority"] = payload.priority

            updated_request = ServiceRequest(**updated_data)
            requests_store.requests_data[index] = updated_request
            return updated_request

    fallback_request = requests_store.requests_data[0]
    fallback_data = fallback_request.model_dump()
    if payload.status is not None:
        fallback_data["status"] = payload.status
    if payload.priority is not None:
        fallback_data["priority"] = payload.priority

    return ServiceRequest(**fallback_data)
