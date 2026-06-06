"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { apiClient, ApiClientError } from "@/api/api-client";
import { buildApiUrl } from "@/api/api-config";

const testSuites = [
  {
    title: "Smoke / Basic Flow",
    description: "Baseline UI availability and navigation checks for the core application shell.",
    tests: [
      {
        file: "auth-smoke.spec.ts",
        purpose: "Basic smoke validation for authentication and application availability.",
        checks: [
          "Login page is reachable",
          "User can authenticate",
          "Dashboard is available after login",
          "Basic authenticated flow works",
        ],
        tags: ["Smoke", "UI", "Auth"],
      },
      {
        file: "navigation-smoke.spec.ts",
        purpose: "Validates primary application navigation.",
        checks: [
          "Main navigation is visible",
          "Core routes are accessible",
          "Navigation links open correct pages",
          "Application shell remains stable",
        ],
        tags: ["Smoke", "UI", "Navigation"],
      },
    ],
  },
  {
    title: "Authentication & Access Control",
    description: "Covers positive and negative authentication flows plus route protection behavior.",
    tests: [
      {
        file: "valid-login.spec.ts",
        purpose: "Verifies successful login flow.",
        checks: [
          "Valid credentials are accepted",
          "User is redirected to protected area",
          "Authenticated state is stored",
          "Main application layout is displayed",
        ],
        tags: ["UI", "Auth", "Regression"],
      },
      {
        file: "invalid-login.spec.ts",
        purpose: "Verifies negative login scenarios.",
        checks: [
          "Invalid credentials are rejected",
          "Error message is displayed",
          "User remains on login page",
          "Protected content is not accessible",
        ],
        tags: ["UI", "Auth", "Negative"],
      },
      {
        file: "protected-routes.spec.ts",
        purpose: "Verifies access control for protected pages.",
        checks: [
          "Protected routes require authentication",
          "Unauthenticated users are redirected",
          "Authenticated users can access protected pages",
          "Route protection works consistently",
        ],
        tags: ["UI", "Security", "Routing"],
      },
      {
        file: "logout.spec.ts",
        purpose: "Verifies logout behavior.",
        checks: [
          "Logout action is available",
          "Session state is cleared",
          "User is redirected to login page",
          "Protected pages become inaccessible",
        ],
        tags: ["UI", "Auth", "Session"],
      },
    ],
  },
  {
    title: "Tasks CRUD",
    description: "Exercises core task lifecycle actions and task list behavior.",
    tests: [
      {
        file: "tasks-crud.spec.ts",
        purpose: "Validates task management workflow.",
        checks: [
          "Task can be created",
          "Task can be edited",
          "Task status can be changed",
          "Task can be deleted",
          "Task filters behave correctly",
        ],
        tags: ["UI", "CRUD", "Regression"],
      },
    ],
  },
  {
    title: "Requests Workflow",
    description: "Checks request visibility, filtering, and status workflow handling.",
    tests: [
      {
        file: "requests-workflow.spec.ts",
        purpose: "Validates request management workflow.",
        checks: [
          "Request list is displayed",
          "Requests can be filtered",
          "Request details can be opened",
          "Request status can be changed",
        ],
        tags: ["UI", "Workflow", "Regression"],
      },
    ],
  },
  {
    title: "Articles / Knowledge",
    description: "Validates knowledge base browsing, search, and detail rendering.",
    tests: [
      {
        file: "articles.spec.ts",
        purpose: "Validates articles functionality.",
        checks: [
          "Articles list is displayed",
          "Search works correctly",
          "Article details can be opened",
          "Empty states are handled",
        ],
        tags: ["UI", "Search", "Content"],
      },
    ],
  },
  {
    title: "Contacts & Feedback",
    description: "Covers contact directory behavior and feedback form validation.",
    tests: [
      {
        file: "contacts-feedback.spec.ts",
        purpose: "Validates contacts and feedback functionality.",
        checks: [
          "Contacts are displayed",
          "Contact search works",
          "Feedback form validates input",
          "Feedback can be submitted",
        ],
        tags: ["UI", "Forms", "Validation"],
      },
    ],
  },
  {
    title: "Responsive / Mobile",
    description: "Focuses on mobile layout stability and navigation behavior on smaller screens.",
    tests: [
      {
        file: "mobile-navigation.spec.ts",
        purpose: "Validates basic responsive behavior.",
        checks: [
          "Layout works on smaller screens",
          "Mobile navigation is usable",
          "Main pages remain accessible",
          "UI does not break on common viewport sizes",
        ],
        tags: ["Responsive", "Mobile", "UI"],
      },
    ],
  },
  {
    title: "API Tests",
    description: "Covers backend contract behavior for health checks and business endpoints.",
    tests: [
      {
        file: "health.api.spec.ts",
        purpose: "Validates backend API behavior for the health domain.",
        checks: [
          "Endpoint returns expected status codes",
          "Response structure is correct",
          "Validation errors are handled",
          "API contract remains stable",
        ],
        tags: ["API", "Health", "Contract"],
      },
      {
        file: "auth.api.spec.ts",
        purpose: "Validates backend API behavior for the authentication domain.",
        checks: [
          "Endpoint returns expected status codes",
          "Response structure is correct",
          "Validation errors are handled",
          "API contract remains stable",
        ],
        tags: ["API", "Auth", "Contract"],
      },
      {
        file: "tasks.api.spec.ts",
        purpose: "Validates backend API behavior for the tasks domain.",
        checks: [
          "Endpoint returns expected status codes",
          "Response structure is correct",
          "Validation errors are handled",
          "API contract remains stable",
        ],
        tags: ["API", "Tasks", "Contract"],
      },
      {
        file: "requests.api.spec.ts",
        purpose: "Validates backend API behavior for the requests domain.",
        checks: [
          "Endpoint returns expected status codes",
          "Response structure is correct",
          "Validation errors are handled",
          "API contract remains stable",
        ],
        tags: ["API", "Requests", "Contract"],
      },
      {
        file: "articles.api.spec.ts",
        purpose: "Validates backend API behavior for the articles domain.",
        checks: [
          "Endpoint returns expected status codes",
          "Response structure is correct",
          "Validation errors are handled",
          "API contract remains stable",
        ],
        tags: ["API", "Articles", "Contract"],
      },
      {
        file: "contact.api.spec.ts",
        purpose: "Validates backend API behavior for the contact domain.",
        checks: [
          "Endpoint returns expected status codes",
          "Response structure is correct",
          "Validation errors are handled",
          "API contract remains stable",
        ],
        tags: ["API", "Contact", "Contract"],
      },
    ],
  },
  {
    title: "Accessibility",
    description: "Reserves space for accessibility coverage that will be added in a later iteration.",
    tests: [
      {
        file: "planned",
        purpose: "Reserved for future accessibility automation coverage.",
        checks: [
          "Critical pages receive baseline accessibility checks",
          "Keyboard navigation is reviewed",
          "Semantic structure is validated",
          "Common accessibility regressions are tracked",
        ],
        tags: ["Accessibility", "Planned"],
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
  reportUrl: string | null;
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

function getTestAccordionId(fileName: string): string {
  return fileName.replace(/\.spec\.ts$/, "").replace(/\.api$/, "").replace(/\./g, "-");
}

export default function TestingLabWorkspace() {
  const [isRunning, setIsRunning] = useState(false);
  const [runResult, setRunResult] = useState<TestingRunResponse | null>(null);
  const [runError, setRunError] = useState("");
  const stdoutTail = runResult ? getOutputTail(runResult.stdout) : "";
  const stderrTail = runResult ? getOutputTail(runResult.stderr) : "";
  const reportUrl = runResult?.reportUrl ? buildApiUrl(runResult.reportUrl) : "";

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
    if (!reportUrl) {
      return;
    }

    window.open(reportUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Stack spacing={3}>
      <Paper variant="outlined" sx={{ p: 2.5, bgcolor: "transparent" }}>
        <Stack spacing={2}>
          <Typography variant="h6">Testing Runner</Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ alignSelf: "flex-start" }}>
            <Button
              variant="contained"
              onClick={handleRunAllTests}
              disabled={isRunning}
              data-testid="testing-lab-run-all-tests"
            >
              Run All Tests
            </Button>
            <Button
              variant="outlined"
              onClick={handleOpenReport}
              disabled={!reportUrl || isRunning}
              data-testid="testing-lab-open-report"
            >
              View Playwright Report
            </Button>
          </Stack>

          {isRunning ? (
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              data-testid="testing-lab-running-state"
            >
              <CircularProgress size={18} thickness={5} />
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
                  <Typography variant="body2">
                    Report URL: {runResult.reportUrl ?? "Not available"}
                  </Typography>
                </Stack>
              </Alert>

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

      {testSuites.map((suite) => (
        <Paper
          key={suite.title}
          variant="outlined"
          sx={{ p: 2.5, bgcolor: "transparent" }}
          data-testid="testing-lab-suite-section"
        >
          <Stack spacing={1.5}>
            <Typography variant="h6">{suite.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {suite.description}
            </Typography>
            <Stack spacing={1}>
              {suite.tests.map((test) => {
                const accordionId = getTestAccordionId(test.file);

                return (
                  <Accordion
                    key={`${suite.title}-${test.file}`}
                    disableGutters
                    elevation={0}
                    data-testid={`testing-lab-test-accordion-${accordionId}`}
                    sx={{
                      border: (theme) => `1px solid ${theme.palette.divider}`,
                      borderRadius: 1.5,
                      "&:before": { display: "none" },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<Typography variant="body2">+</Typography>}
                      sx={{
                        minHeight: 48,
                        "& .MuiAccordionSummary-content": { my: 1 },
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {test.file}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ pt: 0, pb: 1.5 }}>
                      <Stack spacing={1.25}>
                        <Divider />
                        <Box>
                          <Typography variant="subtitle2">Purpose</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {test.purpose}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="subtitle2">Covered scenarios</Typography>
                          <Stack component="ul" spacing={0.5} sx={{ m: 0, pl: 2.5 }}>
                            {test.checks.map((check) => (
                              <Typography key={`${test.file}-${check}`} component="li" variant="body2">
                                {check}
                              </Typography>
                            ))}
                          </Stack>
                        </Box>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                          {test.tags.map((tag) => (
                            <Chip key={`${test.file}-${tag}`} label={tag} size="small" variant="outlined" />
                          ))}
                        </Stack>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Stack>
          </Stack>
        </Paper>
      ))}

      <Paper
        variant="outlined"
        sx={{ p: 2.5, bgcolor: "transparent" }}
        data-testid="testing-lab-controlled-defects"
      >
        <Stack spacing={1}>
          <Typography variant="h6">Controlled Defects</Typography>
          <Typography variant="body2" color="text.secondary">
            Coming soon
          </Typography>
        </Stack>
      </Paper>

      <Paper variant="outlined" sx={{ p: 2.5, bgcolor: "transparent" }} data-testid="testing-lab-reports">
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
