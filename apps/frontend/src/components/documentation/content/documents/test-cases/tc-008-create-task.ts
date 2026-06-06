import type { DocumentationDocument } from "../../types";

export const tc008CreateTaskDocument: DocumentationDocument = {
  id: "tc-008",
  title: "TC-008 Create Task",
  description: "Verifies that the user can create a new task through the Tasks interface.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-008"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that the user can successfully create a new task through the application interface.",
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
      bullets: ["Tasks", "Task Creation", "Task Form", "CRUD Operations"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "The Tasks section is open.",
        "The user has permission to create tasks.",
      ],
    },
    {
      heading: "Test Data",
      bullets: [
        "Task title: Prepare Playwright Test Plan",
        "Task description: Create a basic Playwright test plan for EVAISYS Testing Lab project.",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the Tasks section.",
        "2. Click the button for creating a new task.",
        "3. Enter `Prepare Playwright Test Plan` in the Title field.",
        "4. Enter `Create a basic Playwright test plan for EVAISYS Testing Lab project.` in the Description field.",
        "5. Click the Save / Create button.",
        "6. Wait until the operation is completed.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "The new task is created successfully.",
        "The form is closed, if a dialog is used.",
        "The new task appears in the task list.",
        "The task title is displayed correctly.",
        "The task description is displayed correctly.",
        "The task receives the default status.",
        "No errors are displayed.",
      ],
    },
    {
      heading: "Postconditions",
      bullets: [
        "A new task exists in the system.",
        "The user can perform further operations on it:",
        "Editing",
        "Completion",
        "Deletion",
        "Status change",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify that the task is displayed immediately after creation.",
        "Verify that the list updates without reloading the page.",
        "Verify that the field values are rendered correctly.",
        "Verify that the created task persists after page refresh.",
        "Verify that there are no visual UI issues.",
      ],
    },
    {
      heading: "Related Checks",
      bullets: [
        "Creation of a task with the minimum allowed Title length.",
        "Creation of a task with the maximum allowed Title length.",
        "Creation of a task without Description, if allowed by business logic.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: ["CRUD Testing", "Smoke Testing", "Regression Testing", "Playwright Automation"],
    },
  ],
};
