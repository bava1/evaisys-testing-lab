import type { DocumentationDocument } from "../types";

export const apiTestingPlanDocument: DocumentationDocument = {
  id: "api-testing-plan",
  title: "EVAISYS Testing Lab - API Testing Plan",
  description: "Full API testing plan for EVAISYS Testing Lab.",
  sections: [
    {
      heading: "Purpose",
      paragraphs: [
        "This document describes the API testing approach for EVAISYS Testing Lab.",
        "Its purpose is to define the scope of API checks, the applied testing methods, and the split between manual validation and automation.",
        "API testing is part of the overall quality strategy and confirms stable frontend and backend interaction.",
      ],
    },
    {
      heading: "Goals of API Testing",
      paragraphs: [
        "The API testing effort is designed to verify service availability, functional correctness, and predictable integration behavior.",
      ],
      bullets: [
        "Verify API availability.",
        "Verify correct endpoint behavior.",
        "Verify error handling behavior.",
        "Verify input validation rules.",
        "Verify response contract stability.",
        "Ensure correct frontend and backend interaction.",
        "Prepare a stable baseline for automated API tests.",
      ],
    },
    {
      heading: "Test Object",
      paragraphs: [
        "The test object is the FastAPI backend that exposes demo REST endpoints used by the frontend application.",
        "The API acts as the backend layer of a controlled testing application intended for API, integration, and end-to-end validation.",
      ],
      bullets: [
        "Health API",
        "Authentication API",
        "Tasks API",
        "Requests API",
        "Articles API",
        "Contact API",
      ],
    },
    {
      heading: "API Testing Approach",
      paragraphs: [
        "The API is tested through two complementary layers: manual exploration and automated regression checks.",
      ],
      bullets: [
        "Manual API testing uses Postman for endpoint exploration, response structure study, negative scenarios, validation error analysis, and demonstration of hands-on API testing.",
        "Automated API testing uses Playwright API Testing for regression coverage, contract checks, status code verification, response body validation, and regular execution of API checks.",
      ],
    },
    {
      heading: "Health API",
      paragraphs: [
        "Endpoint: GET /health",
        "This endpoint is part of both smoke testing and the API testing layer.",
      ],
      bullets: [
        "Positive checks: endpoint availability, HTTP 200 response, and correct response structure.",
        "Negative checks: none.",
        "Automation: yes.",
      ],
    },
    {
      heading: "Authentication API",
      paragraphs: [
        "Endpoints: POST /auth/login and GET /auth/me",
        "Authentication checks verify successful login behavior and retrieval of the current user profile.",
      ],
      bullets: [
        "Positive checks: successful login, correct status code, correct response structure, and user information retrieval.",
        "Negative checks: invalid username, invalid password, empty fields, missing required parameters, and invalid data format.",
        "Expected status codes: 200, 401, 422.",
        "Automation: yes.",
      ],
    },
    {
      heading: "Tasks API",
      paragraphs: [
        "Endpoints: GET /tasks, POST /tasks, PATCH /tasks/{id}, DELETE /tasks/{id}",
        "Tasks API validation focuses on CRUD behavior and payload constraints.",
      ],
      bullets: [
        "Positive checks: retrieve task list, create task, edit task, change task status, and delete task.",
        "Negative checks: empty title, title below minimum length, title above maximum length, description too long, update of a non-existent task, and deletion of a non-existent task.",
        "Expected status codes: 200, 201, 404, 422.",
        "Automation: yes.",
      ],
    },
    {
      heading: "Requests API",
      paragraphs: [
        "Endpoints: GET /requests, POST /requests, PATCH /requests/{id}",
        "Requests API coverage focuses on list retrieval, record creation, and controlled state changes.",
      ],
      bullets: [
        "Positive checks: retrieve request list, create request, change request status, and change request priority.",
        "Negative checks: invalid status, invalid priority, update of a non-existent request, and missing required data.",
        "Expected status codes: 200, 201, 404, 422.",
        "Automation: yes.",
      ],
    },
    {
      heading: "Articles API",
      paragraphs: [
        "Endpoints: GET /articles and GET /articles/{id}",
        "Articles coverage validates data retrieval and response consistency for the documentation-style content area.",
      ],
      bullets: [
        "Positive checks: retrieve article list, retrieve article by ID, and verify data structure correctness.",
        "Negative checks: request of a non-existent article and invalid article identifier.",
        "Expected status codes: 200, 404, 422.",
        "Automation: yes.",
      ],
    },
    {
      heading: "Contact API",
      paragraphs: [
        "Endpoint: POST /contact",
        "Contact API checks validate submission of the demo contact form and message creation behavior.",
      ],
      bullets: [
        "Positive checks: successful form submission, correct API response, and successful message creation.",
        "Negative checks: empty name, empty email, invalid email, empty message, message too short, and message too long.",
        "Expected status codes: 200, 201, 422.",
        "Automation: yes.",
      ],
    },
    {
      heading: "Response Contract Verification",
      paragraphs: [
        "For each endpoint, contract verification confirms that the API remains stable and predictable for frontend consumers and automated checks.",
      ],
      bullets: [
        "Required fields are present.",
        "Data types are correct.",
        "JSON structure matches expectations.",
        "Response format remains predictable.",
        "Unexpected contract changes are not introduced.",
      ],
    },
    {
      heading: "Error Handling Verification",
      paragraphs: [
        "Each endpoint must handle invalid input and unsupported operations in a controlled and understandable way.",
      ],
      bullets: [
        "Correct status codes are returned.",
        "Error messages are understandable.",
        "Invalid data is handled correctly.",
        "Missing resources are handled correctly.",
        "Unhandled exceptions are not exposed.",
      ],
    },
    {
      heading: "Link with Playwright Automation",
      paragraphs: [
        "The Playwright API suite includes dedicated groups that align with the backend surface under test.",
        "These automated checks are part of the broader regression layer.",
      ],
      bullets: [
        "API-001 Health API",
        "API-002 Authentication API",
        "API-003 Tasks API",
        "API-004 Requests API",
        "API-005 Articles API",
        "API-006 Contact API",
      ],
    },
    {
      heading: "Link with Manual Testing",
      paragraphs: [
        "Manual API validation is performed through Postman and supports exploratory analysis before or alongside automation.",
      ],
      bullets: [
        "Endpoint exploration",
        "Request and response verification",
        "Negative scenarios",
        "Data validation",
        "API error verification",
        "Contract analysis",
      ],
    },
    {
      heading: "Out of Scope",
      paragraphs: [
        "The following areas are excluded from the current API testing scope and remain future extension points.",
      ],
      bullets: [
        "API load testing",
        "API stress testing",
        "Security penetration testing",
        "Fuzz testing",
        "Distributed performance testing",
        "Contract testing between multiple services",
      ],
    },
    {
      heading: "Summary",
      paragraphs: [
        "API testing follows a two-level model that combines Manual API Testing with Postman and Automated API Testing with Playwright.",
        "This approach demonstrates practical understanding of REST APIs, manual API validation skills, automation of API checks, and integration of backend verification into the broader QA workflow.",
        "API testing is a mandatory part of the overall testing strategy for EVAISYS Testing Lab.",
      ],
    },
  ],
};
