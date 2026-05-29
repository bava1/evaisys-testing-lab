import type { Metadata } from "next";
import PageContainer from "@/components/page-container";
import LoginForm from "@/components/login-form";

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
      <LoginForm />
    </PageContainer>
  );
}
