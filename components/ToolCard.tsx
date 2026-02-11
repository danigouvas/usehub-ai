import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Tool } from '../types';

export default function ToolCard({ tool }: { tool: Tool }) {
  const domain = new URL(tool.url).hostname;
  const logoUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  return (
    <div className="group relative bg-[#111827]/80 backdrop-blur-xl border border-slate-800 rounded-[2rem] p-6 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-[0_0_40px_-15px_rgba(79,70,229,0.4)]">
      {/* Yellow Elite Badge - Positioned Absolutely */}
      {tool.badge && (
        <div className="absolute -top-3 right-6 px-3 py-1.5 bg-[#F59E0B] rounded-lg shadow-xl z-20">
          <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">
            {tool.badge}
          </span>
        </div>
      )}

      {/* Logo + Name Horizontal Layout */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 p-2.5 flex-shrink-0">
          <img
            src={logoUrl}
            alt=""
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/bottts/svg?seed=${tool.name}`;
            }}
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
            {tool.name}
          </h3>
          <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">
            {tool.category}
          </span>
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-8 h-12 line-clamp-2">
        {tool.description}
      </p>

      <div className="flex items-center justify-between pt-6 border-t border-slate-800/50">
        <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${tool.pricing === 'Free' ? 'text-emerald-400' : 'text-slate-500'}`}>
          {tool.pricing}
        </span>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
        >
          Visit <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
