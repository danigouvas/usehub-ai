"use client";
import React, { useState, useMemo } from 'react';
import { Zap, Trophy, MousePointer2, BarChart3, List, ChevronDown } from 'lucide-react';
import { tools } from '../data/tools';
import ToolCard from '../components/ToolCard';
import SearchBar from '../components/SearchBar';
import CategoryPills from '../components/CategoryPills';

const categories = ["All Tools", "Agents", "Video", "Image", "Audio", "Apps & Websites", "Assistants"];
const quickActions = [
  { label: "Build a Website", search: "build a website" },
  { label: "Hire an Agent", search: "hire an agent" },
  { label: "Generate Video", search: "generate video" },
  { label: "Summarize PDF", search: "summarize" },
  { label: "Design Logo", search: "design logo" }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Tools');
  const [filterType, setFilterType] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');

  const scrollToRanking = () => document.getElementById('ranking-table')?.scrollIntoView({ behavior: 'smooth' });

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesCategory = selectedCategory === "All Tools" || tool.category === selectedCategory;
      const matchesPrice = priceFilter === "All" || tool.pricing === priceFilter;
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tool.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesType = filterType === 'All' ||
                         (filterType === 'Trending' && tool.isTrending) ||
                         (filterType === 'OpenSource' && tool.isOpenSource) ||
                         (filterType === 'Classic' && tool.isClassic);

      return matchesCategory && matchesPrice && matchesSearch && matchesType;
    });
  }, [searchQuery, selectedCategory, filterType, priceFilter]);

  // Power Ranking Categories (LMARENA Style)
  const arenaCategories = ["Text", "Code", "Vision", "Text-to-Image", "Text-to-Video"];
  const rankingData = arenaCategories.map(cat => ({
    name: cat,
    top: tools.sort((a,b) => b.score - a.score).slice(0, 3) // Simulado para o exemplo
  }));

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 font-sans">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-indigo-400" />
            <h1 className="text-2xl font-black uppercase italic tracking-tighter">UseHub.ai</h1>
          </div>
          <button onClick={scrollToRanking} className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs font-bold hover:border-indigo-500 transition-all">
            <BarChart3 className="w-4 h-4 text-indigo-400" /> VIEW RANKINGS
          </button>
        </div>

        <h2 className="text-8xl font-black mb-12 bg-gradient-to-b from-white to-slate-600 bg-clip-text text-transparent italic leading-[0.9]">
          THE AI BIBLE 2026
        </h2>

        <div className="max-w-2xl mx-auto mb-12"><SearchBar value={searchQuery} onChange={setSearchQuery} /></div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {quickActions.map(action => (
            <button key={action.label} onClick={() => {setSearchQuery(action.search); setSelectedCategory('All Tools');}} className="px-6 py-3 rounded-2xl bg-slate-900/50 border border-slate-800 text-xs font-black uppercase tracking-widest hover:border-indigo-500 transition-all">
              {action.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-slate-900">
          <CategoryPills categories={categories} selected={selectedCategory} onSelect={(c) => {setSelectedCategory(c); setSearchQuery('');}} />

          <div className="flex flex-wrap justify-center gap-2">
            <div className="flex bg-slate-900/80 p-1 rounded-xl border border-slate-800">
              {['All', 'Trending', 'OpenSource', 'Classic'].map(type => (
                <button key={type} onClick={() => setFilterType(type)} className={`px-4 py-1.5 rounded-lg text-[9px] font-black tracking-widest uppercase transition-all ${filterType === type ? 'bg-indigo-600 text-white' : 'text-slate-500'}`}>
                  {type === 'OpenSource' ? 'Open Source' : type}
                </button>
              ))}
            </div>
            <div className="flex bg-slate-900/80 p-1 rounded-xl border border-slate-800">
              {['All', 'Free', 'Paid'].map(p => (
                <button key={p} onClick={() => setPriceFilter(p)} className={`px-4 py-1.5 rounded-lg text-[9px] font-black tracking-widest uppercase transition-all ${priceFilter === p ? 'bg-emerald-600 text-white' : 'text-slate-500'}`}>
                  {p}
                </button>
              ))}
            </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-48">
          {filteredTools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
        </div>

        <section id="ranking-table" className="mt-40 border-t border-slate-900 pt-32 pb-48">
          <div className="text-center mb-20">
            <BarChart3 className="w-16 h-16 text-indigo-500 mx-auto mb-6" />
            <h2 className="text-6xl font-black italic tracking-tighter mb-4 uppercase">LMARENA Power Rankings</h2>
            <p className="text-slate-500 font-black uppercase tracking-[0.5em] text-xs italic">Global ELO Verified</p>
          </div>
          <div className="bg-[#0b1121]/80 border border-slate-800 rounded-[2.5rem] overflow-hidden backdrop-blur-3xl shadow-2xl">
            <table className="w-full text-left">
              <thead><tr className="bg-slate-900/50 border-b border-slate-800 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500"><th className="px-10 py-10">Arena Type</th><th className="px-10 py-10">Champion</th><th className="px-10 py-10">Challenger</th><th className="px-10 py-10">Rising</th></tr></thead>
              <tbody className="divide-y divide-slate-800/50">
                {rankingData.map(row => (
                  <tr key={row.name} className="hover:bg-indigo-500/5 transition-all"><td className="px-10 py-10 font-black text-indigo-400 text-sm tracking-widest">{row.name}</td>
                    {row.top.map((t, idx) => (<td key={t.id} className="px-10 py-10"><div className="flex flex-col"><span className={`text-base font-black ${idx === 0 ? 'text-white' : 'text-slate-400'}`}>{t.name}</span><span className="text-[9px] font-bold text-slate-600 uppercase">Score: {t.score.toFixed(1)}</span></div></td>))}
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
