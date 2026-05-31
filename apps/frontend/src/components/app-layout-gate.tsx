"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import AppShell from "@/layouts/app-shell";

type AppLayoutGateProps = {
  children: React.ReactNode;
};

export default function AppLayoutGate({ children }: AppLayoutGateProps) {
  const pathname = usePathname();

  const normalizedPathname = useMemo(() => {
    if (!pathname) {
      return "/";
    }

    return pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  }, [pathname]);

  const isLoginRoute = normalizedPathname === "/login";

  if (isLoginRoute) {
    return <>{children}</>;
  }

  return <AppShell>{children}</AppShell>;
}
