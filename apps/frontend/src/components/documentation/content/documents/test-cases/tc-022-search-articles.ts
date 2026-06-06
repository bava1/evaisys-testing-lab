import type { DocumentationDocument } from "../../types";

export const tc022SearchArticlesDocument: DocumentationDocument = {
  id: "tc-022",
  title: "TC-022 Search Articles",
  description: "Verifies that the user can search for articles by a text query.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-022"],
    },
    {
      heading: "Purpose",
      paragraphs: ["Verify that the user can search for articles by a text query."],
    },
    {
      heading: "Priority",
      paragraphs: ["Medium"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "Search", "UI", "Regression"],
    },
    {
      heading: "Related Module",
      bullets: ["Articles", "Article Search", "Content Discovery"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "The Articles section is open.",
        "The list contains articles with different titles and descriptions.",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the Articles section.",
        "2. Find the search field.",
        "3. Enter a search query.",
        "4. Wait until the article list is updated.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "Only articles matching the search query are displayed.",
        "Articles that do not match the query are not displayed.",
        "Search works by title and/or description.",
        "No errors are displayed.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify search by a partial word.",
        "Verify search with no results.",
        "Verify clearing the search field.",
        "Verify correct empty-state rendering.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
    },
  ],
};
