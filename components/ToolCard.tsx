import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  // Extrair domínio para o logo
  const domain = new URL(tool.url).hostname;
  const logoUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  return (
    <div className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(79,70,229,0.3)]">
      {/* Top Section: Star Rating and Badge */}
      <div className="absolute top-4 right-4 flex flex-col items-end gap-1.5 z-10">
        <div className="flex items-center gap-1 bg-slate-800/80 backdrop-blur px-2 py-1 rounded-lg border border-slate-700">
          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-bold text-slate-200">{tool.rating}</span>
        </div>
        {tool.badge && (
          <span className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[9px] font-black uppercase tracking-tighter">
            {tool.badge}
          </span>
        )}
      </div>

      {/* Header: Logo + Name */}
      <div className="flex items-center gap-3 mb-1">
        <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex-shrink-0 overflow-hidden flex items-center justify-center p-1">
          <img src={logoUrl} alt={tool.name} className="w-full h-full object-contain" onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/bottts/svg?seed=' + tool.name;
          }} />
        </div>
        <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors pr-16 truncate">
          {tool.name}
        </h3>
      </div>

      {/* Category Label */}
      <div className="text-[10px] font-bold text-indigo-400/80 uppercase tracking-[0.2em] mb-3 ml-[52px]">
        {tool.category}
      </div>

      <p className="text-slate-400 text-sm leading-snug mb-6 h-10 line-clamp-2">
        {tool.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
        <span className={`text-[10px] font-black uppercase tracking-widest ${tool.pricing === 'Free' ? 'text-emerald-400' : 'text-slate-500'}`}>
          {tool.pricing === 'Free' ? 'FREE' : 'PAID'}
        </span>

        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all transform group-hover:translate-x-1"
        >
          Visit <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export default ToolCard;
