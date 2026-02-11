export interface Tool {
  id: string;
  name: string;
  description: string;
  category: "Agents" | "Video" | "Image" | "Audio" | "Apps & Websites" | "Assistants";
  url: string;
  pricing: "Free" | "Paid";
  featured: boolean;
  badge?: string;
  color: string;
  keywords: string[];
  score: number;
  isOpenSource?: boolean;
  isTrending?: boolean;
  isClassic?: boolean;
}
