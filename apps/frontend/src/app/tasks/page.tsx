import type { Metadata } from "next";
import PageContainer from "@/components/page-container";
import TasksList from "@/components/tasks-list";

export const metadata: Metadata = {
  title: "Tasks | EVAISYS Testing Lab",
  description: "Task management page for CRUD flows, form validation, and status tracking scenarios.",
};

export default function TasksPage() {
  return (
    <PageContainer
      title="Tasks"
      description="Manage demo tasks with create, edit, delete, and completion workflows."
      testId="tasks"
    >
      <TasksList />
    </PageContainer>
  );
}
