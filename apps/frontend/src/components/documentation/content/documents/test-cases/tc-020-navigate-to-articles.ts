import type { DocumentationDocument } from "../../types";

export const tc020NavigateToArticlesDocument: DocumentationDocument = {
  id: "tc-020",
  title: "TC-020 Navigate to Articles Module",
  description: "Verifies that the user can navigate to the Articles section from the main application interface.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-020"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that the user can successfully navigate to the Articles section from the main application interface.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["Medium"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "Navigation", "UI", "Positive"],
    },
    {
      heading: "Related Module",
      bullets: ["Articles", "Navigation", "Home Dashboard", "Protected Routes"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "The user is on the Home Dashboard or in any other application section.",
        "The Articles section is available in the navigation menu.",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Sign in to the application.",
        "2. Find the Articles navigation item.",
        "3. Click Articles.",
        "4. Wait until the page is loaded.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "Navigation to the Articles section is completed.",
        "The URL matches the Articles section.",
        "The Articles page loads successfully.",
        "The article list is displayed.",
        "There are no loading errors.",
        "The interface is rendered correctly.",
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
