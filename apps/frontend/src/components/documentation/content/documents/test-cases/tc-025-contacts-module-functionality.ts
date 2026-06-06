import type { DocumentationDocument } from "../../types";

export const tc025ContactsModuleFunctionalityDocument: DocumentationDocument = {
  id: "tc-025",
  title: "TC-025 Contacts Module Functionality",
  description: "Verifies core Contacts section behavior, including contact display and search.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-025"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify the core functionality of the Contacts section, including contact display and search behavior.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["Medium"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "UI", "Search", "Regression"],
    },
    {
      heading: "Related Module",
      bullets: ["Contacts", "Contact Cards", "Contact Search"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is authenticated successfully.",
        "Test contacts exist in the system.",
        "The Contacts section is available to the user.",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the Contacts section.",
        "2. Verify display of the contact list.",
        "3. Verify the presence of contact cards.",
        "4. Search by the name of an existing contact.",
        "5. Search by the role of an existing contact.",
        "6. Clear the search query.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "The contact list is displayed correctly.",
        "Each contact displays the main data:",
        "Name",
        "Role",
        "Email",
        "Phone",
        "Photo, if supported",
        "Search filters the list correctly.",
        "After clearing search, all contacts are displayed.",
        "No errors are displayed.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: ["UI Testing", "Search Testing", "Regression Testing", "Playwright Automation"],
    },
  ],
};
