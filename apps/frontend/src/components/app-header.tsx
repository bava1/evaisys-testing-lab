"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useAuth } from "@/components/auth-context";

const navItems = [
  { href: "/", label: "Home", testId: "nav-link-home" },
  { href: "/tasks", label: "Tasks", testId: "nav-link-tasks" },
  { href: "/requests", label: "Requests", testId: "nav-link-requests" },
  { href: "/articles", label: "Articles", testId: "nav-link-articles" },
  { href: "/contact", label: "Contact", testId: "nav-link-contact" },
];

export default function AppHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isReady, logout } = useAuth();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const isRouteActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleMobileNavOpen = () => {
    setIsMobileNavOpen(true);
  };

  const handleMobileNavClose = () => {
    setIsMobileNavOpen(false);
  };

  const handleLogout = () => {
    handleMobileNavClose();
    logout();
    router.push("/login");
  };

  return (
    <AppBar position="fixed" color="primary" data-testid="app-header">
      <Toolbar sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box sx={{ flexShrink: 0, lineHeight: 0 }}>
          <Link href="/" aria-label="EVAISYS Testing Lab home" style={{ lineHeight: 0 }}>
            <Image
              src="/Logo.png"
              alt="EVAISYS Testing Lab"
              width={320}
              height={95}
              priority
              style={{ height: "48.4px", width: "auto", transform: "translateY(5px)" }}
            />
          </Link>
        </Box>

        <Box
          data-testid="desktop-navigation"
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 1,
            alignItems: "center",
            flex: 1,
            minWidth: 0,
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.href}
              color="inherit"
              component={Link}
              href={item.href}
              data-testid={item.testId}
              sx={{
                borderBottom: isRouteActive(item.href)
                  ? "2px solid rgba(255, 255, 255, 0.95)"
                  : "2px solid transparent",
                borderRadius: 0,
                fontWeight: isRouteActive(item.href) ? 600 : 400,
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box
          data-testid="auth-actions"
          sx={{
            display: { xs: "none", md: "flex" },
            ml: "auto",
            flexShrink: 0,
            alignItems: "center",
          }}
        >
          {isReady && isAuthenticated ? (
            <Button color="inherit" onClick={handleLogout} data-testid="header-logout-button">
              Logout
            </Button>
          ) : null}
        </Box>

        <IconButton
          color="inherit"
          edge="end"
          aria-label="open navigation"
          onClick={handleMobileNavOpen}
          data-testid="mobile-navigation-toggle"
          sx={{ display: { xs: "inline-flex", md: "none" }, ml: "auto" }}
        >
          <Typography variant="button">Menu</Typography>
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={isMobileNavOpen}
        onClose={handleMobileNavClose}
        data-testid="mobile-navigation-drawer"
      >
        <Box
          sx={{ width: 280, p: 2, display: "flex", flexDirection: "column", gap: 1 }}
          role="presentation"
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton aria-label="close navigation" onClick={handleMobileNavClose}>
              <Typography variant="button">Close</Typography>
            </IconButton>
          </Box>
          {navItems.map((item) => (
            <Button
              key={`mobile-${item.href}`}
              component={Link}
              href={item.href}
              onClick={handleMobileNavClose}
              variant={isRouteActive(item.href) ? "contained" : "text"}
              color={isRouteActive(item.href) ? "primary" : "inherit"}
              data-testid={item.testId}
              sx={{ justifyContent: "flex-start" }}
            >
              {item.label}
            </Button>
          ))}
          {isReady && isAuthenticated ? (
            <Button
              color="inherit"
              onClick={handleLogout}
              data-testid="mobile-logout-button"
              sx={{ justifyContent: "flex-start" }}
            >
              Logout
            </Button>
          ) : null}
        </Box>
      </Drawer>
    </AppBar>
  );
}
