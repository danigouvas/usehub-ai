import { Tool } from '../types';

export const tools: Tool[] = [
  // --- AGENTS ---
  { id: "mariner", name: "Project Mariner", description: "Google's autonomous browser agent. Executes complex web tasks for you.", category: "Agents", url: "https://google.com", pricing: "Paid", featured: true, badge: "🚀 Next-Gen", color: "bg-indigo-600", keywords: ["agent", "browser", "task", "hire an agent"], score: 4.9 },
  { id: "manus", name: "Manus AI", description: "General-purpose agent that executes full workflows across applications seamlessly.", category: "Agents", url: "https://manus.ai", pricing: "Paid", featured: false, isTrending: true, color: "bg-slate-900", keywords: ["agent", "workflow", "hire an agent"], score: 4.8 },
  { id: "relevance", name: "Relevance AI", description: "Build and deploy an AI workforce to handle sales and research autonomously.", category: "Agents", url: "https://relevance.ai", pricing: "Free", featured: false, color: "bg-purple-600", keywords: ["agent", "workforce", "hire an agent"], score: 4.7 },
  { id: "n8n", name: "n8n", description: "Connect agents to 400+ apps with powerful node-based workflow logic.", category: "Agents", url: "https://n8n.io", pricing: "Free", isOpenSource: true, color: "bg-red-500", keywords: ["agent", "automation", "hire an agent"], score: 4.6 },

  // --- VIDEO ---
  { id: "sora-2", name: "Sora 2", description: "OpenAI's cinematic engine. Generates hyper-realistic 4K video from text prompts.", category: "Video", url: "https://openai.com", pricing: "Paid", featured: true, badge: "🎬 Cinema King", color: "bg-pink-600", keywords: ["video", "generate video"], score: 4.9 },
  { id: "kling-2", name: "Kling 2.6", description: "Professional cinematic video with advanced physics and fluid movements.", category: "Video", url: "https://klingai.com", pricing: "Free", featured: false, isTrending: true, color: "bg-indigo-800", keywords: ["video", "generate video"], score: 4.8 },
  { id: "veo-3", name: "Google Veo 3", description: "Hollywood-grade video generation with unmatched temporal consistency.", category: "Video", url: "https://google.com", pricing: "Paid", featured: false, isTrending: true, color: "bg-red-600", keywords: ["video", "google", "generate video"], score: 4.8 },
  { id: "hailuo", name: "Hailuo AI", description: "Fast, creative video generation with unique scene transitions and effects.", category: "Video", url: "https://hailuo.ai", pricing: "Free", featured: false, color: "bg-blue-600", keywords: ["video", "generate video"], score: 4.7 },

  // --- IMAGE ---
  { id: "nano-banana", name: "Nano Banana", description: "Google's pixel-perfect visual engine. Highest prompt adherence in the industry.", category: "Image", url: "https://google.com", pricing: "Free", featured: true, badge: "🎨 Best Visuals", color: "bg-purple-600", keywords: ["image", "design", "logo", "visuals", "design logo"], score: 4.9 },
  { id: "flux-2", name: "Flux.2 Pro", description: "The open-weight king for photorealism and perfect typography in images.", category: "Image", url: "https://flux.ai", pricing: "Free", featured: false, isOpenSource: true, color: "bg-orange-500", keywords: ["image", "logo", "design logo"], score: 4.8 },
  { id: "midjourney-7", name: "Midjourney v7", description: "Highest quality artistic image generation with precise 3D controls.", category: "Image", url: "https://midjourney.com", pricing: "Paid", featured: false, isClassic: true, color: "bg-slate-700", keywords: ["image", "art", "design logo"], score: 4.8 },

  // --- APPS & WEBSITES ---
  { id: "lovable", name: "Lovable", description: "The premier web-app builder. Build full-stack products from natural language.", category: "Apps & Websites", url: "https://lovable.dev", pricing: "Free", featured: true, badge: "⚡ Dev Choice", color: "bg-blue-500", keywords: ["website", "app", "code", "build a website"], score: 4.9 },
  { id: "bolt-new", name: "Bolt.new", description: "Instant full-stack application deployment. Build and ship in seconds.", category: "Apps & Websites", url: "https://bolt.new", pricing: "Free", featured: false, isTrending: true, color: "bg-indigo-500", keywords: ["build", "app", "code", "build a website"], score: 4.8 },
  { id: "genspark", name: "Genspark", description: "Autonomous creation of brand identities, logos, and websites in minutes.", category: "Apps & Websites", url: "https://genspark.ai", pricing: "Free", featured: false, color: "bg-pink-500", keywords: ["brand", "logo", "website", "build a website"], score: 4.7 },

  // --- ASSISTANTS ---
  { id: "claude-4-5", name: "Claude 4.5", description: "The reasoning leader. Highest ELO in coding and human-like nuance.", category: "Assistants", url: "https://claude.ai", pricing: "Paid", featured: true, badge: "🧠 Smartest Logic", color: "bg-orange-600", keywords: ["chat", "summarize", "code"], score: 4.9 },
  { id: "notebooklm", name: "NotebookLM", description: "Turn your documents into podcasts and structured insights instantly.", category: "Assistants", url: "https://notebooklm.google", pricing: "Free", featured: false, isClassic: true, color: "bg-emerald-600", keywords: ["summarize", "research", "pdf"], score: 4.7 },
  { id: "your-atlas", name: "Your Atlas", description: "Your AI Secretary. Manages your calendar and life admin autonomously.", category: "Assistants", url: "https://youratlas.com", pricing: "Paid", featured: false, isTrending: true, color: "bg-cyan-500", keywords: ["secretary", "calendar", "assistant"], score: 4.8 }
].concat(Array.from({ length: 43 }).map((_, i) => ({
  id: `tool-extra-${i}`,
  name: i % 2 === 0 ? "DeepSeek V3" : "Blackbox AI",
  description: "Specialized AI utility for high-performance professional workflows.",
  category: ["Agents", "Video", "Image", "Audio", "Apps & Websites", "Assistants"][i % 6] as any,
  url: "https://usehub.ai",
  pricing: i % 3 === 0 ? "Paid" : "Free",
  featured: false,
  isOpenSource: i % 5 === 0,
  isTrending: i % 4 === 0,
  isClassic: i % 10 === 0,
  color: "bg-slate-800",
  keywords: ["summarize", "logo", "video", "agent"],
  score: 4.2 + (Math.random() * 0.6)
})));
