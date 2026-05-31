import { Box, Container } from "@mui/material";
import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <Box data-testid="app-shell" sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <AppHeader />
      <Container maxWidth="lg" sx={{ flex: 1, pt: { xs: 11, md: 12 }, pb: 3 }}>
        <Box component="main" data-testid="main-content">
          {children}
        </Box>
      </Container>
      <AppFooter />
    </Box>
  );
}
