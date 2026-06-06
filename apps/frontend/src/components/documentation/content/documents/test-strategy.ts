import type { DocumentationDocument } from "../types";

export const testStrategyFullDocument: DocumentationDocument = {
  id: "test-strategy-full-document",
  title: "EVAISYS Testing Lab - Test Strategy",
  sections: [
    {
      heading: "Document Purpose",
      paragraphs: [
        "This document describes the overall testing strategy for the EVAISYS Testing Lab project.",
        "EVAISYS Testing Lab is a controlled testing application created specifically to demonstrate a complete QA approach: from product analysis and test design to automation, reporting, and an AI-assisted QA workflow.",
        "The project is not a production application. Its main purpose is to demonstrate an engineering approach to testing a web application, including manual testing, API testing, Playwright automation, and the use of the EVAISYS AI Agent as a testing assistant.",
      ],
    },
    {
      heading: "Testing Objectives",
      paragraphs: [
        "The main idea of the strategy is that automated tests are not a separate initiative, but a part of the overall QA strategy.",
      ],
      bullets: [
        "Verify the key user scenarios of the application.",
        "Identify functional risks.",
        "Prepare manual test cases and checklists.",
        "Identify scenarios suitable for automation.",
        "Implement automated checks in Playwright.",
        "Validate frontend/backend interaction.",
        "Cover baseline API scenarios.",
        "Demonstrate work with intentional defects.",
        "Show the use of the EVAISYS AI Agent in the QA process.",
      ],
    },
    {
      heading: "Test Object",
      paragraphs: [
        "The test object is EVAISYS Testing Lab, a demonstration web application.",
        "The application contains common elements typical of real web systems, including authentication, protected routes, data lists, CRUD operations, forms, validation, search, filtering, modal dialogs, and frontend/backend interaction.",
      ],
      bullets: [
        "Home Dashboard",
        "Demo Authentication",
        "Tasks",
        "Requests",
        "Articles",
        "Contacts & Feedback",
        "Backend API",
      ],
    },
    {
      heading: "Role of the EVAISYS AI Agent",
      paragraphs: [
        "The EVAISYS AI Agent is used as an AI-assisted QA assistant.",
        "The AI Agent does not replace the QA engineer. It accelerates the analytical and documentation-related parts of the work, while the final structure, priorities, and decisions remain under engineering control.",
      ],
      bullets: [
        "Application analysis",
        "Drafting the initial test strategy",
        "Generating test cases",
        "Preparing checklists",
        "Risk analysis",
        "Defining the automation scope",
        "Analyzing Playwright test results",
        "Helping describe discovered defects",
        "Preparing QA documentation",
      ],
    },
    {
      heading: "Overall Testing Approach",
      paragraphs: [
        "The strategy combines several directions into one coordinated QA workflow.",
        "Testing follows this sequence: product analysis, risk identification, test cases, automation scope, Playwright tests, reporting, and result analysis.",
      ],
      bullets: [
        "Analytical QA work",
        "Manual testing",
        "API testing",
        "Automated testing",
        "Baseline non-functional checks",
        "AI-assisted QA workflow",
        "Reporting and result analysis",
      ],
    },
    {
      heading: "Analytical QA Work",
      paragraphs: [
        "The analytical part is needed to understand the product and prepare the foundation for testing.",
        "At this stage, the EVAISYS AI Agent can be used for initial analysis and draft generation, which are then reviewed and adjusted by the QA engineer.",
      ],
      bullets: [
        "Product analysis",
        "Requirements analysis",
        "Scope / out-of-scope definition",
        "Risk analysis",
        "Prioritization of checks",
        "Identification of critical user scenarios",
      ],
    },
    {
      heading: "Manual Testing",
      paragraphs: [
        "Manual testing covers scenarios that require human judgment, flexibility, or are not practical to automate in the first phase.",
        "The manual layer demonstrates not only the ability to execute checks, but also the ability to design meaningful test coverage.",
      ],
      bullets: [
        "Functional test cases",
        "Page-level checklists",
        "Negative scenarios",
        'Exploratory testing',
        "UI/UX review",
        "Responsive checks",
        "Accessibility checklist",
        "Basic security checklist",
      ],
    },
    {
      heading: "API Testing",
      paragraphs: [
        "API testing is performed in two formats.",
        "The first format is automated API testing in Playwright.",
        "The second format is manual API testing in Postman for endpoint exploration, request/response examples, negative checks, contract validation, and a demonstration API collection.",
        "This approach presents API testing as part of the overall strategy rather than only a set of automated checks.",
      ],
      bullets: [
        "Health endpoint",
        "Authentication endpoints",
        "Tasks API",
        "Requests API",
        "Articles API",
        "Contact API",
        "Status code validation",
        "Response validation",
        "Validation error handling",
      ],
    },
    {
      heading: "Automated Testing",
      paragraphs: [
        "Automation is implemented in a dedicated Playwright project.",
        "Playwright covers stable and repeatable scenarios.",
        "Automation does not replace manual testing. It covers the regression layer and the key user flows that should be verified regularly after changes.",
      ],
      bullets: [
        "Smoke tests",
        "Authentication tests",
        "Protected route checks",
        "Tasks CRUD",
        "Requests workflow",
        "Articles search and filtering",
        "Contacts & Feedback validation",
        "API tests",
        "Selected end-to-end scenarios",
        "Regression checks",
        "Intentional defect detection",
      ],
    },
    {
      heading: "End-to-End Testing",
      paragraphs: [
        "End-to-end testing validates the complete user path through both frontend and backend.",
        "Some end-to-end scenarios are automated in Playwright, while others may remain documented as manual test cases.",
      ],
      bullets: [
        "Login → open dashboard → logout",
        "Login → create task → edit → complete → delete",
        "Login → open requests → change status → verify the result",
        "Open articles → perform search → open details",
        "Open feedback form → complete it → receive a success state",
      ],
    },
    {
      heading: "Basic Security Testing",
      paragraphs: [
        "Baseline non-functional checks include a lightweight security sanity layer.",
        "This is not penetration testing, but rather a set of security sanity checks.",
      ],
      bullets: [
        "Access to protected routes without authentication",
        "Invalid login handling",
        "Form validation",
        "Basic XSS input attempts",
        "Absence of obvious secrets in the frontend",
        "Baseline API behavior for invalid requests",
      ],
    },
    {
      heading: "Performance Sanity Testing",
      paragraphs: [
        "The project also includes lightweight performance sanity checks.",
        "Full-scale load testing is outside the current scope.",
      ],
      bullets: [
        "Baseline page load speed",
        "Absence of obvious UI freezes",
        "Reasonable API response time",
        "Search and filtering behavior",
      ],
    },
    {
      heading: "Accessibility Testing",
      paragraphs: [
        "Accessibility is covered at a baseline level.",
        "A full WCAG audit is outside the current scope.",
      ],
      bullets: [
        "Labels",
        "Keyboard navigation",
        "Heading structure",
        "Error readability",
        "Focus behavior",
        "Basic form accessibility",
      ],
    },
    {
      heading: "Intentional Defects",
      paragraphs: [
        "Controlled intentional defects may be added to the project.",
        "Intentional defects should be documented in advance so that test failures appear as planned demonstrations rather than random instability.",
      ],
      bullets: [
        "Show that the tests actually detect problems",
        "Demonstrate failed scenarios in the Playwright report",
        "Use the EVAISYS AI Agent to analyze defects",
        "Show a QA approach to describing and classifying issues",
      ],
    },
    {
      heading: "Test Reporting",
      paragraphs: [
        "Reporting includes both automated artifacts and summarized QA conclusions.",
        "The EVAISYS AI Agent may be used to analyze reports and explain the reasons behind failed tests.",
      ],
      bullets: [
        "Playwright HTML report",
        "Screenshots",
        "Traces",
        "Result summary",
        "List of passed and failed tests",
        "Description of intentional defects",
        "Coverage conclusions",
      ],
    },
    {
      heading: "Out of Scope",
      paragraphs: [
        "The following areas are outside the current strategy and may be treated as future enhancements.",
      ],
      bullets: [
        "Full-scale load testing",
        "Stress testing",
        "Penetration testing",
        "Full security audit",
        "Full WCAG audit",
        "Enterprise-level performance testing",
        "Broad cross-browser matrix coverage",
        "Visual regression testing",
      ],
    },
    {
      heading: "Final Concept",
      paragraphs: [
        "EVAISYS Testing Lab demonstrates a complete QA engineering workflow.",
        "The Playwright code demonstrates practical automation. The test strategy demonstrates QA thinking. The EVAISYS AI Agent demonstrates a modern way to accelerate the analytical and documentation work of a test engineer.",
      ],
      bullets: [
        "QA analysis",
        "Test strategy",
        "Manual test cases",
        "Checklists",
        "API testing",
        "Playwright automation",
        "Intentional defects",
        "Test reporting",
        "AI-assisted QA workflow",
      ],
    },
  ],
};
