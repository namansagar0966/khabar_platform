import { Edition } from "./types";

export const APP_NAME = "Khabar Platform";
export const TAGLINE = "Aapki Awaaz, Aapka Vishwas (Your Voice, Your Trust)";

// Fallback data in case editions.json fetch fails (e.g., local file system without server)
export const FALLBACK_EDITIONS: Edition[] = [
  {
    id: "e-feb16",
    editionNumber: "Vol-16Feb",
    title: "Weekly Edition: February 16 - 22, 2026",
    date: "2026-02-16",
    pdfUrl: "./pdfs/February-16-2026.pdf",
    isLatest: true,
    headlines: []
  },
  {
    id: "e-feb9",
    editionNumber: "Vol-9Feb",
    title: "Weekly Edition: February 9 - 15, 2026",
    date: "2026-02-09",
    pdfUrl: "./pdfs/February-9-2026.pdf",
    isLatest: false,
    headlines: []
  },
  {
    id: "e-feb2",
    editionNumber: "Vol-2Feb",
    title: "Weekly Edition: February 2 - 8, 2026",
    date: "2026-02-02",
    pdfUrl: "./pdfs/February-02-2026.pdf",
    isLatest: false,
    headlines: []
  },
  {
    id: "e-jan26",
    editionNumber: "Vol-26Jan",
    title: "Weekly Edition: January 26 - February 1, 2026",
    date: "2026-01-26",
    pdfUrl: "./pdfs/January-26-2026.pdf",
    isLatest: false,
    headlines: []
  }
];