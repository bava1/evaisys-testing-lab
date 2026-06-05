import { Chip, Divider, Stack, Typography } from "@mui/material";

export default function AiWorkflowSection() {
  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
        <Typography variant="h5">AI-assisted QA Workflow</Typography>
        <Chip label="Planned" size="small" color="default" variant="outlined" />
      </Stack>

      <Divider />

      <Typography variant="body1">Select a documentation section from the left menu.</Typography>
      <Typography variant="body2" color="text.secondary">
        Documentation content will be added in the next step.
      </Typography>
    </Stack>
  );
}
