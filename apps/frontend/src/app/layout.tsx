import type { Metadata } from "next";
import Providers from "./providers";
import "./globals.css";
import AppShell from "@/layouts/app-shell";

export const metadata: Metadata = {
  title: "EVAISYS Testing Lab",
  description:
    "Controlled application for frontend/backend testing, automation workflows, and QA scenario validation.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
