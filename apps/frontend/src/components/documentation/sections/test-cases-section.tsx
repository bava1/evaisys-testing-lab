import { useState } from "react";
import { ButtonBase, Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import DocumentViewerDialog from "../common/document-viewer-dialog";
import SourceDocumentCard from "../common/source-document-card";
import { testCaseRegistry } from "../content/documents/test-cases";
import type { DocumentationDocument } from "../content/types";

const testCaseCoveredAreas = [
  "Authentication",
  "Home Dashboard",
  "Tasks",
  "Requests",
  "Articles",
  "Contacts & Feedback",
  "Backend API",
  "Testing Lab",
  "Documentation Portal",
];

const testCaseLibraryItems = [
  {
    id: "tc-001",
    title: "TC-001 Login with Valid Credentials",
    description: "Successful login with valid demo credentials and access to protected sections.",
  },
  {
    id: "tc-002",
    title: "TC-002 Login with Invalid Password",
    description: "Rejected login with an invalid password and validation of blocked protected access.",
  },
  {
    id: "tc-003",
    title: "TC-003 Access Protected Route Without Authentication",
    description: "Direct URL access control for protected routes without an authenticated session.",
  },
  {
    id: "tc-004",
    title: "TC-004 Logout from Application",
    description: "Session termination and protected route lockout after logout.",
  },
  {
    id: "tc-005",
    title: "TC-005 Dashboard Display After Successful Login",
    description: "Home Dashboard rendering and main navigation availability after successful sign-in.",
  },
  {
    id: "tc-006",
    title: "TC-006 Navigate to Tasks Module from Dashboard",
    description: "Navigation from Dashboard to the Tasks module through the application menu.",
  },
  {
    id: "tc-007",
    title: "TC-007 Display Tasks List",
    description: "Task list rendering, task metadata visibility, and empty-state behavior.",
  },
  {
    id: "tc-008",
    title: "TC-008 Create Task",
    description: "Creation of a new task through the Tasks UI with validation of saved values.",
  },
  {
    id: "tc-009",
    title: "TC-009 Edit Task",
    description: "Editing an existing task and persisting the updated title and description.",
  },
  {
    id: "tc-010",
    title: "TC-010 Complete Task",
    description: "Changing an active task to Completed and validating workflow status behavior.",
  },
  {
    id: "tc-011",
    title: "TC-011 Reopen Task",
    description: "Reopening a completed task and returning it to the Active state.",
  },
  {
    id: "tc-012",
    title: "TC-012 Delete Task",
    description: "Deleting an existing task from the Tasks list and verifying correct removal.",
  },
  {
    id: "tc-013",
    title: "TC-013 Filter Tasks by Status",
    description: "Filtering tasks by status and validating correct All, Active, and Completed results.",
  },
  {
    id: "tc-014",
    title: "TC-014 Navigate to Requests Module",
    description: "Navigation from another application area into the Requests module.",
  },
  {
    id: "tc-015",
    title: "TC-015 Display Requests List",
    description: "Rendering of the Requests list with visible statuses, priorities, and controls.",
  },
  {
    id: "tc-016",
    title: "TC-016 Filter Requests by Status",
    description: "Filtering requests by status and showing only matching request records.",
  },
  {
    id: "tc-017",
    title: "TC-017 Filter Requests by Priority",
    description: "Filtering requests by priority and validating correct Low, Medium, and High results.",
  },
  {
    id: "tc-018",
    title: "TC-018 View Request Details",
    description: "Opening the request details dialog and validating displayed data.",
  },
  {
    id: "tc-019",
    title: "TC-019 Change Request Status",
    description: "Changing a request status and verifying the updated workflow state in the UI.",
  },
  {
    id: "tc-020",
    title: "TC-020 Navigate to Articles Module",
    description: "Navigation from the main interface into the Articles section.",
  },
  {
    id: "tc-021",
    title: "TC-021 Display Articles List",
    description: "Rendering of the Articles list with visible titles, categories, and detail actions.",
  },
  {
    id: "tc-022",
    title: "TC-022 Search Articles",
    description: "Searching articles by text query across titles and descriptions.",
  },
  {
    id: "tc-023",
    title: "TC-023 Filter Articles by Category",
    description: "Filtering articles by category and validating correct filtered results.",
  },
  {
    id: "tc-024",
    title: "TC-024 View Article Details",
    description: "Opening the selected article details dialog and validating displayed content.",
  },
  {
    id: "tc-025",
    title: "TC-025 Contacts Module Functionality",
    description: "Core Contacts section behavior, including contact display and search.",
  },
  {
    id: "tc-026",
    title: "TC-026 Feedback Form Functionality",
    description: "Feedback form validation, negative scenarios, and successful submission flow.",
  },
  {
    id: "tc-027",
    title: "TC-027 API Functionality Validation",
    description: "Baseline validation of core REST API groups, responses, and error handling.",
  },
  {
    id: "tc-028",
    title: "TC-028 Responsive Layout Verification",
    description: "Responsive behavior across desktop, tablet, and mobile screen sizes.",
  },
  {
    id: "tc-029",
    title: "TC-029 Accessibility Verification",
    description: "Baseline accessibility review for keyboard navigation, labels, and readability.",
  },
  {
    id: "tc-030",
    title: "TC-030 Security & Protected Access Verification",
    description: "Baseline verification of protected routes, invalid credentials, and access control.",
  },
];

export default function TestCasesSection() {
  const [activeTestCase, setActiveTestCase] = useState<DocumentationDocument | null>(null);

  return (
    <>
      <Stack spacing={3} data-testid="documentation-section-test-cases">
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
          <Typography variant="h5">Test Cases</Typography>
          <Chip label="Library" size="small" color="primary" variant="outlined" />
        </Stack>

        <Divider />

        <Stack spacing={1}>
          <Typography variant="h6">Purpose</Typography>
          <Typography variant="body2" color="text.secondary">
            Test cases define concrete verification scenarios for EVAISYS Testing Lab.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            They describe what should be tested, which steps should be performed and what result is
            expected. In this project, test cases are used as a bridge between QA documentation and
            Playwright automation.
          </Typography>
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="h6">Test Case Structure</Typography>
          <Typography variant="body2" color="text.secondary">
            Each test case follows a consistent structure so manual checks and future automation
            mapping stay easy to maintain.
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {[
              "Test Case ID",
              "Title",
              "Purpose",
              "Preconditions",
              "Test Steps",
              "Expected Result",
              "Priority",
              "Related Module",
            ].map((item) => (
              <Chip key={item} label={item} size="small" variant="outlined" />
            ))}
          </Stack>
          <Typography variant="body2" color="text.secondary">
            This structure keeps the documentation consistent and makes it easier to connect manual
            checks with automated scenarios.
          </Typography>
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="h6">Covered Areas</Typography>
          <Typography variant="body2" color="text.secondary">
            The current library includes the first migrated test cases for the main application
            flows.
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {testCaseCoveredAreas.map((item) => (
              <Chip key={item} label={item} size="small" variant="outlined" />
            ))}
          </Stack>
        </Stack>

        <Paper variant="outlined" sx={{ p: 2.25 }} data-testid="test-cases-library">
          <Stack spacing={1.5}>
            <Typography variant="h6">Test Case Library</Typography>
            <Typography variant="body2" color="text.secondary">
              The first 30 test cases from the prepared Word documentation are available below and
              can be opened in the shared document viewer.
            </Typography>
            <Stack
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
                gap: 1.5,
              }}
            >
              {testCaseLibraryItems.map((item) => (
                <ButtonBase
                  key={item.id}
                  onClick={() => setActiveTestCase(testCaseRegistry[item.id])}
                  sx={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    borderRadius: 2,
                  }}
                  data-testid={`test-case-card-${item.id}`}
                >
                  <SourceDocumentCard title={item.title} description={item.description} />
                </ButtonBase>
              ))}
            </Stack>
          </Stack>
        </Paper>

        <SourceDocumentCard
          title="Source Materials"
          description="The first 30 test cases are now migrated from the prepared Word documentation and can be reviewed or downloaded through the modal viewer."
          testId="test-cases-source-materials"
        />
      </Stack>

      {activeTestCase ? (
        <DocumentViewerDialog
          document={activeTestCase}
          open={Boolean(activeTestCase)}
          testId="test-cases-document-viewer-dialog"
          onClose={() => setActiveTestCase(null)}
        />
      ) : null}
    </>
  );
}
