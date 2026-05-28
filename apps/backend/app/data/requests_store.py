from app.schemas.requests import ServiceRequest


requests_data: list[ServiceRequest] = [
    ServiceRequest(id=1, title="Login form validation issue", status="new", priority="medium"),
]
next_request_id: int = 2
