"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
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
const checklistQuickVerificationItems = [
  "Authentication",
  "Tasks",
  "Requests",
  "Articles",
  "Contacts",
  "API Health",
];
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
const architectureSystemComponents = [
  {
    title: "Frontend",
    description: "Next.js + React + TypeScript + Material UI",
  },
  {
    title: "Backend",
    description: "FastAPI + REST API",
  },
  {
    title: "Automation",
    description: "Playwright UI & API Tests",
  },
  {
    title: "Documentation",
    description: "Integrated Documentation Portal",
  },
];
const intentionalDefectBranches = [
  {
    title: "main (Stable Reference)",
    sections: [
      {
        heading: "Purpose",
        content: "Stable reference version of the application.",
      },
      {
        heading: "Status",
        content: "All automated tests are expected to pass.",
        chipLabel: "All tests pass",
        chipColor: "success" as const,
      },
      {
        heading: "Coverage",
        content:
          "The branch contains the complete Playwright automation suite covering:",
        items: [
          "Authentication",
          "Navigation",
          "Tasks",
          "Requests",
          "Articles",
          "Contacts",
          "Responsive behavior",
          "API validation",
        ],
        footer:
          "The main branch serves as the baseline used for comparison with defect branches.",
      },
    ],
  },
  {
    title: "intentional-ui-defects",
    sections: [
      {
        heading: "Purpose",
        content: "Contains intentionally introduced frontend defects.",
      },
      {
        heading: "Examples of Defects",
        items: [
          "Broken UI validations",
          "Missing interface elements",
          "Navigation inconsistencies",
          "Incorrect page behavior",
          "Workflow interruptions",
        ],
      },
      {
        heading: "Expected Result",
        content:
          "Several Playwright UI tests fail and clearly demonstrate regression detection capabilities.",
      },
    ],
  },
  {
    title: "intentional-api-defects",
    sections: [
      {
        heading: "Purpose",
        content: "Contains intentionally introduced backend defects.",
      },
      {
        heading: "Examples of Defects",
        items: [
          "Invalid API responses",
          "Broken validation rules",
          "Incorrect status codes",
          "Contract violations",
          "Data processing issues",
        ],
      },
      {
        heading: "Expected Result",
        content:
          "Several API tests fail and demonstrate backend coverage effectiveness.",
      },
    ],
  },
];
const intentionalDefectsWorkflowSteps = [
  "main",
  "Run Playwright Suite",
  "All Tests Pass",
  "Switch To Defect Branch",
  "Run Same Suite",
  "Observe Failures",
  "Analyze Reports",
];
const architectureFrontendModules = [
  "Authentication",
  "Tasks",
  "Requests",
  "Articles",
  "Contacts",
  "Testing Lab",
  "Documentation Portal",
];
const architectureBackendServices = [
  "Authentication",
  "Tasks",
  "Requests",
  "Articles",
  "Contacts",
  "Health Monitoring",
];
const architecturePrinciples = [
  "Separation of concerns",
  "Testability first",
  "Reproducible execution",
  "Documentation driven development",
  "Controlled defect simulation",
  "AI-assisted QA workflows",
];
const futureDevelopmentCards = [
  {
    title: "Documentation Expansion",
    items: [
      "Complete documentation integration",
      "Architecture materials",
      "Test artifacts",
      "Versioned documents",
    ],
  },
  {
    title: "Testing Lab Improvements",
    items: [
      "Individual test execution",
      "Test filtering",
      "Tag-based grouping",
      "Execution history",
    ],
  },
  {
    title: "Reporting & Analytics",
    items: [
      "Coverage statistics",
      "Execution trends",
      "Failure tracking",
      "Quality metrics",
    ],
  },
  {
    title: "Platform Growth",
    items: [
      "Additional modules",
      "Expanded API coverage",
      "Security scenarios",
      "Performance examples",
    ],
  },
];
const aiQaRoadmapItems = [
  {
    title: "AI Test Strategy Generation",
    items: [
      "Generate testing approaches",
      "Suggest coverage improvements",
      "Identify testing risks",
      "Recommend validation priorities",
    ],
  },
  {
    title: "AI Test Case Creation",
    items: [
      "Generate test cases from requirements",
      "Create checklists",
      "Produce validation scenarios",
      "Support exploratory testing",
    ],
  },
  {
    title: "AI Result Analysis",
    items: [
      "Analyze failures",
      "Detect suspicious patterns",
      "Recommend corrective actions",
      "Support root-cause investigation",
    ],
  },
];
const cicdCapabilities = [
  "Scheduled regression execution",
  "Pipeline validation",
  "Quality gates",
  "Automated reporting",
  "Release verification workflows",
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

function renderTestCasesContent() {
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

      <Paper variant="outlined" sx={{ p: 2 }}>
        <Stack spacing={1}>
          <Typography variant="subtitle1">Source Materials</Typography>
          <Typography variant="body2" color="text.secondary">
            Detailed test cases will be imported from the prepared project documentation and
            connected to this section in a later step.
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
}

function renderChecklistsContent() {
  return (
    <Stack spacing={3} data-testid="documentation-section-checklists">
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
        <Typography variant="h5">Checklists</Typography>
        <Chip label="Quick Verification" size="small" color="primary" variant="outlined" />
      </Stack>

      <Divider />

      <Stack spacing={1}>
        <Typography variant="h6">Purpose</Typography>
        <Typography variant="body2" color="text.secondary">
          Checklists provide a lightweight and efficient way to verify application functionality
          without the overhead of detailed test case execution.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          They are commonly used during smoke testing, sanity testing and release verification
          activities.
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6">Why Checklists Matter</Typography>
        <Typography variant="body2" color="text.secondary">
          Unlike detailed test cases, checklists focus on confirming that critical functionality is
          available and behaves as expected.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          They help QA engineers quickly evaluate application quality while maintaining consistency
          across repeated testing cycles.
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {[
            "Smoke testing",
            "Sanity testing",
            "Release verification",
            "Environment validation",
            "Regression preparation",
          ].map((item) => (
            <Chip key={item} label={item} size="small" variant="outlined" />
          ))}
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Checklist Categories</Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
            gap: 1.5,
          }}
        >
          {[
            {
              title: "Authentication",
              items: ["Login available", "Logout available", "Protected routes secured"],
            },
            {
              title: "Tasks",
              items: ["Create task", "Edit task", "Delete task", "Change status"],
            },
            {
              title: "Requests",
              items: ["Open requests list", "Update request status", "Verify workflow transitions"],
            },
            {
              title: "Articles",
              items: ["Open article list", "Search articles", "View article details"],
            },
            {
              title: "Contacts & Feedback",
              items: ["Display contacts", "Search contacts", "Validate contact information"],
            },
          ].map((category) => (
            <Paper
              key={category.title}
              variant="outlined"
              sx={{ p: 1.75, gridColumn: category.title === "Contacts & Feedback" ? { xs: "auto", sm: "1 / -1" } : "auto" }}
            >
              <Stack spacing={1}>
                <Typography variant="subtitle1">{category.title}</Typography>
                <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                  {category.items.map((item) => (
                    <li key={`${category.title}-${item}`}>
                      <Typography variant="body2">{item}</Typography>
                    </li>
                  ))}
                </Box>
              </Stack>
            </Paper>
          ))}
        </Box>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6">Manual Testing Support</Typography>
        <Typography variant="body2" color="text.secondary">
          Checklists provide a quick validation layer before deeper testing activities begin.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          They are particularly useful for confirming that a new deployment is stable enough for
          more extensive testing.
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6">Automation Preparation</Typography>
        <Typography variant="body2" color="text.secondary">
          Checklist items often become candidates for future automation.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stable and frequently executed checklist scenarios can later evolve into Playwright
          automated tests.
        </Typography>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Expected Benefits</Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {[
            "Reduce repetitive manual effort",
            "Improve consistency of verification",
            "Speed up smoke testing",
            "Support regression planning",
            "Complement detailed test cases and automation",
          ].map((item) => (
            <Chip key={item} label={item} size="small" variant="outlined" />
          ))}
        </Stack>
      </Stack>

      <Paper variant="outlined" sx={{ p: 2 }}>
        <Stack spacing={1.25}>
          <Typography variant="h6">QA Quick Verification</Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {checklistQuickVerificationItems.map((item) => (
              <Chip key={item} label={item} size="small" variant="outlined" />
            ))}
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}

