import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Tool } from '../types';

export default function ToolCard({ tool }: { tool: Tool }) {
  const domain = new URL(tool.url).hostname;
  const logoUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  return (
    <div className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300">
      {/* Badge de Ranking (Amarelo) */}
      {tool.badge && (
        <div className="absolute -top-3 left-6 px-3 py-1 bg-amber-500 rounded-md shadow-lg z-20 shadow-amber-500/20">
          <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter flex items-center gap-1">
            <Trophy className="w-3 h-3" /> {tool.badge}
          </span>
        </div>
      )}

      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 p-2 overflow-hidden flex items-center justify-center">
            <img src={logoUrl} alt="" className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white leading-tight">{tool.name}</h3>
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">{tool.category}</span>
          </div>
        </div>

        {tool.subBadge && (
          <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-400 text-[9px] font-bold uppercase tracking-widest">
            {tool.subBadge}
          </span>
        )}
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
        {tool.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
        <span className={`text-[10px] font-black uppercase tracking-widest ${tool.pricing === 'Free' ? 'text-emerald-400' : 'text-slate-500'}`}>
          {tool.pricing}
        </span>
        <a href={tool.url} target="_blank" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all transform group-hover:translate-x-1">
          Visit <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

function Trophy({ className }: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>;
}
