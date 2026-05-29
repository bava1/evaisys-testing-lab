import type { Metadata } from "next";
import { Typography } from "@mui/material";
import PageContainer from "@/components/page-container";

export const metadata: Metadata = {
  title: "Tasks | EVAISYS Testing Lab",
  description: "Placeholder page for the future task CRUD workflow.",
};

export default function TasksPage() {
  return (
    <PageContainer
      title="Tasks"
      description="Placeholder section for the future task CRUD workflow."
      testId="tasks"
    >
      <Typography variant="body2" color="text.secondary">
        Task listing, create, update, and delete interactions will be added later.
      </Typography>
    </PageContainer>
  );
}
