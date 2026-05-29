import type { Metadata } from "next";
import { Typography } from "@mui/material";
import PageContainer from "@/components/page-container";

export const metadata: Metadata = {
  title: "Requests | EVAISYS Testing Lab",
  description: "Placeholder page for the future request management workflow.",
};

export default function RequestsPage() {
  return (
    <PageContainer
      title="Requests"
      description="Placeholder section for the future request management workflow."
      testId="requests"
    >
      <Typography variant="body2" color="text.secondary">
        Request queue, status transitions, and operational actions will be added later.
      </Typography>
    </PageContainer>
  );
}
