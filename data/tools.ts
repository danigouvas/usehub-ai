import { Tool } from '../types';

export const tools: Tool[] = [
  // --- INTELLIGENCE (LMARENA KINGS) ---
  { id: "gemini-3", name: "Gemini 3 Pro", description: "The #1 LMARENA champion. Massive 2M context window for analyzing entire books or codebases.", category: "Intelligence", url: "https://gemini.google.com", pricing: "Freemium", featured: true, badge: "#1 LMARENA", subBadge: "Elite", color: "bg-blue-600", keywords: ["chat", "google", "analysis", "summarize"], rating: 4.9 },
  { id: "claude-4-5", name: "Claude 4.5", description: "Highest ELO in coding and nuance. The most human-like reasoning ever achieved in AI.", category: "Intelligence", url: "https://claude.ai", pricing: "Paid", featured: true, badge: "Smartest", subBadge: "Elite", color: "bg-orange-600", keywords: ["chat", "code", "logic", "writing"], rating: 4.8 },
  { id: "deepseek-v3", name: "DeepSeek V3", description: "The reasoning beast. Unmatched performance-to-cost ratio for complex logical tasks.", category: "Intelligence", url: "https://deepseek.com", pricing: "Free", featured: false, subBadge: "Trending", isTrending: true, color: "bg-blue-400", keywords: ["text", "logic", "cheap"], rating: 4.7 },

  // --- AGENTS (THE AWE FACTOR) ---
  { id: "project-mariner", name: "Project Mariner", description: "Google's autonomous agent that uses your browser to execute complex tasks for you.", category: "Agents", url: "https://google.com", pricing: "Paid", featured: true, badge: "UAU Factor", subBadge: "Auto-Pilot", color: "bg-indigo-600", keywords: ["agent", "browser", "automation"], rating: 4.9 },
  { id: "manus-ai", name: "Manus.ai", description: "A general-purpose agent that doesn't just talk, it executes workflows across all your apps.", category: "Agents", url: "https://manus.ai", pricing: "Paid", featured: false, isTrending: true, color: "bg-slate-900", keywords: ["agent", "workflow", "work"], rating: 4.8 },
  { id: "relevance", name: "Relevance AI", description: "Build your own AI workforce. Deploy agents to handle sales, support, and research.", category: "Agents", url: "https://relevance.ai", pricing: "Freemium", featured: false, color: "bg-purple-600", keywords: ["agents", "workforce", "business"], rating: 4.7 },
  { id: "n8n", name: "n8n.io", description: "The ultimate workflow automation tool for connecting AI agents to 400+ apps.", category: "Agents", url: "https://n8n.io", pricing: "Free", featured: false, isOpenSource: true, color: "bg-red-500", keywords: ["automation", "nodes", "agents"], rating: 4.6 },

  // --- CREATION (VIDEO & IMAGE) ---
  { id: "sora-2", name: "Sora 2", description: "OpenAI's cinematic engine. Generates 4K video with physics-accurate movements.", category: "Creation", url: "https://openai.com", pricing: "Paid", featured: true, badge: "Best Video", subBadge: "Cinema", color: "bg-pink-600", keywords: ["video", "generate video", "sora"], rating: 4.9 },
  { id: "veo-3", name: "Google Veo 3", description: "Hollywood-grade video generation with unmatched temporal consistency.", category: "Creation", url: "https://google.com", pricing: "Paid", featured: false, isTrending: true, color: "bg-red-600", keywords: ["video", "google", "generate video"], rating: 4.8 },
  { id: "nano-banana", name: "Nano Banana", description: "Ultra-fast, pixel-perfect image generation from Google DeepMind Labs.", category: "Creation", url: "https://google.com", pricing: "Freemium", featured: true, badge: "Best Visuals", color: "bg-yellow-500", keywords: ["image", "design", "visuals", "logo"], rating: 4.9 },
  { id: "higgsfield", name: "Higgsfield", description: "The 'Midjourney of Video'. High artistic control for social media creators.", category: "Creation", url: "https://higgsfield.ai", pricing: "Freemium", featured: false, isTrending: true, color: "bg-purple-400", keywords: ["video", "social", "creative"], rating: 4.7 },
  { id: "sunov4", name: "Suno v4", description: "Full radio-quality songs with lyrics and vocals from a simple prompt.", category: "Creation", url: "https://suno.com", pricing: "Freemium", featured: false, isTrending: true, color: "bg-yellow-400", keywords: ["audio", "music", "song"], rating: 4.8 },

  // --- BUILD (WEBSITES & APPS) ---
  { id: "lovable", name: "Lovable", description: "The world's best web-app builder. It's like having a full-stack engineer in your pocket.", category: "Build", url: "https://lovable.dev", pricing: "Freemium", featured: true, badge: "Best Web", subBadge: "Elite", color: "bg-blue-500", keywords: ["website", "app", "build", "logo"], rating: 4.9 },
  { id: "bolt-new", name: "Bolt.new", description: "Instant full-stack application deployment. Type your idea, get a live URL in 30 seconds.", category: "Build", url: "https://bolt.new", pricing: "Free", featured: false, isTrending: true, color: "bg-indigo-500", keywords: ["build", "app", "code"], rating: 4.8 },
  { id: "genspark", name: "Genspark", description: "Autonomous creation of brand identities, logos, and landing pages in one go.", category: "Build", url: "https://genspark.ai", pricing: "Freemium", featured: false, color: "bg-pink-500", keywords: ["brand", "logo", "website"], rating: 4.7 },

  // --- ASSISTANTS ---
  { id: "your-atlas", name: "Your Atlas", description: "Your AI Secretary. It manages your calendar, emails, and life admin autonomously.", category: "Assistants", url: "https://youratlas.com", pricing: "Paid", featured: false, isTrending: true, color: "bg-cyan-500", keywords: ["secretary", "calendar", "assistant"], rating: 4.8 },
  { id: "typeless", name: "Typeless", description: "The perfect voice-to-text dictation. Understands tone, context, and complex terminology.", category: "Assistants", url: "https://typeless.io", pricing: "Freemium", featured: false, color: "bg-slate-700", keywords: ["voice", "dictation", "writing"], rating: 4.6 },
  { id: "notebook-lm", name: "NotebookLM", description: "Personal AI research assistant. Turn your messy notes into structured insights.", category: "Assistants", url: "https://notebooklm.google", pricing: "Free", featured: false, isClassic: true, color: "bg-emerald-600", keywords: ["research", "summarize", "notes"], rating: 4.7 }
].concat(Array.from({ length: 40 }).map((_, i) => ({
  id: `extra-${i}`,
  name: i % 2 === 0 ? "Kling 2.6" : "Fish Audio",
  description: "Next-generation generative model for high-fidelity content creation.",
  category: (["Intelligence", "Agents", "Creation", "Build", "Assistants"] as const)[i % 5],
  url: "https://usehub.ai",
  pricing: (["Free", "Paid", "Freemium"] as const)[i % 3],
  featured: false,
  isOpenSource: i % 5 === 0,
  isTrending: i % 4 === 0,
  isClassic: i % 8 === 0,
  color: "bg-slate-800",
  keywords: ["video", "audio", "ai"],
  rating: 4.2
})));
