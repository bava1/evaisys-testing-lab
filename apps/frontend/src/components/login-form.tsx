"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import { ApiClientError } from "@/api/api-client";
import { useAuth } from "@/components/auth-context";

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!username.trim()) {
      setErrorMessage("Username is required.");
      return;
    }

    if (!password.trim()) {
      setErrorMessage("Password is required.");
      return;
    }

    setIsSubmitting(true);

    try {
      await login(username.trim(), password);
      setSuccessMessage("Demo login form validated.");
      router.push("/");
    } catch (error) {
      if (error instanceof ApiClientError && error.status === 401) {
        const backendMessage =
          typeof error.body === "object" &&
          error.body !== null &&
          "detail" in error.body &&
          typeof (error.body as { detail?: unknown }).detail === "string"
            ? (error.body as { detail: string }).detail
            : "";

        setErrorMessage(backendMessage || "Invalid username or password.");
        return;
      }

      setErrorMessage("Unable to sign in. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} data-testid="login-form" noValidate>
      <Stack spacing={2}>
        <TextField
          label="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          inputProps={{ "data-testid": "login-username-input" }}
          required
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          inputProps={{ "data-testid": "login-password-input" }}
          required
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          data-testid="login-submit-button"
          disabled={isSubmitting}
        >
          Sign In
        </Button>

        {errorMessage ? (
          <Alert severity="error" data-testid="login-error-message">
            {errorMessage}
          </Alert>
        ) : null}

        {successMessage ? (
          <Alert severity="success" data-testid="login-success-message">
            {successMessage}
          </Alert>
        ) : null}
      </Stack>
    </Box>
  );
}
