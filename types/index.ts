export interface Tool {
  id: string;
  name: string;
  description: string;
  category: "Agents" | "Creation" | "Build" | "Intelligence" | "Assistants";
  url: string;
  pricing: "Free" | "Paid" | "Freemium";
  featured: boolean;
  badge?: string;       // Ranking LMARENA (ex: #1 LMARENA)
  subBadge?: string;    // Especialidade (ex: Auto-Browser)
  color: string;
  keywords: string[];
  isTrending?: boolean;
  isOpenSource?: boolean;
  isClassic?: boolean;
  rating: number;       // Score LMARENA/PH
}

export interface QuickAction {
  label: string;
  search: string;
}
