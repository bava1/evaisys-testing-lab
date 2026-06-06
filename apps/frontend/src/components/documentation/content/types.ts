export type DocumentationDocument = {
  id: string;
  title: string;
  description?: string;
  sections: DocumentationDocumentSection[];
};

export type DocumentationDocumentSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  tables?: DocumentationDocumentTable[];
};

export type DocumentationDocumentTable = {
  columns: string[];
  rows: string[][];
};
