import type { Metadata } from "next";
import PageContainer from "@/components/page-container";
import ArticlesSection from "@/components/articles-section";

export const metadata: Metadata = {
  title: "Articles | EVAISYS Testing Lab",
  description: "Placeholder page for the future knowledge and articles section.",
};

export default function ArticlesPage() {
  return (
    <PageContainer
      title="Articles"
      description="Demo articles search and filter section for UI and E2E testing scenarios."
      testId="articles"
    >
      <ArticlesSection />
    </PageContainer>
  );
}
