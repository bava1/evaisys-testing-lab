"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { apiClient, ApiClientError } from "@/api/api-client";
import { buildApiUrl } from "@/api/api-config";

const testSuites = [
  {
    title: "Smoke / Basic Flow",
    purpose:
      "Verifies that the application can be opened, authenticated and navigated through its primary flows.",
    files: [
      {
        name: "auth-smoke.spec.ts",
        details: [
          "Opens the login page.",
          "Signs in with demo admin credentials.",
          "Verifies that the protected app shell is visible.",
          "Verifies that the home page is loaded.",
          "Performs logout.",
          "Verifies that the user returns to the login page.",
        ],
      },
      {
        name: "navigation-smoke.spec.ts",
        details: [
          "Signs in with demo admin credentials.",
          "Navigates through the primary desktop navigation.",
          "Opens Home, Tasks, Requests, Articles and Contact.",
          "Verifies that each target page is visible.",
          "Performs logout and verifies return to the login page.",
        ],
      },
    ],
  },
  {
    title: "Authentication & Access Control",
    purpose:
      "Covers login, logout and protected route behavior for authenticated and unauthenticated users.",
    files: [
      {
        name: "valid-login.spec.ts",
        details: [
          "Opens the login page.",
          "Signs in with valid admin credentials.",
          "Verifies that the protected app shell is visible.",
          "Verifies that the home dashboard is displayed.",
        ],
      },
      {
        name: "invalid-login.spec.ts",
        details: [
          "Opens the login page.",
          "Enters invalid credentials.",
          "Submits the login form.",
          "Verifies that an error message is displayed.",
          "Verifies that the user remains on the login page.",
        ],
      },
      {
        name: "protected-routes.spec.ts",
        details: [
          "Opens protected routes without authentication.",
          "Checks Home, Tasks, Requests, Articles and Contact routes.",
          "Verifies redirect to the login page.",
          "Verifies that protected content is not accessible.",
        ],
      },
      {
        name: "logout.spec.ts",
        details: [
          "Signs in with valid admin credentials.",
          "Opens a protected page.",
          "Performs logout.",
          "Verifies return to the login page.",
          "Verifies that protected routes are inaccessible after logout.",
        ],
      },
    ],
  },
  {
    title: "Tasks CRUD",
    purpose:
      "Covers task management workflows, including creation, editing, status changes, deletion and validation.",
    files: [
      {
        name: "tasks-crud.spec.ts",
        details: [
          "Signs in as admin.",
          "Opens the Tasks module.",
          "Creates a new task.",
          "Edits an existing task.",
          "Marks a task as completed.",
          "Reopens a completed task.",
          "Deletes a task.",
          "Verifies task validation for invalid short title.",
        ],
      },
    ],
  },
  {
    title: "Requests Workflow",
    purpose:
      "Covers request list visibility, filtering, details dialog and workflow status changes.",
    files: [
      {
        name: "requests-workflow.spec.ts",
        details: [
          "Signs in as admin.",
          "Opens the Requests module.",
          "Verifies that the requests list is visible.",
          "Filters requests by status.",
          "Filters requests by priority.",
          "Opens request details dialog.",
          "Verifies requester, status, priority and date fields.",
          "Changes request status and verifies the UI update.",
        ],
      },
    ],
  },
  {
    title: "Articles / Knowledge",
    purpose:
      "Covers article list, search, category filtering, no-results state and article details.",
    files: [
      {
        name: "articles.spec.ts",
        details: [
          "Signs in as admin.",
          "Opens the Articles module.",
          "Verifies that the article list is visible.",
          "Searches by an existing article title.",
          "Clears search and verifies list restoration.",
          "Filters articles by category.",
          "Verifies no-results state for an unknown search query.",
          "Opens article details dialog.",
          "Verifies title, metadata and content.",
        ],
      },
    ],
  },
  {
    title: "Contacts & Feedback",
    purpose:
      "Covers contact list visibility, contact search and feedback form validation/submission.",
    files: [
      {
        name: "contacts-feedback.spec.ts",
        details: [
          "Signs in as admin.",
          "Opens the Contact module.",
          "Verifies that contacts are visible.",
          "Searches contacts by name.",
          "Clears search and verifies list restoration.",
          "Submits empty feedback form and verifies validation error.",
          "Submits invalid email and verifies validation error.",
          "Submits valid feedback and verifies success message.",
        ],
      },
    ],
  },
  {
    title: "Responsive / Mobile",
    purpose:
      "Covers mobile viewport behavior, mobile navigation drawer and mobile logout flow.",
    files: [
      {
        name: "mobile-navigation.spec.ts",
        details: [
          "Opens the application in mobile viewport.",
          "Performs login on mobile.",
          "Verifies that the mobile navigation drawer opens.",
          "Navigates through Home, Tasks, Requests, Articles and Contact using mobile navigation.",
          "Performs logout from mobile menu.",
          "Verifies that protected routes redirect to login after mobile logout.",
        ],
      },
    ],
  },
  {
    title: "API Tests",
    purpose:
      "Covers backend API availability, contracts, status codes and validation behavior.",
    files: [
      {
        name: "health.api.spec.ts",
        details: [
          "Calls GET /health.",
          "Verifies HTTP 200.",
          "Verifies service health response structure.",
        ],
      },
      {
        name: "auth.api.spec.ts",
        details: [
          "Calls POST /auth/login with valid credentials.",
          "Verifies success response, user data and token.",
          "Calls POST /auth/login with invalid credentials.",
          "Verifies HTTP 401.",
        ],
      },
      {
        name: "tasks.api.spec.ts",
        details: [
          "Calls GET /tasks and verifies task collection.",
          "Creates a task through API.",
          "Updates a task through API.",
          "Deletes a task through API.",
          "Verifies validation error for invalid title.",
        ],
      },
      {
        name: "requests.api.spec.ts",
        details: [
          "Calls GET /requests and verifies request collection.",
          "Updates request status and priority.",
          "Verifies error response for unknown request.",
        ],
      },
      {
        name: "articles.api.spec.ts",
        details: [
          "Calls GET /articles and verifies article collection.",
          "Calls GET /articles/{id} for an existing article.",
          "Verifies error response for unknown article.",
        ],
      },
      {
        name: "contact.api.spec.ts",
        details: [
          "Submits valid feedback payload.",
          "Verifies success response.",
          "Submits invalid email and verifies validation error.",
          "Submits empty required fields and verifies validation error.",
        ],
      },
    ],
  },
  {
    title: "Accessibility",
    purpose: "Reserved for future accessibility checks.",
    files: [
      {
        name: "planned",
        details: [
          "Basic accessibility checks will be added later.",
          "Planned scope includes keyboard navigation, labels, headings and form error accessibility.",
        ],
      },
    ],
  },
];

