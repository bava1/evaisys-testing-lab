import type { DocumentationDocument } from "../../types";

export const tc002LoginInvalidPasswordDocument: DocumentationDocument = {
  id: "tc-002",
  title: "TC-002 Login with Invalid Password",
  description: "Verifies that the system blocks access when a valid username is used with an invalid password.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-002"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that the system correctly handles a login attempt with an invalid password and does not grant access to protected application areas.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["High"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "Negative", "Authentication", "Security Sanity"],
    },
    {
      heading: "Related Module",
      bullets: ["Login", "Authentication", "Authorization Control", "Protected Routes"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The application is available.",
        "The user is on the Login page.",
        "An existing username is used:",
        "Username: admin",
        "An invalid password is used:",
        "Password: 111111",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the Login page.",
        "2. Enter `admin` in the Username field.",
        "3. Enter `111111` in the Password field.",
        "4. Click the Login button.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "Authorization is not completed.",
        "The user remains on the Login page.",
        "An authentication error message is displayed.",
        "Access to the Dashboard is not granted.",
        "Access to protected application sections is not granted.",
        "The system remains operational.",
        "The form fields remain available for another login attempt.",
      ],
    },
    {
      heading: "Postconditions",
      bullets: [
        "The user remains unauthenticated.",
        "Access to protected pages remains denied.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify that no redirect to the Dashboard occurs.",
        "Verify that there are no signs of successful authentication.",
        "Verify the correctness of the error message text.",
        "Verify that another login attempt can be made without reloading the page.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: ["Authentication Testing", "Regression Testing", "Playwright Automation"],
    },
  ],
};
