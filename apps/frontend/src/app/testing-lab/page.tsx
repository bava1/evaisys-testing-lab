import type { Metadata } from "next";
import PageContainer from "@/components/page-container";
import TestingLabWorkspace from "@/components/testing-lab-workspace";

export const metadata: Metadata = {
  title: "Testing Lab | EVAISYS Testing Lab",
  description:
    "Interactive QA workspace for Playwright test suites, controlled defects and reports.",
};

export default function TestingLabPage() {
  return (
    <PageContainer
      title="Testing Lab"
      description="Interactive QA workspace for Playwright test suites, controlled defects and reports."
      testId="testing-lab"
    >
      <TestingLabWorkspace />
    </PageContainer>
  );
}
