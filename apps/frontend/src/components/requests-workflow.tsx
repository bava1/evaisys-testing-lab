"use client";

import { useMemo, useState } from "react";
import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

type RequestStatus = "new" | "in-progress" | "resolved" | "rejected";
type RequestPriority = "low" | "medium" | "high";
type StatusFilter = "all" | RequestStatus;
type PriorityFilter = "all" | RequestPriority;

type DemoRequest = {
  id: number;
  title: string;
  requester: string;
  description: string;
  status: RequestStatus;
  priority: RequestPriority;
  createdAt: string;
};

const demoRequests: DemoRequest[] = [
  {
    id: 1,
    title: "Login issue on mobile",
    requester: "QA Team",
    description: "Users report inconsistent login behavior on narrow viewport devices.",
    status: "new",
    priority: "high",
    createdAt: "2026-05-25",
  },
  {
    id: 2,
    title: "Incorrect task status",
    requester: "Automation Engineer",
    description: "Task card status chip does not match expected result in one regression scenario.",
    status: "in-progress",
    priority: "medium",
    createdAt: "2026-05-24",
  },
  {
    id: 3,
    title: "Missing article category",
    requester: "Content Reviewer",
    description: "Articles page should display category tags in the content workflow.",
    status: "resolved",
    priority: "low",
    createdAt: "2026-05-22",
  },
  {
    id: 4,
    title: "Contact form validation request",
    requester: "Frontend Lead",
    description: "Need a validation matrix draft for required and optional contact form fields.",
    status: "rejected",
    priority: "medium",
    createdAt: "2026-05-21",
  },
  {
    id: 5,
    title: "Search filter does not reset",
    requester: "QA Engineer",
    description: "Search filters remain applied after navigating back from another section.",
    status: "new",
    priority: "medium",
    createdAt: "2026-05-23",
  },
  {
    id: 6,
    title: "Article category mismatch",
    requester: "Content Manager",
    description:
      "Some knowledge base articles appear under an unexpected category during filtering.",
    status: "in-progress",
    priority: "low",
    createdAt: "2026-05-22",
  },
  {
    id: 7,
    title: "Feedback form success state issue",
    requester: "Product Owner",
    description: "Success notification remains visible after a new invalid feedback attempt.",
    status: "new",
    priority: "medium",
    createdAt: "2026-05-21",
  },
  {
    id: 8,
    title: "Request details show outdated status",
    requester: "Test Automation Engineer",
    description:
      "Details dialog may display a previous workflow status after the request is updated.",
    status: "resolved",
    priority: "high",
    createdAt: "2026-05-20",
  },
  {
    id: 9,
    title: "Contact search case sensitivity",
    requester: "UX Reviewer",
    description:
      "Contact search behaves differently when role names are entered with lowercase letters.",
    status: "rejected",
    priority: "low",
    createdAt: "2026-05-19",
  },
];

function getStatusLabel(status: RequestStatus): string {
  if (status === "in-progress") {
    return "In Progress";
  }

  return status.charAt(0).toUpperCase() + status.slice(1);
}

function getPriorityLabel(priority: RequestPriority): string {
  return priority.charAt(0).toUpperCase() + priority.slice(1);
}

