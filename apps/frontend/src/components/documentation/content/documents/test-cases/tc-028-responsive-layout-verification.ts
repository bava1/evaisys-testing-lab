import type { DocumentationDocument } from "../../types";

export const tc028ResponsiveLayoutVerificationDocument: DocumentationDocument = {
  id: "tc-028",
  title: "TC-028 Responsive Layout Verification",
  description: "Verifies that the application remains usable and correctly rendered across multiple screen sizes.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-028"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that the application is displayed correctly and remains functional on different screen sizes.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["Medium"],
    },
    {
      heading: "Test Type",
      bullets: ["UI", "Responsive", "Functional", "Regression"],
    },
    {
      heading: "Related Module",
      bullets: ["Responsive Layout", "Navigation", "Forms", "Dialogs"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The application is available.",
        "The user is authenticated successfully.",
        "The main application sections are available.",
      ],
    },
    {
      heading: "Screen Sizes Under Test",
      bullets: ["Desktop", "Tablet", "Mobile"],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the application at desktop screen size.",
        "2. Verify rendering of the main pages.",
        "3. Change the screen size to tablet.",
        "4. Verify navigation, forms, lists, and dialogs.",
        "5. Change the screen size to mobile.",
        "6. Repeat validation of the main user scenarios.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "The interface adapts correctly to the screen size.",
        "Main navigation remains available.",
        "Forms remain available for input.",
        "Buttons and controls do not overlap.",
        "Text remains readable.",
        "Dialogs are displayed correctly.",
        "Main scenarios can be completed on each screen size.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Partially."],
      bullets: [
        "Manual Responsive Testing",
        "Playwright viewport checks",
        "Regression Testing",
      ],
    },
  ],
};
