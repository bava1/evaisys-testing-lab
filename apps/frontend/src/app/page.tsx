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
      description="EVAISYS Testing Lab is a controlled testing application for practical frontend, backend, and automation workflows."
      testId="home"
    >
      <HomeDashboard />
    </PageContainer>
  );
}
