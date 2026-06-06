import { useState } from "react";
import { Box, Button, Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import DocumentViewerDialog from "../common/document-viewer-dialog";
import SourceDocumentCard from "../common/source-document-card";
import { playwrightAutomationPlanDocument } from "../content/documents/playwright-automation-plan";

const playwrightAutomationScopeItems = [
  "Authentication and access control",
  "Navigation and application routing",
  "Tasks management workflows",
  "Requests processing workflows",
  "Articles and content validation",
  "Contacts and feedback functionality",
  "Responsive behavior",
  "Backend API validation",
];
const playwrightApiCoverageItems = [
  "Health endpoints",
  "Authentication endpoints",
  "Tasks API",
  "Requests API",
  "Articles API",
  "Contact API",
];
const testingLabExecutionItems = [
  "Full test suite execution",
  "Individual suite execution",
  "HTML report generation",
  "Result analysis and debugging",
];
const reportingItems = [
  "Execution summary",
  "Passed and failed tests",
  "Error details",
  "Screenshots and traces",
  "Coverage visibility",
];

export default function PlaywrightAutomationPlanSection() {
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);

  return (
    <>
      <Stack spacing={3} data-testid="documentation-section-playwright-automation-plan">
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
          <Typography variant="h5">Playwright Automation Plan</Typography>
          <Chip label="Automation" size="small" color="primary" variant="outlined" />
        </Stack>

        <Divider />

        <Stack spacing={1}>
          <Typography variant="h6">Purpose</Typography>
          <Typography variant="body2" color="text.secondary">
            Playwright automation is used to provide repeatable, stable and maintainable verification
            of critical product functionality.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The automation layer complements manual testing and focuses on high-value regression
            scenarios.
          </Typography>
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="h6">Automation Scope</Typography>
          <Typography variant="body2" color="text.secondary">
            The automated test suite covers the most important areas of the application.
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {playwrightAutomationScopeItems.map((item) => (
              <Chip key={item} label={item} size="small" variant="outlined" />
            ))}
          </Stack>
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="h6">UI Automation</Typography>
          <Typography variant="body2" color="text.secondary">
            User interface testing is implemented with Playwright using an end-to-end approach. Tests
            interact with the application in the same way as real users and verify complete business
            workflows.
          </Typography>
          <Paper variant="outlined" sx={{ p: 1.75 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle1">Main goals</Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {[
                  "Verify user journeys",
                  "Detect regressions",
                  "Validate application behavior across pages",
                  "Confirm integration between frontend and backend",
                ].map((item) => (
                  <Chip key={item} label={item} size="small" variant="outlined" />
                ))}
              </Stack>
            </Stack>
          </Paper>
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="h6">API Automation</Typography>
          <Typography variant="body2" color="text.secondary">
            API tests validate backend endpoints independently from the user interface.
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {playwrightApiCoverageItems.map((item) => (
              <Chip key={item} label={item} size="small" variant="outlined" />
            ))}
          </Stack>
          <Typography variant="body2" color="text.secondary">
            This approach helps identify backend issues before they affect the UI layer.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
            gap: 1.5,
          }}
        >
          <Paper variant="outlined" sx={{ p: 1.75 }}>
            <Stack spacing={1}>
              <Typography variant="h6">Test Execution</Typography>
              <Typography variant="body2" color="text.secondary">
                Tests can be executed directly from the Testing Lab workspace.
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {testingLabExecutionItems.map((item) => (
                  <Chip key={item} label={item} size="small" variant="outlined" />
                ))}
              </Stack>
              <Typography variant="body2" color="text.secondary">
                A warm-up mechanism is used before execution to eliminate frontend cold-start issues
                during local development.
              </Typography>
            </Stack>
          </Paper>

          <Paper variant="outlined" sx={{ p: 1.75 }}>
            <Stack spacing={1}>
              <Typography variant="h6">Reporting</Typography>
              <Typography variant="body2" color="text.secondary">
                Test execution generates Playwright reports that support quick investigation and
                result analysis.
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {reportingItems.map((item) => (
                  <Chip key={item} label={item} size="small" variant="outlined" />
                ))}
              </Stack>
            </Stack>
          </Paper>
        </Box>

        <SourceDocumentCard
          title="Source Documentation"
          subtitle={playwrightAutomationPlanDocument.title}
          description="Translated content from the original Word source document is available in the portal and can be reviewed or downloaded from the modal viewer."
          testId="playwright-automation-plan-source-documentation"
        />

        <Button
          variant="outlined"
          onClick={() => setIsDocumentOpen(true)}
          sx={{ alignSelf: "flex-start" }}
          data-testid="playwright-automation-plan-view-full-document"
        >
          View Full Document
        </Button>
      </Stack>

      <DocumentViewerDialog
        document={playwrightAutomationPlanDocument}
        open={isDocumentOpen}
        testId="playwright-automation-plan-document-viewer-dialog"
        onClose={() => setIsDocumentOpen(false)}
      />
    </>
  );
}
