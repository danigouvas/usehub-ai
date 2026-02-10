export interface Tool {
  id: string;
  name: string;
  description: string;
  category: "Image" | "Video" | "Code" | "Writing" | "Audio" | "Productivity" | "Chat" | "3D";
  url: string;
  pricing: "Free" | "Paid";
  featured: boolean;
  badge?: string | null;
  color: string;
  iconName: string;
  keywords: string[];
  rating: number;
}

export interface QuickAction {
  label: string;
  search: string;
}
