"use client";

import Link from "next/link";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/login", label: "Login" },
  { href: "/tasks", label: "Tasks" },
  { href: "/requests", label: "Requests" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export default function AppHeader() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Typography variant="h6" sx={{ mr: 2 }}>
          EVAISYS Testing Lab
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {navItems.map((item) => (
            <Button key={item.href} color="inherit" component={Link} href={item.href}>
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
