import type { DocumentationDocument } from "../../types";

export const tc001LoginValidCredentialsDocument: DocumentationDocument = {
  id: "tc-001",
  title: "TC-001 Login with Valid Credentials",
  description: "Verifies that a registered user can sign in successfully with valid demo credentials.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-001"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that a registered user can successfully sign in to the application with correct credentials.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["High"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "Positive", "Smoke", "Authentication"],
    },
    {
      heading: "Related Module",
      bullets: ["Login", "Authentication", "Home Dashboard", "Protected Routes"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The application is available.",
        "The user is on the Login page.",
        "Valid demo credentials are used:",
        "Username: admin",
        "Password: 123456",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the Login page.",
        "2. Enter `admin` in the Username field.",
        "3. Enter `123456` in the Password field.",
        "4. Click the Login button.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "Authorization is completed successfully.",
        "The user is redirected to the Home Dashboard.",
        "The main application interface is displayed.",
        "Protected sections become available to the user:",
        "Tasks",
        "Requests",
        "Articles",
        "Contacts & Feedback",
        "No error messages are displayed.",
      ],
    },
    {
      heading: "Postconditions",
      bullets: [
        "The user remains in an authenticated state.",
        "Access to protected pages is allowed.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: ["Smoke Testing", "Regression Testing", "Playwright Automation"],
    },
  ],
};