function renderApiTestingPlanContent() {
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
        <Box
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
        </Box>
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

      <Paper variant="outlined" sx={{ p: 2.25 }} data-testid="api-testing-source-materials">
        <Stack spacing={1.25}>
          <Typography variant="h6">Source Materials</Typography>
          <Typography variant="body2" color="text.secondary">
            Detailed API testing documentation will be attached to this section from the prepared
            project documentation.
          </Typography>
          <Alert severity="info" variant="outlined">
            <Typography variant="subtitle2">API Testing Plan Document</Typography>
            <Typography variant="body2">Coming soon</Typography>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );
}

function renderPlaywrightAutomationPlanContent() {
  return (
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

      <Paper variant="outlined" sx={{ p: 2.25 }}>
        <Stack spacing={1.25}>
          <Typography variant="h6">Source Documentation</Typography>
          <Typography variant="subtitle1">Playwright Automation Plan (Full Document)</Typography>
          <Typography variant="body2" color="text.secondary">
            The complete automation plan is available as a dedicated project document and will be
            linked here after document integration is completed.
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
}

function renderIntentionalDefectsContent() {
  return (
    <Stack spacing={3} data-testid="documentation-section-intentional-defects">
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
        <Typography variant="h5">Intentional Defects</Typography>
        <Chip label="Regression Demo" size="small" color="primary" variant="outlined" />
      </Stack>

      <Divider />

      <Stack spacing={1}>
        <Typography variant="h6">Purpose</Typography>
        <Typography variant="body2" color="text.secondary">
          EVAISYS Testing Lab includes dedicated branches that contain intentionally introduced
          defects. These branches are used to demonstrate how automated tests detect regressions and
          application failures in realistic scenarios.
        </Typography>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Why Intentional Defects Exist</Typography>
        <Typography variant="body2" color="text.secondary">
          The project is designed not only to demonstrate successful test execution, but also to
          show how Playwright tests behave when real defects are introduced into the application.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This approach allows engineers to:
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {[
            "observe failing tests",
            "analyze reports",
            "investigate root causes",
            "validate automation effectiveness",
            "demonstrate regression detection",
          ].map((item) => (
            <Chip key={item} label={item} size="small" variant="outlined" />
          ))}
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Branch Overview</Typography>
        <Stack spacing={1.5}>
          {intentionalDefectBranches.map((branch) => (
            <Accordion key={branch.title} disableGutters sx={{ "&:before": { display: "none" } }}>
              <AccordionSummary
                expandIcon={
                  <Typography variant="caption" color="text.secondary">
                    Show details
                  </Typography>
                }
              >
                <Typography variant="subtitle1">{branch.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={2}>
                  {branch.sections.map((section) => (
                    <Stack key={`${branch.title}-${section.heading}`} spacing={0.75}>
                      <Stack direction="row" spacing={1} alignItems="center" useFlexGap flexWrap="wrap">
                        <Typography variant="subtitle2">{section.heading}</Typography>
                        {"chipLabel" in section && section.chipLabel ? (
                          <Chip
                            label={section.chipLabel}
                            size="small"
                            color={section.chipColor ?? "default"}
                            variant="outlined"
                          />
                        ) : null}
                      </Stack>
                      {"content" in section && section.content ? (
                        <Typography variant="body2" color="text.secondary">
                          {section.content}
                        </Typography>
                      ) : null}
                      {"items" in section && section.items ? (
                        <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                          {section.items.map((item) => (
                            <li key={`${branch.title}-${section.heading}-${item}`}>
                              <Typography variant="body2">{item}</Typography>
                            </li>
                          ))}
                        </Box>
                      ) : null}
                      {"footer" in section && section.footer ? (
                        <Typography variant="body2" color="text.secondary">
                          {section.footer}
                        </Typography>
                      ) : null}
                    </Stack>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Stack>

      <Paper variant="outlined" sx={{ p: 2.25 }}>
        <Stack spacing={1.5}>
          <Typography variant="h6">Validation Workflow</Typography>
          <Typography variant="body2" color="text.secondary">
            The recommended validation process is to execute the automation suite against the stable
            branch, verify successful execution, switch to a defect branch and execute the same
            tests again. The resulting failures demonstrate the effectiveness of automated
            regression detection.
          </Typography>
          <Stack spacing={1} alignItems="flex-start">
            {intentionalDefectsWorkflowSteps.map((step, index) => (
              <Stack key={step} spacing={0.75} alignItems="flex-start">
                <Chip label={step} size="small" variant="outlined" />
                {index < intentionalDefectsWorkflowSteps.length - 1 ? (
                  <Typography variant="body2" color="text.secondary">
                    ↓
                  </Typography>
                ) : null}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Paper>

      <Paper variant="outlined" sx={{ p: 2.25 }}>
        <Stack spacing={1.25}>
          <Typography variant="h6">Source Documentation</Typography>
          <Typography variant="subtitle1">Intentional Defects Plan (Full Document)</Typography>
          <Typography variant="body2" color="text.secondary">
            The complete intentional defects strategy is available as a dedicated project document
            and will be linked here after document integration is completed.
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
}

function renderArchitectureContent() {
  return (
    <Stack spacing={3} data-testid="documentation-section-architecture">
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
        <Typography variant="h5">Architecture</Typography>
        <Chip label="System Design" size="small" color="primary" variant="outlined" />
      </Stack>

      <Divider />

      <Stack spacing={1}>
        <Typography variant="h6">Architecture Overview</Typography>
        <Typography variant="body2" color="text.secondary">
          EVAISYS Testing Lab is designed as a complete QA demonstration platform that combines
          frontend functionality, backend services, automated testing and project documentation
          within a single controlled environment.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The architecture focuses on simplicity, transparency and reproducibility while remaining
          realistic enough to demonstrate modern testing workflows.
        </Typography>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">System Components</Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
            gap: 1.5,
          }}
        >
          {architectureSystemComponents.map((component) => (
            <Paper key={component.title} variant="outlined" sx={{ p: 1.75 }}>
              <Stack spacing={1}>
                <Typography variant="subtitle1">{component.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {component.description}
                </Typography>
              </Stack>
            </Paper>
          ))}
        </Box>
      </Stack>

      <Paper variant="outlined" sx={{ p: 2.25 }}>
        <Stack spacing={1.25}>
          <Typography variant="h6">High Level Architecture Diagram</Typography>
          <Typography variant="body2" color="text.secondary">
            Architecture diagram will be added in the next step.
          </Typography>
        </Stack>
      </Paper>

      <Stack spacing={1.5}>
        <Typography variant="h6">Frontend Layer</Typography>
        <Typography variant="body2" color="text.secondary">
          The frontend provides the user interface used for both manual testing and automated
          Playwright execution.
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {architectureFrontendModules.map((item) => (
            <Chip key={item} label={item} size="small" variant="outlined" />
          ))}
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Backend Layer</Typography>
        <Typography variant="body2" color="text.secondary">
          The backend exposes REST endpoints used by both the application and automated API tests.
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {architectureBackendServices.map((item) => (
            <Chip key={item} label={item} size="small" variant="outlined" />
          ))}
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Testing Layer</Typography>
        <Stack spacing={1.5}>
          {[
            {
              title: "Manual Testing",
              items: [
                "Exploratory testing",
                "Smoke testing",
                "Sanity verification",
                "UI validation",
              ],
            },
            {
              title: "Playwright UI Automation",
              items: [
                "Authentication",
                "Navigation",
                "Tasks",
                "Requests",
                "Articles",
                "Contacts",
                "Responsive testing",
              ],
            },
            {
              title: "Playwright API Automation",
              items: [
                "Health",
                "Authentication",
                "Tasks",
                "Requests",
                "Articles",
                "Contacts",
              ],
            },
          ].map((layer) => (
            <Accordion key={layer.title} disableGutters sx={{ "&:before": { display: "none" } }}>
              <AccordionSummary
                expandIcon={
                  <Typography variant="caption" color="text.secondary">
                    Show details
                  </Typography>
                }
              >
                <Typography variant="subtitle1">{layer.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                  {layer.items.map((item) => (
                    <li key={`${layer.title}-${item}`}>
                      <Typography variant="body2">{item}</Typography>
                    </li>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6">Documentation Layer</Typography>
        <Typography variant="body2" color="text.secondary">
          The Documentation Portal stores project knowledge, testing strategies, coverage
          descriptions, architecture documentation and future development plans.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          It acts as the knowledge base of the EVAISYS ecosystem.
        </Typography>
      </Stack>

      <Paper variant="outlined" sx={{ p: 2.25 }}>
        <Stack spacing={1.25}>
          <Typography variant="h6">Architectural Principles</Typography>
          <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
            {architecturePrinciples.map((item) => (
              <li key={item}>
                <Typography variant="body2">{item}</Typography>
              </li>
            ))}
          </Box>
        </Stack>
      </Paper>

      <Paper variant="outlined" sx={{ p: 2.25 }}>
        <Stack spacing={1.25}>
          <Typography variant="h6">Source Documentation</Typography>
          <Typography variant="body2" color="text.secondary">
            The complete architecture description is available as a dedicated project document and
            will be linked here after document integration is completed.
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
}

function renderFutureDevelopmentContent() {
  return (
    <Stack spacing={3} data-testid="documentation-section-future-development">
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
        <Typography variant="h5">Future Development</Typography>
        <Chip label="Roadmap" size="small" color="primary" variant="outlined" />
      </Stack>

      <Divider />

      <Stack spacing={1}>
        <Typography variant="h6">Future Vision</Typography>
        <Typography variant="body2" color="text.secondary">
          EVAISYS Testing Lab is intentionally designed as a lightweight demonstration platform for
          modern QA engineering practices.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The current implementation provides a stable foundation for frontend testing, API
          validation, Playwright automation and project documentation.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Future development is focused on expanding the platform into a more complete testing
          ecosystem while preserving its educational and portfolio-oriented nature.
        </Typography>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Planned Improvements</Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
            gap: 1.5,
          }}
        >
          {futureDevelopmentCards.map((card) => (
            <Paper key={card.title} variant="outlined" sx={{ p: 1.75 }}>
              <Stack spacing={1}>
                <Typography variant="subtitle1">{card.title}</Typography>
                <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                  {card.items.map((item) => (
                    <li key={`${card.title}-${item}`}>
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
        <Typography variant="h6">AI-assisted QA Roadmap</Typography>
        <Stack spacing={1.5}>
          {aiQaRoadmapItems.map((item) => (
            <Accordion key={item.title} disableGutters sx={{ "&:before": { display: "none" } }}>
              <AccordionSummary
                expandIcon={
                  <Typography variant="caption" color="text.secondary">
                    Show details
                  </Typography>
                }
              >
                <Typography variant="subtitle1">{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                  {item.items.map((entry) => (
                    <li key={`${item.title}-${entry}`}>
                      <Typography variant="body2">{entry}</Typography>
                    </li>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">CI/CD Integration</Typography>
        <Typography variant="body2" color="text.secondary">
          Future versions of EVAISYS Testing Lab may include automated execution through CI/CD
          pipelines.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Planned capabilities include:
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {cicdCapabilities.map((item) => (
            <Chip key={item} label={item} size="small" variant="outlined" />
          ))}
        </Stack>
      </Stack>

      <Paper variant="outlined" sx={{ p: 2.25 }}>
        <Stack spacing={1.25}>
          <Typography variant="h6">Long-Term Goal</Typography>
          <Typography variant="body2" color="text.secondary">
            Build a compact but realistic QA engineering platform that demonstrates the complete
            testing lifecycle:
          </Typography>
          <Typography variant="subtitle1">
            Planning → Implementation → Execution → Reporting → Continuous Improvement
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The objective is to provide a practical environment that combines documentation,
            automation, defect simulation and AI-assisted QA workflows within a single project.
          </Typography>
        </Stack>
      </Paper>

      <Paper variant="outlined" sx={{ p: 2.25 }}>
        <Stack spacing={1.25}>
          <Typography variant="h6">Future Development Document</Typography>
          <Typography variant="body2" color="text.secondary">
            A detailed roadmap document will be attached here after document integration is
            completed.
          </Typography>
        </Stack>
      </Paper>
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
                : selectedSection.id === "test-cases"
                  ? renderTestCasesContent()
                  : selectedSection.id === "checklists"
                    ? renderChecklistsContent()
                    : selectedSection.id === "api-testing-plan"
                      ? renderApiTestingPlanContent()
                      : selectedSection.id === "playwright-automation-plan"
                        ? renderPlaywrightAutomationPlanContent()
                        : selectedSection.id === "intentional-defects"
                          ? renderIntentionalDefectsContent()
                          : selectedSection.id === "architecture"
                            ? renderArchitectureContent()
                            : selectedSection.id === "future-development"
                              ? renderFutureDevelopmentContent()
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
