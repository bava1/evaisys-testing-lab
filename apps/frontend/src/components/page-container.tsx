import { Box, Stack, Typography } from "@mui/material";

type PageContainerProps = {
  title: string;
  description: string;
  testId: string;
  children?: React.ReactNode;
};

export default function PageContainer({
  title,
  description,
  testId,
  children,
}: PageContainerProps) {
  return (
    <Stack spacing={3} data-testid={`${testId}-page`}>
      <Box data-testid={`${testId}-page-header`}>
        <Typography variant="h4" component="h1" gutterBottom data-testid={`${testId}-page-title`}>
          {title}
        </Typography>
        {description ? (
          <Typography variant="body1" color="text.secondary" data-testid={`${testId}-page-description`}>
            {description}
          </Typography>
        ) : null}
      </Box>

      <Box sx={{ p: 0 }} data-testid={`${testId}-page-content`}>
        {children}
      </Box>
    </Stack>
  );
}
