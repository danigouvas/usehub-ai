"use client";
import React, { useState, useMemo } from 'react';
import { Search, Zap, Trophy, MousePointer2, Flame, Unlock, History, List, BarChart3 } from 'lucide-react';
import { tools } from '../data/tools';
import ToolCard from '../components/ToolCard';
import SearchBar from '../components/SearchBar';
import CategoryPills from '../components/CategoryPills';

const categories = ["All Tools", "Intelligence", "Agents", "Creation", "Build", "Assistants"];
const quickActions = [
  { label: "Build a Website", search: "website" },
  { label: "Hire an Agent", search: "agent" },
  { label: "Generate Video", search: "generate video" },
  { label: "Summarize PDF", search: "summarize" },
  { label: "Design Logo", search: "logo" }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Tools');
  const [filterType, setFilterType] = useState('All');

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setSearchQuery(''); // Clear search when changing category
    setFilterType('All');
  };

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

  // Power Rankings based on scores (Top 3 per Category)
  const rankingData = useMemo(() => {
    return categories.filter(c => c !== "All Tools").map(cat => ({
      category: cat,
      top: tools.filter(t => t.category === cat).sort((a,b) => (b.score || 0) - (a.score || 0)).slice(0, 3)
    }));
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 font-sans">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 text-center border-b border-slate-900">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Zap className="w-8 h-8 text-indigo-400" />
          <h1 className="text-4xl font-black tracking-tight uppercase">UseHub.ai</h1>
        </div>

        <h2 className="text-7xl font-black mb-8 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent leading-tight italic">
          THE AI BIBLE 2026
        </h2>

        <div className="max-w-2xl mx-auto mb-10">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Quick Actions (Bubble Pills) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {quickActions.map(action => (
            <button key={action.label} onClick={() => handleQuickAction(action.search)} className="px-5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm font-bold hover:border-indigo-500 transition-all flex items-center gap-2 hover:bg-indigo-500/5">
              <MousePointer2 className="w-3.5 h-3.5" /> {action.label}
            </button>
          ))}
        </div>

        {/* Smart Filter Menu */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-16">
          <CategoryPills categories={categories} selected={selectedCategory} onSelect={handleCategoryChange} />
          <div className="flex bg-slate-900/80 p-1 rounded-xl border border-slate-800">
            <button onClick={() => setFilterType('All')} className={`px-4 py-1.5 rounded-lg text-[10px] font-black tracking-widest ${filterType === 'All' ? 'bg-indigo-600' : 'text-slate-500'}`}>ALL</button>
            <button onClick={() => setFilterType('Trending')} className={`px-4 py-1.5 rounded-lg text-[10px] font-black tracking-widest flex items-center gap-1.5 ${filterType === 'Trending' ? 'bg-orange-600 text-white' : 'text-slate-500'}`}><Flame className="w-3 h-3"/> TRENDING</button>
            <button onClick={() => setFilterType('OpenSource')} className={`px-4 py-1.5 rounded-lg text-[10px] font-black tracking-widest flex items-center gap-1.5 ${filterType === 'OpenSource' ? 'bg-emerald-600 text-white' : 'text-slate-500'}`}><Unlock className="w-3 h-3"/> OPEN SOURCE</button>
            <button onClick={() => setFilterType('Classic')} className={`px-4 py-1.5 rounded-lg text-[10px] font-black tracking-widest flex items-center gap-1.5 ${filterType === 'Classic' ? 'bg-blue-600 text-white' : 'text-slate-500'}`}><History className="w-3 h-3"/> CLASSIC</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Honor Roll Section (Featured Elite) */}
        {searchQuery === '' && selectedCategory === 'All Tools' && filterType === 'All' && (
          <section className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <Trophy className="w-6 h-6 text-amber-500" />
              <h2 className="text-2xl font-black uppercase tracking-[0.3em] text-amber-500">2026 Honor Roll</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map(tool => <ToolCard key={`featured-${tool.id}`} tool={tool} />)}
            </div>
            <div className="mt-24 h-px bg-slate-900"></div>
          </section>
        )}

        {/* Global Registry Title */}
        <div className="flex items-center gap-3 mb-10">
          <List className="w-6 h-6 text-indigo-400" />
          <h2 className="text-2xl font-black uppercase tracking-[0.3em] text-slate-100">Global Registry</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {filteredTools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
        </div>

        {/* POWER RANKINGS TABLE (LMARENA BASED) */}
        <section className="mt-40 border-t border-slate-900 pt-20 pb-32">
          <div className="flex flex-col items-center text-center mb-16">
            <BarChart3 className="w-12 h-12 text-indigo-400 mb-4" />
            <h2 className="text-5xl font-black italic tracking-tighter text-white mb-4">Official 2026 Power Rankings</h2>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Powered by LMARENA (LMSYS) Global ELO</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900/80 border-b border-slate-800 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                  <th className="px-8 py-8">Category</th>
                  <th className="px-8 py-8">Rank #1 (Champion)</th>
                  <th className="px-8 py-8">Rank #2 (Challenger)</th>
                  <th className="px-8 py-8">Rank #3 (Rising)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {rankingData.map(row => (
                  <tr key={row.category} className="hover:bg-indigo-500/5 transition-all group">
                    <td className="px-8 py-8 font-black text-indigo-400 text-sm tracking-widest">{row.category}</td>
                    {row.top.map((t, idx) => (
                      <td key={t.id} className="px-8 py-8">
                        <div className="flex flex-col">
                          <span className={`text-sm font-black ${idx === 0 ? 'text-white' : 'text-slate-300'}`}>{t.name}</span>
                          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">Score: {t.score}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