export default function RequestsWorkflow() {
  const [requests, setRequests] = useState<DemoRequest[]>(demoRequests);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>("all");
  const [selectedRequest, setSelectedRequest] = useState<DemoRequest | null>(null);

  const filteredRequests = useMemo(() => {
    return requests.filter((request) => {
      const statusMatches = statusFilter === "all" || request.status === statusFilter;
      const priorityMatches = priorityFilter === "all" || request.priority === priorityFilter;

      return statusMatches && priorityMatches;
    });
  }, [priorityFilter, requests, statusFilter]);

  const handleStatusUpdate = (requestId: number, nextStatus: RequestStatus) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === requestId
          ? {
              ...request,
              status: nextStatus,
            }
          : request
      )
    );
  };

  return (
    <Stack spacing={3} data-testid="requests-workflow">
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <TextField
          select
          label="Status"
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value as StatusFilter)}
          inputProps={{ "data-testid": "requests-status-filter" }}
          size="small"
          sx={{ minWidth: 220 }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="new">New</MenuItem>
          <MenuItem value="in-progress">In Progress</MenuItem>
          <MenuItem value="resolved">Resolved</MenuItem>
          <MenuItem value="rejected">Rejected</MenuItem>
        </TextField>

        <TextField
          select
          label="Priority"
          value={priorityFilter}
          onChange={(event) => setPriorityFilter(event.target.value as PriorityFilter)}
          inputProps={{ "data-testid": "requests-priority-filter" }}
          size="small"
          sx={{ minWidth: 220 }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </TextField>
      </Stack>

      {filteredRequests.length === 0 ? (
        <Typography variant="body2" color="text.secondary" data-testid="requests-empty-state">
          No requests found for selected filters.
        </Typography>
      ) : (
        <Stack spacing={2}>
          {filteredRequests.map((request) => (
            <Paper key={request.id} variant="outlined" sx={{ p: 2 }} data-testid={`request-card-${request.id}`}>
              <Stack spacing={1.5}>
                <Typography variant="h6" data-testid={`request-title-${request.id}`}>
                  {request.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Requester: {request.requester}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {request.description}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  Created At: {request.createdAt}
                </Typography>

                <Stack direction="row" spacing={1}>
                  <Chip
                    label={`Status: ${getStatusLabel(request.status)}`}
                    size="small"
                    color={
                      request.status === "resolved"
                        ? "success"
                        : request.status === "rejected"
                          ? "error"
                          : request.status === "in-progress"
                            ? "warning"
                            : "default"
                    }
                    data-testid={`request-status-${request.id}`}
                  />
                  <Chip
                    label={`Priority: ${getPriorityLabel(request.priority)}`}
                    size="small"
                    color={
                      request.priority === "high"
                        ? "error"
                        : request.priority === "medium"
                          ? "warning"
                          : "default"
                    }
                    data-testid={`request-priority-${request.id}`}
                  />
                </Stack>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems={{ sm: "center" }}>
                  <Button
                    variant="outlined"
                    onClick={() => setSelectedRequest(request)}
                    data-testid={`request-details-${request.id}`}
                  >
                    Details
                  </Button>

                  <Select
                    size="small"
                    value={request.status}
                    onChange={(event) =>
                      handleStatusUpdate(request.id, event.target.value as RequestStatus)
                    }
                    data-testid={`request-status-select-${request.id}`}
                    sx={{ minWidth: 180 }}
                  >
                    <MenuItem value="new">New</MenuItem>
                    <MenuItem value="in-progress">In Progress</MenuItem>
                    <MenuItem value="resolved">Resolved</MenuItem>
                    <MenuItem value="rejected">Rejected</MenuItem>
                  </Select>
                </Stack>
              </Stack>
            </Paper>
          ))}
        </Stack>
      )}

      <Dialog
        open={selectedRequest !== null}
        onClose={() => setSelectedRequest(null)}
        fullWidth
        maxWidth="sm"
        data-testid="request-details-dialog"
      >
        <DialogTitle data-testid="request-details-title">
          {selectedRequest ? selectedRequest.title : "Request Details"}
        </DialogTitle>
        <DialogContent dividers>
          {selectedRequest ? (
            <Stack spacing={1.5}>
              <Typography variant="body2">Requester: {selectedRequest.requester}</Typography>
              <Typography variant="body2">Description: {selectedRequest.description}</Typography>
              <Typography variant="body2">Status: {getStatusLabel(selectedRequest.status)}</Typography>
              <Typography variant="body2">Priority: {getPriorityLabel(selectedRequest.priority)}</Typography>
              <Typography variant="body2">Created At: {selectedRequest.createdAt}</Typography>
            </Stack>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedRequest(null)} data-testid="request-details-close">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
