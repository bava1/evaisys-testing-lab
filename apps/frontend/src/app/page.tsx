import type { Metadata } from "next";
import { Typography } from "@mui/material";
import PageContainer from "@/components/page-container";

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
      <Typography variant="body2" color="text.secondary">
        This page is prepared for future dashboard-style overview content.
      </Typography>
    </PageContainer>
  );
}
