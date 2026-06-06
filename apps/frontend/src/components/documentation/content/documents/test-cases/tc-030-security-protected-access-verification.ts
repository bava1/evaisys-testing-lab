import type { DocumentationDocument } from "../../types";

export const tc030SecurityProtectedAccessVerificationDocument: DocumentationDocument = {
  id: "tc-030",
  title: "TC-030 Security & Protected Access Verification",
  description: "Verifies baseline protection against unauthorized access and incorrect use of core workflows.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-030"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify baseline protection of the application against unauthorized access and incorrect use of core workflows.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["High"],
    },
    {
      heading: "Test Type",
      bullets: ["Security Sanity", "Authentication", "Authorization", "Negative", "Regression"],
    },
    {
      heading: "Related Module",
      bullets: ["Protected Routes", "Login", "Logout", "Form Validation"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The application is available.",
        "The user is not authenticated.",
        "Protected application routes are known.",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Try to open protected routes without authentication.",
        "2. Verify redirect to the Login page.",
        "3. Attempt to sign in with invalid credentials.",
        "4. Perform a successful login.",
        "5. Perform logout.",
        "6. Try to open a protected route again.",
        "7. Verify baseline handling of invalid form data.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "An unauthenticated user does not gain access to protected pages.",
        "Direct navigation triggers redirect to Login.",
        "Invalid credentials do not allow sign-in.",
        "After logout, access to protected sections is blocked again.",
        "Invalid data is not accepted by forms.",
        "The application does not display protected content before authentication.",
      ],
    },
    {
      heading: "Limitations",
      paragraphs: ["This test case is not a full penetration test."],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: [
        "Manual Security Sanity Testing",
        "Playwright Authentication Tests",
        "Regression Testing",
      ],
    },
  ],
};
