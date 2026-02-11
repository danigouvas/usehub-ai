"use client";
import React, { useState, useMemo } from 'react';
import { Zap, Trophy, MousePointer2, BarChart3, List } from 'lucide-react';
import { tools } from '../data/tools';
import ToolCard from '../components/ToolCard';
import SearchBar from '../components/SearchBar';
import CategoryPills from '../components/CategoryPills';

const categories = [
  "All Tools",
  "Reasoning & Research",
  "Autonomous Agents",
  "Video & Cinema",
  "Image & Design",
  "Audio & Music",
  "Apps & Websites",
  "AI Assistants"
];

const quickActions = [
  { label: "Design Logo", search: "logo" },
  { label: "Build a Website", search: "website" },
  { label: "Hire an Agent", search: "agent" },
  { label: "Generate Video", search: "video" },
  { label: "Summarize PDF", search: "summarize" }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Tools');
  const [filterType, setFilterType] = useState('All');

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesCategory = selectedCategory === "All Tools" || tool.category === selectedCategory;
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tool.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase())) ||
                           tool.description.toLowerCase().includes(searchQuery.toLowerCase());

      if (filterType === 'Trending') return matchesCategory && matchesSearch && tool.isTrending;
      if (filterType === 'OpenSource') return matchesCategory && matchesSearch && tool.isOpenSource;
      if (filterType === 'Classic') return matchesCategory && matchesSearch && tool.isClassic;
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory, filterType]);

  const rankingData = useMemo(() => {
    return categories.filter(c => c !== "All Tools").map(cat => ({
      category: cat,
      top: tools.filter(t => t.category === cat).sort((a,b) => b.score - a.score).slice(0, 3)
    }));
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 font-sans">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center border-b border-slate-900">
        <div className="flex items-center justify-center gap-2 mb-8 animate-pulse">
          <Zap className="w-10 h-10 text-indigo-400" />
          <h1 className="text-4xl font-black uppercase italic tracking-tighter">UseHub.ai</h1>
        </div>
        <h2 className="text-8xl font-black mb-12 bg-gradient-to-b from-white via-white to-slate-600 bg-clip-text text-transparent italic leading-[0.9]">
          THE AI BIBLE 2026
        </h2>
        <div className="max-w-2xl mx-auto mb-12">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {quickActions.map(action => (
            <button key={action.label} onClick={() => {setSearchQuery(action.search); setSelectedCategory('All Tools');}} className="px-6 py-3 rounded-2xl bg-slate-900/50 border border-slate-800 text-xs font-black uppercase tracking-widest hover:border-indigo-500 transition-all">
              {action.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-slate-900">
          <CategoryPills categories={categories} selected={selectedCategory} onSelect={(c) => {setSelectedCategory(c); setSearchQuery('');}} />
          <div className="flex bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 overflow-x-auto max-w-full">
            {['All', 'Trending', 'OpenSource', 'Classic'].map(type => (
              <button key={type} onClick={() => setFilterType(type)} className={`px-5 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all whitespace-nowrap ${filterType === type ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}>
                {type === 'OpenSource' ? 'Open Source' : type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {searchQuery === '' && selectedCategory === 'All Tools' && filterType === 'All' && (
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <Trophy className="w-8 h-8 text-amber-500" />
              <div><h2 className="text-4xl font-black italic tracking-tighter">The Honor Roll</h2><p className="text-slate-500 text-xs font-black uppercase tracking-[0.4em]">Elite Choice</p></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {tools.filter(t => t.featured).map(tool => <ToolCard key={`elite-${tool.id}`} tool={tool} />)}
            </div>
          </section>
        )}

        <div className="flex items-center gap-4 mb-12 opacity-50"><List className="w-6 h-6" /><h3 className="text-xl font-black uppercase tracking-[0.3em]">2026 Global Registry</h3></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-48">
          {filteredTools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
        </div>

        {/* RANKING TABLE NO FUNDO */}
        <section className="mt-40 border-t border-slate-900 pt-32 pb-48">
          <div className="text-center mb-20">
            <BarChart3 className="w-16 h-16 text-indigo-500 mx-auto mb-6" />
            <h2 className="text-6xl font-black italic tracking-tighter mb-4 uppercase">Official 2026 Power Rankings</h2>
            <p className="text-slate-500 font-black uppercase tracking-[0.5em] text-xs italic">Verified by LMARENA (LMSYS)</p>
          </div>
          <div className="bg-[#0b1121]/80 border border-slate-800 rounded-[2.5rem] overflow-hidden backdrop-blur-3xl shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-900/50 border-b border-slate-800 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
                    <th className="px-10 py-10">Category</th>
                    <th className="px-10 py-10">#1 Champion</th>
                    <th className="px-10 py-10">#2 Challenger</th>
                    <th className="px-10 py-10">#3 Rising</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {rankingData.map(row => (
                    <tr key={row.category} className="hover:bg-indigo-500/5 transition-all group">
                      <td className="px-10 py-10 font-black text-indigo-400 text-sm tracking-widest">{row.category}</td>
                      {row.top.map((t, idx) => (
                        <td key={t.id} className="px-10 py-10">
                          <div className="flex flex-col">
                            <span className={`text-base font-black ${idx === 0 ? 'text-white' : 'text-slate-400'}`}>{t.name}</span>
                            <span className="text-[9px] font-bold text-slate-600 uppercase">Score: {t.score}</span>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
