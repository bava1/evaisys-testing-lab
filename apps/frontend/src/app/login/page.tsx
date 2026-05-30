import type { Metadata } from "next";
import PageContainer from "@/components/page-container";
import LoginForm from "@/components/login-form";

export const metadata: Metadata = {
  title: "Login | EVAISYS Testing Lab",
  description: "Demo authentication page used to validate login and protected access workflows.",
};

export default function LoginPage() {
  return (
    <PageContainer
      title="Login"
      description="Use demo credentials to validate authentication behavior and protected route access."
      testId="login"
    >
      <LoginForm />
    </PageContainer>
  );
}
