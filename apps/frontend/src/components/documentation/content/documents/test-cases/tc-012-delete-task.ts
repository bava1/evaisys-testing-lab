import type { DocumentationDocument } from "../../types";

export const tc012DeleteTaskDocument: DocumentationDocument = {
  id: "tc-012",
  title: "TC-012 Delete Task",
  description: "Verifies that an existing task can be removed from the task list.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-012"],
    },
    {
      heading: "Purpose",
      paragraphs: ["Verify that the user can delete an existing task from the task list."],
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
      bullets: ["Tasks", "Task Deletion", "CRUD Operations", "Task List"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "The Tasks section is open.",
        "A task that can be deleted exists in the list.",
      ],
    },
    {
      heading: "Test Data",
      bullets: ["Title: Update Playwright Test Plan"],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the Tasks section.",
        "2. Find the task `Update Playwright Test Plan`.",
        "3. Click the Delete button for the selected task.",
        "4. If a deletion confirmation appears, confirm the action.",
        "5. Wait until the task list is updated.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "The task is deleted successfully.",
        "The deleted task is no longer displayed in the list.",
        "The task list updates without errors.",
        "Other tasks remain unchanged.",
        "No errors are displayed.",
      ],
    },
    {
      heading: "Postconditions",
      bullets: [
        "The deleted task is absent from the task list.",
        "The user remains in the Tasks section.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify that the deleted task does not reappear after page refresh.",
        "Verify that the deleted task is not shown in Active or Completed filters.",
        "Verify that cancelling the confirmation keeps the task intact.",
        "Verify that deleting one task does not affect other tasks.",
        "Verify that the interface displays a correct empty state if the last task was deleted.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: ["CRUD Testing", "Regression Testing", "Playwright Automation"],
    },
  ],
};
