"use client";

import { useState } from "react";
import { Alert, Box, Button, Chip, Paper, Stack, Typography } from "@mui/material";
import { apiClient, ApiClientError } from "@/api/api-client";

const testSuites = [
  {
    title: "Smoke / Basic Flow",
    files: ["auth-smoke.spec.ts", "navigation-smoke.spec.ts"],
  },
  {
    title: "Authentication & Access Control",
    files: [
      "valid-login.spec.ts",
      "invalid-login.spec.ts",
      "protected-routes.spec.ts",
      "logout.spec.ts",
    ],
  },
  {
    title: "Tasks CRUD",
    files: ["tasks-crud.spec.ts"],
  },
  {
    title: "Requests Workflow",
    files: ["requests-workflow.spec.ts"],
  },
  {
    title: "Articles / Knowledge",
    files: ["articles.spec.ts"],
  },
  {
    title: "Contacts & Feedback",
    files: ["contacts-feedback.spec.ts"],
  },
  {
    title: "Responsive / Mobile",
    files: ["mobile-navigation.spec.ts"],
  },
  {
    title: "API Tests",
    files: [
      "health.api.spec.ts",
      "auth.api.spec.ts",
      "tasks.api.spec.ts",
      "requests.api.spec.ts",
      "articles.api.spec.ts",
      "contact.api.spec.ts",
    ],
  },
  {
    title: "Accessibility",
    files: ["planned"],
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
            <Typography
              variant="body2"
              color="text.secondary"
              data-testid="testing-lab-running-state"
            >
              Running Playwright tests...
            </Typography>
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
        <Paper key={suite.title} variant="outlined" sx={{ p: 2.5 }} data-testid="testing-lab-suite-section">
          <Stack spacing={2}>
            <Typography variant="h6">{suite.title}</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {suite.files.map((file) => (
                <Chip key={`${suite.title}-${file}`} label={file} variant="outlined" />
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
