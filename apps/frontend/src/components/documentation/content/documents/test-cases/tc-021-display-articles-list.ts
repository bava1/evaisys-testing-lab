import type { DocumentationDocument } from "../../types";

export const tc021DisplayArticlesListDocument: DocumentationDocument = {
  id: "tc-021",
  title: "TC-021 Display Articles List",
  description: "Verifies that the Articles section displays the list of available articles.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-021"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that after opening the Articles section the user sees the list of available articles.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["Medium"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "UI", "Positive", "Smoke"],
    },
    {
      heading: "Related Module",
      bullets: ["Articles", "Article List", "Content Overview"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "The Articles section is open.",
        "At least one article exists in the system.",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the Articles section.",
        "2. Wait until the page finishes loading.",
        "3. Review the list of articles.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "The article list is displayed.",
        "Each article contains the main data:",
        "Title",
        "Short description",
        "Category",
        "Action for opening details",
        "No errors are displayed.",
        "The interface is rendered correctly.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify correct rendering of long titles.",
        "Verify that categories are displayed.",
        "Verify that there are no visual defects.",
        "Verify correct empty-state rendering if no articles exist.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
    },
  ],
};
