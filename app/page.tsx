"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { Search, Zap, Star, MousePointer2, Trophy } from 'lucide-react';
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
  const [selectedPrice, setSelectedPrice] = useState('All');

  // Fix: Função para garantir que o clique nas Quick Actions funciona
  const handleQuickAction = (term: string) => {
    setSearchQuery(term);
    setSelectedCategory('All Tools');
    setSelectedPrice('All');
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const featuredTools = useMemo(() => tools.filter(t => t.featured), []);

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesCategory = selectedCategory === "All Tools" || tool.category === selectedCategory;
      const matchesPrice = selectedPrice === "All" || tool.pricing === selectedPrice;
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tool.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase())) ||
                           tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesPrice && matchesSearch;
    });
  }, [searchQuery, selectedCategory, selectedPrice]);

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 font-sans">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 text-center border-b border-slate-900">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Zap className="w-8 h-8 text-indigo-400" />
          <h1 className="text-4xl font-bold tracking-tight">UseHub.ai</h1>
        </div>

        <h2 className="text-6xl font-extrabold mb-8 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent leading-tight">
          The AI Bible 2026
        </h2>

        <div className="max-w-2xl mx-auto mb-10">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* 4) Quick Actions no topo */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {quickActions.map(action => (
            <button
              key={action.label}
              onClick={() => handleQuickAction(action.search)}
              className="px-5 py-2.5 rounded-xl bg-indigo-500/5 border border-indigo-500/20 text-sm font-medium hover:bg-indigo-500/10 hover:border-indigo-500/40 transition-all flex items-center gap-2 text-indigo-300"
            >
              <MousePointer2 className="w-3.5 h-3.5" /> {action.label}
            </button>
          ))}
        </div>

        {/* 4) Filtros logo abaixo das Quick Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-16 px-4">
          <CategoryPills categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
          <div className="flex bg-slate-900/50 p-1.5 rounded-xl border border-slate-800">
            {["All", "Free", "Paid"].map(p => (
              <button
                key={p}
                onClick={() => setSelectedPrice(p)}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${selectedPrice === p ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-500 hover:text-slate-300'}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* 1) Honor Roll com Estrelas e Badges fixos */}
        {searchQuery === '' && selectedCategory === 'All Tools' && (
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2.5 bg-amber-500/20 rounded-xl border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                <Trophy className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h2 className="text-3xl font-black italic tracking-tight">2026 ELITE</h2>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em]">Editor's Choice</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTools.map(tool => (
                <ToolCard key={`featured-${tool.id}`} tool={tool} />
              ))}
            </div>
            <div className="mt-20 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </main>
  );
}
