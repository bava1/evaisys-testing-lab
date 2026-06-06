import type { DocumentationDocument } from "../../types";

export const tc019ChangeRequestStatusDocument: DocumentationDocument = {
  id: "tc-019",
  title: "TC-019 Change Request Status",
  description: "Verifies that the user can change a request status and see the updated state in the interface.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-019"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that the user can change the status of a request and see the updated state in the interface.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["High"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "Positive", "Workflow", "Regression"],
    },
    {
      heading: "Related Module",
      bullets: ["Requests", "Request Status", "Workflow", "Request Filters"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "The Requests section is open.",
        "A request that can change status exists in the list.",
        "The request is in a status that can be updated.",
      ],
    },
    {
      heading: "Test Data",
      bullets: ["Initial status: New", "New status: In Progress"],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the Requests section.",
        "2. Find a request with the New status.",
        "3. Open the request status controls.",
        "4. Change the request status to In Progress.",
        "5. Wait until the interface is updated.",
        "6. Verify the new request status in the list.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "The request status changes successfully.",
        "The new In Progress status is shown in the list.",
        "The old New status is no longer displayed for the selected request.",
        "Other request data remains unchanged.",
        "No errors are displayed.",
        "The interface does not create a duplicate request.",
      ],
    },
    {
      heading: "Postconditions",
      bullets: [
        "The selected request remains in the new status.",
        "The user remains in the Requests section.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify that the request appears when filtered by the new status.",
        "Verify that the request disappears from the old status filter.",
        "Verify that the status change persists after page refresh.",
        "Verify that the details dialog shows the updated status.",
        "Verify that changing the status does not affect request priority.",
        "Verify that impossible status transitions are unavailable if restricted by application logic.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: ["Workflow Testing", "Regression Testing", "Playwright Automation"],
    },
  ],
};
