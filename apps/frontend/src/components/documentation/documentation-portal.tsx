"use client";

import { useState } from "react";
import { Box, Divider, List, ListItemButton, ListItemText, Paper, Stack, Typography } from "@mui/material";
import DiagramViewer from "./common/diagram-viewer";
import AiWorkflowSection from "./sections/ai-workflow-section";
import ApiTestingPlanSection from "./sections/api-testing-plan-section";
import ArchitectureSection from "./sections/architecture-section";
import ChecklistsSection from "./sections/checklists-section";
import FutureDevelopmentSection from "./sections/future-development-section";
import IntentionalDefectsSection from "./sections/intentional-defects-section";
import OverviewSection from "./sections/overview-section";
import PlaywrightAutomationPlanSection from "./sections/playwright-automation-plan-section";
import TestCasesSection from "./sections/test-cases-section";
import TestCoverageSection from "./sections/test-coverage-section";
import TestStrategySection from "./sections/test-strategy-section";
import TestingPlatformSection from "./sections/testing-platform-section";

type DocumentationSectionId =
  | "overview"
  | "testing-platform"
  | "test-strategy"
  | "test-coverage"
  | "test-cases"
  | "checklists"
  | "api-testing-plan"
  | "playwright-automation-plan"
  | "intentional-defects"
  | "architecture"
  | "ai-assisted-qa-workflow"
  | "future-development";

type DocumentationSection = {
  id: DocumentationSectionId;
  title: string;
};

type DiagramId = "test-strategy" | "test-coverage" | null;

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

const defaultSectionId: DocumentationSectionId = "overview";

export default function DocumentationPortal() {
  const [selectedSectionId, setSelectedSectionId] = useState<DocumentationSectionId>(defaultSectionId);
  const [activeDiagramId, setActiveDiagramId] = useState<DiagramId>(null);

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

  const sectionContent =
    selectedSection.id === "overview" ? (
      <OverviewSection />
    ) : selectedSection.id === "testing-platform" ? (
      <TestingPlatformSection />
    ) : selectedSection.id === "test-strategy" ? (
      <TestStrategySection onOpenDiagram={() => setActiveDiagramId("test-strategy")} />
    ) : selectedSection.id === "test-coverage" ? (
      <TestCoverageSection onOpenDiagram={() => setActiveDiagramId("test-coverage")} />
    ) : selectedSection.id === "test-cases" ? (
      <TestCasesSection />
    ) : selectedSection.id === "checklists" ? (
      <ChecklistsSection />
    ) : selectedSection.id === "api-testing-plan" ? (
      <ApiTestingPlanSection />
    ) : selectedSection.id === "playwright-automation-plan" ? (
      <PlaywrightAutomationPlanSection />
    ) : selectedSection.id === "intentional-defects" ? (
      <IntentionalDefectsSection />
    ) : selectedSection.id === "architecture" ? (
      <ArchitectureSection />
    ) : selectedSection.id === "ai-assisted-qa-workflow" ? (
      <AiWorkflowSection />
    ) : selectedSection.id === "future-development" ? (
      <FutureDevelopmentSection />
    ) : (
      <AiWorkflowSection />
    );

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
          <Typography variant="h6">Documentation</Typography>

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
        {sectionContent}
      </Paper>

      {activeDiagram ? (
        <DiagramViewer
          alt={activeDiagram.alt}
          caption={activeDiagram.caption}
          open={activeDiagram !== null}
          src={activeDiagram.src}
          testId={activeDiagram.testId}
          title={activeDiagram.title}
          onClose={() => setActiveDiagramId(null)}
        />
      ) : null}
    </Box>
  );
}
