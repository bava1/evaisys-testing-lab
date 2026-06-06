import type { DocumentationDocument } from "../../types";

export const tc004LogoutFromApplicationDocument: DocumentationDocument = {
  id: "tc-004",
  title: "TC-004 Logout from Application",
  description: "Verifies that an authenticated user can end the current session and leave the application correctly.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-004"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that an authenticated user can correctly terminate the current session and log out of the application.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["High"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "Authentication", "Authorization", "Smoke"],
    },
    {
      heading: "Related Module",
      bullets: ["Logout", "Authentication", "Protected Routes", "Session State"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The user is successfully authenticated in the system.",
        "Any protected application section is open.",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Sign in to the application.",
        "2. Verify that one of the protected application sections is open.",
        "3. Click the Logout button.",
        "4. Wait until the logout operation is completed.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "The user is logged out successfully.",
        "The user is redirected to the Login page.",
        "The protected application interface is no longer displayed.",
        "Access to the Dashboard and other protected sections is no longer available.",
        "The current user session is terminated.",
      ],
    },
    {
      heading: "Postconditions",
      bullets: [
        "The user remains in an unauthenticated state.",
        "Re-authentication is required to access the application again.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify reopening a protected URL after logout.",
        "Verify browser page refresh after logout.",
        "Verify that protected data cannot be reopened through standard browser navigation.",
        "Verify proper cleanup of the authentication state.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: [
        "Smoke Testing",
        "Authentication Testing",
        "Regression Testing",
        "Playwright Automation",
      ],
    },
  ],
};
