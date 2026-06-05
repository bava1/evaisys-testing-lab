import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

type DiagramViewerProps = {
  alt: string;
  caption: string;
  open: boolean;
  src: string;
  testId: string;
  title: string;
  onClose: () => void;
};

export default function DiagramViewer({
  alt,
  caption,
  open,
  src,
  testId,
  title,
  onClose,
}: DiagramViewerProps) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg" data-testid={testId}>
      <DialogTitle sx={{ pr: 7 }}>
        {title}
        <IconButton
          aria-label="close documentation diagram"
          onClick={onClose}
          sx={{ position: "absolute", right: 12, top: 12 }}
        >
          ×
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {open ? (
          <>
            <Box
              component="img"
              src={src}
              alt={alt}
              sx={{
                display: "block",
                width: "100%",
                height: "auto",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              {caption}
            </Typography>
          </>
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
