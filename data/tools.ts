import { Tool } from '../types';

export const tools: Tool[] = [
  // --- TEXT ---
  { id: "gemini-3", name: "Gemini 3 Pro", description: "Best for: Everything. The most capable AI model in the world right now.", category: "Text", url: "https://gemini.google.com", pricing: "Free", featured: true, badge: "🏆 #1 Overall", color: "bg-blue-600", keywords: ["text", "chat", "summarize", "pdf", "analyze", "find info"], score: 4.9 },
  { id: "claude-3-5", name: "Claude 3.5 Sonnet", description: "Best for: Logic. The smartest AI for coding and complex reasoning.", category: "Text", url: "https://claude.ai", pricing: "Paid", featured: true, badge: "🧠 Smartest", color: "bg-orange-600", keywords: ["text", "code", "logic", "reasoning", "write", "find info"], score: 4.9 },
  { id: "chatgpt-5", name: "ChatGPT (GPT-4o)", description: "Best for: Daily Help. The classic assistant that sees, hears, and speaks.", category: "Text", url: "https://chat.openai.com", pricing: "Free", featured: true, badge: "⚡ Fast & Voice", isClassic: true, color: "bg-emerald-600", keywords: ["text", "voice", "chat", "writing", "find info"], score: 4.8 },
  { id: "perplexity", name: "Perplexity", description: "Best for: Research. Replaces Google with direct answers and sources.", category: "Text", url: "https://perplexity.ai", pricing: "Free", featured: false, badge: "🔎 Search Killer", color: "bg-cyan-600", keywords: ["text", "search", "google", "find info"], score: 4.9 },
  { id: "deepseek-v3", name: "DeepSeek V3", description: "Best for: Value. Incredible intelligence for free (Open Source).", category: "Text", url: "https://deepseek.com", pricing: "Free", featured: false, isTrending: true, isOpenSource: true, color: "bg-blue-500", keywords: ["text", "code", "logic", "free", "find info"], score: 4.8 },

  // --- AGENTS ---
  { id: "mariner", name: "Project Mariner", description: "Best for: Web Tasks. It surfs the web, books flights, and fills forms.", category: "Agents", url: "https://google.com", pricing: "Paid", featured: true, badge: "🚀 God Mode", color: "bg-indigo-600", keywords: ["agent", "browser", "automate", "book", "web", "hire an agent"], score: 4.9 },
  { id: "claude-code", name: "Claude Code", description: "Best for: Coding. An autonomous agent that lives in your terminal.", category: "Agents", url: "https://anthropic.com", pricing: "Paid", featured: true, badge: "💻 Dev Agent", color: "bg-orange-500", keywords: ["agent", "code", "terminal", "dev", "write code"], score: 4.9 },
  { id: "manus", name: "Manus AI", description: "Best for: Workflows. Executes complex jobs across multiple apps.", category: "Agents", url: "https://manus.ai" , pricing: "Paid", featured: false, isTrending: true, color: "bg-slate-900", keywords: ["agent", "workflow", "automate", "work", "hire an agent"], score: 4.8 },
  { id: "relevance", name: "Relevance AI", description: "Best for: Sales. Deploys AI employees to send emails for you.", category: "Agents", url: "https://relevance.ai", pricing: "Paid", featured: false, color: "bg-purple-600", keywords: ["agent", "sales", "email", "b2b", "hire an agent"], score: 4.7 },
  { id: "n8n", name: "n8n", description: "Best for: Connections. Visual workflow automation.", category: "Agents", url: "https://n8n.io", pricing: "Free", featured: false, isOpenSource: true, color: "bg-red-500", keywords: ["agent", "connect", "workflow", "zapier", "hire an agent"], score: 4.7 },
  { id: "chatvolt", name: "ChatVolt", description: "Best for: Support. AI customer service bot.", category: "Agents", url: "https://chatvolt.ai", pricing: "Paid", featured: false, color: "bg-yellow-500", keywords: ["agent", "support", "bot", "customer", "hire an agent"], score: 4.5 },

  // --- VIDEO ---
  { id: "sora-2", name: "Sora 2", description: "Best for: Photorealism. Generates 4K video from text prompts.", category: "Video", url: "https://openai.com", pricing: "Paid", featured: true, badge: "🎬 Cinema King", color: "bg-pink-600", keywords: ["video", "movie", "create", "film", "make video", "make a movie", "generate video"], score: 4.9 },
  { id: "veo-3", name: "Google Veo 3", description: "Best for: Consistency. Hollywood-grade stability for filmmakers.", category: "Video", url: "https://google.com", pricing: "Paid", featured: true, badge: "🎥 Pro Choice", color: "bg-red-600", keywords: ["video", "film", "google", "movie", "make video", "make a movie"], score: 4.9 },
  { id: "kling-2", name: "Kling 2.6", description: "Best for: Physics. Handles complex movement and action perfectly.", category: "Video", url: "https://klingai.com", pricing: "Free", featured: false, isTrending: true, color: "bg-indigo-900", keywords: ["video", "physics", "action", "move", "make video", "make a movie"], score: 4.8 },
  { id: "heygen", name: "HeyGen", description: "Best for: Avatars. Translates videos with perfect lip-sync.", category: "Video", url: "https://heygen.com", pricing: "Paid", featured: false, color: "bg-violet-500", keywords: ["video", "translate", "avatar", "dub", "make video", "make a movie"], score: 4.8 },
  { id: "hailuo", name: "Hailuo AI", description: "Best for: Effects. Creative transitions and artistic morphs.", category: "Video", url: "https://hailuo.ai", pricing: "Free", featured: false, color: "bg-blue-500", keywords: ["video", "art", "effects", "clip", "make video", "make a movie"], score: 4.7 },
  { id: "wan-video", name: "Wan.video", description: "Best for: Social. Infinite video generation loops for TikTok.", category: "Video", url: "https://wan.video", pricing: "Free", featured: false, color: "bg-purple-500", keywords: ["video", "tiktok", "loop", "social", "make video", "make a movie"], score: 4.6 },

  // --- DESIGN ---
  { id: "midjourney-7", name: "Midjourney v7", description: "Best for: Aesthetics. The gold standard for artistic images.", category: "Design", url: "https://midjourney.com", pricing: "Paid", featured: true, badge: "🖌️ #1 Art", color: "bg-white", keywords: ["image", "art", "drawing", "paint", "design logo", "make image"], score: 4.9 },
  { id: "nano-banana", name: "Nano Banana", description: "Best for: Accuracy. Google's engine draws exactly what you ask.", category: "Design", url: "https://google.com", pricing: "Free", featured: true, badge: "🎯 Precise", color: "bg-yellow-500", keywords: ["image", "draw", "precise", "logo", "design logo", "make image"], score: 4.9 },
  { id: "flux-pro", name: "Flux.1 Pro", description: "Best for: Typography. Handles text inside images perfectly.", category: "Design", url: "https://blackforestlabs.ai", pricing: "Free", featured: false, isOpenSource: true, color: "bg-blue-400", keywords: ["image", "text", "logo", "font", "design logo", "make image"], score: 4.8 },
  { id: "recraft", name: "Recraft v3", description: "Best for: Vectors. Generates editable SVGs and icons.", category: "Design", url: "https://recraft.ai", pricing: "Free", featured: false, color: "bg-orange-400", keywords: ["image", "vector", "icon", "svg", "design logo", "make image"], score: 4.7 },
  { id: "freepik", name: "Freepik AI", description: "Best for: Stocks. Infinite stock photos for presentations.", category: "Design", url: "https://freepik.com", pricing: "Free", featured: false, color: "bg-blue-600", keywords: ["image", "stock", "photo", "slide", "design logo", "make image"], score: 4.6 },

  // --- APPS & WEBSITES ---
  { id: "lovable", name: "Lovable", description: "Best for: Full Stack. Builds frontend and backend from chat.", category: "Apps & Websites", url: "https://lovable.dev", pricing: "Free", featured: true, badge: "⚡ Magic App", color: "bg-blue-500", keywords: ["app", "website", "code", "build", "build a website", "write code"], score: 4.9 },
  { id: "bolt-new", name: "Bolt.new", description: "Best for: Deploying. From idea to live URL in one session.", category: "Apps & Websites", url: "https://bolt.new", pricing: "Free", featured: false, isTrending: true, color: "bg-indigo-500", keywords: ["app", "deploy", "website", "live", "build a website", "write code"], score: 4.8 },
  { id: "cursor", name: "Cursor", description: "Best for: Coding. The VS Code fork that writes code for you.", category: "Apps & Websites", url: "https://cursor.sh", pricing: "Free", featured: false, isClassic: true, color: "bg-slate-800", keywords: ["code", "editor", "programming", "dev", "write code"], score: 4.9 },
  { id: "10web", name: "10Web", description: "Best for: WordPress. Clones and builds WP sites.", category: "Apps & Websites", url: "https://10web.io", pricing: "Paid", featured: false, color: "bg-blue-400", keywords: ["website", "wordpress", "clone", "build a website"], score: 4.5 },

  // --- AUDIO ---
  { id: "suno-4", name: "Suno v4", description: "Best for: Songs. Radio-quality music with lyrics and vocals.", category: "Audio", url: "https://suno.com", pricing: "Free", featured: true, badge: "🎵 Music King", color: "bg-yellow-500", keywords: ["audio", "song", "music", "sing", "create song", "transform audio"], score: 4.9 },
  { id: "elevenlabs", name: "ElevenLabs", description: "Best for: Cloning. The most realistic AI voice synthesis.", category: "Audio", url: "https://elevenlabs.io", pricing: "Free", featured: false, isClassic: true, color: "bg-white", keywords: ["audio", "voice", "clone", "speak", "transform audio"], score: 4.9 },
  { id: "udio-2", name: "Udio v2", description: "Best for: Pros. High-fidelity music composition tools.", category: "Audio", url: "https://udio.com", pricing: "Free", featured: false, color: "bg-black", keywords: ["audio", "music", "pro", "compose", "create song", "transform audio"], score: 4.8 },
  { id: "typeless", name: "Typeless", description: "Best for: Dictation. Converts speech to perfect text.", category: "Audio", url: "https://typeless.io", pricing: "Free", featured: false, color: "bg-slate-500", keywords: ["audio", "dictate", "transcribe", "voice", "transform audio"], score: 4.6 }
].concat(Array.from({ length: 15 }).map((_, i) => ({
  id: `extra-tool-${i}`,
  name: i % 2 === 0 ? "LangFlow" : "Copilot",
  description: "Best for: Professional Efficiency. Advanced AI utility for high-performance workflows.",
  category: ["Text", "Agents", "Video", "Design", "Audio", "Apps & Websites"][i % 6] as any,
  url: "https://usehub.ai",
  pricing: "Free",
  featured: false,
  color: "bg-slate-800",
  keywords: ["ai", "tool"],
  score: 4.0
})));
