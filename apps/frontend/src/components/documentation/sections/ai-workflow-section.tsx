import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SourceDocumentCard from "../common/source-document-card";

const qaLifecycleSteps = [
  "Requirements Analysis",
  "Test Strategy Creation",
  "Test Case Design",
  "Checklist Preparation",
  "Automation Planning",
  "Test Execution Analysis",
  "Continuous Improvement",
];
const aiWorkflowActivities = [
  {
    title: "AI Product Analysis",
    items: [
      "Review feature descriptions and requirements",
      "Highlight risky areas and unclear assumptions",
      "Suggest validation focus for QA planning",
    ],
  },
  {
    title: "AI Test Strategy Support",
    items: [
      "Propose testing approaches",
      "Suggest coverage improvements",
      "Identify testing risks",
      "Recommend validation priorities",
    ],
  },
  {
    title: "AI Test Case Generation",
    items: [
      "Generate test cases from requirements",
      "Create checklists",
      "Produce validation scenarios",
      "Support exploratory testing",
    ],
  },
  {
    title: "AI Automation Planning",
    items: [
      "Suggest automation candidates",
      "Map stable workflows for Playwright",
      "Recommend regression priorities",
      "Support scope planning for UI and API tests",
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
const aiBenefits = [
  "Faster Documentation",
  "Improved Coverage",
  "Consistent Processes",
  "Knowledge Support",
];
const workflowExampleSteps = [
  "New Feature",
  "AI reviews requirements",
  "AI suggests test strategy",
  "AI proposes test cases",
  "QA reviews recommendations",
  "Playwright automation implemented",
  "Results analyzed",
];

export default function AiWorkflowSection() {
  return (
    <Stack spacing={3} data-testid="documentation-section-ai-workflow">
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
        <Typography variant="h5">AI-assisted QA Workflow</Typography>
        <Chip label="Human Guided" size="small" color="primary" variant="outlined" />
      </Stack>

      <Divider />

      <Stack spacing={1}>
        <Typography variant="body2" color="text.secondary">
          AI-assisted QA introduces an additional layer of support for testing activities by helping
          engineers create documentation, analyze requirements and improve test coverage.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Within EVAISYS Testing Lab, AI is used as an assistant rather than a replacement for
          human decision-making.
        </Typography>
      </Stack>

      <Paper variant="outlined" sx={{ p: 2.25 }}>
        <Stack spacing={1.5}>
          <Typography variant="h6">QA Lifecycle Support</Typography>
          <Stack spacing={1} alignItems="flex-start">
            {qaLifecycleSteps.map((step, index) => (
              <Stack key={step} spacing={0.75} alignItems="flex-start">
                <Chip label={step} size="small" variant="outlined" />
                {index < qaLifecycleSteps.length - 1 ? (
                  <Typography variant="body2" color="text.secondary">
                    ↓
                  </Typography>
                ) : null}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Paper>

      <Stack spacing={1.5}>
        <Typography variant="h6">AI-assisted Activities</Typography>
        <Stack spacing={1.5}>
          {aiWorkflowActivities.map((activity) => (
            <Accordion key={activity.title} disableGutters sx={{ "&:before": { display: "none" } }}>
              <AccordionSummary
                expandIcon={
                  <Typography variant="caption" color="text.secondary">
                    Show details
                  </Typography>
                }
              >
                <Typography variant="subtitle1">{activity.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                  {activity.items.map((item) => (
                    <li key={`${activity.title}-${item}`}>
                      <Typography variant="body2">{item}</Typography>
                    </li>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Stack>

      <Alert severity="info" variant="outlined">
        <Stack spacing={0.5}>
          <Typography variant="subtitle2">Human Responsibility</Typography>
          <Typography variant="body2">
            AI provides recommendations and assistance.
          </Typography>
          <Typography variant="body2">
            Final decisions remain the responsibility of QA engineers and project stakeholders.
          </Typography>
          <Typography variant="body2">
            AI supports the testing process but does not replace professional judgment.
          </Typography>
        </Stack>
      </Alert>

      <Stack spacing={1.5}>
        <Typography variant="h6">Benefits</Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
            gap: 1.5,
          }}
        >
          {aiBenefits.map((benefit) => (
            <Paper key={benefit} variant="outlined" sx={{ p: 1.75 }}>
              <Typography variant="subtitle1">{benefit}</Typography>
            </Paper>
          ))}
        </Box>
      </Stack>

      <Paper variant="outlined" sx={{ p: 2.25 }}>
        <Stack spacing={1.5}>
          <Typography variant="h6">Workflow Example</Typography>
          <Stack spacing={1} alignItems="flex-start">
            {workflowExampleSteps.map((step, index) => (
              <Stack key={step} spacing={0.75} alignItems="flex-start">
                <Chip label={step} size="small" variant="outlined" />
                {index < workflowExampleSteps.length - 1 ? (
                  <Typography variant="body2" color="text.secondary">
                    ↓
                  </Typography>
                ) : null}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Paper>

      <SourceDocumentCard
        title="AI-assisted QA Workflow Document"
        description="The complete AI-assisted QA workflow description will be linked here after document integration is completed."
      />
    </Stack>
  );
}
