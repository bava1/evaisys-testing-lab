import type { Metadata } from "next";
import PageContainer from "@/components/page-container";
import DocumentationPortal from "@/components/documentation-portal";

export const metadata: Metadata = {
  title: "Documentation | EVAISYS Testing Lab",
  description: "Documentation portal placeholder for project QA and testing materials.",
};

export default function DocumentationPage() {
  return (
    <PageContainer
      title="Documentation Portal"
      description="Project documentation, test strategy, test coverage and QA materials will be displayed here."
      testId="documentation"
    >
      <DocumentationPortal />
    </PageContainer>
  );
}
