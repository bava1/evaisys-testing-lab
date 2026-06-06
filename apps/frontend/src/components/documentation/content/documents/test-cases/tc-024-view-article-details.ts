import type { DocumentationDocument } from "../../types";

export const tc024ViewArticleDetailsDocument: DocumentationDocument = {
  id: "tc-024",
  title: "TC-024 View Article Details",
  description: "Verifies that the user can open detailed information for the selected article.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-024"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that the user can open detailed information for the selected article.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["Medium"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "UI", "Positive", "Content"],
    },
    {
      heading: "Related Module",
      bullets: ["Articles", "Article Details Dialog", "Content Review"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "The Articles section is open.",
        "At least one article exists in the list.",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the Articles section.",
        "2. Find an article in the list.",
        "3. Click the Details / View Details button.",
        "4. Wait until the details dialog opens.",
        "5. Review the dialog content.",
        "6. Close the dialog.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "The details dialog opens successfully.",
        "The dialog displays information for the selected article.",
        "The data matches the article from the list.",
        "The dialog can be closed.",
        "After closing, the user remains in the Articles section.",
        "No errors are displayed.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify opening details for different articles.",
        "Verify the correctness of the title.",
        "Verify the correctness of the category.",
        "Verify that data does not change during viewing.",
        "Verify correct rendering after search or filtering.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: ["UI Testing", "Regression Testing", "Playwright Automation"],
    },
  ],
};
