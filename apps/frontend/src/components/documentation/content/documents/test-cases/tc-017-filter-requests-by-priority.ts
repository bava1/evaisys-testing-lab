import type { DocumentationDocument } from "../../types";

export const tc017FilterRequestsByPriorityDocument: DocumentationDocument = {
  id: "tc-017",
  title: "TC-017 Filter Requests by Priority",
  description: "Verifies that the Requests list can be filtered by request priority.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-017"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that the user can filter the request list by priority and see only the requests that match the selected priority.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["High"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "UI", "Positive", "Regression"],
    },
    {
      heading: "Related Module",
      bullets: ["Requests", "Request Filters", "Request Priority", "Request List"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "The Requests section is open.",
        "Requests with different priorities exist in the system:",
        "Low",
        "Medium",
        "High",
      ],
    },
    {
      heading: "Test Data",
      bullets: ["Request A - Low", "Request B - Medium", "Request C - High"],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the Requests section.",
        "2. Verify that the request list is displayed.",
        "3. Select the All filter and review the displayed requests.",
        "4. Select the Low filter and review the displayed requests.",
        "5. Select the Medium filter and review the displayed requests.",
        "6. Select the High filter and review the displayed requests.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "When the All filter is selected, all requests are displayed.",
        "When the Low filter is selected, only requests with Low priority are displayed.",
        "When the Medium filter is selected, only requests with Medium priority are displayed.",
        "When the High filter is selected, only requests with High priority are displayed.",
        "Requests with other priorities are not displayed.",
        "The interface updates correctly after the filter is changed.",
        "No errors are displayed.",
      ],
    },
    {
      heading: "Postconditions",
      bullets: [
        "The user remains in the Requests section.",
        "The request list remains available for further work.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify correct display of the active filter.",
        "Verify that no duplicate requests appear.",
        "Verify correct switching between filters.",
        "Verify that request statuses remain unchanged after filtering.",
        "Verify that an empty state is displayed when no requests match the selected priority.",
        "Verify correct combined behavior with the status filter.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: ["UI Testing", "Regression Testing", "Playwright Automation"],
    },
  ],
};
