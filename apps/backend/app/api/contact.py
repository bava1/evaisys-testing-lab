from fastapi import APIRouter, status

from app.schemas.contact import ContactRequest, ContactResponse

router = APIRouter(prefix="/contact", tags=["contact"])


@router.post("", response_model=ContactResponse, status_code=status.HTTP_200_OK)
def send_contact_request(payload: ContactRequest) -> ContactResponse:
    return ContactResponse(success=True, message="Contact request received")
