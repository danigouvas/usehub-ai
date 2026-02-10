"use client";

import { motion } from "framer-motion";
import {
  Image,
  Video,
  Code,
  FileText,
  Mic,
  Briefcase,
  MessageSquare,
} from "lucide-react";

interface CategoryPillsProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const categoryConfig: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; label: string }
> = {
  Image: { icon: Image, label: "Image" },
  Video: { icon: Video, label: "Video" },
  Code: { icon: Code, label: "Code" },
  Writing: { icon: FileText, label: "Writing" },
  Audio: { icon: Mic, label: "Audio" },
  Productivity: { icon: Briefcase, label: "Productivity" },
  Chat: { icon: MessageSquare, label: "Chat" },
};

export default function CategoryPills({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryPillsProps) {
  const handleClick = (category: string) => {
    if (selectedCategory === category) {
      onSelectCategory(null);
    } else {
      onSelectCategory(category);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap items-center justify-center gap-3"
    >
      {/* All Tools Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelectCategory(null)}
        className={`h-10 px-5 rounded-full font-bold text-sm transition-all duration-300 ${
          selectedCategory === null
            ? "bg-white text-gray-950 shadow-lg shadow-white/20"
            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300 border border-white/10"
        }`}
      >
        All Tools
      </motion.button>

      {/* Category Pills */}
      {categories.map((category, index) => {
        const config = categoryConfig[category];
        const IconComponent = config?.icon;

        return (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * (index + 1) }}
            onClick={() => handleClick(category)}
            className={`h-10 flex items-center gap-2 px-4 rounded-full font-semibold text-sm transition-all duration-300 ${
              selectedCategory === category
                ? "bg-white text-gray-950 shadow-lg shadow-white/20"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300 border border-white/10"
            }`}
          >
            {IconComponent && <IconComponent className="w-4 h-4" />}
            {config?.label || category}
          </motion.button>
        );
      })}
    </motion.div>
  );
}
