"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles, Search as SearchIcon } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import ToolCard from "@/components/ToolCard";
import CategoryPills from "@/components/CategoryPills";
import { tools, getCategories, getFeaturedTools } from "@/data/tools";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceFilter, setPriceFilter] = useState<string | null>(null);

  const categories = useMemo(() => getCategories(), []);
  const featuredTools = useMemo(() => getFeaturedTools(), []);

  // Auto-reset UX: Typing clears category, clicking category clears search
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setSelectedCategory(null); // Clear category when searching
    }
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    if (category) {
      setSearchQuery(""); // Clear search when selecting category
    }
  };

  // Intelligent filtering: Name, Description, Badge, Category, AND Keywords
  const filteredTools = useMemo(() => {
    let filtered = tools;

    // Filter by category (but not when searching)
    if (selectedCategory && !searchQuery.trim()) {
      filtered = filtered.filter((tool) => tool.category === selectedCategory);
    }

    // Filter by price
    if (priceFilter && priceFilter !== "Show All") {
      filtered = filtered.filter((tool) => {
        if (priceFilter === "Free") {
          return tool.pricing === "Free" || tool.pricing === "Open Source";
        }
        return tool.pricing === priceFilter;
      });
    }

    // Intelligent search with keywords (with safe optional chaining)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((tool) => {
        // Search across name, description, badge, category, and keywords
        const nameMatch = tool.name?.toLowerCase().includes(query) || false;
        const descriptionMatch = tool.description?.toLowerCase().includes(query) || false;
        const badgeMatch = tool.badge?.toLowerCase().includes(query) || false;
        const categoryMatch = tool.category?.toLowerCase().includes(query) || false;
        const keywordsMatch = tool.keywords?.some((keyword) =>
          keyword.toLowerCase().includes(query)
        ) || false;
        return nameMatch || descriptionMatch || badgeMatch || categoryMatch || keywordsMatch;
      });
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceFilter]);

  // Organize tools into ranked sections
  const eliteTools = useMemo(() =>
    filteredTools.filter((tool) => tool.featured),
    [filteredTools]
  );

  const classicTools = useMemo(() =>
    filteredTools.filter((tool) => tool.isClassic && !tool.featured),
    [filteredTools]
  );

  const openSourceTools = useMemo(() =>
    filteredTools.filter((tool) => tool.openSource && !tool.featured && !tool.isClassic),
    [filteredTools]
  );

  const wildCardTools = useMemo(() =>
    filteredTools.filter((tool) => tool.badge?.includes("Wild Card")),
    [filteredTools]
  );

  const viralTools = useMemo(() =>
    filteredTools.filter((tool) => (tool.isViral || tool.badge?.includes("Viral")) && !tool.featured && !tool.badge?.includes("Wild Card")),
    [filteredTools]
  );

  const otherTools = useMemo(() =>
    filteredTools.filter((tool) =>
      !tool.featured &&
      !tool.isClassic &&
      !tool.openSource &&
      !tool.badge?.includes("Wild Card") &&
      !tool.isViral &&
      !tool.badge?.includes("Viral")
    ),
    [filteredTools]
  );

  return (
    <main className="min-h-screen bg-gray-950 animated-gradient">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Decorative blur orbs */}
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-60 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Brand Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Sparkles className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black gradient-text">
              UseHub.ai
            </h1>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4 leading-tight px-4"
          >
            Don&apos;t search for tools.
            <br />
            <span className="gradient-text">Search for results.</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto px-4"
          >
            The curated registry of AI tools for specific use cases.
            <br />
            <span className="text-sm text-gray-500">
              Zero latency • Action-first • Always updated
            </span>
          </motion.p>

          {/* Search Bar */}
          <SearchBar value={searchQuery} onChange={handleSearchChange} />

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="whitespace-nowrap font-medium">
                {tools.length} curated tools
              </span>
            </div>

            <div className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full" />

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="whitespace-nowrap font-medium">
                {categories.length} categories
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Pills & Price Filter */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          {/* Price Filter */}
          <div className="flex items-center justify-center gap-3 mb-6">
            {["Show All", "Free", "Paid", "Freemium"].map((price) => (
              <button
                key={price}
                onClick={() => setPriceFilter(price === "Show All" ? null : price)}
                className={`h-10 px-5 rounded-full font-bold text-sm transition-all duration-300 ${
                  (priceFilter === null && price === "Show All") || priceFilter === price
                    ? "bg-white text-gray-950 shadow-lg shadow-white/20"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300 border border-white/10"
                }`}
              >
                {price}
              </button>
            ))}
          </div>

          {/* Category Pills */}
          <CategoryPills
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />
        </div>
      </section>

      {/* Honor Roll - Editor's Choice (Featured Tools Only) */}
      {!searchQuery && !selectedCategory && featuredTools.length > 0 && (
        <section className="relative z-10 px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/30 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-bold text-yellow-500 uppercase tracking-wider">
                  2026 Elite - Editor&apos;s Choice
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white">
                The Honor Roll
              </h2>
              <p className="text-gray-400 mt-2">
                The absolute best tools that define 2026
              </p>
            </motion.div>

            {/* Featured Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full Directory Header */}
      {!searchQuery && !selectedCategory && (
        <section className="relative z-10 px-4 sm:px-6 lg:px-8 mb-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white/80">
              Full Directory
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Browse all {tools.length} tools across {categories.length} categories
            </p>
          </div>
        </section>
      )}

      {/* Results Section - Organized by Rankings */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Results count */}
          {(searchQuery || selectedCategory || priceFilter) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <p className="text-gray-400 text-sm">
                Found{" "}
                <span className="text-white font-bold text-lg">
                  {filteredTools.length}
                </span>{" "}
                {filteredTools.length === 1 ? "tool" : "tools"}
                {selectedCategory && (
                  <span className="text-purple-400">
                    {" "}
                    in {selectedCategory}
                  </span>
                )}
              </p>
            </motion.div>
          )}

          {/* No Results State */}
          {filteredTools.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-24"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gray-800/50 border border-gray-700 flex items-center justify-center">
                <SearchIcon className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">
                No tools found
              </h3>
              <p className="text-gray-500 mb-6">
                Try a different search term, category, or price filter
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                  setPriceFilter(null);
                }}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl transition-all duration-300"
              >
                Clear all filters
              </button>
            </motion.div>
          )}

          {/* Ranked Sections */}
          {filteredTools.length > 0 && (
            <div className="space-y-20">
              {/* The Elite */}
              {eliteTools.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    ⭐ The Elite
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {eliteTools.map((tool, index) => (
                      <ToolCard key={tool.id} tool={tool} index={index} />
                    ))}
                  </div>
                </div>
              )}

              {/* The Classics */}
              {classicTools.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    🏛️ The Classics
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classicTools.map((tool, index) => (
                      <ToolCard key={tool.id} tool={tool} index={index} />
                    ))}
                  </div>
                </div>
              )}

              {/* Open Source Heroes */}
              {openSourceTools.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    🔓 Open Source Heroes
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {openSourceTools.map((tool, index) => (
                      <ToolCard key={tool.id} tool={tool} index={index} />
                    ))}
                  </div>
                </div>
              )}

              {/* The Wild Card */}
              {wildCardTools.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    🃏 The Wild Card
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wildCardTools.map((tool, index) => (
                      <ToolCard key={tool.id} tool={tool} index={index} />
                    ))}
                  </div>
                </div>
              )}

              {/* Viral & Rising */}
              {viralTools.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    🔥 Viral & Rising
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {viralTools.map((tool, index) => (
                      <ToolCard key={tool.id} tool={tool} index={index} />
                    ))}
                  </div>
                </div>
              )}

              {/* Other Tools */}
              {otherTools.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    📚 More Tools
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherTools.map((tool, index) => (
                      <ToolCard key={tool.id} tool={tool} index={index} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            Built with{" "}
            <span className="text-purple-400 font-semibold">💜</span> for the
            AI community
          </p>
          <p className="text-gray-600 text-xs mt-2">
            <span className="gradient-text font-bold">UseHub.ai</span> • Where
            tasks meet tools
          </p>
        </div>
      </footer>
    </main>
  );
}
