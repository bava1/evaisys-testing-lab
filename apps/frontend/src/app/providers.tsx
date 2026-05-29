"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "@/theme/theme";
import { AuthProvider } from "@/components/auth-context";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
}
