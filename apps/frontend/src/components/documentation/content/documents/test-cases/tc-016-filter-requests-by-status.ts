import type { DocumentationDocument } from "../../types";

export const tc016FilterRequestsByStatusDocument: DocumentationDocument = {
  id: "tc-016",
  title: "TC-016 Filter Requests by Status",
  description: "Verifies that the Requests list can be filtered by request status.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-016"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that the user can filter the request list by status and see only the requests that match the selected criterion.",
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
      bullets: ["Requests", "Request Filters", "Request Status", "Request List"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "The Requests section is open.",
        "Requests with different statuses exist in the system:",
        "New",
        "In Progress",
        "Resolved",
        "Rejected",
      ],
    },
    {
      heading: "Test Data",
      bullets: [
        "Request A - New",
        "Request B - In Progress",
        "Request C - Resolved",
        "Request D - Rejected",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the Requests section.",
        "2. Verify that the request list is displayed.",
        "3. Select the All filter and review the displayed requests.",
        "4. Select the New filter and review the displayed requests.",
        "5. Select the In Progress filter and review the displayed requests.",
        "6. Select the Resolved filter and review the displayed requests.",
        "7. Select the Rejected filter and review the displayed requests.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "When the All filter is selected, all requests are displayed.",
        "When the New filter is selected, only requests with the New status are displayed.",
        "When the In Progress filter is selected, only requests with the In Progress status are displayed.",
        "When the Resolved filter is selected, only requests with the Resolved status are displayed.",
        "When the Rejected filter is selected, only requests with the Rejected status are displayed.",
        "Requests with other statuses are not displayed.",
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
        "Verify that request data remains intact after filtering.",
        "Verify that an empty state is displayed when no requests match the selected status.",
        "Verify correct filter behavior after a request status change.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: ["UI Testing", "Regression Testing", "Playwright Automation"],
    },
  ],
};
