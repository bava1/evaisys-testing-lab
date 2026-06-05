import type { Metadata } from "next";
import { Box } from "@mui/material";
import DocumentationPortal from "@/components/documentation-portal";

export const metadata: Metadata = {
  title: "Documentation | EVAISYS Testing Lab",
  description: "Documentation portal placeholder for project QA and testing materials.",
};

export default function DocumentationPage() {
  return (
    <Box data-testid="documentation-page">
      <DocumentationPortal />
    </Box>
  );
}
