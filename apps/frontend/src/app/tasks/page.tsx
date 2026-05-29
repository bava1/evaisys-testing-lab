import type { Metadata } from "next";
import PageContainer from "@/components/page-container";
import TasksList from "@/components/tasks-list";

export const metadata: Metadata = {
  title: "Tasks | EVAISYS Testing Lab",
  description: "Placeholder page for the future task CRUD workflow.",
};

export default function TasksPage() {
  return (
    <PageContainer
      title="Tasks"
      description="Demo task list foundation for the upcoming task CRUD workflow."
      testId="tasks"
    >
      <TasksList />
    </PageContainer>
  );
}
