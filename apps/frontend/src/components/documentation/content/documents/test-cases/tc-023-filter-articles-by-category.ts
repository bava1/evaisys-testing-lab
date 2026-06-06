import type { DocumentationDocument } from "../../types";

export const tc023FilterArticlesByCategoryDocument: DocumentationDocument = {
  id: "tc-023",
  title: "TC-023 Filter Articles by Category",
  description: "Verifies that the user can filter articles by category.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-023"],
    },
    {
      heading: "Purpose",
      paragraphs: ["Verify that the user can filter articles by category."],
    },
    {
      heading: "Priority",
      paragraphs: ["Medium"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "Filter", "UI", "Regression"],
    },
    {
      heading: "Related Module",
      bullets: ["Articles", "Article Filters", "Category Filtering"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "The Articles section is open.",
        "Articles from different categories exist in the system.",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the Articles section.",
        "2. Verify that the article list is displayed.",
        "3. Select one of the available categories.",
        "4. Review the updated article list.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "Only articles from the selected category are displayed.",
        "Articles from other categories are not displayed.",
        "The active filter is visually understandable to the user.",
        "No errors are displayed.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify switching between categories.",
        "Verify returning to display of all articles.",
        "Verify filter behavior together with search.",
        "Verify the empty state when no articles exist for the selected category.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
    },
  ],
};
