import type { DocumentationDocument } from "../types";

export const testCoverageFullDocument: DocumentationDocument = {
  id: "test-coverage-full-document",
  title: "EVAISYS Testing Lab - Test Coverage Overview",
  sections: [
    {
      heading: "Purpose",
      paragraphs: [
        "This document defines the testing areas covered within the EVAISYS Testing Lab project.",
        "Its purpose is to capture the overall test coverage before preparing the detailed test strategy, test cases, checklists, and automated scenarios.",
        "The document describes coverage directions and testing types rather than individual test cases.",
      ],
    },
    {
      heading: "Analytical Coverage",
      paragraphs: [
        "Analytical coverage defines the groundwork that supports later test design, prioritization, and automation planning.",
      ],
      bullets: [
        "Product analysis, including application functionality, user scenarios, pages, modules, and frontend/backend interaction.",
        "Requirements analysis, including completeness checks, ambiguity detection, clarification questions, and documented assumptions.",
        "Definition of testing boundaries, including scope, out-of-scope areas, and critical scenarios.",
        "Risk analysis, including identification of functional risks, defect likelihood assessment, testing priorities, and a risk matrix.",
      ],
      tables: [
        {
          columns: ["Area", "Coverage", "Notes"],
          rows: [
            [
              "Product Analysis",
              "Application functionality, user scenarios, pages, modules, frontend/backend interaction",
              "Used to understand the test object and core flows",
            ],
            [
              "Requirements Analysis",
              "Completeness checks, ambiguity detection, clarification questions, assumptions",
              "Supports stable test design inputs",
            ],
            [
              "Testing Boundaries",
              "Scope, out-of-scope areas, critical scenarios",
              "Helps keep coverage intentional and controlled",
            ],
            [
              "Risk Analysis",
              "Functional risks, defect likelihood, priorities, risk matrix",
              "Drives risk-based coverage focus",
            ],
          ],
        },
      ],
    },
    {
      heading: "Manual Testing",
      paragraphs: [
        "Manual testing covers scenarios that require human judgment, flexible exploration, or lightweight coverage before automation is justified.",
      ],
      bullets: [
        "Functional testing of user scenarios, business logic, and interface correctness.",
        "Test case design for major modules with positive and negative scenarios.",
        "Compact smoke and regression checklists.",
        "Exploratory testing focused on unusual defects and behavior outside formal flows.",
        "UI/UX checks covering usability, consistency, visual states, and overall user experience.",
        "Responsive testing across desktop, tablet, mobile, and multiple screen sizes.",
        "Baseline accessibility testing, including keyboard navigation, labels, heading structure, interface readability, and error messages.",
      ],
    },
    {
      heading: "Automated Testing",
      paragraphs: [
        "Automated coverage focuses on stable and repeatable scenarios that provide strong regression value.",
      ],
      bullets: [
        "Smoke testing for application startup, primary page availability, and baseline system health.",
        "UI automation for interface interactions, forms, filters, modal dialogs, and key user actions.",
        "Authentication testing for login, logout, protected routes, and negative authorization scenarios.",
        "CRUD testing for creating, editing, deleting, and changing the state of data.",
        "Workflow testing for user business scenarios, module transitions, and end-to-end process checks.",
        "End-to-end testing for complete user paths through frontend and backend.",
        "Regression testing for repeated validation of critical scenarios after changes.",
        "Intentional defect detection to demonstrate that automated checks catch controlled defects.",
      ],
    },
    {
      heading: "API Testing",
      paragraphs: [
        "API coverage is split between automated validation and manual exploration.",
      ],
      bullets: [
        "Automated API testing for endpoints, contracts, status codes, response validation, and error handling.",
        "Manual API testing through Postman for API exploration, negative scenarios, and request/response analysis.",
      ],
    },
    {
      heading: "Non-functional Testing",
      paragraphs: [
        "The project includes a baseline set of non-functional checks rather than deep specialist audits.",
      ],
      bullets: [
        "Basic Security Testing for authorization behavior, access to protected pages, baseline input validation, and common configuration mistakes.",
        "Performance Sanity Testing for baseline performance, UI response time, API response time, and the absence of obvious performance issues.",
      ],
    },
    {
      heading: "AI-assisted QA Workflow",
      paragraphs: [
        "Coverage includes the use of the EVAISYS AI Agent as a supporting QA tool rather than a replacement for engineering judgment.",
      ],
      bullets: [
        "Application analysis",
        "Test strategy preparation",
        "Test case creation",
        "Checklist creation",
        "Risk analysis",
        "Automation scope definition",
        "Test result analysis",
        "Defect analysis",
      ],
    },
    {
      heading: "Out of Scope",
      paragraphs: [
        "The following areas are excluded from the current version of project coverage and are treated as future enhancement opportunities.",
      ],
      bullets: [
        "Load testing",
        "Stress testing",
        "Penetration testing",
        "Full security audit",
        "Full accessibility audit",
        "Enterprise-level performance testing",
        "Large-scale cross-browser testing",
      ],
    },
  ],
};
