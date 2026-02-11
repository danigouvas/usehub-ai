import React from 'react';
import { ArrowUpRight, Flame, Unlock, History } from 'lucide-react';
import { Tool } from '../types';

export default function ToolCard({ tool }: { tool: Tool }) {
  const domain = new URL(tool.url).hostname;
  const logoUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  // Separar "Best for:" do resto da descrição para dar destaque
  const descriptionParts = tool.description.split("Best for:");
  const mainDesc = descriptionParts.length > 1 ? descriptionParts[1] : tool.description;

  return (
    <div className="group relative bg-[#111827]/80 backdrop-blur-xl border border-slate-800 rounded-[2rem] p-6 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-[0_0_40px_-15px_rgba(79,70,229,0.4)] flex flex-col h-full">
      {tool.badge && (
        <div className="absolute -top-3 right-6 px-3 py-1.5 bg-[#F59E0B] rounded-lg shadow-xl z-20">
          <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">{tool.badge}</span>
        </div>
      )}

      <div className="flex items-center gap-4 mb-5">
        <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 p-2.5 flex-shrink-0">
          <img src={logoUrl} alt="" className="w-full h-full object-contain" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-tight">{tool.name}</h3>
          <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest opacity-80">{tool.category}</span>
        </div>
      </div>

      <div className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
        {descriptionParts.length > 1 && (
          <span className="block text-amber-500 font-bold text-xs uppercase tracking-wider mb-1">Best for:</span>
        )}
        {mainDesc.trim()}
      </div>

      <div className="flex gap-2 mb-6 h-5">
        {tool.isTrending && <span className="flex items-center gap-1 text-[9px] font-bold text-orange-400 uppercase tracking-wider"><Flame className="w-3 h-3"/> Trending</span>}
        {tool.isOpenSource && <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-400 uppercase tracking-wider"><Unlock className="w-3 h-3"/> Open Source</span>}
        {tool.isClassic && <span className="flex items-center gap-1 text-[9px] font-bold text-blue-400 uppercase tracking-wider"><History className="w-3 h-3"/> Classic</span>}
      </div>

      <div className="flex items-center justify-between pt-5 border-t border-slate-800/50">
        {/* Badge Free/Paid Sólido */}
        <span className={`px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${tool.pricing === 'Free' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-700/30 text-slate-400 border border-slate-700'}`}>
          {tool.pricing}
        </span>
        <a href={tool.url} target="_blank" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
          Visit <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
