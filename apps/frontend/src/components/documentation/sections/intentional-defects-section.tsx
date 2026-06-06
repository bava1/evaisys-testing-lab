import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import DocumentViewerDialog from "../common/document-viewer-dialog";
import SourceDocumentCard from "../common/source-document-card";
import { intentionalDefectsPlanDocument } from "../content/documents/intentional-defects-plan";

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

export default function IntentionalDefectsSection() {
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);

  return (
    <>
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
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Paper>

        <SourceDocumentCard
          title="Source Documentation"
          subtitle={intentionalDefectsPlanDocument.title}
          description="Translated content from the original Word source document is available in the portal and can be reviewed or downloaded from the modal viewer."
          testId="intentional-defects-source-documentation"
        />

        <Button
          variant="outlined"
          onClick={() => setIsDocumentOpen(true)}
          sx={{ alignSelf: "flex-start" }}
          data-testid="intentional-defects-view-full-document"
        >
          View Full Document
        </Button>
      </Stack>

      <DocumentViewerDialog
        document={intentionalDefectsPlanDocument}
        open={isDocumentOpen}
        testId="intentional-defects-document-viewer-dialog"
        onClose={() => setIsDocumentOpen(false)}
      />
    </>
  );
}
