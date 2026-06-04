"use client";

import { useMemo, useState } from "react";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

type DemoContact = {
  id: number;
  name: string;
  role: string;
  email: string;
  description: string;
  avatar: string;
  photo: string;
};

type FeedbackFormState = {
  name: string;
  email: string;
  message: string;
};

const demoContacts: DemoContact[] = [
  {
    id: 1,
    name: "Milan Horak",
    role: "Test Automation Engineer",
    email: "milan.horak@evaisys.demo",
    description: "Designs automation flows and stabilizes test suites.",
    avatar: "MH",
    photo: "/imgContact/img1.jpg",
  },
  {
    id: 2,
    name: "Anna Novak",
    role: "QA Engineer",
    email: "anna.novak@evaisys.demo",
    description: "Coordinates manual validation scenarios and exploratory checks.",
    avatar: "AN",
    photo: "/imgContact/img2.jpg",
  },
  {
    id: 3,
    name: "Elena Petrov",
    role: "Frontend Developer",
    email: "elena.petrov@evaisys.demo",
    description: "Implements UI workflows and test-friendly component structure.",
    avatar: "EP",
    photo: "/imgContact/img3.jpg",
  },
  {
    id: 4,
    name: "Jakub Sramek",
    role: "Backend Developer",
    email: "jakub.sramek@evaisys.demo",
    description: "Builds API endpoints and backend integration contracts.",
    avatar: "JS",
    photo: "/imgContact/img4.jpg",
  },
  {
    id: 5,
    name: "Lucie Kralova",
    role: "Business Analyst",
    email: "lucie.kralova@evaisys.demo",
    description: "Translates business requirements into testable functional specifications.",
    avatar: "LK",
    photo: "/imgContact/img5.jpg",
  },
  {
    id: 6,
    name: "Maria Ivanova",
    role: "UX Designer",
    email: "maria.ivanova@evaisys.demo",
    description: "Designs user journeys and improves accessibility across application workflows.",
    avatar: "MI",
    photo: "/imgContact/img6.jpg",
  },
  {
    id: 7,
    name: "Tereza Benesova",
    role: "Release Manager",
    email: "tereza.benesova@evaisys.demo",
    description: "Coordinates releases, deployment readiness, and quality gates.",
    avatar: "TB",
    photo: "/imgContact/img7.jpg",
  },
  {
    id: 8,
    name: "Sofia Malik",
    role: "Product Owner",
    email: "sofia.malik@evaisys.demo",
    description: "Aligns product priorities with testing and quality goals.",
    avatar: "SM",
    photo: "/imgContact/img8.jpg",
  },
  {
    id: 9,
    name: "Petr Vacek",
    role: "AI Specialist",
    email: "petr.vacek@evaisys.demo",
    description: "Supports AI-assisted workflow design and scenario generation.",
    avatar: "PV",
    photo: "/imgContact/img9.jpg",
  },
  {
    id: 10,
    name: "David Richter",
    role: "DevOps Engineer",
    email: "david.richter@evaisys.demo",
    description: "Maintains CI/CD pipelines and testing infrastructure reliability.",
    avatar: "DR",
    photo: "/imgContact/img10.jpg",
  },
];

const defaultFormState: FeedbackFormState = {
  name: "",
  email: "",
  message: "",
};

function validateFeedbackForm(form: FeedbackFormState): string | null {
  const trimmedName = form.name.trim();
  const trimmedEmail = form.email.trim();
  const trimmedMessage = form.message.trim();

  if (!trimmedName) {
    return "Name is required.";
  }

  if (!trimmedEmail) {
    return "Email is required.";
  }

  if (!trimmedMessage) {
    return "Message is required.";
  }

  if (trimmedMessage.length < 10) {
    return "Message must be at least 10 characters.";
  }

  if (trimmedMessage.length > 1000) {
    return "Message must be at most 1000 characters.";
  }

  return null;
}

export default function ContactsFeedback() {
  const [searchQuery, setSearchQuery] = useState("");
  const [feedbackForm, setFeedbackForm] = useState<FeedbackFormState>(defaultFormState);
  const [validationError, setValidationError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const filteredContacts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return demoContacts;
    }

    return demoContacts.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(normalizedQuery) ||
        contact.role.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [searchQuery]);

  const handleFeedbackSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidationError("");
    setSuccessMessage("");

    const error = validateFeedbackForm(feedbackForm);
    const isEmptySubmit =
      feedbackForm.name.trim().length === 0 &&
      feedbackForm.email.trim().length === 0 &&
      feedbackForm.message.trim().length === 0;

    if (error) {
      if (isEmptySubmit) {
        return;
      }

      setValidationError(error);
      return;
    }

    setSuccessMessage("Feedback submitted successfully.");
    setFeedbackForm(defaultFormState);
  };

  return (
    <Stack spacing={4} data-testid="contacts-section">
      <Stack spacing={2}>
        <TextField
          label="Search contacts"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          inputProps={{ "data-testid": "contacts-search-input" }}
          fullWidth
        />

        {filteredContacts.length === 0 ? (
          <Typography variant="body2" color="text.secondary" data-testid="contacts-empty-state">
            No contacts found for current search.
          </Typography>
        ) : (
          <Stack spacing={2} data-testid="contacts-list">
            {filteredContacts.map((contact) => (
              <Paper key={contact.id} variant="outlined" sx={{ p: 2 }} data-testid="contact-card">
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Avatar
                    src={contact.photo}
                    data-testid={`contact-avatar-${contact.id}`}
                    sx={{ width: 60, height: 60 }}
                  >
                    {contact.avatar}
                  </Avatar>
                  <Stack spacing={0.5}>
                    <Typography variant="h6" data-testid="contact-name">
                      {contact.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" data-testid="contact-role">
                      {contact.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" data-testid="contact-email">
                      {contact.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {contact.description}
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            ))}
          </Stack>
        )}
      </Stack>

      <Paper variant="outlined" sx={{ p: 2 }}>
        <Box component="form" onSubmit={handleFeedbackSubmit} data-testid="feedback-form-container">
          <Stack spacing={2}>
            <Typography variant="h6">Feedback</Typography>
            <TextField
              label="Name"
              value={feedbackForm.name}
              onChange={(event) =>
                setFeedbackForm((prev) => ({
                  ...prev,
                  name: event.target.value,
                }))
              }
              inputProps={{ "data-testid": "feedback-name-input" }}
              fullWidth
            />
            <TextField
              label="Email"
              value={feedbackForm.email}
              onChange={(event) =>
                setFeedbackForm((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
              inputProps={{ "data-testid": "feedback-email-input" }}
              fullWidth
            />
            <TextField
              label="Message"
              value={feedbackForm.message}
              onChange={(event) =>
                setFeedbackForm((prev) => ({
                  ...prev,
                  message: event.target.value,
                }))
              }
              inputProps={{ "data-testid": "feedback-message-input" }}
              multiline
              minRows={4}
              fullWidth
            />
            {validationError ? (
              <Alert severity="error" data-testid="feedback-validation-error">
                {validationError}
              </Alert>
            ) : null}
            {successMessage ? (
              <Alert severity="success" data-testid="feedback-success-message">
                {successMessage}
              </Alert>
            ) : null}
            <Button type="submit" variant="contained" data-testid="feedback-submit-button">
              Send Feedback
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  );
}
