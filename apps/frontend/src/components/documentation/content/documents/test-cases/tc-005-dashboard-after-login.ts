import type { DocumentationDocument } from "../../types";

export const tc005DashboardAfterLoginDocument: DocumentationDocument = {
  id: "tc-005",
  title: "TC-005 Dashboard Display After Successful Login",
  description: "Verifies that the user is redirected to Home Dashboard and sees the main page elements after successful login.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-005"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify that after successful authentication the user is redirected to the Home Dashboard and can see the main elements of the application home page.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["High"],
    },
    {
      heading: "Test Type",
      bullets: ["Functional", "Positive", "Smoke", "UI"],
    },
    {
      heading: "Related Module",
      bullets: ["Home Dashboard", "Login Flow", "Navigation", "Protected Interface"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The application is available.",
        "The user is on the Login page.",
        "Valid credentials are used:",
        "Username: admin",
        "Password: 123456",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Open the Login page.",
        "2. Complete a successful login.",
        "3. Wait until the Dashboard is loaded.",
        "4. Review the content of the home page.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "The user is redirected to the Home Dashboard.",
        "The home page is displayed successfully.",
        "The main application interface is visible.",
        "The main system sections are available to the user:",
        "Tasks",
        "Requests",
        "Articles",
        "Contacts & Feedback",
        "No error messages are displayed.",
        "The interface is rendered correctly.",
      ],
    },
    {
      heading: "Postconditions",
      bullets: [
        "The user remains in an authenticated state.",
        "The Dashboard is available for further navigation.",
      ],
    },
    {
      heading: "Additional Checks",
      bullets: [
        "Verify the presence of the main navigation elements.",
        "Verify correct display of the page title.",
        "Verify that there are no visual UI issues.",
        "Verify that links to the main sections are available.",
        "Verify that there is no endless loading state or rendering error.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: ["Smoke Testing", "UI Testing", "Regression Testing", "Playwright Automation"],
    },
  ],
};
