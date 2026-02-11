import { Tool } from '../types';

export const tools: Tool[] = [
  // --- RESEARCH ---
  { id: "gemini-3", name: "Gemini 3 Pro", description: "Best for: Deep Analysis. Reads 10 books in seconds.", category: "Research", url: "https://gemini.google.com", pricing: "Free", featured: true, badge: "🏆 #1 Overall", color: "bg-blue-600", keywords: ["chat", "summarize", "pdf", "research", "analyze data", "read docs"], score: 4.9 },
  { id: "claude-4-5", name: "Claude 4.5", description: "Best for: Coding & Logic. Most human-like reasoning.", category: "Research", url: "https://claude.ai", pricing: "Paid", featured: true, badge: "🧠 Smartest", color: "bg-orange-600", keywords: ["write code", "logic", "chat", "debug", "python"], score: 4.9 },
  { id: "perplexity", name: "Perplexity", description: "Best for: Fact Checking. Replaces Google Search.", category: "Research", url: "https://perplexity.ai", pricing: "Free", featured: true, badge: "🔎 Search Killer", color: "bg-cyan-600", keywords: ["search", "google", "find info", "sources"], score: 4.9 },
  { id: "notebooklm", name: "NotebookLM", description: "Best for: Studying. Turns PDFs into audio podcasts.", category: "Research", url: "https://notebooklm.google", pricing: "Free", featured: false, isClassic: true, color: "bg-green-600", keywords: ["study", "podcast", "audio", "summarize", "learn"], score: 4.8 },
  { id: "deepseek-v3", name: "DeepSeek V3", description: "Best for: Cheap Logic. Open-source rival to GPT-5.", category: "Research", url: "https://deepseek.com", pricing: "Free", featured: false, isTrending: true, isOpenSource: true, color: "bg-blue-500", keywords: ["logic", "code", "math", "reasoning"], score: 4.7 },

  // --- AGENTS ---
  { id: "mariner", name: "Project Mariner", description: "Best for: Web Tasks. Books flights and fills forms.", category: "Agents", url: "https://google.com", pricing: "Paid", featured: true, badge: "🚀 Next-Gen", color: "bg-indigo-600", keywords: ["agent", "browser", "automate", "hire an agent", "book flight"], score: 4.9 },
  { id: "manus", name: "Manus AI", description: "Best for: Workflows. Operates apps to finish jobs.", category: "Agents", url: "https://manus.ai", pricing: "Paid", featured: false, isTrending: true, color: "bg-slate-900", keywords: ["work", "research", "agent", "hire an agent"], score: 4.8 },
  { id: "n8n", name: "n8n", description: "Best for: Automation. Connects 400+ apps visually.", category: "Agents", url: "https://n8n.io", pricing: "Free", isOpenSource: true, color: "bg-red-500", keywords: ["connect", "automate", "workflow", "zapier", "hire an agent"], score: 4.7 },
  { id: "chatvolt", name: "ChatVolt", description: "Best for: Support. AI bot that answers customers.", category: "Agents", url: "https://chatvolt.ai", pricing: "Paid", featured: false, color: "bg-yellow-500", keywords: ["support", "chat", "bot", "customer"], score: 4.5 },

  // --- VIDEO ---
  { id: "sora-2", name: "Sora 2", description: "Best for: Photorealism. 4K cinema from text.", category: "Video", url: "https://openai.com", pricing: "Paid", featured: true, badge: "🎬 Cinema King", color: "bg-pink-600", keywords: ["movie", "video", "create film", "generate video", "transform video"], score: 4.9 },
  { id: "veo-3", name: "Google Veo 3", description: "Best for: Consistency. Stable characters in video.", category: "Video", url: "https://google.com", pricing: "Paid", featured: false, color: "bg-red-600", keywords: ["film", "video", "google", "generate video"], score: 4.8 },
  { id: "kling-2", name: "Kling 2.6", description: "Best for: Physics. Complex movement and action shots.", category: "Video", url: "https://klingai.com", pricing: "Free", featured: false, isTrending: true, color: "bg-indigo-900", keywords: ["action", "physics", "generate video", "transform video"], score: 4.8 },
  { id: "heygen", name: "HeyGen", description: "Best for: Translation. Dubs videos with lip-sync.", category: "Video", url: "https://heygen.com", pricing: "Paid", featured: false, color: "bg-violet-500", keywords: ["translate", "avatar", "dub", "generate video"], score: 4.8 },
  { id: "hailuo", name: "Hailuo AI", description: "Best for: Transitions. Artistic video effects.", category: "Video", url: "https://hailuo.ai", pricing: "Free", featured: false, color: "bg-blue-500", keywords: ["art", "clip", "generate video", "transform video"], score: 4.7 },
  { id: "wan-video", name: "Wan.video", description: "Best for: Social Loops. Infinite video for TikTok.", category: "Video", url: "https://wan.video", pricing: "Free", featured: false, color: "bg-purple-500", keywords: ["social", "tiktok", "loop", "generate video"], score: 4.6 },

  // --- DESIGN ---
  { id: "nano-banana", name: "Nano Banana", description: "Best for: Accuracy. Draws exactly what you ask.", category: "Design", url: "https://google.com", pricing: "Free", featured: true, badge: "🎨 Top Visuals", color: "bg-yellow-500", keywords: ["image", "draw", "perfect", "design logo"], score: 4.9 },
  { id: "midjourney-7", name: "Midjourney v7", description: "Best for: Art. The gold standard for aesthetics.", category: "Design", url: "https://midjourney.com", pricing: "Paid", featured: true, badge: "🖌️ Artistic", color: "bg-white", keywords: ["art", "painting", "beautiful", "design logo"], score: 4.9 },
  { id: "recraft", name: "Recraft v3", description: "Best for: Vectors. Editable icons and logos.", category: "Design", url: "https://recraft.ai", pricing: "Free", featured: false, color: "bg-orange-400", keywords: ["logo", "vector", "icon", "design logo"], score: 4.7 },
  { id: "ideogram", name: "Ideogram 2", description: "Best for: Typography. Perfect text inside images.", category: "Design", url: "https://ideogram.ai", pricing: "Free", featured: false, color: "bg-pink-600", keywords: ["text", "font", "write", "design logo"], score: 4.7 },
  { id: "freepik", name: "Freepik AI", description: "Best for: Stocks. Infinite stock photos for slides.", category: "Design", url: "https://freepik.com", pricing: "Free", featured: false, color: "bg-blue-600", keywords: ["stock", "photo", "slide"], score: 4.6 },

  // --- APPS & WEBSITES ---
  { id: "lovable", name: "Lovable", description: "Best for: Full Stack. Builds apps from conversation.", category: "Apps & Websites", url: "https://lovable.dev", pricing: "Free", featured: true, badge: "⚡ Magic Build", color: "bg-blue-500", keywords: ["app", "code", "build a website"], score: 4.9 },
  { id: "bolt-new", name: "Bolt.new", description: "Best for: Deploying. Idea to live URL in seconds.", category: "Apps & Websites", url: "https://bolt.new", pricing: "Free", featured: false, isTrending: true, color: "bg-indigo-500", keywords: ["deploy", "site", "live", "build a website"], score: 4.8 },
  { id: "cursor", name: "Cursor", description: "Best for: Coding. Editor that writes code for you.", category: "Apps & Websites", url: "https://cursor.sh", pricing: "Free", featured: false, isClassic: true, color: "bg-slate-800", keywords: ["code", "editor", "write code"], score: 4.9 },
  { id: "readdy", name: "Readdy.ai", description: "Best for: Wireframes. Builds website structures.", category: "Apps & Websites", url: "https://readdy.ai", pricing: "Paid", featured: false, color: "bg-teal-500", keywords: ["design", "ui", "build a website"], score: 4.6 },

  // --- AUDIO ---
  { id: "suno-4", name: "Suno v4", description: "Best for: Hit Songs. Radio-quality music with lyrics.", category: "Audio", url: "https://suno.com", pricing: "Free", featured: true, badge: "🎵 Music King", color: "bg-yellow-500", keywords: ["music", "song", "sing", "create song"], score: 4.9 },
  { id: "elevenlabs", name: "ElevenLabs", description: "Best for: Voice Cloning. Realistic speech synthesis.", category: "Audio", url: "https://elevenlabs.io", pricing: "Free", featured: false, isClassic: true, color: "bg-white", keywords: ["voice", "speak", "clone", "create song"], score: 4.9 },
  { id: "fireflies", name: "Fireflies.ai", description: "Best for: Meetings. Records and summarizes calls.", category: "Audio", url: "https://fireflies.ai", pricing: "Free", featured: false, color: "bg-indigo-600", keywords: ["meeting", "notes", "transcribe"], score: 4.7 },
  { id: "typeless", name: "Typeless", description: "Best for: Dictation. Perfect voice-to-text.", category: "Audio", url: "https://typeless.io", pricing: "Free", featured: false, color: "bg-slate-500", keywords: ["dictate", "write", "voice"], score: 4.6 }
];
