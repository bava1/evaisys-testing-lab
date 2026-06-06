import type { DocumentationDocument } from "../../types";

export const tc011ReopenTaskDocument: DocumentationDocument = {
  id: "tc-011",
  title: "TC-011 Reopen Task",
  description: "Verifies that a completed task can be reopened and returned to the Active state.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-011"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that the user can reopen a completed task and return it to the Active state.",
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
        "A task with the Completed status exists in the list.",
        "The Reopen action is available for the task.",
      ],
    },
    {
      heading: "Test Data",
      bullets: [
        "Title: Update Playwright Test Plan",
        "Status before action: Completed",
        "Status after action: Active",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the Tasks section.",
        "2. Find the completed task `Update Playwright Test Plan`.",
        "3. Click the Reopen button.",
        "4. Wait until the task list is updated.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "The task status changes from Completed to Active.",
        "The task is displayed as active again.",
        "The Reopen button becomes unavailable.",
        "The Complete action becomes available for the task again.",
        "No errors are displayed.",
        "Other tasks remain unchanged.",
      ],
    },
    {
      heading: "Postconditions",
      bullets: [
        "The task remains in the Active state.",
        "The user can complete the task again through the Complete action.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify that the task appears in the Active filter.",
        "Verify that the task no longer appears in the Completed filter.",
        "Verify that the status change persists after page refresh.",
        "Verify that clicking Reopen again is not possible.",
        "Verify that no duplicate tasks are created.",
        "Verify that task data such as Title and Description remains unchanged.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: ["Workflow Testing", "Regression Testing", "Playwright Automation"],
    },
  ],
};
