"use client";

import { useMemo, useState } from "react";
import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

type ArticleCategory = "Testing" | "Automation" | "Playwright" | "QA" | "AI";
type CategoryFilter = "All" | ArticleCategory;

type DemoArticle = {
  id: number;
  title: string;
  category: ArticleCategory;
  summary: string;
  content: string;
  author: string;
  publishedAt: string;
};

const demoArticles: DemoArticle[] = [
  {
    id: 1,
    title: "Building a Reliable UI Testing Baseline",
    category: "Testing",
    summary: "A practical guide to defining a stable baseline for frontend UI checks.",
    content:
      "Start with a small but representative smoke suite, then expand incrementally. Focus on deterministic selectors, meaningful assertions, and clear failure diagnostics.",
    author: "Elena Novak",
    publishedAt: "2026-05-18",
  },
  {
    id: 2,
    title: "Automation Workflow Design for Small Teams",
    category: "Automation",
    summary: "How to keep automation flow simple, maintainable, and team-friendly.",
    content:
      "Prioritize predictable test data, layered checks, and clear ownership. Keep scripts modular, avoid overengineering, and validate fast feedback loops.",
    author: "Marek Dvorak",
    publishedAt: "2026-05-16",
  },
  {
    id: 3,
    title: "Playwright Selectors That Stay Stable",
    category: "Playwright",
    summary: "Patterns for resilient selectors and reduced flaky behavior in E2E tests.",
    content:
      "Prefer explicit data-testid attributes, avoid brittle CSS chains, and scope selectors to functional regions. Stabilize async waits around expected UI states.",
    author: "Sofia Kim",
    publishedAt: "2026-05-14",
  },
  {
    id: 4,
    title: "QA Triage Playbook for Fast Iteration",
    category: "QA",
    summary: "A lightweight triage model to keep defects actionable and prioritized.",
    content:
      "Use severity and reproducibility as first filters, then align triage outcomes with sprint goals. Keep bug reports concise and evidence-based.",
    author: "Daniel Ortiz",
    publishedAt: "2026-05-12",
  },
  {
    id: 5,
    title: "AI-Assisted Test Case Drafting",
    category: "AI",
    summary: "How to draft better test cases with AI while keeping human control.",
    content:
      "Treat AI output as a draft, not a final artifact. Review assumptions, validate edge cases, and ensure each scenario maps to observable outcomes.",
    author: "Petra Vlkova",
    publishedAt: "2026-05-10",
  },
  {
    id: 6,
    title: "From Manual Checks to Structured Testing",
    category: "Testing",
    summary: "Transition strategy for teams moving from ad hoc checks to test workflows.",
    content:
      "Begin by documenting repetitive manual checks, convert them into deterministic scenarios, and progressively automate the highest-value flows.",
    author: "Ivan Horak",
    publishedAt: "2026-05-08",
  },
  {
    id: 7,
    title: "AI-Assisted Test Case Generation",
    category: "AI",
    summary: "Practical approaches to generating structured test cases with AI assistance.",
    content:
      "Explains how AI tools can accelerate test design while keeping human review in the quality loop.",
    author: "Petr Vacek",
    publishedAt: "2026-05-14",
  },
  {
    id: 8,
    title: "Managing Regression Suites at Scale",
    category: "QA",
    summary: "Techniques for maintaining large regression suites without excessive execution time.",
    content:
      "Covers suite organization, prioritization, and balancing smoke versus full regression coverage.",
    author: "Anna Novak",
    publishedAt: "2026-05-12",
  },
  {
    id: 9,
    title: "Backend Contract Validation Essentials",
    category: "Testing",
    summary: "Common strategies for validating API contracts between frontend and backend systems.",
    content:
      "Introduces schema validation, status code verification, and contract consistency checks.",
    author: "Jakub Sramek",
    publishedAt: "2026-05-10",
  },
  {
    id: 10,
    title: "Building Effective Test Data Sets",
    category: "Automation",
    summary: "Guidelines for creating reusable and maintainable automated testing data.",
    content:
      "Discusses isolation, repeatability, and avoiding hidden dependencies between tests.",
    author: "Milan Horak",
    publishedAt: "2026-05-08",
  },
  {
    id: 11,
    title: "Modern Accessibility Testing Practices",
    category: "QA",
    summary: "An introduction to accessibility validation within modern web applications.",
    content:
      "Reviews keyboard navigation, semantic markup, labels, and automated accessibility tooling.",
    author: "Maria Ivanova",
    publishedAt: "2026-05-06",
  },
];

