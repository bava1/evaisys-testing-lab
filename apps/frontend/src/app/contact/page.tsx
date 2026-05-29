import type { Metadata } from "next";
import PageContainer from "@/components/page-container";
import ContactsFeedback from "@/components/contacts-feedback";

export const metadata: Metadata = {
  title: "Contact | EVAISYS Testing Lab",
  description: "Placeholder page for the future contact form workflow.",
};

export default function ContactPage() {
  return (
    <PageContainer
      title="Contact"
      description="Demo contacts and feedback section for UI and E2E testing scenarios."
      testId="contact"
    >
      <ContactsFeedback />
    </PageContainer>
  );
}
