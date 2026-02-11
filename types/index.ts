export interface Tool {
  id: string;
  name: string;
  description: string;
  category: "Reasoning & Research" | "Autonomous Agents" | "Video & Cinema" | "Image & Design" | "Audio & Music" | "Apps & Websites" | "AI Assistants";
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
