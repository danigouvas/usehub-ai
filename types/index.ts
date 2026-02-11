export interface Tool {
  id: string;
  name: string;
  description: string;
  category: "Research" | "Agents" | "Video" | "Design" | "Audio" | "Apps & Websites";
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
