import type { Metadata } from "next";
import PageContainer from "@/components/page-container";
import RequestsWorkflow from "@/components/requests-workflow";

export const metadata: Metadata = {
  title: "Requests | EVAISYS Testing Lab",
  description: "Placeholder page for the future request management workflow.",
};

export default function RequestsPage() {
  return (
    <PageContainer
      title="Requests"
      description="Demo request workflow and status zone for UI and E2E testing scenarios."
      testId="requests"
    >
      <RequestsWorkflow />
    </PageContainer>
  );
}
