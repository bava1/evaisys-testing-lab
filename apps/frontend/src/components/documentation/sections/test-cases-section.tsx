import { Alert, Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import SourceDocumentCard from "../common/source-document-card";

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

export default function TestCasesSection() {
  return (
    <Stack spacing={3} data-testid="documentation-section-test-cases">
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
        <Typography variant="h5">Test Cases</Typography>
        <Chip label="Planned Library" size="small" color="primary" variant="outlined" />
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
          Each test case is planned to follow one consistent structure so manual checks and future
          automation mapping stay easy to maintain.
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {[
            "Test Case ID",
            "Title",
            "Preconditions",
            "Steps",
            "Expected Result",
            "Priority",
            "Type",
            "Related Module",
          ].map((item) => (
            <Chip key={item} label={item} size="small" variant="outlined" />
          ))}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          This structure keeps the test documentation consistent and makes it easier to connect
          manual checks with automated tests.
        </Typography>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Covered Areas</Typography>
        <Typography variant="body2" color="text.secondary">
          The future test case library will cover the main functional areas of the application.
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {testCaseCoveredAreas.map((item) => (
            <Chip key={item} label={item} size="small" variant="outlined" />
          ))}
        </Stack>
      </Stack>

      <Paper variant="outlined" sx={{ p: 2.25 }} data-testid="test-cases-library-placeholder">
        <Stack spacing={1.25}>
          <Typography variant="h6">Test Case Library</Typography>
          <Typography variant="body2" color="text.secondary">
            The complete test case catalog will be added here from the prepared project
            documentation.
          </Typography>
          <Alert severity="info" variant="outlined">
            Planned content: 50+ test cases covering UI, API, workflow validation, negative
            scenarios and regression checks.
          </Alert>
        </Stack>
      </Paper>

      <SourceDocumentCard
        title="Source Materials"
        description="Detailed test cases will be imported from the prepared project documentation and connected to this section in a later step."
      />
    </Stack>
  );
}
