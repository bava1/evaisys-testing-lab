"use client";

import { FormEvent, useState } from "react";
import { Alert, Box, Button, Stack, TextField } from "@mui/material";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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

    setSuccessMessage("Demo login form validated.");
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
        <Button type="submit" variant="contained" data-testid="login-submit-button">
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
