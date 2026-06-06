import type { DocumentationDocument } from "../../types";

export const tc018ViewRequestDetailsDocument: DocumentationDocument = {
  id: "tc-018",
  title: "TC-018 View Request Details",
  description: "Verifies that the user can open the details dialog for a request and review the correct data.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-018"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that the user can open detailed information for the selected request and see correct data in the details dialog.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["High"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "UI", "Positive", "Workflow"],
    },
    {
      heading: "Related Module",
      bullets: ["Requests", "Request Details Dialog", "Workflow", "Request List"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "The Requests section is open.",
        "At least one request exists in the list.",
        "The request has an action for viewing details.",
      ],
    },
    {
      heading: "Test Data",
      bullets: ["Request: any available request from the list"],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the Requests section.",
        "2. Find a request in the list.",
        "3. Click the Details or View Details button for the selected request.",
        "4. Wait until the details dialog opens.",
        "5. Review the dialog content.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "The details dialog opens successfully.",
        "The dialog displays information for the selected request.",
        "The data in the dialog matches the selected request from the list.",
        "The main request fields are displayed:",
        "Title or name",
        "Status",
        "Priority",
        "Description or additional details, if supported by the interface",
        "The dialog can be closed.",
        "After closing, the user remains in the Requests section.",
        "No errors are displayed.",
      ],
    },
    {
      heading: "Postconditions",
      bullets: [
        "The user remains in the Requests section.",
        "The request list remains available.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify correct dialog closing behavior.",
        "Verify that data does not change during simple viewing.",
        "Verify opening details for different requests.",
        "Verify correct data after filters are applied.",
        "Verify that there are no visual issues in the dialog.",
        "Verify baseline keyboard accessibility of the dialog.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: [
        "UI Testing",
        "Workflow Testing",
        "Regression Testing",
        "Playwright Automation",
      ],
    },
  ],
};
