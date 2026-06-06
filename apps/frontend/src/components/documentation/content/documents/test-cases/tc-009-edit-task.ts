import type { DocumentationDocument } from "../../types";

export const tc009EditTaskDocument: DocumentationDocument = {
  id: "tc-009",
  title: "TC-009 Edit Task",
  description: "Verifies that the user can edit an existing task and save the updated values.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-009"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that the user can successfully edit an existing task and save the applied changes.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["High"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "Positive", "CRUD", "Regression"],
    },
    {
      heading: "Related Module",
      bullets: ["Tasks", "Task Editing", "Task Form", "CRUD Operations"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "The Tasks section is open.",
        "An editable task exists in the task list.",
        "The user has permission to update tasks.",
      ],
    },
    {
      heading: "Test Data",
      bullets: [
        "Original task:",
        "Title: Prepare Playwright Test Plan",
        "Description: Create a basic Playwright test plan for EVAISYS Testing Lab project.",
        "New values:",
        "Title: Update Playwright Test Plan",
        "Description: Update the Playwright test plan with authentication and CRUD scenarios.",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the Tasks section.",
        "2. Find the existing task `Prepare Playwright Test Plan`.",
        "3. Click the Edit button for the selected task.",
        "4. Change the Title field to `Update Playwright Test Plan`.",
        "5. Change the Description field to `Update the Playwright test plan with authentication and CRUD scenarios.`.",
        "6. Click the Save / Update button.",
        "7. Wait until the operation is completed.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "The changes are saved successfully.",
        "The edit form is closed.",
        "The task remains in the task list.",
        "The task title is updated to `Update Playwright Test Plan`.",
        "The task description is updated to `Update the Playwright test plan with authentication and CRUD scenarios.`.",
        "The old values are no longer displayed as the current task data.",
        "No errors are displayed.",
      ],
    },
    {
      heading: "Postconditions",
      bullets: [
        "The edited task exists in the system.",
        "The task remains available for further operations:",
        "Completion",
        "Reopen",
        "Deletion",
        "Filtering",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify that the changes are displayed immediately after saving.",
        "Verify that the task list updates without reloading the page.",
        "Verify that the changed data persists after page refresh.",
        "Verify that editing can be cancelled without saving.",
        "Verify that a validation error is displayed for invalid data.",
        "Verify that the task status does not change automatically when text fields are edited.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: ["CRUD Testing", "Regression Testing", "Playwright Automation"],
    },
  ],
};
