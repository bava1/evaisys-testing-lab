import { Box, Chip, Divider, Paper, Stack, Typography } from "@mui/material";

const platformArchitectureLayers = [
  "Frontend Application",
  "Backend API",
  "Playwright Automation Layer",
  "Testing Lab Workspace",
  "Documentation Portal",
];
const frontendTechnologies = ["Next.js", "React", "TypeScript", "Material UI"];
const backendTechnologies = ["FastAPI", "Python", "REST API"];
const automationTechnologies = ["Playwright", "TypeScript", "UI Testing", "API Testing"];
const documentationTechnologies = ["Documentation Portal", "QA Documentation"];

export default function TestingPlatformSection() {
  return (
    <Stack spacing={3} data-testid="documentation-section-testing-platform">
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
        <Typography variant="h5">Testing Platform</Typography>
        <Chip label="Platform" size="small" color="primary" variant="outlined" />
      </Stack>

      <Divider />

      <Stack spacing={1}>
        <Typography variant="h6">Platform Overview</Typography>
        <Typography variant="body2" color="text.secondary">
          EVAISYS Testing Lab is built as a multi-layer testing platform that combines a
          demonstration web application, backend services, automated testing and project
          documentation within a single environment.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The platform was designed to provide a realistic target for manual testing, API
          validation and Playwright automation while remaining simple enough to be understood and
          maintained as a learning and portfolio project.
        </Typography>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Architecture</Typography>
        <Typography variant="body2" color="text.secondary">
          The platform consists of five primary layers.
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {platformArchitectureLayers.map((item) => (
            <Chip key={item} label={item} size="small" variant="outlined" />
          ))}
        </Stack>
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
            <Typography variant="subtitle1">Frontend Application</Typography>
            <Typography variant="body2" color="text.secondary">
              The frontend uses Next.js, React, TypeScript and Material UI to provide the
              interface for manual testing, automation scenarios and functional demonstrations.
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
              <li><Typography variant="body2">Authentication</Typography></li>
              <li><Typography variant="body2">Tasks</Typography></li>
              <li><Typography variant="body2">Requests</Typography></li>
              <li><Typography variant="body2">Articles</Typography></li>
              <li><Typography variant="body2">Contacts &amp; Feedback</Typography></li>
              <li><Typography variant="body2">Testing Lab</Typography></li>
              <li><Typography variant="body2">Documentation Portal</Typography></li>
            </Box>
          </Stack>
        </Paper>

        <Paper variant="outlined" sx={{ p: 1.75 }}>
          <Stack spacing={1}>
            <Typography variant="subtitle1">Backend API</Typography>
            <Typography variant="body2" color="text.secondary">
              The backend is implemented with FastAPI and Python and serves as the integration and
              API testing target for the frontend application.
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
              <li><Typography variant="body2">Authentication API</Typography></li>
              <li><Typography variant="body2">Tasks API</Typography></li>
              <li><Typography variant="body2">Requests API</Typography></li>
              <li><Typography variant="body2">Articles API</Typography></li>
              <li><Typography variant="body2">Contact API</Typography></li>
              <li><Typography variant="body2">Health API</Typography></li>
            </Box>
          </Stack>
        </Paper>

        <Paper variant="outlined" sx={{ p: 1.75 }}>
          <Stack spacing={1}>
            <Typography variant="subtitle1">Playwright Automation Layer</Typography>
            <Typography variant="body2" color="text.secondary">
              Automated testing is implemented with Playwright and TypeScript across UI testing,
              API testing and end-to-end validation.
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
              <li><Typography variant="body2">Authentication workflows</Typography></li>
              <li><Typography variant="body2">CRUD operations</Typography></li>
              <li><Typography variant="body2">Request management workflows</Typography></li>
              <li><Typography variant="body2">Search and filtering functionality</Typography></li>
              <li><Typography variant="body2">API endpoints</Typography></li>
              <li><Typography variant="body2">End-to-end scenarios</Typography></li>
            </Box>
          </Stack>
        </Paper>

        <Paper variant="outlined" sx={{ p: 1.75 }}>
          <Stack spacing={1}>
            <Typography variant="subtitle1">Testing Lab Workspace</Typography>
            <Typography variant="body2" color="text.secondary">
              Testing Lab provides a dedicated environment for demonstrating testing activities and
              reviewing the results of automated execution.
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
              <li><Typography variant="body2">Test execution</Typography></li>
              <li><Typography variant="body2">Defect demonstrations</Typography></li>
              <li><Typography variant="body2">Automation showcases</Typography></li>
              <li><Typography variant="body2">Result analysis</Typography></li>
              <li><Typography variant="body2">Playwright reporting</Typography></li>
            </Box>
          </Stack>
        </Paper>

        <Paper variant="outlined" sx={{ p: 1.75, gridColumn: { xs: "auto", sm: "1 / -1" } }}>
          <Stack spacing={1}>
            <Typography variant="subtitle1">Documentation Portal</Typography>
            <Typography variant="body2" color="text.secondary">
              The Documentation Portal is the central location for project knowledge, QA
              documentation and architecture context.
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
              <li><Typography variant="body2">Test Strategy</Typography></li>
              <li><Typography variant="body2">Test Coverage</Typography></li>
              <li><Typography variant="body2">Test Cases</Typography></li>
              <li><Typography variant="body2">API Testing Plan</Typography></li>
              <li><Typography variant="body2">Playwright Automation Plan</Typography></li>
              <li><Typography variant="body2">Architecture Documentation</Typography></li>
              <li><Typography variant="body2">AI-assisted QA Workflow</Typography></li>
              <li><Typography variant="body2">Future Development Plans</Typography></li>
            </Box>
          </Stack>
        </Paper>
      </Box>

      <Stack spacing={1.5}>
        <Typography variant="h6">Technology Stack</Typography>
        <Stack spacing={1}>
          <Stack direction="row" spacing={1} alignItems="center" useFlexGap flexWrap="wrap">
            <Typography variant="subtitle2" sx={{ minWidth: 120 }}>
              Frontend:
            </Typography>
            {frontendTechnologies.map((item) => (
              <Chip key={item} label={item} size="small" variant="outlined" />
            ))}
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center" useFlexGap flexWrap="wrap">
            <Typography variant="subtitle2" sx={{ minWidth: 120 }}>
              Backend:
            </Typography>
            {backendTechnologies.map((item) => (
              <Chip key={item} label={item} size="small" variant="outlined" />
            ))}
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center" useFlexGap flexWrap="wrap">
            <Typography variant="subtitle2" sx={{ minWidth: 120 }}>
              Test Automation:
            </Typography>
            {automationTechnologies.map((item) => (
              <Chip key={item} label={item} size="small" variant="outlined" />
            ))}
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center" useFlexGap flexWrap="wrap">
            <Typography variant="subtitle2" sx={{ minWidth: 120 }}>
              Documentation:
            </Typography>
            {documentationTechnologies.map((item) => (
              <Chip key={item} label={item} size="small" variant="outlined" />
            ))}
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6">Platform Objectives</Typography>
        <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
          <li><Typography variant="body2">Demonstrating realistic testing workflows.</Typography></li>
          <li><Typography variant="body2">Providing a stable automation target.</Typography></li>
          <li><Typography variant="body2">Showcasing Playwright automation techniques.</Typography></li>
          <li><Typography variant="body2">Demonstrating API testing practices.</Typography></li>
          <li><Typography variant="body2">Presenting QA documentation standards.</Typography></li>
          <li><Typography variant="body2">Exploring AI-assisted quality assurance approaches.</Typography></li>
        </Box>
      </Stack>
    </Stack>
  );
}
