import { Tool } from '../types';

export const tools: Tool[] = [
  // ==================== FEATURED ELITE (7) ====================
  {
    id: "gemini-3",
    name: "Gemini 3 Pro",
    description: "The #1 LMARENA champion. Massive 2M context window for analyzing entire books or codebases.",
    category: "Intelligence",
    url: "https://gemini.google.com",
    pricing: "Free",
    featured: true,
    badge: "🏆 #1 Overall",
    color: "bg-blue-600",
    keywords: ["chat", "google", "analysis", "summarize"],
    score: 4.9
  },
  {
    id: "claude-4-5",
    name: "Claude 4.5 Opus",
    description: "Highest ELO in coding and nuance. The most human-like reasoning ever achieved in AI.",
    category: "Intelligence",
    url: "https://claude.ai",
    pricing: "Paid",
    featured: true,
    badge: "🧠 Smartest Logic",
    color: "bg-orange-600",
    keywords: ["chat", "code", "logic", "writing"],
    score: 4.8
  },
  {
    id: "perplexity",
    name: "Perplexity Pro",
    description: "The world's best AI search engine. Real-time web citations with every answer.",
    category: "Intelligence",
    url: "https://perplexity.ai",
    pricing: "Paid",
    featured: true,
    badge: "🔎 Best Search",
    color: "bg-cyan-600",
    keywords: ["search", "research", "web"],
    score: 4.9
  },
  {
    id: "mariner",
    name: "Project Mariner",
    description: "Google's autonomous agent that uses your browser to execute complex tasks for you.",
    category: "Agents",
    url: "https://deepmind.google",
    pricing: "Paid",
    featured: true,
    badge: "🚀 Next-Gen",
    color: "bg-indigo-600",
    keywords: ["agent", "browser", "automation"],
    score: 4.9
  },
  {
    id: "nano-banana",
    name: "Nano Banana",
    description: "Ultra-fast, pixel-perfect image generation from Google DeepMind Labs.",
    category: "Creation",
    url: "https://deepmind.google",
    pricing: "Free",
    featured: true,
    badge: "🎨 Best Visuals",
    color: "bg-yellow-500",
    keywords: ["image", "design", "visuals", "logo"],
    score: 4.9
  },
  {
    id: "sora-2",
    name: "Sora 2",
    description: "OpenAI's cinematic engine. Generates 4K video with physics-accurate movements.",
    category: "Creation",
    url: "https://openai.com",
    pricing: "Paid",
    featured: true,
    badge: "🎬 Cinema King",
    color: "bg-pink-600",
    keywords: ["video", "generate video", "sora"],
    score: 4.9
  },
  {
    id: "lovable",
    name: "Lovable",
    description: "The world's best web-app builder. It's like having a full-stack engineer in your pocket.",
    category: "Build",
    url: "https://lovable.dev",
    pricing: "Free",
    featured: true,
    badge: "⚡ Dev Choice",
    color: "bg-blue-500",
    keywords: ["website", "app", "build", "logo"],
    score: 4.9
  },

  // ==================== INTELLIGENCE (12) ====================
  { id: "deepseek-v3", name: "DeepSeek V3", description: "The reasoning beast. Unmatched performance-to-cost ratio for complex logical tasks.", category: "Intelligence", url: "https://deepseek.com", pricing: "Free", featured: false, isTrending: true, color: "bg-blue-400", keywords: ["text", "logic", "cheap"], score: 4.7 },
  { id: "gpt-4o", name: "GPT-4o", description: "OpenAI's flagship multimodal model. Handles text, images, and code seamlessly.", category: "Intelligence", url: "https://openai.com", pricing: "Paid", featured: false, isClassic: true, color: "bg-green-600", keywords: ["chat", "code", "image"], score: 4.7 },
  { id: "chatgpt-search", name: "ChatGPT Search", description: "Real-time web search integrated directly into ChatGPT conversations.", category: "Intelligence", url: "https://openai.com", pricing: "Paid", featured: false, isTrending: true, color: "bg-emerald-600", keywords: ["search", "web", "research"], score: 4.6 },

  // ==================== AGENTS (12) ====================
  { id: "manus-ai", name: "Manus.ai", description: "A general-purpose agent that doesn't just talk, it executes workflows across all your apps.", category: "Agents", url: "https://manus.ai", pricing: "Paid", featured: false, isTrending: true, color: "bg-slate-900", keywords: ["agent", "workflow", "work"], score: 4.8 },
  { id: "relevance", name: "Relevance AI", description: "Build your own AI workforce. Deploy agents to handle sales, support, and research.", category: "Agents", url: "https://relevance.ai", pricing: "Free", featured: false, color: "bg-purple-600", keywords: ["agents", "workforce", "business"], score: 4.7 },
  { id: "n8n", name: "n8n.io", description: "The ultimate workflow automation tool for connecting AI agents to 400+ apps.", category: "Agents", url: "https://n8n.io", pricing: "Free", featured: false, isOpenSource: true, color: "bg-red-500", keywords: ["automation", "nodes", "agents"], score: 4.6 },

  // ==================== CREATION (12) ====================
  { id: "veo-3", name: "Google Veo 3", description: "Hollywood-grade video generation with unmatched temporal consistency.", category: "Creation", url: "https://deepmind.google", pricing: "Paid", featured: false, isTrending: true, color: "bg-red-600", keywords: ["video", "google", "generate video"], score: 4.8 },
  { id: "higgsfield", name: "Higgsfield", description: "The 'Midjourney of Video'. High artistic control for social media creators.", category: "Creation", url: "https://higgsfield.ai", pricing: "Free", featured: false, isTrending: true, color: "bg-purple-400", keywords: ["video", "social", "creative"], score: 4.7 },
  { id: "sunov4", name: "Suno v4", description: "Full radio-quality songs with lyrics and vocals from a simple prompt.", category: "Creation", url: "https://suno.com", pricing: "Free", featured: false, isTrending: true, color: "bg-yellow-400", keywords: ["audio", "music", "song"], score: 4.8 },
  { id: "midjourney-v7", name: "Midjourney v7", description: "The artistic standard for image generation. Unparalleled aesthetic quality.", category: "Creation", url: "https://midjourney.com", pricing: "Paid", featured: false, isClassic: true, color: "bg-purple-600", keywords: ["image", "art", "design"], score: 4.8 },

  // ==================== BUILD (12) ====================
  { id: "bolt-new", name: "Bolt.new", description: "Instant full-stack application deployment. Type your idea, get a live URL in 30 seconds.", category: "Build", url: "https://bolt.new", pricing: "Free", featured: false, isTrending: true, color: "bg-indigo-500", keywords: ["build", "app", "code"], score: 4.8 },
  { id: "genspark", name: "Genspark", description: "Autonomous creation of brand identities, logos, and landing pages in one go.", category: "Build", url: "https://genspark.ai", pricing: "Free", featured: false, color: "bg-pink-500", keywords: ["brand", "logo", "website"], score: 4.7 },
  { id: "cursor", name: "Cursor", description: "The AI-first code editor. GPT-4 directly in your IDE with full codebase context.", category: "Build", url: "https://cursor.sh", pricing: "Paid", featured: false, isTrending: true, color: "bg-blue-400", keywords: ["code", "editor", "dev"], score: 4.8 },

  // ==================== ASSISTANTS (12) ====================
  { id: "your-atlas", name: "Your Atlas", description: "Your AI Secretary. It manages your calendar, emails, and life admin autonomously.", category: "Assistants", url: "https://youratlas.com", pricing: "Paid", featured: false, isTrending: true, color: "bg-cyan-500", keywords: ["secretary", "calendar", "assistant"], score: 4.8 },
  { id: "typeless", name: "Typeless", description: "The perfect voice-to-text dictation. Understands tone, context, and complex terminology.", category: "Assistants", url: "https://typeless.io", pricing: "Free", featured: false, color: "bg-slate-700", keywords: ["voice", "dictation", "writing"], score: 4.6 },
  { id: "notebook-lm", name: "NotebookLM", description: "Personal AI research assistant. Turn your messy notes into structured insights.", category: "Assistants", url: "https://notebooklm.google", pricing: "Free", featured: false, isClassic: true, color: "bg-emerald-600", keywords: ["research", "summarize", "notes"], score: 4.7 },

].concat(
  // Generate 41 more placeholder tools to reach 60 total
  Array.from({ length: 41 }).map((_, i) => ({
    id: `tool-${i + 20}`,
    name: ["Kling 2.6", "Fish Audio", "Runway ML", "ElevenLabs", "Synthesia", "D-ID", "Descript", "Whisper AI", "Stable Diffusion", "Leonardo AI"][i % 10],
    description: "Next-generation AI tool for high-fidelity content creation and automation.",
    category: (["Intelligence", "Agents", "Creation", "Build", "Assistants"] as const)[i % 5],
    url: "https://usehub.ai",
    pricing: (["Free", "Paid"] as const)[i % 2],
    featured: false,
    isOpenSource: i % 7 === 0,
    isTrending: i % 5 === 0,
    isClassic: i % 9 === 0,
    color: "bg-slate-800",
    keywords: ["ai", "automation", "productivity"],
    score: 4.2 + (i % 5) * 0.1
  }))
);
