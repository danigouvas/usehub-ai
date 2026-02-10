export interface Tool {
  id: string;
  name: string;
  description: string;
  category: "Image" | "Video" | "Code" | "Writing" | "Audio" | "Productivity" | "Chat" | "3D";
  url: string;
  pricing: "Free" | "Paid" | "Freemium";
  featured: boolean;
  badge?: string;       // A tag amarela (ex: #1 Overall)
  subBadge?: string;    // A tag cinza (ex: Classic)
  color: string;
  keywords: string[];
  isTrending?: boolean;
  isOpenSource?: boolean;
  isClassic?: boolean;
}

export interface QuickAction {
  label: string;
  search: string;
}
