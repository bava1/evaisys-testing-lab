import Link from "next/link";
import { Box, Button, Chip, Paper, Stack, Typography } from "@mui/material";

const moduleCards = [
  {
    key: "tasks",
    title: "Tasks",
    points: ["CRUD operations", "Validation", "Filtering"],
    href: "/tasks",
    testId: "dashboard-module-tasks",
    openTestId: "dashboard-open-tasks",
  },
  {
    key: "requests",
    title: "Requests",
    points: ["Workflow management", "Status transitions", "Modal interactions"],
    href: "/requests",
    testId: "dashboard-module-requests",
    openTestId: "dashboard-open-requests",
  },
  {
    key: "articles",
    title: "Articles",
    points: ["Search", "Filtering", "Content display"],
    href: "/articles",
    testId: "dashboard-module-articles",
    openTestId: "dashboard-open-articles",
  },
  {
    key: "contacts",
    title: "Contacts",
    points: ["Search", "Form validation", "Feedback workflow"],
    href: "/contact",
    testId: "dashboard-module-contacts",
    openTestId: "dashboard-open-contacts",
  },
];

const coverageItems = [
  "Authentication",
  "Route Protection",
  "CRUD Operations",
  "Search & Filters",
  "Forms & Validation",
  "Dialogs & Workflows",
];

export default function HomeDashboard() {
  return (
    <Stack spacing={3} data-testid="dashboard-page">
      <Paper variant="outlined" sx={{ p: 2 }} data-testid="dashboard-overview">
        <Typography variant="body1">
          EVAISYS Testing Lab is a controlled application designed to demonstrate UI, workflow and
          automation testing scenarios.
        </Typography>
      </Paper>

      <Box data-testid="dashboard-modules">
        <Stack spacing={2}>
          {moduleCards.map((module) => (
            <Paper key={module.key} variant="outlined" sx={{ p: 2 }} data-testid={module.testId}>
              <Stack spacing={1.5}>
                <Typography variant="h6">{module.title}</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {module.points.map((point) => (
                    <Chip key={`${module.key}-${point}`} label={point} size="small" />
                  ))}
                </Stack>
                <Box>
                  <Button
                    component={Link}
                    href={module.href}
                    variant="outlined"
                    data-testid={module.openTestId}
                  >
                    {`Open ${module.title}`}
                  </Button>
                </Box>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Box>

      <Paper variant="outlined" sx={{ p: 2 }} data-testid="dashboard-testing-coverage">
        <Stack spacing={1.5}>
          <Typography variant="h6">Testing Coverage</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {coverageItems.map((item) => (
              <Chip key={item} label={item} size="small" />
            ))}
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
