import type { DocumentationDocument } from "../../types";

export const tc013FilterTasksByStatusDocument: DocumentationDocument = {
  id: "tc-013",
  title: "TC-013 Filter Tasks by Status",
  description: "Verifies that the Tasks page filters records by status and shows only matching tasks.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-013"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that the user can filter tasks by status and see only the tasks that match the selected filter.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["High"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "Positive", "UI", "Regression"],
    },
    {
      heading: "Related Module",
      bullets: ["Tasks", "Task Filters", "Task Status", "Task List"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "The Tasks section is open.",
        "The task list contains tasks with different statuses:",
        "Active",
        "Completed",
      ],
    },
    {
      heading: "Test Data",
      bullets: ["Task A: Active", "Task B: Completed"],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the Tasks section.",
        "2. Verify that tasks are displayed in the list.",
        "3. Select the All filter.",
        "4. Review the displayed tasks.",
        "5. Select the Active filter.",
        "6. Review the displayed tasks.",
        "7. Select the Completed filter.",
        "8. Review the displayed tasks.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "When the All filter is selected, all tasks are displayed.",
        "When the Active filter is selected, only active tasks are displayed.",
        "When the Completed filter is selected, only completed tasks are displayed.",
        "Tasks with non-matching statuses are not displayed in the selected filter.",
        "The interface updates correctly after the filter is changed.",
        "No errors are displayed.",
      ],
    },
    {
      heading: "Postconditions",
      bullets: [
        "The user remains in the Tasks section.",
        "The task list remains available for further actions.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify the active state of the selected filter.",
        "Verify correct switching between filters.",
        "Verify that no duplicate tasks appear.",
        "Verify that task statuses remain correct after filtering.",
        "Verify that an empty state is displayed when no tasks match the selected filter.",
        "Verify correct filter behavior after creating, completing, or reopening a task.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: ["UI Testing", "Regression Testing", "Playwright Automation"],
    },
  ],
};
