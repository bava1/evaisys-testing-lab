import type { DocumentationDocument } from "../../types";

export const tc029AccessibilityVerificationDocument: DocumentationDocument = {
  id: "tc-029",
  title: "TC-029 Accessibility Verification",
  description: "Performs a baseline accessibility review of the application interface.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-029"],
    },
    {
      heading: "Purpose",
      paragraphs: ["Perform a baseline accessibility review of the application interface."],
    },
    {
      heading: "Priority",
      paragraphs: ["Medium"],
    },
    {
      heading: "Test Type",
      bullets: ["Accessibility", "UI", "Usability", "Sanity"],
    },
    {
      heading: "Related Module",
      bullets: ["Navigation", "Forms", "Error Messages", "Keyboard Access"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The application is available.",
        "The user is authenticated successfully.",
        "The main application pages are available.",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Verify keyboard navigation through the interface.",
        "2. Verify focus visibility on interactive elements.",
        "3. Verify the presence of clear labels for form fields.",
        "4. Verify readability of error messages.",
        "5. Verify the logical tab order between elements.",
        "6. Verify baseline readability of text and controls.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "The user can move across the main elements with the keyboard.",
        "Focus is visible and not lost.",
        "Form fields have clear labels.",
        "Errors are displayed clearly.",
        "Main actions remain accessible without visual blockers.",
        "The interface remains understandable for the user.",
      ],
    },
    {
      heading: "Limitations",
      paragraphs: ["A full WCAG audit is not performed within this test case."],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Partially."],
      bullets: [
        "Manual Accessibility Review",
        "Basic automated accessibility checks",
        "Future enhancement",
      ],
    },
  ],
};
