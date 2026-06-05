import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SourceDocumentCard from "../common/source-document-card";

const architectureSystemComponents = [
  { title: "Frontend", description: "Next.js + React + TypeScript + Material UI" },
  { title: "Backend", description: "FastAPI + REST API" },
  { title: "Automation", description: "Playwright UI & API Tests" },
  { title: "Documentation", description: "Integrated Documentation Portal" },
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

export default function ArchitectureSection() {
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
              items: ["Exploratory testing", "Smoke testing", "Sanity verification", "UI validation"],
            },
            {
              title: "Playwright UI Automation",
              items: ["Authentication", "Navigation", "Tasks", "Requests", "Articles", "Contacts", "Responsive testing"],
            },
            {
              title: "Playwright API Automation",
              items: ["Health", "Authentication", "Tasks", "Requests", "Articles", "Contacts"],
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

      <SourceDocumentCard
        title="Source Documentation"
        description="The complete architecture description is available as a dedicated project document and will be linked here after document integration is completed."
      />
    </Stack>
  );
}
