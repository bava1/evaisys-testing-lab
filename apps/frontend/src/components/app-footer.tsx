import { Box, Container, Typography } from "@mui/material";

export default function AppFooter() {
  return (
    <Box component="footer" sx={{ py: 2, borderTop: "1px solid #e0e0e0", mt: "auto" }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary">
          Footer placeholder
        </Typography>
      </Container>
    </Box>
  );
}
