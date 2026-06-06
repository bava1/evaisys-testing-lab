import type { DocumentationDocument } from "../../types";

export const tc003ProtectedRouteWithoutAuthDocument: DocumentationDocument = {
  id: "tc-003",
  title: "TC-003 Access Protected Route Without Authentication",
  description: "Verifies that an unauthenticated user cannot open protected routes through a direct URL.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-003"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that an unauthenticated user cannot access protected application areas by entering a direct URL in the browser.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["High"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "Security Sanity", "Authentication", "Authorization", "Negative"],
    },
    {
      heading: "Related Module",
      bullets: ["Protected Routes", "Authentication", "Authorization", "Route Guard Logic"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is not authenticated.",
        "There is no active session.",
        "A browser is open.",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the browser.",
        "2. Navigate directly to one of the protected routes:",
        "/",
        "/tasks",
        "/requests",
        "/articles",
        "/contacts",
        "3. Wait until the page finishes loading.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "The user does not gain access to the requested page.",
        "The system detects that the user is not authenticated.",
        "The user is redirected to the Login page.",
        "Protected content is not displayed.",
        "The user does not see application data.",
        "After successful authentication, access to the page becomes possible.",
      ],
    },
    {
      heading: "Postconditions",
      bullets: [
        "The user remains unauthenticated.",
        "Access to protected routes is not available.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify direct navigation by URL.",
        "Verify browser page refresh behavior.",
        "Verify opening a protected URL in a new tab.",
        "Verify behavior after clearing localStorage.",
        "Verify that the Dashboard is not displayed before authentication.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: [
        "Authentication Testing",
        "Security Sanity Testing",
        "Regression Testing",
        "Playwright Automation",
      ],
    },
  ],
};
