import type { DocumentationDocument } from "../../types";

export const tc006NavigateToTasksDocument: DocumentationDocument = {
  id: "tc-006",
  title: "TC-006 Navigate to Tasks Module from Dashboard",
  description: "Verifies navigation from Home Dashboard to the Tasks module through the application UI.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-006"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that the user can successfully navigate from the Home Dashboard to the Tasks section using the application navigation elements.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["High"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "Navigation", "UI", "Positive"],
    },
    {
      heading: "Related Module",
      bullets: ["Home Dashboard", "Tasks", "Navigation", "Protected Routes"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "The Home Dashboard page is open.",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Sign in to the application.",
        "2. Verify that the Home Dashboard is displayed.",
        "3. Find the Tasks navigation element.",
        "4. Click Tasks.",
        "5. Wait until the page is loaded.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "Navigation to the Tasks section is completed successfully.",
        "The URL matches the Tasks section.",
        "The Tasks page loads successfully.",
        "The task list is displayed.",
        "No error messages are displayed.",
        "The interface is rendered correctly.",
      ],
    },
    {
      heading: "Postconditions",
      bullets: [
        "The user remains on the Tasks page.",
        "The section is ready for further work with tasks.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify the correct active menu item.",
        "Verify the absence of loading errors.",
        "Verify that the page can be refreshed without losing access.",
        "Verify that the authenticated state is preserved after navigation.",
        "Verify correct rendering of the task list.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: [
        "Navigation Testing",
        "Smoke Testing",
        "Regression Testing",
        "Playwright Automation",
      ],
    },
  ],
};
