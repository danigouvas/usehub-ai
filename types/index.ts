export interface Tool {
  id: string;
  name: string;
  description: string;
  category: "Intelligence" | "Agents" | "Creation" | "Build" | "Assistants";
  url: string;
  pricing: "Free" | "Paid";
  featured: boolean;
  badge?: string;
  color: string;
  keywords: string[];
  isOpenSource?: boolean;
  isTrending?: boolean;
  isClassic?: boolean;
  score?: number;
}

export interface QuickAction {
  label: string;
  search: string;
}
