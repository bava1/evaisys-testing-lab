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

const futureDevelopmentCards = [
  {
    title: "Documentation Expansion",
    items: ["Complete documentation integration", "Architecture materials", "Test artifacts", "Versioned documents"],
  },
  {
    title: "Testing Lab Improvements",
    items: ["Individual test execution", "Test filtering", "Tag-based grouping", "Execution history"],
  },
  {
    title: "Reporting & Analytics",
    items: ["Coverage statistics", "Execution trends", "Failure tracking", "Quality metrics"],
  },
  {
    title: "Platform Growth",
    items: ["Additional modules", "Expanded API coverage", "Security scenarios", "Performance examples"],
  },
];
const aiQaRoadmapItems = [
  {
    title: "AI Test Strategy Generation",
    items: ["Generate testing approaches", "Suggest coverage improvements", "Identify testing risks", "Recommend validation priorities"],
  },
  {
    title: "AI Test Case Creation",
    items: ["Generate test cases from requirements", "Create checklists", "Produce validation scenarios", "Support exploratory testing"],
  },
  {
    title: "AI Result Analysis",
    items: ["Analyze failures", "Detect suspicious patterns", "Recommend corrective actions", "Support root-cause investigation"],
  },
];
const cicdCapabilities = [
  "Scheduled regression execution",
  "Pipeline validation",
  "Quality gates",
  "Automated reporting",
  "Release verification workflows",
];

export default function FutureDevelopmentSection() {
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

      <SourceDocumentCard
        title="Future Development Document"
        description="A detailed roadmap document will be attached here after document integration is completed."
      />
    </Stack>
  );
}
