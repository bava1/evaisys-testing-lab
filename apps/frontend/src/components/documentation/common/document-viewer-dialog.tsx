"use client";

import { MouseEvent, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import type { DocumentationDocument } from "../content/types";
import {
  downloadDocumentDocx,
  downloadDocumentMarkdown,
  downloadDocumentTxt,
} from "./document-download-utils";

type DocumentViewerDialogProps = {
  document: DocumentationDocument;
  open: boolean;
  testId: string;
  onClose: () => void;
};

export default function DocumentViewerDialog({
  document,
  open,
  testId,
  onClose,
}: DocumentViewerDialogProps) {
  const [downloadMenuAnchor, setDownloadMenuAnchor] = useState<null | HTMLElement>(null);
  const isDownloadMenuOpen = Boolean(downloadMenuAnchor);

  const handleOpenDownloadMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setDownloadMenuAnchor(event.currentTarget);
  };

  const handleCloseDownloadMenu = () => {
    setDownloadMenuAnchor(null);
  };

  const handleDownloadTxt = () => {
    downloadDocumentTxt(document);
    handleCloseDownloadMenu();
  };

  const handleDownloadMd = () => {
    downloadDocumentMarkdown(document);
    handleCloseDownloadMenu();
  };

  const handleDownloadDocx = async () => {
    await downloadDocumentDocx(document);
    handleCloseDownloadMenu();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xl"
      data-testid={testId}
      PaperProps={{ sx: { borderRadius: 2 } }}
    >
      <DialogTitle>{document.title}</DialogTitle>
      <DialogContent dividers sx={{ minHeight: 520 }}>
        {open ? (
          <Stack spacing={2.5}>
            {document.description ? (
              <Typography variant="body1" color="text.secondary">
                {document.description}
              </Typography>
            ) : null}
            {document.sections.map((section) => (
              <Stack key={`${document.id}-${section.heading}`} spacing={1.25}>
                <Typography variant="h6">{section.heading}</Typography>
                {section.paragraphs?.map((paragraph, index) => (
                  <Typography
                    key={`${document.id}-${section.heading}-paragraph-${index}`}
                    variant="body1"
                    sx={{ whiteSpace: "pre-wrap" }}
                  >
                    {paragraph}
                  </Typography>
                ))}
                {section.bullets?.length ? (
                  <Stack component="ul" spacing={0.75} sx={{ m: 0, pl: 2.5 }}>
                    {section.bullets.map((bullet, index) => (
                      <Typography
                        key={`${document.id}-${section.heading}-bullet-${index}`}
                        component="li"
                        variant="body1"
                      >
                        {bullet}
                      </Typography>
                    ))}
                  </Stack>
                ) : null}
                {section.tables?.map((table, tableIndex) => (
                  <Table
                    key={`${document.id}-${section.heading}-table-${tableIndex}`}
                    size="small"
                    sx={{ border: (theme) => `1px solid ${theme.palette.divider}` }}
                  >
                    <TableHead>
                      <TableRow>
                        {table.columns.map((column) => (
                          <TableCell key={`${section.heading}-${tableIndex}-${column}`}>
                            <Typography variant="subtitle2">{column}</Typography>
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {table.rows.map((row, rowIndex) => (
                        <TableRow key={`${section.heading}-${tableIndex}-row-${rowIndex}`}>
                          {row.map((cell, cellIndex) => (
                            <TableCell key={`${section.heading}-${tableIndex}-${rowIndex}-${cellIndex}`}>
                              <Typography variant="body2">{cell}</Typography>
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ))}
              </Stack>
            ))}
          </Stack>
        ) : null}
      </DialogContent>
      <DialogActions sx={{ justifyContent: "space-between" }}>
        <Button
          onClick={handleOpenDownloadMenu}
          startIcon={
            <SvgIcon fontSize="small">
              <path d="M5 20h14v-2H5zm7-18v12l4-4 1.41 1.41L12 17.83l-5.41-5.42L8 10l4 4V2z" />
            </SvgIcon>
          }
          aria-controls={isDownloadMenuOpen ? `${testId}-download-menu` : undefined}
          aria-expanded={isDownloadMenuOpen ? "true" : undefined}
          aria-haspopup="true"
          data-testid={`${testId}-download-button`}
        >
          Download file
        </Button>
        <Menu
          id={`${testId}-download-menu`}
          anchorEl={downloadMenuAnchor}
          open={isDownloadMenuOpen}
          onClose={handleCloseDownloadMenu}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          transformOrigin={{ vertical: "bottom", horizontal: "left" }}
          data-testid={`${testId}-download-menu`}
        >
          <MenuItem onClick={handleDownloadTxt} data-testid={`${testId}-download-txt`}>
            <ListItemIcon>
              <Typography variant="body2">TXT</Typography>
            </ListItemIcon>
            <ListItemText>Download TXT</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleDownloadMd} data-testid={`${testId}-download-md`}>
            <ListItemIcon>
              <Typography variant="body2">MD</Typography>
            </ListItemIcon>
            <ListItemText>Download MD</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleDownloadDocx} data-testid={`${testId}-download-docx`}>
            <ListItemIcon>
              <Typography variant="body2">DOCX</Typography>
            </ListItemIcon>
            <ListItemText>Download DOCX</ListItemText>
          </MenuItem>
        </Menu>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