export default function ArticlesSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("All");
  const [selectedArticle, setSelectedArticle] = useState<DemoArticle | null>(null);

  const filteredArticles = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return demoArticles.filter((article) => {
      const matchesCategory =
        categoryFilter === "All" ? true : article.category === categoryFilter;
      const matchesQuery =
        normalizedQuery.length === 0
          ? true
          : article.title.toLowerCase().includes(normalizedQuery) ||
            article.summary.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [categoryFilter, searchQuery]);

  return (
    <Stack spacing={3} data-testid="articles-section">
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <TextField
          label="Search articles"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          inputProps={{ "data-testid": "articles-search-input" }}
          fullWidth
        />
        <TextField
          select
          label="Category"
          value={categoryFilter}
          onChange={(event) => setCategoryFilter(event.target.value as CategoryFilter)}
          inputProps={{ "data-testid": "articles-category-filter" }}
          sx={{ minWidth: 220 }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Testing">Testing</MenuItem>
          <MenuItem value="Automation">Automation</MenuItem>
          <MenuItem value="Playwright">Playwright</MenuItem>
          <MenuItem value="QA">QA</MenuItem>
          <MenuItem value="AI">AI</MenuItem>
        </TextField>
      </Stack>

      {filteredArticles.length === 0 ? (
        <Typography variant="body2" color="text.secondary" data-testid="articles-empty-state">
          No articles found for current search criteria.
        </Typography>
      ) : (
        <Stack spacing={2}>
          {filteredArticles.map((article) => (
            <Paper key={article.id} variant="outlined" sx={{ p: 2 }} data-testid={`article-card-${article.id}`}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={2} justifyContent="space-between">
                <Stack spacing={1.5} sx={{ flex: 1 }}>
                  <Typography variant="h6" data-testid={`article-title-${article.id}`}>
                    {article.title}
                  </Typography>
                  <Chip
                    label={article.category}
                    size="small"
                    sx={{ alignSelf: "flex-start" }}
                    data-testid={`article-category-${article.id}`}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {article.summary}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Author: {article.author}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Published At: {article.publishedAt}
                  </Typography>
                </Stack>
                <Button
                  variant="outlined"
                  onClick={() => setSelectedArticle(article)}
                  data-testid={`article-details-${article.id}`}
                  sx={{ alignSelf: { xs: "flex-start", md: "flex-start" } }}
                >
                  View Details
                </Button>
              </Stack>
            </Paper>
          ))}
        </Stack>
      )}

      <Dialog
        open={selectedArticle !== null}
        onClose={() => setSelectedArticle(null)}
        fullWidth
        maxWidth="md"
        data-testid="article-details-dialog"
      >
        <DialogTitle data-testid="article-details-title">
          {selectedArticle ? selectedArticle.title : "Article Details"}
        </DialogTitle>
        <DialogContent dividers>
          {selectedArticle ? (
            <Stack spacing={1.5}>
              <Typography variant="body2">Category: {selectedArticle.category}</Typography>
              <Typography variant="body2">Author: {selectedArticle.author}</Typography>
              <Typography variant="body2">Published At: {selectedArticle.publishedAt}</Typography>
              <Typography variant="body1">{selectedArticle.content}</Typography>
            </Stack>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedArticle(null)} data-testid="article-details-close">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
