"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Tool } from "@/types";

interface ToolCardProps {
  tool: Tool;
  index: number;
}

const pricingConfig = {
  Free: {
    bg: "bg-emerald-500",
    text: "text-white",
  },
  Paid: {
    bg: "bg-gray-700",
    text: "text-white",
  },
  Freemium: {
    bg: "bg-gray-700",
    text: "text-white",
  },
  "Open Source": {
    bg: "bg-emerald-500",
    text: "text-white",
  },
};

export default function ToolCard({ tool, index }: ToolCardProps) {
  // Dynamically get icon component
  const IconComponent =
    LucideIcons[tool.iconName as keyof typeof LucideIcons] || LucideIcons.Box;
  const pricing = pricingConfig[tool.pricing];

  // Featured card gets special border (or Wild Card gets pink border)
  const isWildCard = tool.badge?.includes("Wild Card");
  const borderClass = isWildCard
    ? "border-pink-500/50 hover:border-pink-500/70"
    : tool.featured
    ? "border-yellow-500/40 hover:border-yellow-500/60"
    : "border-white/5 hover:border-white/20";

  // Featured cards get subtle glow
  const glowClass = tool.featured && !isWildCard
    ? "shadow-[0_0_20px_rgba(168,85,247,0.15)]"
    : isWildCard
    ? "shadow-[0_0_20px_rgba(236,72,153,0.15)]"
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.03,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ scale: 1.02 }}
      className="group relative h-full"
    >
      {/* Hover glow effect */}
      <div
        className={`absolute -inset-px rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300 ${
          tool.featured
            ? "bg-gradient-to-r from-yellow-500 to-amber-500"
            : "bg-gradient-to-r from-purple-600 to-blue-600"
        }`}
      />

      {/* Card Container */}
      <div
        className={`relative glass-panel rounded-2xl p-6 h-full flex flex-col border-2 ${borderClass} ${glowClass} transition-all duration-300 shadow-xl`}
      >
        {/* Badge (Top Right) */}
        {tool.badge && (
          <div className="absolute -top-3 -right-3 z-10">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full shadow-lg shadow-yellow-500/30 border border-yellow-400/50">
              <span className="text-xs font-bold text-gray-950">
                {tool.badge}
              </span>
            </div>
          </div>
        )}

        {/* Featured Indicator */}
        {tool.featured && !tool.badge && (
          <div className="absolute -top-2 -right-2 z-10">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/50">
              <Award className="w-4 h-4 text-gray-950" strokeWidth={2.5} />
            </div>
          </div>
        )}

        {/* Header: Logo + Name */}
        <div className="flex items-start gap-4 mb-4">
          {/* Logo with dynamic Tailwind color */}
          <div
            className={`w-12 h-12 rounded-xl ${tool.color} border-2 border-white/10 flex items-center justify-center flex-shrink-0`}
          >
            {/* @ts-ignore */}
            <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
          </div>

          {/* Name */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
              {tool.name}
            </h3>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-0.5">
              {tool.category}
            </p>
          </div>
        </div>

        {/* Description - Limited to 2 lines */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-2">
          {tool.description}
        </p>

        {/* Footer: Pricing + CTA */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
          {/* Pricing Badge */}
          <span
            className={`px-3 py-1 text-xs font-bold rounded-full ${pricing.bg} ${pricing.text} whitespace-nowrap shadow-md`}
          >
            {tool.pricing}
          </span>

          {/* Visit Button */}
          <motion.a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 flex-1 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
          >
            Visit
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
