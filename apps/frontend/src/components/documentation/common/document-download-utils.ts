import { Document, HeadingLevel, Packer, Paragraph } from "docx";
import type { DocumentationDocument, DocumentationDocumentTable } from "../content/types";

type DocumentFormat = "txt" | "md" | "docx";

function createObjectUrlAndDownload(blob: Blob, fileName: string) {
  const objectUrl = window.URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = objectUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(objectUrl);
}

export function slugifyDocumentTitle(title: string): string {
  const slug = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "document";
}

export function buildDocumentFileName(title: string, format: DocumentFormat): string {
  return `${slugifyDocumentTitle(title)}.${format}`;
}

function buildTextSections(document: DocumentationDocument): string {
  const sectionBlocks = document.sections.map((section) => {
    const paragraphs = section.paragraphs ?? [];
    const bullets = (section.bullets ?? []).map((bullet) => `- ${bullet}`);
    const tables = (section.tables ?? []).map((table) => formatTableForText(table));

    return [section.heading, ...paragraphs, ...bullets, ...tables].join("\n\n");
  });

  return [document.title, document.description, ...sectionBlocks].filter(Boolean).join("\n\n");
}

function buildMarkdownSections(document: DocumentationDocument): string {
  const sectionBlocks = document.sections.map((section) => {
    const paragraphs = section.paragraphs ?? [];
    const bullets = (section.bullets ?? []).map((bullet) => `- ${bullet}`);
    const tables = (section.tables ?? []).map((table) => formatTableForMarkdown(table));

    return [`## ${section.heading}`, ...paragraphs, ...bullets, ...tables].join("\n\n");
  });

  return [`# ${document.title}`, document.description, ...sectionBlocks].filter(Boolean).join("\n\n");
}

function formatTableForText(table: DocumentationDocumentTable): string {
  const header = table.columns.join(" | ");
  const rows = table.rows.map((row) => row.join(" | "));

  return [header, ...rows].join("\n");
}

function formatTableForMarkdown(table: DocumentationDocumentTable): string {
  const header = `| ${table.columns.join(" | ")} |`;
  const separator = `| ${table.columns.map(() => "---").join(" | ")} |`;
  const rows = table.rows.map((row) => `| ${row.join(" | ")} |`);

  return [header, separator, ...rows].join("\n");
}

export function downloadDocumentTxt(document: DocumentationDocument) {
  const payload = buildTextSections(document);
  const blob = new Blob([payload], { type: "text/plain;charset=utf-8" });

  createObjectUrlAndDownload(blob, buildDocumentFileName(document.title, "txt"));
}

export function downloadDocumentMarkdown(document: DocumentationDocument) {
  const payload = buildMarkdownSections(document);
  const blob = new Blob([payload], { type: "text/markdown;charset=utf-8" });

  createObjectUrlAndDownload(blob, buildDocumentFileName(document.title, "md"));
}

export async function downloadDocumentDocx(documentData: DocumentationDocument) {
  const children = [
    new Paragraph({
      text: documentData.title,
      heading: HeadingLevel.HEADING_1,
    }),
  ];

  if (documentData.description) {
    children.push(new Paragraph(documentData.description));
  }

  for (const section of documentData.sections) {
    children.push(
      new Paragraph({
        text: section.heading,
        heading: HeadingLevel.HEADING_2,
      })
    );

    for (const paragraph of section.paragraphs ?? []) {
      children.push(new Paragraph(paragraph));
    }

    for (const bullet of section.bullets ?? []) {
      children.push(
        new Paragraph({
          text: bullet,
          bullet: { level: 0 },
        })
      );
    }

    for (const table of section.tables ?? []) {
      children.push(new Paragraph(table.columns.join(" | ")));

      for (const row of table.rows) {
        children.push(new Paragraph(row.join(" | ")));
      }
    }
  }

  const docxDocument = new Document({
    sections: [
      {
        children,
      },
    ],
  });

  const blob = await Packer.toBlob(docxDocument);
  createObjectUrlAndDownload(blob, buildDocumentFileName(documentData.title, "docx"));
}
