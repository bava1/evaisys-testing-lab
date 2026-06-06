import { Box, Chip, Divider, Paper, Stack, Typography } from "@mui/material";

const overviewScopeItems = [
  "Product Analysis",
  "Test Strategy",
  "Test Coverage",
  "Test Cases",
  "Checklists",
  "API Testing",
  "Playwright Automation",
  "Intentional Defect Validation",
  "Accessibility Testing",
  "Responsive Testing",
  "AI-assisted QA",
  "Documentation Management",
  "Test Reporting",
  "QA Workflow Demonstration",
];

const currentProjectStatusItems = [
  "Complete Documentation Portal",
  "30 documented test cases",
  "Test Strategy documentation",
  "Test Coverage documentation",
  "API Testing Plan",
  "Playwright Automation Plan",
  "Intentional Defects Plan",
  "Interactive Testing Lab",
  "Playwright HTML Report integration",
  "Downloadable QA documents",
  "AI-assisted QA workflow examples",
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
          EVAISYS Testing Lab is a controlled QA engineering environment designed to demonstrate
          real-world frontend, backend, API, and Playwright testing workflows within a predictable
          and fully documented application.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The project combines a testable web application, automated test suites, QA
          documentation, intentional defect scenarios, and AI-assisted quality assurance practices
          in a single portfolio-ready solution.
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6">Project Goals</Typography>
        <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
          <li>
            <Typography variant="body2">
              Demonstrate realistic UI, API, and end-to-end testing workflows.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Provide a stable application for Playwright automation practice.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Showcase structured QA documentation and testing artifacts.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Demonstrate controlled defect validation through dedicated defect branches.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Illustrate practical AI-assisted QA processes used during analysis, planning, and
              automation activities.
            </Typography>
          </li>
        </Box>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6">Current Project Status</Typography>
        <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
          {currentProjectStatusItems.map((item) => (
            <li key={item}>
              <Typography variant="body2">{item}</Typography>
            </li>
          ))}
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
              Next.js application used as the primary testing target and documentation platform.
            </Typography>
          </Paper>
          <Paper variant="outlined" sx={{ p: 1.5 }}>
            <Typography variant="subtitle2">Backend</Typography>
            <Typography variant="body2" color="text.secondary">
              FastAPI service providing controlled API endpoints for integration and contract
              testing scenarios.
            </Typography>
          </Paper>
          <Paper variant="outlined" sx={{ p: 1.5 }}>
            <Typography variant="subtitle2">Playwright Automation</Typography>
            <Typography variant="body2" color="text.secondary">
              Automated UI and API test suites covering authentication, navigation, CRUD
              operations, filtering, validation, accessibility, and responsive behavior.
            </Typography>
          </Paper>
          <Paper variant="outlined" sx={{ p: 1.5 }}>
            <Typography variant="subtitle2">Testing Lab</Typography>
            <Typography variant="body2" color="text.secondary">
              Interactive workspace for executing Playwright suites, reviewing execution results,
              exploring intentional defects, and opening HTML reports.
            </Typography>
          </Paper>
          <Paper variant="outlined" sx={{ p: 1.5, gridColumn: { xs: "auto", sm: "1 / -1" } }}>
            <Typography variant="subtitle2">Documentation Portal</Typography>
            <Typography variant="body2" color="text.secondary">
              Centralized repository of QA documentation, strategies, coverage maps, plans, and
              test cases with integrated document viewing and export capabilities.
            </Typography>
          </Paper>
        </Box>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6">Project Purpose</Typography>
        <Typography variant="body2" color="text.secondary">
          The project is intended to demonstrate a complete QA workflow from analysis and
          documentation through automation, defect validation, reporting, and continuous
          improvement.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          It serves as both a learning platform and a portfolio project for showcasing modern
          quality assurance practices.
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
