import type { DocumentationDocument } from "../../types";

export const tc010CompleteTaskDocument: DocumentationDocument = {
  id: "tc-010",
  title: "TC-010 Complete Task",
  description: "Verifies that the user can change an active task to the Completed state.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-010"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that the user can change an active task to the Completed state.",
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
      bullets: ["Tasks", "Task Status", "Workflow", "Task Filters"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "The Tasks section is open.",
        "An active task exists in the list.",
        "The task is available for status update.",
      ],
    },
    {
      heading: "Test Data",
      bullets: [
        "Title: Update Playwright Test Plan",
        "Status before action: Active",
        "Status after action: Completed",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the Tasks section.",
        "2. Find the active task `Update Playwright Test Plan`.",
        "3. Click the Complete button for the selected task.",
        "4. Wait until the task list is updated.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "The task status changes to Completed.",
        "The task is visually displayed as completed.",
        "The Complete button is no longer available for this task.",
        "The Reopen action becomes available for the task.",
        "No errors are displayed.",
        "Other tasks in the list remain unchanged.",
      ],
    },
    {
      heading: "Postconditions",
      bullets: [
        "The selected task remains in the Completed state.",
        "The task can be reopened through the Reopen action.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify that the task appears in the Completed filter.",
        "Verify that the task is no longer shown in the Active filter.",
        "Verify that the status change persists after page refresh.",
        "Verify that clicking Complete again is not possible.",
        "Verify that the interface does not create a duplicate task.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: ["Workflow Testing", "Regression Testing", "Playwright Automation"],
    },
  ],
};
