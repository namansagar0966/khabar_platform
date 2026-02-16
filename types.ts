export interface Headline {
  id: string;
  title: string;
  category: string;
  summary: string;
}

export interface Edition {
  id: string;
  editionNumber: string;
  title: string;
  date: string;
  pdfUrl: string; // Filename relative to public/pdfs/ or absolute URL
  coverImageUrl?: string; // Optional cover preview
  headlines: Headline[];
  isLatest?: boolean;
}

export interface EditionsData {
  editions: Edition[];
}