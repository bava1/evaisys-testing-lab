import type { DocumentationDocument } from "../../types";

export const tc015DisplayRequestsListDocument: DocumentationDocument = {
  id: "tc-015",
  title: "TC-015 Display Requests List",
  description: "Verifies that the Requests page displays the request list and key request data.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-015"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that after opening the Requests section the user sees the request list and can review the main data for each request.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["High"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "UI", "Positive", "Smoke"],
    },
    {
      heading: "Related Module",
      bullets: ["Requests", "Request List", "Request Filters", "Request Actions"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "The Requests section is open.",
        "At least one request exists in the system.",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Sign in to the application.",
        "2. Navigate to the Requests section.",
        "3. Wait until the page finishes loading.",
        "4. Review the displayed request list.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "The Requests page loads successfully.",
        "The request list is displayed.",
        "Each request shows the main data:",
        "Request title",
        "Status",
        "Priority",
        "Additional details, if provided by the interface",
        "Section controls are available to the user.",
        "There are no loading errors.",
        "The interface is rendered correctly.",
      ],
    },
    {
      heading: "Postconditions",
      bullets: [
        "The user remains on the Requests page.",
        "The request list remains available for further operations.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify correct rendering of all test requests.",
        "Verify display of statuses: New, In Progress, Resolved, Rejected.",
        "Verify display of priorities: Low, Medium, High.",
        "Verify the presence of filters.",
        "Verify the presence of status change actions.",
        "Verify correct rendering of long titles.",
        "Verify correct rendering after page refresh.",
      ],
    },
    {
      heading: "Alternative Scenario",
      bullets: [
        "If no requests exist, a correct empty state is displayed.",
        "The interface remains free of errors.",
        "The user understands that the list is empty.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: ["Smoke Testing", "UI Testing", "Regression Testing", "Playwright Automation"],
    },
  ],
};
