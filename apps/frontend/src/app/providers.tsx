"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "@/theme/theme";
import { AuthProvider } from "@/components/auth-context";
import ProtectedRoute from "@/components/protected-route";
import AppLayoutGate from "@/components/app-layout-gate";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <ProtectedRoute>
          <AppLayoutGate>{children}</AppLayoutGate>
        </ProtectedRoute>
      </ThemeProvider>
    </AuthProvider>
  );
}
