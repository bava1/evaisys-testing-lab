import type { Metadata } from "next";
import PageContainer from "@/components/page-container";
import HomeDashboard from "@/components/home-dashboard";

export const metadata: Metadata = {
  title: "Home | EVAISYS Testing Lab",
  description: "Overview page for the EVAISYS controlled testing application.",
};

export default function HomePage() {
  return (
    <PageContainer
      title="Home"
      description=""
      testId="home"
    >
      <HomeDashboard />
    </PageContainer>
  );
}
