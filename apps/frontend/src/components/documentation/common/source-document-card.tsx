import { Alert, Paper, Stack, Typography } from "@mui/material";

type SourceDocumentCardProps = {
  title: string;
  description: string;
  subtitle?: string;
  placeholderTitle?: string;
  placeholderText?: string;
  testId?: string;
};

export default function SourceDocumentCard({
  title,
  description,
  subtitle,
  placeholderTitle,
  placeholderText,
  testId,
}: SourceDocumentCardProps) {
  return (
    <Paper variant="outlined" sx={{ p: 2.25 }} data-testid={testId}>
      <Stack spacing={1.25}>
        <Typography variant="h6">{title}</Typography>
        {subtitle ? <Typography variant="subtitle1">{subtitle}</Typography> : null}
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {placeholderTitle || placeholderText ? (
          <Alert severity="info" variant="outlined">
            {placeholderTitle ? <Typography variant="subtitle2">{placeholderTitle}</Typography> : null}
            {placeholderText ? <Typography variant="body2">{placeholderText}</Typography> : null}
          </Alert>
        ) : null}
      </Stack>
    </Paper>
  );
}
