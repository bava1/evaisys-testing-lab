"use client";

import { useMemo, useState } from "react";
import { Box, Chip, Paper, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

type TaskStatus = "active" | "completed";
type TaskPriority = "low" | "medium" | "high";
type TaskFilter = "all" | "active" | "completed";

type DemoTask = {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
};

const demoTasks: DemoTask[] = [
  {
    id: 1,
    title: "Prepare test strategy",
    description: "Draft baseline UI and API testing scope for current sprint goals.",
    status: "active",
    priority: "high",
  },
  {
    id: 2,
    title: "Review login flow",
    description: "Validate demo authentication behavior and expected route transitions.",
    status: "completed",
    priority: "medium",
  },
  {
    id: 3,
    title: "Create Playwright smoke checklist",
    description: "Define the minimum smoke coverage for key pages and navigation.",
    status: "active",
    priority: "low",
  },
];

export default function TasksList() {
  const [filter, setFilter] = useState<TaskFilter>("all");

  const filteredTasks = useMemo(() => {
    if (filter === "all") {
      return demoTasks;
    }

    return demoTasks.filter((task) => task.status === filter);
  }, [filter]);

  return (
    <Stack spacing={3} data-testid="tasks-list">
      <Box>
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={(_, nextFilter: TaskFilter | null) => {
            if (nextFilter) {
              setFilter(nextFilter);
            }
          }}
          aria-label="tasks filter"
          size="small"
        >
          <ToggleButton value="all" data-testid="tasks-filter-all">
            All
          </ToggleButton>
          <ToggleButton value="active" data-testid="tasks-filter-active">
            Active
          </ToggleButton>
          <ToggleButton value="completed" data-testid="tasks-filter-completed">
            Completed
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {filteredTasks.length === 0 ? (
        <Typography variant="body2" color="text.secondary" data-testid="tasks-empty-state">
          No tasks found for selected filter.
        </Typography>
      ) : (
        <Stack spacing={2}>
          {filteredTasks.map((task) => (
            <Paper key={task.id} variant="outlined" sx={{ p: 2 }} data-testid={`task-card-${task.id}`}>
              <Stack spacing={1}>
                <Typography variant="h6" data-testid={`task-title-${task.id}`}>
                  {task.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {task.description}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Chip
                    label={`Status: ${task.status}`}
                    size="small"
                    color={task.status === "completed" ? "success" : "default"}
                    data-testid={`task-status-${task.id}`}
                  />
                  <Chip
                    label={`Priority: ${task.priority}`}
                    size="small"
                    color={
                      task.priority === "high"
                        ? "error"
                        : task.priority === "medium"
                          ? "warning"
                          : "default"
                    }
                    data-testid={`task-priority-${task.id}`}
                  />
                </Stack>
              </Stack>
            </Paper>
          ))}
        </Stack>
      )}
    </Stack>
  );
}
