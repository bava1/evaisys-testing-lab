import type { DocumentationDocument } from "../../types";

export const tc027ApiFunctionalityValidationDocument: DocumentationDocument = {
  id: "tc-027",
  title: "TC-027 API Functionality Validation",
  description: "Verifies availability and correct behavior of the application's core REST APIs.",
  sections: [
    {
      heading: "Test Case ID",
      paragraphs: ["TC-027"],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Verify the availability and correct behavior of the application's main REST APIs.",
      ],
    },
    {
      heading: "Priority",
      paragraphs: ["High"],
    },
    {
      heading: "Test Type",
      bullets: ["API Testing", "Functional", "Integration"],
    },
    {
      heading: "Related Module",
      bullets: ["Health API", "Authentication API", "Tasks API", "Requests API", "Articles API", "Contact API"],
    },
    {
      heading: "Preconditions",
      bullets: [
        "The backend is running.",
        "The API is available.",
        "An API testing tool is prepared, for example Postman.",
      ],
    },
    {
      heading: "API Groups Under Test",
      bullets: [
        "Health API",
        "Authentication API",
        "Tasks API",
        "Requests API",
        "Articles API",
        "Contact API",
      ],
    },
    {
      heading: "Test Steps",
      bullets: [
        "1. Send requests to each endpoint.",
        "2. Verify response status codes.",
        "3. Verify response structures.",
        "4. Verify handling of invalid requests.",
        "5. Verify input data validation.",
      ],
    },
    {
      heading: "Expected Result",
      bullets: [
        "The API returns correct status codes.",
        "The response structure matches expectations.",
        "Invalid requests are handled correctly.",
        "Errors are returned in the expected format.",
        "The API remains available throughout testing.",
      ],
    },
    {
      heading: "Automation Potential",
      paragraphs: ["Yes."],
      bullets: [
        "Manual API Testing (Postman)",
        "Playwright API Testing",
        "Regression Testing",
      ],
    },
  ],
};
