import type { DocumentationDocument } from "../types";

export const testCoverageMapDocument: DocumentationDocument = {
  id: "test-coverage-map",
  title: "EVAISYS Testing Lab - Test Coverage Map",
  sections: [
    {
      heading: "Purpose",
      paragraphs: [
        "This document describes the test coverage map for the EVAISYS Testing Lab project.",
        "Its purpose is to show the relationship between application functional areas, manual test cases, API checks, and Playwright automation.",
        "The Test Coverage Map helps explain which parts of the application are covered by testing and by which method.",
      ],
    },
    {
      heading: "Overall Coverage Principle",
      paragraphs: [
        "Coverage is built around the following model: Functionality -> Manual Test Case -> API Testing / Playwright Automation -> Regression Coverage.",
        "Not every check should be automated. Manual testing covers exploratory, UI/UX, and flexible scenarios. Playwright covers stable and repeatable regression scenarios. API testing covers backend contracts and data handling.",
      ],
    },
    {
      heading: "Coverage Map",
      tables: [
        {
          columns: [
            "Functional Area",
            "Manual Test Cases",
            "Manual API / Postman",
            "Playwright Automation",
            "Priority",
          ],
          rows: [
            ["Login with valid credentials", "TC-001", "Auth API", "AUTH-001", "High"],
            ["Login with invalid password", "TC-002", "Auth API", "AUTH-002", "High"],
            ["Protected route without auth", "TC-003", "Auth API", "AUTH-003", "High"],
            ["Logout", "TC-004", "-", "AUTH-004", "High"],
            ["Dashboard display", "TC-005", "-", "DASH-001", "High"],
            ["Navigation to Tasks", "TC-006", "-", "NAV-001", "High"],
            ["Tasks list display", "TC-007", "GET /tasks", "TASK-001", "High"],
            ["Create task", "TC-008", "POST /tasks", "TASK-002", "High"],
            ["Edit task", "TC-009", "PATCH /tasks/{id}", "TASK-003", "High"],
            ["Complete task", "TC-010", "PATCH /tasks/{id}", "TASK-004", "High"],
            ["Reopen task", "TC-011", "PATCH /tasks/{id}", "TASK-005", "High"],
            ["Delete task", "TC-012", "DELETE /tasks/{id}", "TASK-006", "High"],
            ["Filter tasks by status", "TC-013", "GET /tasks", "TASK-007", "High"],
            ["Navigation to Requests", "TC-014", "-", "NAV-002", "High"],
            ["Requests list display", "TC-015", "GET /requests", "REQUEST-001", "High"],
            ["Filter requests by status", "TC-016", "GET /requests", "REQUEST-002", "High"],
            ["Filter requests by priority", "TC-017", "GET /requests", "REQUEST-003", "High"],
            ["View request details", "TC-018", "GET /requests", "REQUEST-004", "High"],
            ["Change request status", "TC-019", "PATCH /requests/{id}", "REQUEST-005", "High"],
            ["Navigation to Articles", "TC-020", "-", "NAV-003", "Medium"],
            ["Articles list display", "TC-021", "GET /articles", "ARTICLE-001", "Medium"],
            ["Search articles", "TC-022", "GET /articles", "ARTICLE-002", "Medium"],
            ["Filter articles by category", "TC-023", "GET /articles", "ARTICLE-003", "Medium"],
            ["View article details", "TC-024", "GET /articles/{id}", "ARTICLE-004", "Medium"],
            ["Contacts module functionality", "TC-025", "-", "CONTACT-001", "Medium"],
            ["Feedback form functionality", "TC-026", "POST /contact", "FEEDBACK-001", "High"],
            ["API functionality validation", "TC-027", "All API groups", "API-001 - API-006", "High"],
            ["Responsive layout verification", "TC-028", "-", "RESP-001", "Medium"],
            ["Accessibility verification", "TC-029", "-", "A11Y-001", "Medium"],
            ["Security & protected access", "TC-030", "Auth API", "SEC-001", "High"],
          ],
        },
      ],
    },
    {
      heading: "Coverage by Module",
      bullets: [
        "Authentication: covered by TC-001 to TC-004. Automation: AUTH-001 to AUTH-004. Priority: High.",
        "Dashboard: covered by TC-005. Automation: DASH-001. Priority: High.",
        "Tasks: covered by TC-006 to TC-013. Automation: TASK-001 to TASK-007. API: GET /tasks, POST /tasks, PATCH /tasks/{id}, DELETE /tasks/{id}. Priority: High.",
        "Requests: covered by TC-014 to TC-019. Automation: REQUEST-001 to REQUEST-005. API: GET /requests, PATCH /requests/{id}. Priority: High.",
        "Articles: covered by TC-020 to TC-024. Automation: ARTICLE-001 to ARTICLE-004. API: GET /articles, GET /articles/{id}. Priority: Medium.",
        "Contacts & Feedback: covered by TC-025 and TC-026. Automation: CONTACT-001 and FEEDBACK-001. API: POST /contact. Priority: Medium / High.",
        "API: covered by TC-027. Automation: API-001 Health API, API-002 Authentication API, API-003 Tasks API, API-004 Requests API, API-005 Articles API, API-006 Contact API. Priority: High.",
        "Non-functional Sanity: covered by TC-028 Responsive, TC-029 Accessibility, TC-030 Security. Automation: RESP-001, A11Y-001, SEC-001. Priority: Medium / High.",
      ],
    },
    {
      heading: "Coverage Summary",
      tables: [
        {
          columns: ["Coverage Type", "Coverage"],
          rows: [
            ["Manual Test Cases", "TC-001 - TC-030"],
            ["Playwright UI Tests", "Auth, Dashboard, Tasks, Requests, Articles, Contacts, Feedback"],
            ["Playwright API Tests", "Health, Auth, Tasks, Requests, Articles, Contact"],
            ["E2E Tests", "Login, Tasks CRUD, Requests workflow, Articles search, Feedback"],
            ["Manual API Testing", "Postman"],
            ["Non-functional Sanity", "Responsive, Accessibility, Security"],
          ],
        },
      ],
    },
    {
      heading: "Conclusion",
      paragraphs: [
        "The Test Coverage Map shows that EVAISYS Testing Lab testing is not organized chaotically, but is linked to the functional areas of the application.",
        "Each important area has manual coverage. Critical and repeatable scenarios are transferred into Playwright automation. API checks cover backend contracts. Non-functional sanity checks complement the overall project quality view.",
        "As a result, the coverage map connects Manual QA -> API Testing -> Playwright Automation -> Regression Coverage.",
      ],
    },
  ],
};
