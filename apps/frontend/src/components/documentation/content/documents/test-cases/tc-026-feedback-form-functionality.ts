import type { DocumentationDocument } from "../../types";

export const tc026FeedbackFormFunctionalityDocument: DocumentationDocument = {
  id: "tc-026",
  title: "TC-026 Feedback Form Functionality",
  description: "Verifies the feedback form workflow, including validation and successful submission.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-026"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify the feedback form workflow, including validation and successful message submission.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["High"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "Validation", "Positive", "Negative"],
    },
    {
      heading: "Related Module",
      bullets: ["Contacts & Feedback", "Feedback Form", "Form Validation"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "The Contacts & Feedback section is open.",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the feedback form.",
        "2. Fill in the form with valid data.",
        "3. Submit the message.",
        "4. Verify successful submission.",
        "5. Repeat the scenario with empty required fields.",
        "6. Repeat the scenario with an invalid email address.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "Valid data is submitted successfully.",
        "A success state is displayed.",
        "Error messages are displayed for empty required fields.",
        "An invalid email address is not accepted.",
        "Errors are displayed next to the corresponding fields.",
        "The interface remains operational.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: ["Validation Testing", "Regression Testing", "Playwright Automation"],
    },
  ],
};
