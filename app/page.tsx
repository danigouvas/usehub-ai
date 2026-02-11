"use client";
import React, { useState, useMemo } from 'react';
import { Zap, Trophy, BarChart3, List } from 'lucide-react';
import { tools } from '../data/tools';
import ToolCard from '../components/ToolCard';
import SearchBar from '../components/SearchBar';
import CategoryPills from '../components/CategoryPills';

const categories = ["All Tools", "Text", "Agents", "Video", "Design", "Audio", "Apps & Websites"];
const quickActions = [
  { label: "Build a Website", action: () => "Apps & Websites" },
  { label: "Write Code", action: () => "Apps & Websites" },
  { label: "Make a Movie", action: () => "Video" },
  { label: "Create Song", action: () => "Audio" },
  { label: "Find Info", action: () => "Text" }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Tools');
  const [priceFilter, setPriceFilter] = useState('All');

  const scrollToRanking = () => document.getElementById('ranking-table')?.scrollIntoView({ behavior: 'smooth' });

  const handleQuickAction = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery('');
  };

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesCategory = selectedCategory === "All Tools" || tool.category === selectedCategory;
      const matchesPrice = priceFilter === "All" || tool.pricing === priceFilter;
      const query = searchQuery.toLowerCase();
      const matchesSearch = tool.name.toLowerCase().includes(query) ||
                           tool.keywords.some(k => k.toLowerCase().includes(query)) ||
                           tool.description.toLowerCase().includes(query) ||
                           tool.category.toLowerCase().includes(query);
      return matchesCategory && matchesPrice && matchesSearch;
    });
  }, [searchQuery, selectedCategory, priceFilter]);

  const rankingData = useMemo(() => {
    return categories.filter(c => c !== "All Tools").map(cat => ({
      category: cat,
      top: tools.filter(t => t.category === cat).sort((a,b) => b.score - a.score).slice(0, 3)
    }));
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 font-sans">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center border-b border-slate-900">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2"><Zap className="w-8 h-8 text-indigo-400" /><h1 className="text-2xl font-black uppercase italic tracking-tighter">UseHub.ai</h1></div>
          <button onClick={scrollToRanking} className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs font-bold hover:border-indigo-500 transition-all flex items-center gap-2"><BarChart3 className="w-4 h-4 text-indigo-400" /> VIEW RANKINGS</button>
        </div>

        <h2 className="text-8xl font-black mb-12 bg-gradient-to-b from-white to-slate-600 bg-clip-text text-transparent italic leading-[0.9]">THE AI BIBLE 2026</h2>
        <div className="max-w-2xl mx-auto mb-12"><SearchBar value={searchQuery} onChange={setSearchQuery} /></div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {quickActions.map(action => (
            <button key={action.label} onClick={() => handleQuickAction(action.action())} className="px-6 py-3 rounded-2xl bg-slate-900/50 border border-slate-800 text-xs font-black uppercase tracking-widest hover:border-indigo-500 transition-all">{action.label}</button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-slate-900">
          <CategoryPills categories={categories} selected={selectedCategory} onSelect={(c) => {setSelectedCategory(c); setSearchQuery('');}} />
          <div className="flex bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            {['All', 'Free', 'Paid'].map(p => (
              <button key={p} onClick={() => setPriceFilter(p)} className={`px-6 py-2 rounded-lg text-[10px] font-black tracking-widest uppercase transition-all ${priceFilter === p ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}>{p}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {searchQuery === '' && selectedCategory === 'All Tools' && priceFilter === 'All' && (
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-12"><Trophy className="w-8 h-8 text-amber-500" /><div><h2 className="text-4xl font-black italic tracking-tighter">The Honor Roll</h2><p className="text-slate-500 text-xs font-black uppercase tracking-[0.4em]">Elite Choice</p></div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">{tools.filter(t => t.featured).map(tool => <ToolCard key={`elite-${tool.id}`} tool={tool} />)}</div>
          </section>
        )}

        <div className="flex items-center gap-4 mb-12 opacity-50"><List className="w-6 h-6" /><h3 className="text-xl font-black uppercase tracking-[0.3em]">Global Registry</h3></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-48">{filteredTools.map(tool => <ToolCard key={tool.id} tool={tool} />)}</div>

        <section id="ranking-table" className="mt-40 border-t border-slate-900 pt-32 pb-48">
          <div className="text-center mb-20"><BarChart3 className="w-16 h-16 text-indigo-500 mx-auto mb-6" /><h2 className="text-6xl font-black italic tracking-tighter mb-4 uppercase">Power Rankings</h2><p className="text-slate-500 font-black uppercase tracking-[0.5em] text-xs italic">Verified by LMARENA</p></div>
          <div className="bg-[#0b1121]/80 border border-slate-800 rounded-[2.5rem] overflow-hidden backdrop-blur-3xl shadow-2xl">
            <table className="w-full text-left">
              <thead><tr className="bg-slate-900/50 border-b border-slate-800 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500"><th className="px-10 py-10">Category</th><th className="px-10 py-10">🥇 Rank #1</th><th className="px-10 py-10">🥈 Rank #2</th><th className="px-10 py-10">🥉 Rank #3</th></tr></thead>
              <tbody className="divide-y divide-slate-800/50">
                {rankingData.map(row => (
                  <tr key={row.category} className="hover:bg-indigo-500/5 transition-all"><td className="px-10 py-10 font-black text-indigo-400 text-sm tracking-widest">{row.category}</td>
                    {row.top.map((t, idx) => (<td key={t.id} className="px-10 py-10"><div className="flex flex-col"><span className={`text-base font-black ${idx === 0 ? 'text-white' : 'text-slate-400'}`}>{t.name}</span></div></td>))}
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
