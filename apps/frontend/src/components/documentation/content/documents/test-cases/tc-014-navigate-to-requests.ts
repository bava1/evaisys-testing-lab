import type { DocumentationDocument } from "../../types";

export const tc014NavigateToRequestsDocument: DocumentationDocument = {
  id: "tc-014",
  title: "TC-014 Navigate to Requests Module",
  description: "Verifies navigation from another application section into the Requests module.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-014"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that the user can successfully navigate from another application section to the Requests module and access request-related functionality.",
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
      bullets: ["Requests", "Navigation", "Home Dashboard", "Protected Routes"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "The user is in any application section.",
        "The Requests section is available in the navigation menu.",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Sign in to the application.",
        "2. Open the Home Dashboard or any other system section.",
        "3. Find the Requests menu item.",
        "4. Click Requests.",
        "5. Wait until the page finishes loading.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "Navigation to the Requests section is completed.",
        "The URL matches the Requests section.",
        "The Requests page loads successfully.",
        "The request list is displayed.",
        "Section controls are available to the user.",
        "There are no loading errors.",
        "The interface is rendered correctly.",
      ],
    },
    {
      heading: "Postconditions",
      bullets: [
        "The user remains on the Requests page.",
        "The section is ready for further work with requests.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify the correct active menu item.",
        "Verify that the authenticated state is preserved after navigation.",
        "Verify the absence of loading errors.",
        "Verify correct rendering of the request list.",
        "Verify correct rendering of request statuses and priorities.",
        "Verify that the page can be refreshed without losing access.",
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
