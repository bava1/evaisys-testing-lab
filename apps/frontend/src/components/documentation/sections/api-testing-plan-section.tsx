import { Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import SourceDocumentCard from "../common/source-document-card";

const apiTestingScopeItems = [
  "Health API",
  "Authentication API",
  "Tasks API",
  "Requests API",
  "Articles API",
  "Contact API",
];
const apiAutomationFocusItems = [
  "Response validation",
  "Status code verification",
  "Data structure validation",
  "CRUD operations",
  "Regression coverage",
];

export default function ApiTestingPlanSection() {
  return (
    <Stack spacing={3} data-testid="documentation-section-api-testing-plan">
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
        <Typography variant="h5">API Testing Plan</Typography>
        <Chip label="Backend Validation" size="small" color="primary" variant="outlined" />
      </Stack>

      <Divider />

      <Stack spacing={1}>
        <Typography variant="h6">Purpose</Typography>
        <Typography variant="body2" color="text.secondary">
          The API Testing Plan defines how backend services of EVAISYS Testing Lab are validated
          and verified.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The goal is to ensure that REST endpoints provide correct responses, handle invalid input
          properly and support frontend functionality in a predictable manner.
        </Typography>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">API Testing Scope</Typography>
        <Typography variant="body2" color="text.secondary">
          The API testing scope includes all publicly available backend endpoints used by the
          application.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Current coverage focuses on:
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {apiTestingScopeItems.map((item) => (
            <Chip key={item} label={item} size="small" variant="outlined" />
          ))}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          The scope may expand as new features are introduced into the platform.
        </Typography>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Test Categories</Typography>
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
            gap: 1.5,
          }}
        >
          {[
            {
              title: "Functional Testing",
              text: "Verification of expected endpoint behavior and successful request processing.",
            },
            {
              title: "Validation Testing",
              text: "Verification of required fields, invalid payloads and incorrect input data.",
            },
            {
              title: "Error Handling",
              text: "Verification of response codes and error messages for unsupported or invalid operations.",
            },
            {
              title: "Integration Testing",
              text: "Verification of interaction between frontend functionality and backend services.",
            },
          ].map((category) => (
            <Paper key={category.title} variant="outlined" sx={{ p: 1.75 }}>
              <Stack spacing={1}>
                <Typography variant="subtitle1">{category.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {category.text}
                </Typography>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Automation Approach</Typography>
        <Typography variant="body2" color="text.secondary">
          API tests are implemented using Playwright and TypeScript.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The automation suite focuses on:
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {apiAutomationFocusItems.map((item) => (
            <Chip key={item} label={item} size="small" variant="outlined" />
          ))}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          Automated API tests are executed together with the overall testing workflow.
        </Typography>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Covered Endpoints</Typography>
        <Typography variant="body2" color="text.secondary">
          The current API test suite includes verification of the core platform endpoints.
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {[
            "Health endpoint",
            "Authentication endpoints",
            "Tasks endpoints",
            "Requests endpoints",
            "Articles endpoints",
            "Contact endpoints",
          ].map((item) => (
            <Chip key={item} label={item} size="small" variant="outlined" />
          ))}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          These endpoints represent the core functionality of the platform.
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6">Expected Result</Typography>
        <Typography variant="body2" color="text.secondary">
          The API testing process provides confidence that backend services remain stable,
          predictable and compatible with frontend functionality.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Combined with UI automation, API testing helps identify defects earlier and improves
          overall test reliability.
        </Typography>
      </Stack>

      <SourceDocumentCard
        title="Source Materials"
        description="Detailed API testing documentation will be attached to this section from the prepared project documentation."
        placeholderTitle="API Testing Plan Document"
        placeholderText="Coming soon"
        testId="api-testing-source-materials"
      />
    </Stack>
  );
}
