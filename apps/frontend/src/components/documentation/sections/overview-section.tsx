import { Box, Chip, Divider, Paper, Stack, Typography } from "@mui/material";

const overviewScopeItems = [
  "Manual Testing",
  "API Testing",
  "Playwright Automation",
  "AI-assisted QA",
  "Documentation Portal",
];

export default function OverviewSection() {
  return (
    <Stack spacing={3} data-testid="documentation-overview-content">
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
        <Typography variant="h5">Overview</Typography>
        <Chip label="Start Here" size="small" color="primary" variant="outlined" />
      </Stack>

      <Divider />

      <Stack spacing={1}>
        <Typography variant="h6">What is EVAISYS Testing Lab</Typography>
        <Typography variant="body2" color="text.secondary">
          EVAISYS Testing Lab is a controlled engineering environment for demonstrating practical
          frontend, backend, API and Playwright testing workflows inside one predictable project.
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6">Project Goals</Typography>
        <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
          <li>
            <Typography variant="body2">Show realistic UI and API testing flows in a local-first setup.</Typography>
          </li>
          <li>
            <Typography variant="body2">Provide a stable target application for automation practice.</Typography>
          </li>
          <li>
            <Typography variant="body2">Demonstrate how AI-assisted QA can support engineering work.</Typography>
          </li>
        </Box>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Core Components</Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
            gap: 1.5,
          }}
        >
          <Paper variant="outlined" sx={{ p: 1.5 }}>
            <Typography variant="subtitle2">Frontend</Typography>
            <Typography variant="body2" color="text.secondary">
              Next.js UI used as the main application under test.
            </Typography>
          </Paper>
          <Paper variant="outlined" sx={{ p: 1.5 }}>
            <Typography variant="subtitle2">Backend</Typography>
            <Typography variant="body2" color="text.secondary">
              Lightweight API layer for integration and contract testing scenarios.
            </Typography>
          </Paper>
          <Paper variant="outlined" sx={{ p: 1.5 }}>
            <Typography variant="subtitle2">Playwright Automation</Typography>
            <Typography variant="body2" color="text.secondary">
              End-to-end and API automation coverage for key product workflows.
            </Typography>
          </Paper>
          <Paper variant="outlined" sx={{ p: 1.5 }}>
            <Typography variant="subtitle2">Testing Lab</Typography>
            <Typography variant="body2" color="text.secondary">
              Interactive workspace for running suites, reviewing output and checking coverage.
            </Typography>
          </Paper>
          <Paper variant="outlined" sx={{ p: 1.5, gridColumn: { xs: "auto", sm: "1 / -1" } }}>
            <Typography variant="subtitle2">Documentation Portal</Typography>
            <Typography variant="body2" color="text.secondary">
              Central place for project context, QA strategy, test plans and future documentation.
            </Typography>
          </Paper>
        </Box>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6">Project Purpose</Typography>
        <Typography variant="body2" color="text.secondary">
          The project exists to keep testing workflows clear, simple and reproducible while giving
          enough realistic behavior for frontend, backend and automation exercises.
        </Typography>
      </Stack>

      <Paper variant="outlined" sx={{ p: 2 }} data-testid="documentation-project-scope">
        <Stack spacing={1.5}>
          <Typography variant="subtitle1">Project Scope</Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {overviewScopeItems.map((item) => (
              <Chip key={item} label={item} size="small" variant="outlined" />
            ))}
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
