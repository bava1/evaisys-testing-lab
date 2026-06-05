import { Box, Chip, Divider, Paper, Stack, Typography } from "@mui/material";

const checklistQuickVerificationItems = [
  "Authentication",
  "Tasks",
  "Requests",
  "Articles",
  "Contacts",
  "API Health",
];

export default function ChecklistsSection() {
  return (
    <Stack spacing={3} data-testid="documentation-section-checklists">
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
        <Typography variant="h5">Checklists</Typography>
        <Chip label="Quick Verification" size="small" color="primary" variant="outlined" />
      </Stack>

      <Divider />

      <Stack spacing={1}>
        <Typography variant="h6">Purpose</Typography>
        <Typography variant="body2" color="text.secondary">
          Checklists provide a lightweight and efficient way to verify application functionality
          without the overhead of detailed test case execution.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          They are commonly used during smoke testing, sanity testing and release verification
          activities.
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6">Why Checklists Matter</Typography>
        <Typography variant="body2" color="text.secondary">
          Unlike detailed test cases, checklists focus on confirming that critical functionality is
          available and behaves as expected.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          They help QA engineers quickly evaluate application quality while maintaining consistency
          across repeated testing cycles.
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {[
            "Smoke testing",
            "Sanity testing",
            "Release verification",
            "Environment validation",
            "Regression preparation",
          ].map((item) => (
            <Chip key={item} label={item} size="small" variant="outlined" />
          ))}
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Checklist Categories</Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
            gap: 1.5,
          }}
        >
          {[
            {
              title: "Authentication",
              items: ["Login available", "Logout available", "Protected routes secured"],
            },
            {
              title: "Tasks",
              items: ["Create task", "Edit task", "Delete task", "Change status"],
            },
            {
              title: "Requests",
              items: ["Open requests list", "Update request status", "Verify workflow transitions"],
            },
            {
              title: "Articles",
              items: ["Open article list", "Search articles", "View article details"],
            },
            {
              title: "Contacts & Feedback",
              items: ["Display contacts", "Search contacts", "Validate contact information"],
            },
          ].map((category) => (
            <Paper
              key={category.title}
              variant="outlined"
              sx={{ p: 1.75, gridColumn: category.title === "Contacts & Feedback" ? { xs: "auto", sm: "1 / -1" } : "auto" }}
            >
              <Stack spacing={1}>
                <Typography variant="subtitle1">{category.title}</Typography>
                <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                  {category.items.map((item) => (
                    <li key={`${category.title}-${item}`}>
                      <Typography variant="body2">{item}</Typography>
                    </li>
                  ))}
                </Box>
              </Stack>
            </Paper>
          ))}
        </Box>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6">Manual Testing Support</Typography>
        <Typography variant="body2" color="text.secondary">
          Checklists provide a quick validation layer before deeper testing activities begin.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          They are particularly useful for confirming that a new deployment is stable enough for
          more extensive testing.
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6">Automation Preparation</Typography>
        <Typography variant="body2" color="text.secondary">
          Checklist items often become candidates for future automation.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stable and frequently executed checklist scenarios can later evolve into Playwright
          automated tests.
        </Typography>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h6">Expected Benefits</Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {[
            "Reduce repetitive manual effort",
            "Improve consistency of verification",
            "Speed up smoke testing",
            "Support regression planning",
            "Complement detailed test cases and automation",
          ].map((item) => (
            <Chip key={item} label={item} size="small" variant="outlined" />
          ))}
        </Stack>
      </Stack>

      <Paper variant="outlined" sx={{ p: 2 }}>
        <Stack spacing={1.25}>
          <Typography variant="h6">QA Quick Verification</Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {checklistQuickVerificationItems.map((item) => (
              <Chip key={item} label={item} size="small" variant="outlined" />
            ))}
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
