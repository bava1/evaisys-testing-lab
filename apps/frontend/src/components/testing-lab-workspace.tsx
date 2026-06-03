import { Chip, Paper, Stack, Typography } from "@mui/material";

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

export default function TestingLabWorkspace() {
  return (
    <Stack spacing={3}>
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
