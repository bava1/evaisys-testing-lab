"use client";

import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Chip,
  IconButton,
  MenuItem,
  Paper,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

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

type TaskFormState = {
  title: string;
  description: string;
  priority: TaskPriority;
};

const defaultTaskFormState: TaskFormState = {
  title: "",
  description: "",
  priority: "medium",
};

function validateTaskForm(form: TaskFormState): string | null {
  const trimmedTitle = form.title.trim();
  const trimmedDescription = form.description.trim();

  if (!trimmedTitle) {
    return "Title is required.";
  }

  if (trimmedTitle.length < 3) {
    return "Title must be at least 3 characters.";
  }

  if (trimmedTitle.length > 100) {
    return "Title must be at most 100 characters.";
  }

  if (trimmedDescription.length > 500) {
    return "Description must be at most 500 characters.";
  }

  return null;
}

export default function TasksList() {
  const [tasks, setTasks] = useState<DemoTask[]>(demoTasks);
  const [filter, setFilter] = useState<TaskFilter>("all");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [form, setForm] = useState<TaskFormState>(defaultTaskFormState);
  const [validationError, setValidationError] = useState("");

  const isEditMode = editingTaskId !== null;

  const filteredTasks = useMemo(() => {
    if (filter === "all") {
      return tasks;
    }

    if (filter === "completed") {
      return tasks.filter((task) => task.status === "active");
    }

    return tasks.filter((task) => task.status === filter);
  }, [filter, tasks]);

  const resetForm = () => {
    setForm(defaultTaskFormState);
    setEditingTaskId(null);
    setValidationError("");
  };

  const handleCreateStart = () => {
    resetForm();
    setIsFormVisible(true);
  };

  const handleEditStart = (task: DemoTask) => {
    setForm({
      title: task.title,
      description: task.description,
      priority: task.priority,
    });
    setEditingTaskId(task.id);
    setValidationError("");
    setIsFormVisible(true);
  };

  const handleSaveTask = () => {
    const error = validateTaskForm(form);

    if (error) {
      setValidationError(error);
      return;
    }

    const trimmedTitle = form.title.trim();
    const trimmedDescription = form.description.trim();

    if (isEditMode) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editingTaskId
            ? {
                ...task,
                title: trimmedTitle,
                description: trimmedDescription,
                priority: form.priority,
              }
            : task
        )
      );
    } else {
      const nextId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;

      setTasks((prevTasks) => [
        {
          id: nextId,
          title: trimmedTitle,
          description: trimmedDescription,
          priority: form.priority,
          status: "active",
        },
        ...prevTasks,
      ]);
    }

    resetForm();
    setIsFormVisible(false);
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));

    if (editingTaskId === taskId) {
      resetForm();
      setIsFormVisible(false);
    }
  };

  const handleToggleTaskStatus = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "active" ? "completed" : "active",
            }
          : task
      )
    );
  };

  return (
    <Stack spacing={3} data-testid="tasks-list">
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
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
        <Button variant="contained" onClick={handleCreateStart} data-testid="create-task-button">
          Add Task
        </Button>
      </Stack>

      {isFormVisible ? (
        <Paper variant="outlined" sx={{ p: 2 }} data-testid="task-form-container">
          <Stack spacing={2}>
            <TextField
              label="Title"
              value={form.title}
              onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
              inputProps={{ "data-testid": "task-title-input" }}
              fullWidth
            />
            <TextField
              label="Description"
              value={form.description}
              onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
              inputProps={{ "data-testid": "task-description-input" }}
              fullWidth
              multiline
              minRows={3}
            />
            <TextField
              select
              label="Priority"
              value={form.priority}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, priority: event.target.value as TaskPriority }))
              }
              inputProps={{ "data-testid": "task-priority-select" }}
              fullWidth
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </TextField>
            {validationError ? (
              <Typography variant="body2" color="error" data-testid="task-validation-error">
                {validationError}
              </Typography>
            ) : null}
            <Stack direction="row" spacing={1}>
              <Button variant="contained" onClick={handleSaveTask} data-testid="task-save-button">
                Save
              </Button>
              <Button
                variant="text"
                onClick={() => {
                  resetForm();
                  setIsFormVisible(false);
                }}
                data-testid="task-cancel-button"
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Paper>
      ) : null}

      {filteredTasks.length === 0 ? (
        <Typography variant="body2" color="text.secondary" data-testid="tasks-empty-state">
          No tasks found for selected filter.
        </Typography>
      ) : (
        <Stack spacing={2} data-testid="tasks-cards-list">
          {filteredTasks.map((task) => (
            <Paper key={task.id} variant="outlined" sx={{ p: 2 }} data-testid="task-card">
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
                <Stack spacing={1} sx={{ flex: 1 }}>
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
                <Stack direction="row" spacing={0.5}>
                  <IconButton
                    size="small"
                    color="primary"
                    aria-label="edit task"
                    onClick={() => handleEditStart(task)}
                    data-testid={`task-edit-${task.id}`}
                    sx={{ fontSize: "1.6rem" }}
                  >
                    ✎
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    aria-label="delete task"
                    onClick={() => handleDeleteTask(task.id)}
                    data-testid={`task-delete-${task.id}`}
                    sx={{ fontSize: "1.6rem" }}
                  >
                    🗑
                  </IconButton>
                  {task.status === "active" ? (
                    <IconButton
                      size="small"
                      color="success"
                      aria-label="complete task"
                      onClick={() => handleToggleTaskStatus(task.id)}
                      data-testid={`task-complete-${task.id}`}
                      sx={{ fontSize: "1.6rem" }}
                    >
                      ✓
                    </IconButton>
                  ) : (
                    <IconButton
                      size="small"
                      color="primary"
                      aria-label="reopen task"
                      onClick={() => handleToggleTaskStatus(task.id)}
                      data-testid={`task-reopen-${task.id}`}
                      sx={{ fontSize: "1.6rem" }}
                    >
                      ↺
                    </IconButton>
                  )}
                </Stack>
              </Stack>
            </Paper>
          ))}
        </Stack>
      )}
    </Stack>
  );
}
