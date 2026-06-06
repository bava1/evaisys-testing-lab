import { useState } from "react";
import { Box, Button, Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import { testStrategyFullDocument } from "../content/documents/test-strategy";
import DocumentViewerDialog from "../common/document-viewer-dialog";
import SourceDocumentCard from "../common/source-document-card";

type TestStrategySectionProps = {
  onOpenDiagram: () => void;
};

const strategyFlowSteps = [
  "Product analysis",
  "Risk analysis",
  "Test cases / checklists",
  "Automation scope",
  "Playwright tests",
  "Report analysis",
  "QA improvements",
];
const testingLevels = [
  "Functional testing",
  "Manual test cases",
  "API testing",
  "UI automation",
  "End-to-end testing",
  "Regression testing",
  "Basic responsive checks",
  "Basic accessibility checks",
  "Basic security sanity checks",
  "Intentional defect detection",
];
const automationCoverageAreas = [
  "Authentication",
  "Protected routes",
  "Tasks CRUD",
  "Requests workflow",
  "Articles search",
  "Contacts validation",
  "API endpoints",
];

export default function TestStrategySection({ onOpenDiagram }: TestStrategySectionProps) {
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);

  return (
    <>
      <Stack spacing={3} data-testid="documentation-section-test-strategy">
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
          <Typography variant="h5">Test Strategy</Typography>
          <Chip label="Strategy" size="small" color="primary" variant="outlined" />
        </Stack>

        <Divider />

        <Stack spacing={1}>
          <Typography variant="h6">Purpose</Typography>
          <Typography variant="body2" color="text.secondary">
            The test strategy defines how EVAISYS Testing Lab is verified as a controlled QA
            demonstration application. The goal is not only to check that the application works, but
            also to show a structured engineering approach to testing.
          </Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="h6">Testing Approach</Typography>
          <Typography variant="body2" color="text.secondary">
            Testing is organized as a combination of manual checks, API validation, Playwright
            automation and end-to-end workflow verification. Each layer has its own purpose and
            together they form a complete quality strategy.
          </Typography>
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="h6">Strategy Flow</Typography>
          <Typography variant="body2" color="text.secondary">
            The testing process starts with product analysis and risk identification. Based on that
            analysis, test cases, checklists and automation scope are prepared. Stable and repeatable
            scenarios are then covered by Playwright tests, while exploratory and UX-related checks
            remain part of manual testing.
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {strategyFlowSteps.map((step) => (
              <Chip key={step} label={step} size="small" variant="outlined" />
            ))}
          </Stack>
        </Stack>

        <Paper variant="outlined" sx={{ p: 2 }} data-testid="test-strategy-diagram-preview">
          <Stack spacing={1.5}>
            <Typography variant="subtitle1">Diagram</Typography>
            <Button
              onClick={onOpenDiagram}
              sx={{
                p: 0,
                alignSelf: "flex-start",
                borderRadius: 1,
                overflow: "hidden",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box
                component="img"
                src="/docs/diagrams/dia2.png"
                alt="Test strategy workflow diagram"
                sx={{
                  display: "block",
                  width: "100%",
                  maxWidth: 420,
                  height: "auto",
                }}
              />
            </Button>
            <Typography variant="caption" color="text.secondary">
              Test strategy workflow from analysis through automation, reporting and QA improvements.
            </Typography>
          </Stack>
        </Paper>

        <Stack spacing={1.5}>
          <Typography variant="h6">Testing Levels</Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {testingLevels.map((item) => (
              <Chip key={item} label={item} size="small" variant="outlined" />
            ))}
          </Stack>
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="h6">Automation Role</Typography>
          <Typography variant="body2" color="text.secondary">
            Playwright automation is used as a regression and demonstration layer. It covers stable
            workflows such as authentication, protected routes, Tasks CRUD, Requests workflow,
            Articles search, Contacts validation and API endpoints.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Automation does not replace manual testing. It supports repeated verification and helps
            demonstrate how defects can be detected and analyzed.
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {automationCoverageAreas.map((item) => (
              <Chip key={item} label={item} size="small" variant="outlined" />
            ))}
          </Stack>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="h6">AI-assisted QA</Typography>
          <Typography variant="body2" color="text.secondary">
            EVAISYS AI Agent can support the QA process by helping with product analysis, test
            strategy preparation, test case generation, checklist creation, risk analysis and
            interpretation of test results.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The final engineering decisions still remain under human control.
          </Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="h6">Expected Result</Typography>
          <Typography variant="body2" color="text.secondary">
            The result of this strategy is a clear and reproducible testing process where
            documentation, manual testing, API testing and Playwright automation are connected into
            one workflow.
          </Typography>
        </Stack>

        <SourceDocumentCard
          title="Source Documentation"
          subtitle={testStrategyFullDocument.title}
          description="Translated content from the original Word source document is now rendered directly in the portal and can be reviewed or downloaded from the modal viewer."
          testId="test-strategy-source-documentation"
        />

        <Button
          variant="outlined"
          onClick={() => setIsDocumentOpen(true)}
          sx={{ alignSelf: "flex-start" }}
          data-testid="test-strategy-view-full-document"
        >
          View Full Document
        </Button>
      </Stack>

      <DocumentViewerDialog
        document={testStrategyFullDocument}
        open={isDocumentOpen}
        testId="test-strategy-document-viewer-dialog"
        onClose={() => setIsDocumentOpen(false)}
      />
    </>
  );
}
