import { Tool } from '../types';

export const tools: Tool[] = [
  // --- REASONING & RESEARCH ---
  { id: "gemini-3", name: "Gemini 3 Pro", description: "The 2026 leader. Multimodal powerhouse with 2M+ context. Best for deep research.", category: "Reasoning & Research", url: "https://gemini.google.com", pricing: "Free", featured: true, badge: "🏆 #1 Overall", color: "bg-blue-600", keywords: ["chat", "summarize", "pdf", "research"], score: 4.9 },
  { id: "claude-4-5", name: "Claude 4.5 Opus", description: "The logic specialist. Unmatched for coding and nuanced reasoning. Most human-like AI.", category: "Reasoning & Research", url: "https://claude.ai", pricing: "Paid", featured: true, badge: "🧠 Smartest Logic", color: "bg-orange-600", keywords: ["chat", "code", "logic", "writing"], score: 4.8 },
  { id: "perplexity", name: "Perplexity", description: "The definitive search killer. Zero hallucination search with real-time citations.", category: "Reasoning & Research", url: "https://perplexity.ai", pricing: "Free", featured: true, badge: "🔎 Best Search", color: "bg-cyan-600", keywords: ["search", "knowledge", "research"], score: 4.9 },

  // --- AUTONOMOUS AGENTS ---
  { id: "mariner", name: "Project Mariner", description: "Google's autonomous browser agent. Executes complex web tasks for you automatically.", category: "Autonomous Agents", url: "https://google.com", pricing: "Paid", featured: true, badge: "🚀 Next-Gen", color: "bg-indigo-600", keywords: ["agent", "browser", "task"], score: 4.9 },
  { id: "manus", name: "Manus AI", description: "General-purpose agent that executes full workflows across applications seamlessly.", category: "Autonomous Agents", url: "https://manus.ai", pricing: "Paid", featured: false, isTrending: true, color: "bg-slate-900", keywords: ["agent", "workflow"], score: 4.8 },

  // --- VIDEO & CINEMA ---
  { id: "sora-2", name: "Sora 2", description: "OpenAI's cinematic engine. Generates hyper-realistic 4K video from text.", category: "Video & Cinema", url: "https://openai.com", pricing: "Paid", featured: true, badge: "🎬 Cinema King", color: "bg-pink-600", keywords: ["video", "generate video", "sora"], score: 4.9 },
  { id: "veo-3", name: "Google Veo 3", description: "Hollywood-grade video generation with unmatched temporal consistency.", category: "Video & Cinema", url: "https://google.com", pricing: "Paid", featured: false, isTrending: true, color: "bg-red-600", keywords: ["video", "google", "generate video"], score: 4.8 },

  // --- IMAGE & DESIGN ---
  { id: "nano-banana", name: "Nano Banana", description: "Google's pixel-perfect visual engine. Highest prompt adherence in the industry.", category: "Image & Design", url: "https://google.com", pricing: "Free", featured: true, badge: "🎨 Best Visuals", color: "bg-purple-600", keywords: ["image", "design", "logo", "visuals"], score: 4.9 },
  { id: "flux-2", name: "Flux.2 Pro", description: "The open-weight king for photorealism and perfect typography in images.", category: "Image & Design", url: "https://flux.ai", pricing: "Free", featured: false, isOpenSource: true, color: "bg-orange-500", keywords: ["image", "logo", "design"], score: 4.7 },

  // --- AUDIO & MUSIC ---
  { id: "sunov4", name: "Suno v4", description: "Full radio-quality songs with lyrics and production from a simple prompt.", category: "Audio & Music", url: "https://suno.com", pricing: "Free", featured: false, isTrending: true, color: "bg-yellow-500", keywords: ["audio", "music", "song"], score: 4.9 },
  { id: "elevenlabs-3", name: "ElevenLabs v3", description: "Uncanny emotional voice cloning. The global standard for narration.", category: "Audio & Music", url: "https://elevenlabs.io", pricing: "Free", featured: false, isClassic: true, color: "bg-blue-400", keywords: ["audio", "voice", "clone"], score: 4.9 },

  // --- APPS & WEBSITES ---
  { id: "lovable", name: "Lovable", description: "Build full-stack products from natural language. The premier web-app builder.", category: "Apps & Websites", url: "https://lovable.dev", pricing: "Free", featured: true, badge: "⚡ Dev Choice", color: "bg-blue-500", keywords: ["website", "app", "code"], score: 4.9 },
  { id: "bolt-new", name: "Bolt.new", description: "Instant full-stack application deployment. Build and ship in seconds.", category: "Apps & Websites", url: "https://bolt.new", pricing: "Free", featured: false, isTrending: true, color: "bg-indigo-500", keywords: ["build", "app", "code"], score: 4.8 },

  // --- AI ASSISTANTS ---
  { id: "your-atlas", name: "Your Atlas", description: "Your AI Secretary. Manages your calendar and life admin autonomously.", category: "AI Assistants", url: "https://youratlas.com", pricing: "Paid", featured: false, isTrending: true, color: "bg-cyan-500", keywords: ["secretary", "calendar", "assistant"], score: 4.8 },
  { id: "fireflies", name: "Fireflies.ai", description: "Automate your meeting notes. Transcribe and summarize video calls.", category: "AI Assistants", url: "https://fireflies.ai", pricing: "Free", featured: false, isClassic: true, color: "bg-indigo-500", keywords: ["transcribe", "meeting", "summarize"], score: 4.7 }
].concat(Array.from({ length: 45 }).map((_, i) => ({
  id: `extra-${i}`,
  name: i % 2 === 0 ? "Kling 2.6" : "DeepSeek V3",
  description: "Advanced AI utility for specialized professional workflows and creative tasks.",
  category: ["Reasoning & Research", "Autonomous Agents", "Video & Cinema", "Image & Design", "Audio & Music", "Apps & Websites", "AI Assistants"][i % 7] as any,
  url: "https://usehub.ai",
  pricing: "Free",
  featured: false,
  isOpenSource: i % 4 === 0,
  isTrending: i % 5 === 0,
  isClassic: i % 10 === 0,
  color: "bg-slate-800",
  keywords: ["video", "audio", "summarize", "grammar", "logo"],
  score: 4.0 + (Math.random() * 0.8)
})));
