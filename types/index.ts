export interface Tool {
  id: string;
  name: string;
  description: string;
  category: "Image" | "Video" | "Code" | "Writing" | "Audio" | "Productivity" | "Chat" | "3D";
  url: string;
  pricing: "Free" | "Paid" | "Freemium" | "Open Source";
  featured: boolean;
  badge: string | null;
  color: string; // Tailwind class (e.g., "bg-blue-500")
  iconName: string; // Lucide icon name
  keywords: string[]; // Search keywords for intelligent matching
  openSource?: boolean; // Flag for open source tools
  isClassic?: boolean; // Flag for established giants
  isViral?: boolean; // Flag for viral/rising tools
}
