import type { Metadata } from "next";
import { Typography } from "@mui/material";
import PageContainer from "@/components/page-container";

export const metadata: Metadata = {
  title: "Articles | EVAISYS Testing Lab",
  description: "Placeholder page for the future knowledge and articles section.",
};

export default function ArticlesPage() {
  return (
    <PageContainer
      title="Articles"
      description="Placeholder section for the future knowledge and articles workflow."
      testId="articles"
    >
      <Typography variant="body2" color="text.secondary">
        Article catalog, filtering, and reading views will be introduced later.
      </Typography>
    </PageContainer>
  );
}
