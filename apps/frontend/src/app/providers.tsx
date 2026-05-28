"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "@/theme/theme";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
