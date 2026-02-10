"use client";
import React, { useState, useMemo } from 'react';
import { Search, Zap, Trophy, MousePointer2, Star, Sparkles, Flame, Unlock, History } from 'lucide-react';
import { tools } from '../data/tools';
import ToolCard from '../components/ToolCard';
import SearchBar from '../components/SearchBar';
import CategoryPills from '../components/CategoryPills';

const categories = ["All Tools", "Chat", "Code", "Image", "Video", "Productivity", "Audio", "Writing", "3D"];
const quickActions = [
  { label: "Create Logo", search: "logo" },
  { label: "Write Code", search: "code" },
  { label: "Summarize PDF", search: "summarize" },
  { label: "Generate Video", search: "video" },
  { label: "Fix Grammar", search: "grammar" }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Tools');
  const [filterType, setFilterType] = useState('All'); // All, OpenSource, Trending, Classic

  const handleQuickAction = (term: string) => {
    setSearchQuery(term);
    setSelectedCategory('All Tools');
    setFilterType('All');
  };

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesCategory = selectedCategory === "All Tools" || tool.category === selectedCategory;
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tool.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase())) ||
                           tool.description.toLowerCase().includes(searchQuery.toLowerCase());

      if (filterType === 'OpenSource') return matchesCategory && matchesSearch && tool.isOpenSource;
      if (filterType === 'Trending') return matchesCategory && matchesSearch && tool.isTrending;
      if (filterType === 'Classic') return matchesCategory && matchesSearch && tool.isClassic;

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory, filterType]);

  const featured = tools.filter(t => t.featured);

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 font-sans">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 text-center">
        <h1 className="text-6xl font-black mb-8 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
          The AI Bible 2026
        </h1>

        <div className="max-w-2xl mx-auto mb-10">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {quickActions.map(action => (
            <button key={action.label} onClick={() => handleQuickAction(action.search)} className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm hover:border-indigo-500 transition-all flex items-center gap-2">
              <MousePointer2 className="w-3 h-3" /> {action.label}
            </button>
          ))}
        </div>

        {/* Novos Filtros: Open Source, Trending, Classic */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 border-t border-slate-900 pt-8">
          <CategoryPills categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
          <div className="flex bg-slate-900/80 p-1 rounded-xl border border-slate-800">
            <button onClick={() => setFilterType('All')} className={`px-4 py-1.5 rounded-lg text-xs font-bold ${filterType === 'All' ? 'bg-indigo-600' : ''}`}>ALL</button>
            <button onClick={() => setFilterType('Trending')} className={`px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 ${filterType === 'Trending' ? 'bg-orange-600' : ''}`}><Flame className="w-3 h-3"/> TRENDING</button>
            <button onClick={() => setFilterType('OpenSource')} className={`px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 ${filterType === 'OpenSource' ? 'bg-emerald-600' : ''}`}><Unlock className="w-3 h-3"/> OPEN SOURCE</button>
            <button onClick={() => setFilterType('Classic')} className={`px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 ${filterType === 'Classic' ? 'bg-blue-600' : ''}`}><History className="w-3 h-3"/> CLASSIC</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Honor Roll (Elite Section) */}
        {searchQuery === '' && selectedCategory === 'All Tools' && filterType === 'All' && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-6 h-6 text-amber-500" />
              <h2 className="text-2xl font-black uppercase tracking-widest text-amber-500">2026 Elite</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map(tool => <ToolCard key={tool.id} tool={tool} />)}
            </div>
            <div className="mt-16 h-px bg-slate-900"></div>
          </section>
        )}

        {/* Grid de Resultados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
        </div>
      </div>
    </main>
  );
}
