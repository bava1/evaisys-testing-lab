import { useState } from "react";
import { Box, Button, Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import DocumentViewerDialog from "../common/document-viewer-dialog";
import SourceDocumentCard from "../common/source-document-card";
import { testCoverageFullDocument } from "../content/documents/test-coverage";

type TestCoverageSectionProps = {
  onOpenDiagram: () => void;
};

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

export default function TestCoverageSection({ onOpenDiagram }: TestCoverageSectionProps) {
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);

  return (
    <>
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

        <SourceDocumentCard
          title="Source Documentation"
          subtitle={testCoverageFullDocument.title}
          description="Translated content from the original Word source document is available in the portal and can be reviewed or downloaded from the modal viewer."
          testId="test-coverage-source-documentation"
        />

        <Button
          variant="outlined"
          onClick={() => setIsDocumentOpen(true)}
          sx={{ alignSelf: "flex-start" }}
          data-testid="test-coverage-view-full-document"
        >
          View Full Document
        </Button>
      </Stack>

      <DocumentViewerDialog
        document={testCoverageFullDocument}
        open={isDocumentOpen}
        testId="test-coverage-document-viewer-dialog"
        onClose={() => setIsDocumentOpen(false)}
      />
    </>
  );
}
