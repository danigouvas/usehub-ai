"use client";

import { Search, Command } from "lucide-react";
import { motion } from "framer-motion";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search for tasks... (e.g., 'generate logo', 'write code')",
}: SearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full max-w-3xl mx-auto"
    >
      {/* Glow Container */}
      <div className="relative group">
        {/* Animated ring glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition duration-500 animate-glow-pulse" />

        {/* Search Input Container */}
        <div className="relative flex items-center glass-panel rounded-2xl shadow-2xl ring-2 ring-purple-500/20 hover:ring-purple-500/40 transition-all duration-300 h-14">
          {/* Search Icon */}
          <div className="pl-5 pr-3 flex items-center justify-center">
            <Search className="w-5 h-5 text-purple-400" strokeWidth={2.5} />
          </div>

          {/* Input Field */}
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            autoFocus
            className="flex-1 py-4 pr-4 bg-transparent text-white text-base placeholder:text-gray-500 focus:outline-none focus:placeholder:text-gray-600 transition-all duration-300"
            style={{ color: "white" }}
          />

          {/* Command Shortcut Hint */}
          {!value && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute right-4 hidden md:flex items-center gap-1.5 pointer-events-none"
            >
              <div className="flex items-center gap-1 px-2 py-1 bg-white/5 border border-white/10 rounded-md">
                <Command className="w-3 h-3 text-gray-500" />
                <span className="text-xs text-gray-500 font-medium">K</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Search Info */}
      {value.length > 0 && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-center text-sm text-gray-500"
        >
          Searching across{" "}
          <span className="text-purple-400 font-semibold">names, descriptions, and use cases</span>
        </motion.p>
      )}
    </motion.div>
  );
}
