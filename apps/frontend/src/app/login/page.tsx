import type { Metadata } from "next";
import { Typography } from "@mui/material";
import PageContainer from "@/components/page-container";

export const metadata: Metadata = {
  title: "Login | EVAISYS Testing Lab",
  description: "Placeholder page for the future demo login workflow.",
};

export default function LoginPage() {
  return (
    <PageContainer
      title="Login"
      description="Placeholder section for the future demo login flow."
      testId="login"
    >
      <Typography variant="body2" color="text.secondary">
        Authentication UI and validation steps will be implemented in a later phase.
      </Typography>
    </PageContainer>
  );
}
