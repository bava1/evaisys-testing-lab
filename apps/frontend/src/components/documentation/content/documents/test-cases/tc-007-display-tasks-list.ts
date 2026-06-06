import type { DocumentationDocument } from "../../types";

export const tc007DisplayTasksListDocument: DocumentationDocument = {
  id: "tc-007",
  title: "TC-007 Display Tasks List",
  description: "Verifies that the Tasks page displays the available task records and related controls.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-007"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that after opening the Tasks section the user sees the task list and can review the available records.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["High"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "UI", "Positive", "Smoke"],
    },
    {
      heading: "Related Module",
      bullets: ["Tasks", "Task List", "Filters", "Task Actions"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "At least one task exists in the system.",
        "The user is in the Tasks section.",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Sign in to the application.",
        "2. Navigate to the Tasks section.",
        "3. Wait until the page finishes loading.",
        "4. Review the displayed task list.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "The Tasks page loads successfully.",
        "The list of tasks is displayed.",
        "Each task shows the main data:",
        "Task title",
        "Description, if provided by the interface",
        "Task status",
        "Available actions",
        "The page controls are available to the user.",
        "There are no loading errors.",
      ],
    },
    {
      heading: "Postconditions",
      bullets: [
        "The user remains on the Tasks page.",
        "The task list is available for further operations.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify display of all test tasks.",
        "Verify correct task statuses.",
        "Verify the presence of task action buttons.",
        "Verify the presence of task filters.",
        "Verify correct rendering of long titles.",
        "Verify correct page rendering after browser refresh.",
      ],
    },
    {
      heading: "Alternative Scenario",
      bullets: [
        "If no tasks exist, a correct empty state is displayed.",
        "The interface remains free of errors.",
        "The user can create a new task.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: ["Smoke Testing", "UI Testing", "Regression Testing", "Playwright Automation"],
    },
  ],
};
