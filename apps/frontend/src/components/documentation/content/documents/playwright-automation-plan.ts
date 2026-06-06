import type { DocumentationDocument } from "../types";

export const playwrightAutomationPlanDocument: DocumentationDocument = {
  id: "playwright-automation-plan",
  title: "EVAISYS Testing Lab - Playwright Automation Plan",
  sections: [
    {
      heading: "Purpose",
      paragraphs: [
        "This document describes the automated testing plan for the EVAISYS Testing Lab project using Playwright.",
        "Its purpose is to define which scenarios from the overall strategy and manual test cases will be automated, how the test structure will be organized, and which checks are included in the first automation scope.",
        "Automation is treated as part of the overall QA strategy rather than a replacement for manual testing.",
      ],
    },
    {
      heading: "Automation Foundations",
      paragraphs: [
        "Stable automation starts with predictable UI and test environment controls. Several preparation items are considered high-value foundations for reliable Playwright coverage.",
      ],
      bullets: [
        "Ensure stable data-testid coverage across all critical UI elements.",
        "Prioritize selectors for Login, Logout, Add Task, Save, Delete, Search, Filters, Request statuses, and Articles search.",
        "Introduce a future backend reset endpoint so tests can always start from a known data state.",
        "Prepare screenshots for core pages such as Login, Dashboard, Tasks, Requests, Articles, and Contacts to support documentation and future maintenance.",
      ],
      tables: [
        {
          columns: ["Area", "Coverage", "Notes"],
          rows: [
            [
              "Stable Test IDs",
              "Critical UI controls and workflow entry points",
              "More valuable for long-term automation than additional UI features",
            ],
            [
              "Reset Mechanism",
              "Reset tasks, requests, and articles to a baseline state",
              "Supports the controlled testing backend model",
            ],
            [
              "Reference Screenshots",
              "Login, Dashboard, Tasks, Requests, Articles, Contacts",
              "Useful for documentation and later change tracking",
            ],
          ],
        },
      ],
    },
    {
      heading: "Automation Goals",
      paragraphs: [
        "The automation plan focuses on stable, repeatable checks that provide strong regression value and clear demonstration coverage.",
      ],
      bullets: [
        "Automate stable and repeatable regression scenarios.",
        "Cover critical user journeys.",
        "Verify authentication and protected routes.",
        "Automate Tasks CRUD workflows.",
        "Validate Requests workflow scenarios.",
        "Cover search and filtering behavior.",
        "Verify forms and validation handling.",
        "Add API checks.",
        "Prepare the foundation for intentional defect validation.",
        "Generate Playwright HTML reports for result demonstration.",
      ],
    },
    {
      heading: "Automation Scope",
      paragraphs: [
        "The first automation scope includes the following test groups and target behaviors.",
      ],
      bullets: [
        "Smoke Tests: application startup, login page availability, backend health endpoint, dashboard access after login, main section availability.",
        "Authentication Tests: successful login, invalid password handling, logout, unauthenticated protected routes, redirect to Login.",
        "Dashboard Tests: dashboard rendering after login, key modules visibility, navigation into application sections.",
        "Tasks Tests: open Tasks, task list rendering, create task, edit task, complete task, reopen task, delete task, All / Active / Completed filter behavior, form validation errors.",
        "Requests Tests: open Requests, request list rendering, status filter, priority filter, details dialog, request status change.",
        "Articles Tests: open Articles, article list rendering, article search, category filter, details dialog.",
        "Contacts & Feedback Tests: open Contacts & Feedback, contact rendering, contact search, feedback form validation, successful feedback submission.",
        "API Tests: GET /health, auth API, tasks API, requests API, articles API, contact API, status codes, validation errors, response body structure.",
        "E2E Tests: login → dashboard → logout, task workflow, requests workflow, article search workflow, feedback submission workflow.",
      ],
    },
    {
      heading: "Out of Scope",
      paragraphs: [
        "The first version of Playwright automation intentionally excludes several deeper testing directions.",
      ],
      bullets: [
        "Full-scale load testing",
        "Full accessibility audit",
        "Visual regression testing",
        "Complex cross-browser matrix coverage",
        "Penetration testing",
        "Performance benchmarking",
        "Production infrastructure testing",
      ],
    },
    {
      heading: "Test Structure",
      paragraphs: [
        "The proposed test structure groups coverage by functional area and keeps the project easy to navigate and maintain.",
      ],
      tables: [
        {
          columns: ["Area", "Coverage", "Notes"],
          rows: [
            ["smoke/", "smoke.spec.ts", "Application startup and baseline availability"],
            ["auth/", "auth.spec.ts", "Authentication and protected route validation"],
            ["dashboard/", "dashboard.spec.ts", "Dashboard visibility and navigation"],
            ["tasks/", "tasks.spec.ts", "Tasks CRUD and related UI behavior"],
            ["requests/", "requests.spec.ts", "Requests workflow and status updates"],
            ["articles/", "articles.spec.ts", "Articles search, filtering, and details"],
            ["contacts/", "contacts-feedback.spec.ts", "Contacts and feedback form coverage"],
            ["api/", "health.api.spec.ts and domain API specs", "Backend API validation"],
            ["e2e/", "main-workflows.spec.ts", "Cross-module user journeys"],
          ],
        },
      ],
    },
    {
      heading: "Test Architecture Principles",
      paragraphs: [
        "Automated tests should remain practical, presentation-ready, and stable for repeated execution.",
      ],
      bullets: [
        "Keep tests understandable.",
        "Keep tests small.",
        "Keep tests stable.",
        "Keep tests readable.",
        "Group tests by functional area.",
        "Base tests on data-testid selectors.",
        "Avoid unnecessary refactoring.",
        "Avoid dependencies on random execution order.",
        "Keep the suite suitable for portfolio demonstration.",
      ],
    },
    {
      heading: "Selectors Strategy",
      paragraphs: [
        "The preferred selector order is data-testid first, role/name second, and CSS selectors only when necessary.",
        "Tests should not depend on unstable layout details, MUI-generated CSS classes, or text that may change frequently.",
      ],
      bullets: [
        '[data-testid="login-username"]',
        '[data-testid="login-password"]',
        '[data-testid="login-submit"]',
        '[data-testid="tasks-create-button"]',
        '[data-testid="task-card"]',
      ],
    },
    {
      heading: "Fixtures and Helpers",
      paragraphs: [
        "Reusable helpers and fixtures are planned to keep tests compact and consistent.",
      ],
      bullets: [
        "Helpers: loginAsAdmin(page), logout(page), goToTasks(page), createTask(page, data), editTask(page, data), completeTask(page, title), deleteTask(page, title), goToRequests(page), changeRequestStatus(page, requestTitle, status), submitFeedback(page, data).",
        "Fixtures: authenticatedPage, apiClient, testTaskData, testFeedbackData.",
      ],
    },
    {
      heading: "Link to Manual Test Cases",
      paragraphs: [
        "Playwright automation is built on top of manual test cases.",
        "This mapping demonstrates that automation is structured and tied to the broader test coverage model rather than implemented chaotically.",
      ],
      bullets: [
        "TC-001 Login with Valid Credentials → AUTH-001 Playwright test",
        "TC-003 Access Protected Route Without Authentication → AUTH-003 Playwright test",
        "TC-008 Create Task → TASK-001 Playwright test",
        "TC-019 Change Request Status → REQUEST-003 Playwright test",
        "TC-026 Feedback Form Functionality → FEEDBACK-001 Playwright test",
        "TC-027 API Functionality Validation → API test suite",
      ],
    },
    {
      heading: "Reporting",
      paragraphs: [
        "Playwright should generate execution artifacts that support both debugging and project demonstration.",
        "Reports may be reused in the final QA summary and project walkthrough.",
      ],
      bullets: [
        "HTML report",
        "Screenshots on failure",
        "Traces on retry or failure",
        "List of passed and failed tests",
        "Data for intentional defect analysis",
      ],
    },
    {
      heading: "Intentional Defects",
      paragraphs: [
        "Controlled intentional defects may be added to the project and handled as a dedicated automation concern.",
        "Intentional defects should be interpreted as a planned part of the controlled testing lab, not as random project instability.",
      ],
      bullets: [
        "Use a dedicated test group or marker such as @intentional-defect.",
        "Show that the tests truly detect problems.",
        "Demonstrate failed tests inside the Playwright report.",
        "Explain the defect as part of the controlled testing lab concept.",
      ],
    },
    {
      heading: "Implementation Priority",
      paragraphs: [
        "The recommended implementation order keeps the suite aligned with the highest-value coverage first.",
      ],
      bullets: [
        "Smoke tests",
        "Authentication tests",
        "Protected routes",
        "Tasks CRUD",
        "Requests workflow",
        "Articles search and filtering",
        "Contacts & Feedback",
        "API tests",
        "E2E scenarios",
        "Intentional defects",
      ],
    },
    {
      heading: "Final Summary",
      paragraphs: [
        "Playwright automation in EVAISYS Testing Lab covers the most stable and repeatable application scenarios.",
        "Manual testing remains the source of analysis, exploratory validation, and UX assessment.",
        "Automation takes responsibility for the regression layer, critical user journeys, API checks, and demonstration failed scenarios.",
        "This approach represents a complete QA workflow: Manual Test Cases → Automation Scope → Playwright Tests → Test Report → QA Analysis.",
      ],
    },
  ],
};
