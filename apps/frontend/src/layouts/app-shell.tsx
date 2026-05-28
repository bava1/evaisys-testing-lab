import { Box, Container, Typography } from "@mui/material";
import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <AppHeader />
      <Container maxWidth="lg" sx={{ flex: 1, py: 3 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Navigation placeholder
        </Typography>
        <Box component="main">{children}</Box>
      </Container>
      <AppFooter />
    </Box>
  );
}