type TestingRunResponse = {
  status: "finished" | "failed" | "running";
  exitCode: number | null;
  stdout: string;
  stderr: string;
  durationMs: number;
  reportPath: string | null;
  reportAvailable: boolean;
};

const OUTPUT_LINE_LIMIT = 30;
const OUTPUT_CHAR_LIMIT = 4000;

function getOutputTail(value: string): string {
  const normalizedValue = value.replace(/\r\n/g, "\n").trim();

  if (!normalizedValue) {
    return "";
  }

  const tailLines = normalizedValue.split("\n").slice(-OUTPUT_LINE_LIMIT).join("\n");

  if (tailLines.length <= OUTPUT_CHAR_LIMIT) {
    return tailLines;
  }

  return tailLines.slice(-OUTPUT_CHAR_LIMIT);
}

export default function TestingLabWorkspace() {
  const [isRunning, setIsRunning] = useState(false);
  const [runResult, setRunResult] = useState<TestingRunResponse | null>(null);
  const [runError, setRunError] = useState("");
  const stdoutTail = runResult ? getOutputTail(runResult.stdout) : "";
  const stderrTail = runResult ? getOutputTail(runResult.stderr) : "";
  const reportUrl = buildApiUrl("/testing/report/index.html");

  const handleRunAllTests = async () => {
    setIsRunning(true);
    setRunResult(null);
    setRunError("");

    try {
      const response = await apiClient.post<TestingRunResponse>("/testing/run");
      setRunResult(response);
    } catch (error) {
      if (error instanceof ApiClientError) {
        const backendMessage =
          typeof error.body === "object" &&
          error.body !== null &&
          "stderr" in error.body &&
          typeof (error.body as { stderr?: unknown }).stderr === "string"
            ? (error.body as { stderr: string }).stderr
            : "";

        setRunError(
          backendMessage ||
            "Testing runner is currently unavailable. Please make sure the backend is running and try again."
        );
      } else {
        setRunError(
          "Unable to reach the testing runner. Please make sure the backend is running and try again."
        );
      }
    } finally {
      setIsRunning(false);
    }
  };

  const handleOpenReport = () => {
    window.open(reportUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Stack spacing={3}>
      <Paper variant="outlined" sx={{ p: 2.5 }}>
        <Stack spacing={2}>
          <Typography variant="h6">Testing Runner</Typography>
          <Button
            variant="contained"
            onClick={handleRunAllTests}
            disabled={isRunning}
            data-testid="testing-lab-run-all-tests"
            sx={{ alignSelf: "flex-start" }}
          >
            Run All Tests
          </Button>

          {isRunning ? (
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              data-testid="testing-lab-running-state"
            >
              <CircularProgress size={18} />
              <Typography variant="body2" color="text.secondary">
                Running Playwright tests...
              </Typography>
            </Stack>
          ) : null}

          {runError ? <Alert severity="error">{runError}</Alert> : null}

          {runResult ? (
            <Stack spacing={2}>
              <Alert
                severity={runResult.status === "finished" ? "success" : "error"}
                data-testid="testing-lab-run-result"
              >
                <Stack spacing={0.5}>
                  <Typography variant="body2">Status: {runResult.status}</Typography>
                  <Typography variant="body2">Exit Code: {String(runResult.exitCode)}</Typography>
                  <Typography variant="body2">Duration: {runResult.durationMs} ms</Typography>
                  <Typography variant="body2">
                    Report Available: {runResult.reportAvailable ? "Yes" : "No"}
                  </Typography>
                </Stack>
              </Alert>

              {runResult.reportAvailable ? (
                <Button
                  variant="outlined"
                  onClick={handleOpenReport}
                  data-testid="testing-lab-open-report"
                  sx={{ alignSelf: "flex-start" }}
                >
                  Open Last Playwright Report
                </Button>
              ) : null}

              <Paper variant="outlined" sx={{ p: 2 }} data-testid="testing-lab-last-output">
                <Stack spacing={1.5}>
                  <Typography variant="h6">Last Playwright Output</Typography>

                  {stdoutTail ? (
                    <Stack spacing={1}>
                      <Typography variant="subtitle2">stdout</Typography>
                      <Box
                        component="pre"
                        sx={{
                          m: 0,
                          p: 2,
                          borderRadius: 1,
                          bgcolor: "grey.100",
                          fontFamily: "monospace",
                          fontSize: "0.8125rem",
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-word",
                          overflowX: "auto",
                        }}
                      >
                        {stdoutTail}
                      </Box>
                    </Stack>
                  ) : null}

                  {stderrTail ? (
                    <Stack spacing={1}>
                      <Typography variant="subtitle2">stderr</Typography>
                      <Box
                        component="pre"
                        sx={{
                          m: 0,
                          p: 2,
                          borderRadius: 1,
                          bgcolor: "grey.100",
                          fontFamily: "monospace",
                          fontSize: "0.8125rem",
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-word",
                          overflowX: "auto",
                        }}
                      >
                        {stderrTail}
                      </Box>
                    </Stack>
                  ) : null}

                  {!stdoutTail && !stderrTail ? (
                    <Box
                      component="pre"
                      sx={{
                        m: 0,
                        p: 2,
                        borderRadius: 1,
                        bgcolor: "grey.100",
                        fontFamily: "monospace",
                        fontSize: "0.8125rem",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        overflowX: "auto",
                      }}
                    >
                      No stdout or stderr output was returned.
                    </Box>
                  ) : null}
                </Stack>
              </Paper>
            </Stack>
          ) : null}
        </Stack>
      </Paper>

      <Paper variant="outlined" sx={{ p: 2.5 }}>
        <Stack spacing={1.5}>
          <Typography variant="h6">Automated Coverage Summary</Typography>
          <Typography variant="body2">Total suites: 9</Typography>
          <Typography variant="body2">Current automated tests: 50</Typography>
          <Typography variant="body2" color="text.secondary">
            Main purpose: UI, API, authentication, CRUD, workflow, responsive and regression coverage.
          </Typography>
        </Stack>
      </Paper>

      {testSuites.map((suite) => (
        <Paper
          key={suite.title}
          variant="outlined"
          sx={{ p: 2.5, bgcolor: "transparent", backgroundImage: "none" }}
          data-testid="testing-lab-suite-section"
        >
          <Stack spacing={2.5}>
            <Typography variant="h6">{suite.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {suite.purpose}
            </Typography>
            <Stack spacing={1}>
              {suite.files.map((file) => (
                <Accordion key={`${suite.title}-${file.name}-accordion`} data-testid="testing-lab-suite-accordion">
                  <AccordionSummary
                    expandIcon={
                      <Typography variant="caption" color="text.secondary">
                        Show details
                      </Typography>
                    }
                  >
                    <Typography variant="subtitle2">{file.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails data-testid="testing-lab-spec-details">
                    <Stack spacing={0.75}>
                      {file.details.map((detail) => (
                        <Typography
                          key={`${file.name}-${detail}`}
                          variant="body2"
                          color="text.secondary"
                        >
                          - {detail}
                        </Typography>
                      ))}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          </Stack>
        </Paper>
      ))}

      <Paper variant="outlined" sx={{ p: 2.5 }} data-testid="testing-lab-controlled-defects">
        <Stack spacing={1}>
          <Typography variant="h6">Controlled Defects</Typography>
          <Typography variant="body2" color="text.secondary">
            Coming soon
          </Typography>
        </Stack>
      </Paper>

      <Paper variant="outlined" sx={{ p: 2.5 }} data-testid="testing-lab-reports">
        <Stack spacing={1}>
          <Typography variant="h6">Playwright Reports</Typography>
          <Typography variant="body2" color="text.secondary">
            Coming soon
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
}
