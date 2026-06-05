"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

type DocumentationSection = {
  id: string;
  title: string;
};

const documentationSections: DocumentationSection[] = [
  { id: "overview", title: "Overview" },
  { id: "testing-platform", title: "Testing Platform" },
  { id: "test-strategy", title: "Test Strategy" },
  { id: "test-coverage", title: "Test Coverage" },
  { id: "test-cases", title: "Test Cases" },
  { id: "checklists", title: "Checklists" },
  { id: "api-testing-plan", title: "API Testing Plan" },
  { id: "playwright-automation-plan", title: "Playwright Automation Plan" },
  { id: "intentional-defects", title: "Intentional Defects" },
  { id: "architecture", title: "Architecture" },
  { id: "ai-assisted-qa-workflow", title: "AI-assisted QA Workflow" },
  { id: "future-development", title: "Future Development" },
];

const defaultSectionId = "overview";
const overviewScopeItems = [
  "Manual Testing",
  "API Testing",
  "Playwright Automation",
  "AI-assisted QA",
  "Documentation Portal",
];
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
const coverageLayers = [
  "Manual Testing",
  "API Testing",
  "Playwright UI Automation",
  "End-to-End Testing",
  "Responsive Testing",
  "Basic Accessibility Verification",
  "Intentional Defect Validation",
];
const coverageAreaCards = [
  {
    title: "Authentication",
    items: ["Login", "Logout", "Session validation", "Protected routes", "Unauthorized access handling"],
  },
  {
    title: "Tasks",
    items: ["Create task", "Edit task", "Delete task", "Status updates", "Filtering"],
  },
  {
    title: "Requests",
    items: ["Request listing", "Status changes", "Priority handling", "Workflow validation"],
  },
  {
    title: "Articles",
    items: ["Article listing", "Search", "Detail view", "Navigation"],
  },
  {
    title: "Contacts & Feedback",
    items: ["Contact information display", "Search and filtering", "Basic data validation"],
  },
  {
    title: "Backend API",
    items: ["Health endpoint", "Authentication API", "Tasks API", "Requests API", "Articles API", "Contact API"],
  },
];
const highPriorityCoverage = ["Authentication", "Tasks", "Requests", "Backend APIs"];
const mediumPriorityCoverage = ["Articles", "Contacts & Feedback"];
const supportingCoverage = ["Responsive Testing", "Accessibility Checks", "Documentation Validation"];
const automationFocusAreas = [
  "Authentication workflows",
  "Tasks CRUD",
  "Requests workflows",
  "Articles functionality",
  "Contacts validation",
  "API endpoints",
];

function renderOverviewContent() {
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

function renderTestingPlatformContent() {
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

function renderTestStrategyContent(onOpenDiagram: () => void) {
  return (
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
    </Stack>
  );
}

function renderTestCoverageContent(onOpenDiagram: () => void) {
  return (
    <Stack spacing={3} data-testid="documentation-section-test-coverage">
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
        <Typography variant="h5">Test Coverage</Typography>
        <Chip label="Coverage" size="small" color="primary" variant="outlined" />
      </Stack>

      <Divider />

      <Stack spacing={1}>
        <Typography variant="h6">Purpose</Typography>
        <Typography variant="body2" color="text.secondary">
          Test Coverage defines which parts of EVAISYS Testing Lab are covered by manual testing,
          automated testing and API validation.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The objective is to ensure that the most important application functionality is verified
          through repeatable and traceable testing activities.
        </Typography>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Coverage Approach</Typography>
        <Typography variant="body2" color="text.secondary">
          The project uses a risk-based coverage model. Application areas with the highest business
          value and the highest probability of defects receive the highest testing priority.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Coverage is distributed across multiple testing layers.
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {coverageLayers.map((item) => (
            <Chip key={item} label={item} size="small" variant="outlined" />
          ))}
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Coverage Areas</Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
            gap: 1.5,
          }}
        >
          {coverageAreaCards.map((area) => (
            <Paper key={area.title} variant="outlined" sx={{ p: 1.75 }}>
              <Stack spacing={1}>
                <Typography variant="subtitle1">{area.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Coverage includes:
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                  {area.items.map((item) => (
                    <li key={`${area.title}-${item}`}>
                      <Typography variant="body2">{item}</Typography>
                    </li>
                  ))}
                </Box>
              </Stack>
            </Paper>
          ))}
        </Box>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Coverage Model</Typography>
        <Typography variant="body2" color="text.secondary">
          The coverage model connects critical workflows, API targets and supporting quality checks
          into one structured validation view.
        </Typography>
      </Stack>

      <Paper variant="outlined" sx={{ p: 2 }} data-testid="test-coverage-diagram-preview">
        <Stack spacing={1.5}>
          <Typography variant="subtitle1">Coverage Diagram</Typography>
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
              src="/docs/diagrams/dia3.png"
              alt="Test coverage model diagram"
              sx={{
                display: "block",
                width: "100%",
                maxWidth: 420,
                height: "auto",
              }}
            />
          </Button>
          <Typography variant="caption" color="text.secondary">
            Coverage model across manual checks, API validation, Playwright automation and
            supporting quality layers.
          </Typography>
        </Stack>
      </Paper>

      <Stack spacing={1.5}>
        <Typography variant="h6">Coverage Priorities</Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            gap: 1.5,
          }}
        >
          <Paper variant="outlined" sx={{ p: 1.75 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle1">High Priority</Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {highPriorityCoverage.map((item) => (
                  <Chip key={item} label={item} size="small" variant="outlined" />
                ))}
              </Stack>
            </Stack>
          </Paper>
          <Paper variant="outlined" sx={{ p: 1.75 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle1">Medium Priority</Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {mediumPriorityCoverage.map((item) => (
                  <Chip key={item} label={item} size="small" variant="outlined" />
                ))}
              </Stack>
            </Stack>
          </Paper>
          <Paper variant="outlined" sx={{ p: 1.75 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle1">Supporting Coverage</Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {supportingCoverage.map((item) => (
                  <Chip key={item} label={item} size="small" variant="outlined" />
                ))}
              </Stack>
            </Stack>
          </Paper>
        </Box>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Automation Coverage</Typography>
        <Typography variant="body2" color="text.secondary">
          Playwright automation currently focuses on the areas that provide the highest return for
          automated regression testing.
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {automationFocusAreas.map((item) => (
            <Chip key={item} label={item} size="small" variant="outlined" />
          ))}
        </Stack>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6">Expected Result</Typography>
        <Typography variant="body2" color="text.secondary">
          The coverage model ensures that critical workflows, backend services and user-facing
          functionality are continuously validated through a combination of manual testing, API
          testing and automated Playwright execution.
        </Typography>
      </Stack>
    </Stack>
  );
}

