import { Edition, EditionsData } from "../types";
import { FALLBACK_EDITIONS } from "../constants";

export const fetchEditions = async (): Promise<Edition[]> => {
  try {
    const response = await fetch('./editions.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: EditionsData = await response.json();
    return data.editions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.warn("Failed to fetch editions.json, using fallback data. This is expected if running locally without a web server or if the file is missing.", error);
    return FALLBACK_EDITIONS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
};