"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { useAuth } from "@/components/auth-context";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isReady } = useAuth();

  const normalizedPathname =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const isPublicRoute = normalizedPathname === "/login";

  useEffect(() => {
    if (isPublicRoute || !isReady) {
      return;
    }

    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isPublicRoute, isReady, router]);

  if (isPublicRoute) {
    return <Box data-testid="protected-route">{children}</Box>;
  }

  if (!isReady) {
    return (
      <Box data-testid="auth-loading-state" sx={{ p: 3 }}>
        <Typography variant="body1">Loading authentication state...</Typography>
      </Box>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <Box data-testid="protected-route">{children}</Box>;
}
