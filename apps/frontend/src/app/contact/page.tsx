import type { Metadata } from "next";
import { Typography } from "@mui/material";
import PageContainer from "@/components/page-container";

export const metadata: Metadata = {
  title: "Contact | EVAISYS Testing Lab",
  description: "Placeholder page for the future contact form workflow.",
};

export default function ContactPage() {
  return (
    <PageContainer
      title="Contact"
      description="Placeholder section for the future contact form workflow."
      testId="contact"
    >
      <Typography variant="body2" color="text.secondary">
        Contact form fields, validation, and submission handling will be implemented in a later phase.
      </Typography>
    </PageContainer>
  );
}
