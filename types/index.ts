export interface Tool {
  id: string;
  name: string;
  description: string;
  category: "Text" | "Agents" | "Video" | "Design" | "Audio" | "Apps & Websites";
  url: string;
  pricing: "Free" | "Paid";
  featured?: boolean;  // <--- O ? TORNAR ISTO OPCIONAL. FIM DOS ERROS DE BUILD.
  badge?: string;
  color: string;
  keywords: string[];
  score: number;
  isOpenSource?: boolean;
  isTrending?: boolean;
  isClassic?: boolean;
}
