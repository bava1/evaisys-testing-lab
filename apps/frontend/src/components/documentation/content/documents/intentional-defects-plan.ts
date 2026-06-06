import type { DocumentationDocument } from "../types";

export const intentionalDefectsPlanDocument: DocumentationDocument = {
  id: "intentional-defects-plan",
  title: "EVAISYS Testing Lab - Intentional Defects Plan",
  sections: [
    {
      heading: "Purpose",
      paragraphs: [
        "This document describes the controlled defects that may be intentionally added to EVAISYS Testing Lab in order to demonstrate testing effectiveness.",
      ],
    },
    {
      heading: "Defects for the intentional-ui-defects Branch",
      bullets: [
        "AUTH-BUG-01 - Logout does not fully clear the session. Functional issue: after logout the user is visually returned to the Login page, but the auth state remains in localStorage. Risk: the user believes they have logged out, but protected routes may still remain accessible. Detected by: tests/auth/logout.spec.ts and tests/responsive/mobile-navigation.spec.ts.",
        "AUTH-BUG-02 - Invalid login error message is hidden. Functional issue: after invalid credentials the user remains on the Login page, but the error message is not displayed. Risk: the user does not understand why authentication failed. Detected by: tests/auth/invalid-login.spec.ts.",
        "TASKS-BUG-01 - Completed filter returns incorrect results. Functional issue: in Tasks, the Completed filter shows incorrect tasks. Risk: the user receives an incorrect list state and cannot trust filtering. Detected by: tests/tasks/tasks-crud.spec.ts.",
        "REQUESTS-BUG-01 - Request status update is not applied correctly. Functional issue: when the request status is changed, the UI does not display the new status correctly. Risk: the user believes the workflow status has changed, while the interface still shows an incorrect state. Detected by: tests/requests/requests-workflow.spec.ts.",
        "ARTICLES-BUG-01 - Article search returns extra results. Functional issue: Articles search returns extra articles that do not match the search query. Risk: the user receives unreliable search results. Detected by: tests/articles/articles.spec.ts.",
        "FEEDBACK-BUG-01 - Invalid email is accepted. Functional issue: the Feedback form accepts an invalid email address. Risk: invalid contact data may enter the system. Detected by: tests/contacts/contacts-feedback.spec.ts.",
        "FEEDBACK-BUG-02 - Empty feedback submission does not show a validation message. Functional issue: when an empty feedback form is submitted, the validation error message is not displayed. Risk: the user does not understand which fields must be corrected. Detected by: tests/contacts/contacts-feedback.spec.ts.",
      ],
      tables: [
        {
          columns: ["Area", "Coverage", "Notes"],
          rows: [
            [
              "intentional-ui-defects branch result",
              "8 failed / 43 passed",
              "Seven defects produce eight failures because the logout/session defect is also detected by the mobile responsive test.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Why Intentional Defects Exist",
      paragraphs: [
        "Intentional Defects are part of the project concept and are used to demonstrate manual testing, Playwright automation, defect analysis, bug reporting, regression testing, and the AI-assisted QA workflow.",
        "Defects are introduced intentionally and documented in advance. They are not treated as project development mistakes.",
      ],
    },
    {
      heading: "Goals of Intentional Defects",
      paragraphs: [
        "Controlled defects are added to demonstrate several important parts of the QA process.",
      ],
      bullets: [
        "Working tests: the user can see that automated tests are genuinely capable of detecting defects.",
        "A realistic QA workflow: the project demonstrates the full cycle Defect -> Detection -> Report -> Analysis -> Fix -> Regression Test.",
        "Playwright report demonstration: reports contain passed tests, failed tests, screenshots, traces, and error details.",
        "EVAISYS AI Agent demonstration: the AI Agent can be used to analyze failed tests, prepare bug reports, assess defect risk, and explain the cause of the failure.",
      ],
    },
    {
      heading: "Principles of Use",
      bullets: [
        "Controllability: every intentional defect must be documented in advance. Random errors or system instability are not allowed.",
        "Limited quantity: it is recommended to use 1 to 2 active intentional defects at the same time. The maximum is 3 active defects. A larger number starts to interfere with the demonstration of the main scenarios.",
        "Isolation: a defect should affect only one functional area. One intentional defect should not break half of the application.",
        "Predictability: the QA engineer knows in advance where the defect is located, which tests will detect it, and what result is considered expected.",
      ],
    },
    {
      heading: "Planned Intentional Defects",
      bullets: [
        "ID-01 - Protected Route Bypass. Description: one protected route opens without authorization. Category: Security, Authorization. Possible scenario: the user manually opens /tasks without completing login. The page is displayed instead of redirecting to Login. Expected detection: TC-003 Access Protected Route Without Authentication, AUTH-003 Playwright Test, Security Verification. Severity: High. Business impact: High. The baseline authorization model is violated.",
        "ID-02 - Invalid Email Accepted. Description: the Feedback Form accepts an email without the @ symbol. Example: testmail.com is accepted instead of test@mail.com. Category: Validation, Input Handling. Expected detection: TC-026 Feedback Form Functionality, FEEDBACK-001 Playwright Test, Contact API Validation Tests. Severity: Medium. Business impact: Medium. Invalid data enters the system.",
        "ID-03 - Tasks Filter Returns Wrong Results. Description: the Completed filter displays Active tasks. Category: Functional, Filtering. Expected detection: TC-013 Filter Tasks by Status, TASK-007 Playwright Test. Severity: Medium. Business impact: Medium. The user receives incorrect filtering results.",
        "ID-04 - Request Status Not Persisted. Description: after a Requests status is changed, the UI shows the new value, but after refreshing the page the old value returns. Category: Workflow, Integration. Expected detection: TC-019 Change Request Status, REQUEST-005 Playwright Test, Requests API Tests, E2E Workflow Tests. Severity: High. Business impact: High. The user believes changes were saved when they were not.",
        "ID-05 - Articles Search Returns Extra Results. Description: search returns articles that do not contain the query. Category: Search, Filtering. Expected detection: TC-022 Search Articles, ARTICLE-002 Playwright Test. Severity: Medium. Business impact: Medium. The user receives unreliable search results.",
        "ID-06 - Missing Validation Error Message. Description: when a required validation rule is violated, the field is highlighted but the error message is not displayed. Category: UI, Validation, Accessibility. Expected detection: TC-026 Feedback Form Functionality, TC-029 Accessibility Verification, FEEDBACK-001 Playwright Test. Severity: Low. Business impact: Low. The functionality works, but UX degrades.",
      ],
    },
    {
      heading: "Link to Testing",
      tables: [
        {
          columns: ["Intentional Defect", "Manual", "API", "Playwright", "E2E"],
          rows: [
            ["ID-01 Protected Route Bypass", "Yes", "No", "Yes", "Yes"],
            ["ID-02 Invalid Email Accepted", "Yes", "Yes", "Yes", "No"],
            ["ID-03 Tasks Filter Bug", "Yes", "No", "Yes", "No"],
            ["ID-04 Request Status Not Persisted", "Yes", "Yes", "Yes", "Yes"],
            ["ID-05 Search Returns Extra Results", "Yes", "No", "Yes", "No"],
            ["ID-06 Missing Validation Error", "Yes", "No", "Yes", "No"],
          ],
        },
      ],
    },
    {
      heading: "Representation in Reports",
      paragraphs: [
        "If an intentional defect is active, the Playwright report should contain markers such as FAILED, Expected Demonstration Failure, and Intentional Defect.",
        "Such failures are treated as expected and are used to demonstrate the QA process.",
      ],
    },
    {
      heading: "Defect Handling",
      paragraphs: [
        "A separate bug report may be prepared for each intentional defect. After the defect is fixed, it is moved into regression coverage.",
      ],
      bullets: [
        "Defect ID",
        "Summary",
        "Steps to Reproduce",
        "Expected Result",
        "Actual Result",
        "Severity",
        "Priority",
        "Affected Module",
        "Suggested Fix",
      ],
    },
    {
      heading: "Use of the EVAISYS AI Agent",
      bullets: [
        "Analysis of failed tests",
        "Preparation of bug reports",
        "Defect classification",
        "Severity assessment",
        "Analysis of possible root causes",
        "Preparation of a regression checklist after the fix",
      ],
    },
    {
      heading: "Conclusion",
      paragraphs: [
        "Intentional Defects are an important part of EVAISYS Testing Lab and are used to demonstrate the full lifecycle of the QA process.",
        "They make it possible to show manual testing activity, the effectiveness of Playwright automation, bug report preparation, regression testing, and the use of the EVAISYS AI Agent for defect analysis.",
        "As a result, the project demonstrates not only successful scenarios, but also real workflows for defect detection and analysis.",
      ],
    },
  ],
};
