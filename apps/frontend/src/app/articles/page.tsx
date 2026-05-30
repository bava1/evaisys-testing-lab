import type { Metadata } from "next";
import PageContainer from "@/components/page-container";
import ArticlesSection from "@/components/articles-section";

export const metadata: Metadata = {
  title: "Articles | EVAISYS Testing Lab",
  description: "Articles page for search, filtering, and content exploration testing scenarios.",
};

export default function ArticlesPage() {
  return (
    <PageContainer
      title="Articles"
      description="Explore demo articles with keyword and category filters for search behavior validation."
      testId="articles"
    >
      <ArticlesSection />
    </PageContainer>
  );
}
