"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { useAuth } from "@/components/auth-context";

const publicRoutes = ["/login"];

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isReady } = useAuth();

  const isPublicRoute = publicRoutes.includes(pathname);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    if (!isPublicRoute && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isPublicRoute, isReady, router]);

  if (!isReady) {
    return (
      <Box data-testid="auth-loading-state" sx={{ p: 3 }}>
        <Typography variant="body1">Loading authentication state...</Typography>
      </Box>
    );
  }

  if (!isPublicRoute && !isAuthenticated) {
    return null;
  }

  return <Box data-testid="protected-route">{children}</Box>;
}
