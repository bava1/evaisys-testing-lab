import type { Metadata } from "next";
import PageContainer from "@/components/page-container";
import ContactsFeedback from "@/components/contacts-feedback";

export const metadata: Metadata = {
  title: "Contact | EVAISYS Testing Lab",
  description: "Contacts and feedback page for search, form validation, and submission workflow testing.",
};

export default function ContactPage() {
  return (
    <PageContainer
      title="Contact"
      description="Review contact cards and submit feedback to validate input rules and error handling."
      testId="contact"
    >
      <ContactsFeedback />
    </PageContainer>
  );
}
