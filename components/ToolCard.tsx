import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(79,70,229,0.3)]">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${tool.color} bg-opacity-20 border border-${tool.color.split('-')[1]}-500/30`}>
          <div className="w-6 h-6 text-white opacity-90">🚀</div>
        </div>
        <div className="flex flex-col items-end gap-2">
          {tool.badge && (
            <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold uppercase tracking-wider">
              {tool.badge}
            </span>
          )}
          <div className="flex items-center gap-1 bg-slate-800/50 px-2 py-1 rounded-lg border border-slate-700">
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            <span className="text-xs font-bold text-slate-200">{tool.rating}</span>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
        {tool.name}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
        {tool.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
        <span className={`text-xs font-bold uppercase tracking-widest ${tool.pricing === 'Free' ? 'text-emerald-400' : 'text-slate-500'}`}>
          {tool.pricing === 'Free' ? 'FREE' : 'PAID'}
        </span>

        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all transform group-hover:translate-x-1"
        >
          Visit <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ToolCard;
