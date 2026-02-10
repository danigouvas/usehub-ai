"use client";
import React, { useState, useMemo } from 'react';
import { Search, Globe, Filter, Star, Info, MessageSquare, Zap, Code, Image, Video, Music, BookOpen, Layers, MousePointer2 } from 'lucide-react';
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

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesCategory = selectedCategory === "All Tools" || tool.category === selectedCategory;
      const matchesPrice = selectedPrice === "All" || tool.pricing === selectedPrice;
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tool.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesPrice && matchesSearch;
    });
  }, [searchQuery, selectedCategory, selectedPrice]);

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 font-sans">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="p-2 bg-indigo-500/20 rounded-xl border border-indigo-500/30">
            <Zap className="w-8 h-8 text-indigo-400" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">UseHub.ai</h1>
        </div>

        <h2 className="text-6xl font-extrabold mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          Don't search for tools.<br/>Search for results.
        </h2>

        <div className="max-w-2xl mx-auto mb-8">
          <SearchBar value={searchQuery} onChange={(v) => {
            setSearchQuery(v);
            if (v !== '') setSelectedCategory('All Tools');
          }} />
        </div>

        {/* Quick Actions (Noob Mode) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {quickActions.map(action => (
            <button
              key={action.label}
              onClick={() => {setSearchQuery(action.search); setSelectedCategory('All Tools');}}
              className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-sm hover:border-indigo-500 transition-all flex items-center gap-2"
            >
              <MousePointer2 className="w-3 h-3" /> {action.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <CategoryPills
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <div className="flex bg-slate-900/50 p-1 rounded-xl border border-slate-800">
            {["All", "Free", "Paid"].map(p => (
              <button
                key={p}
                onClick={() => setSelectedPrice(p)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${selectedPrice === p ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              >
                {p === "Free" ? "Free to Start" : p}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8 text-slate-400 text-sm flex items-center gap-4">
          <span>Found {filteredTools.length} tools</span>
          <div className="h-1 w-1 bg-slate-700 rounded-full"></div>
          <span>Updated for 2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </main>
  );
}
