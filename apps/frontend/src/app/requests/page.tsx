import type { Metadata } from "next";
import PageContainer from "@/components/page-container";
import RequestsWorkflow from "@/components/requests-workflow";

export const metadata: Metadata = {
  title: "Requests | EVAISYS Testing Lab",
  description: "Service request workflow page for status transitions, filtering, and QA scenario checks.",
};

export default function RequestsPage() {
  return (
    <PageContainer
      title="Requests"
      description="Track and update demo requests across workflow statuses for UI and E2E testing."
      testId="requests"
    >
      <RequestsWorkflow />
    </PageContainer>
  );
}