function renderPlaceholderContent(sectionTitle: string) {
  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
        <Typography variant="h5">{sectionTitle}</Typography>
        <Chip label="Planned" size="small" color="default" variant="outlined" />
      </Stack>

      <Divider />

      <Typography variant="body1">Select a documentation section from the left menu.</Typography>
      <Typography variant="body2" color="text.secondary">
        Documentation content will be added in the next step.
      </Typography>
    </Stack>
  );
}

export default function DocumentationPortal() {
  const [selectedSectionId, setSelectedSectionId] = useState(defaultSectionId);
  const [activeDiagramId, setActiveDiagramId] = useState<"test-strategy" | "test-coverage" | null>(null);

  const selectedSection =
    documentationSections.find((section) => section.id === selectedSectionId) ??
    documentationSections[0];
  const activeDiagram =
    activeDiagramId === "test-strategy"
      ? {
          title: "Test Strategy Diagram",
          testId: "test-strategy-diagram-dialog",
          src: "/docs/diagrams/dia2.png",
          alt: "Expanded test strategy workflow diagram",
          caption:
            "Product analysis, risk analysis, test design, automation scope and reporting are connected into one QA improvement loop.",
        }
      : activeDiagramId === "test-coverage"
        ? {
            title: "Test Coverage Diagram",
            testId: "test-coverage-diagram-dialog",
            src: "/docs/diagrams/dia3.png",
            alt: "Expanded test coverage model diagram",
            caption:
              "Coverage priorities connect product areas, API validation and automation layers into one structured QA model.",
          }
        : null;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "280px minmax(0, 1fr)" },
        gap: 3,
        alignItems: "start",
      }}
    >
      <Paper variant="outlined" sx={{ p: 2.5 }} data-testid="documentation-sidebar">
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
            <Typography variant="h6">Sections</Typography>
            <Chip label={`${documentationSections.length} items`} size="small" variant="outlined" />
          </Stack>

          <Divider />

          <List disablePadding>
            {documentationSections.map((section) => (
              <ListItemButton
                key={section.id}
                selected={section.id === selectedSection.id}
                onClick={() => setSelectedSectionId(section.id)}
                data-testid={`documentation-nav-item-${section.id}`}
                sx={{ borderRadius: 1, mb: 0.5 }}
              >
                <ListItemText
                  primary={section.title}
                  primaryTypographyProps={{
                    variant: "body2",
                    fontWeight: section.id === selectedSection.id ? 600 : 400,
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Stack>
      </Paper>

      <Paper variant="outlined" sx={{ p: 3, minHeight: 360 }} data-testid="documentation-content">
        {selectedSection.id === "overview"
          ? renderOverviewContent()
          : selectedSection.id === "testing-platform"
            ? renderTestingPlatformContent()
            : selectedSection.id === "test-strategy"
              ? renderTestStrategyContent(() => setActiveDiagramId("test-strategy"))
              : selectedSection.id === "test-coverage"
                ? renderTestCoverageContent(() => setActiveDiagramId("test-coverage"))
             : renderPlaceholderContent(selectedSection.title)}
      </Paper>

      <Dialog
        open={activeDiagram !== null}
        onClose={() => setActiveDiagramId(null)}
        fullWidth
        maxWidth="lg"
        data-testid={activeDiagram ? activeDiagram.testId : undefined}
      >
        <DialogTitle sx={{ pr: 7 }}>
          {activeDiagram ? activeDiagram.title : "Diagram"}
          <IconButton
            aria-label="close documentation diagram"
            onClick={() => setActiveDiagramId(null)}
            sx={{ position: "absolute", right: 12, top: 12 }}
          >
            ×
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {activeDiagram ? (
            <>
              <Box
                component="img"
                src={activeDiagram.src}
                alt={activeDiagram.alt}
                sx={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  maxHeight: "80vh",
                  objectFit: "contain",
                }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                {activeDiagram.caption}
              </Typography>
            </>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setActiveDiagramId(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
