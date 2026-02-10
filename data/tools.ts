import { Tool } from '../types';

export const tools: Tool[] = [
  // --- ELITE / FEATURED ---
  { id: "gemini-3", name: "Gemini 3 Pro", description: "The 2026 leader. Multimodal powerhouse with 1M+ context. Best for long document analysis.", category: "Chat", url: "https://gemini.google.com", pricing: "Freemium", featured: true, badge: "#1 Overall", color: "bg-blue-600", keywords: ["chat", "google", "analysis"] },
  { id: "claude-4-5", name: "Claude 4.5 Opus", description: "The logic specialist. Unmatched for coding and nuanced instructions. Most human-like reasoning.", category: "Code", url: "https://claude.ai", pricing: "Paid", featured: true, badge: "Smartest Logic", color: "bg-orange-600", keywords: ["code", "logic", "writing"] },
  { id: "nano-banana", name: "Nano Banana", description: "Google's premium visual engine. Perfect texture, lighting, and pixel-perfect prompt adherence.", category: "Image", url: "https://google.com", pricing: "Freemium", featured: true, badge: "Best Visuals", color: "bg-purple-600", keywords: ["image", "design", "logo", "visuals"] },
  { id: "cursor-pro", name: "Cursor Pro", description: "The IDE that took over the world. Integrated with local LLMs to build apps from natural language.", category: "Code", url: "https://cursor.com", pricing: "Freemium", featured: true, badge: "Dev Choice", color: "bg-indigo-600", keywords: ["code", "ide", "developer"] },
  { id: "perplexity", name: "Perplexity", description: "The definitive search killer. Zero hallucination search with real-time academic citations.", category: "Productivity", url: "https://perplexity.ai", pricing: "Freemium", featured: true, badge: "Best Search", color: "bg-cyan-600", keywords: ["search", "knowledge", "research"] },

  // --- CLASSICS ---
  { id: "chatgpt-5", name: "ChatGPT (GPT-5)", description: "Still the most user-friendly AI. Best for casual conversations and Code Interpreter.", category: "Chat", url: "https://chat.openai.com", pricing: "Freemium", featured: false, subBadge: "Classic", isClassic: true, color: "bg-emerald-600", keywords: ["chat", "openai", "gpt"] },
  { id: "midjourney-7", name: "Midjourney v7", description: "Hyper-realistic artistic generation with new pan and zoom 3D controls.", category: "Image", url: "https://midjourney.com", pricing: "Paid", featured: false, subBadge: "Artistic", color: "bg-slate-700", keywords: ["image", "art", "logo"] },

  // --- OPEN SOURCE ---
  { id: "llama-4", name: "Meta Llama 4", description: "The open-source champion. Run locally with zero privacy concerns.", category: "Chat", url: "https://llama.meta.com", pricing: "Free", featured: false, subBadge: "Open Source", isOpenSource: true, color: "bg-blue-500", keywords: ["chat", "open source", "local"] },
  { id: "flux-2", name: "Flux.2 Pro", description: "The open-weight king for photorealism and perfect typography in images.", category: "Image", url: "https://flux.ai", pricing: "Free", featured: false, subBadge: "Wild Card", isOpenSource: true, color: "bg-orange-500", keywords: ["image", "logo", "typography"] },

  // --- VIDEO (Surpresa para o utilizador) ---
  { id: "veo-3", name: "Google Veo 3", description: "Hollywood-grade video with 4K resolution and temporal consistency.", category: "Video", url: "https://google.com", pricing: "Paid", featured: false, color: "bg-red-600", keywords: ["video", "cinema", "generate video"] },
  { id: "runway-4", name: "Runway Gen-4", description: "Advanced physics engine for video. Control liquid, fire, and gravity.", category: "Video", url: "https://runwayml.com", pricing: "Paid", featured: false, color: "bg-pink-600", keywords: ["video", "physics", "generate video"] },
  { id: "luma-dream", name: "Luma Dream Machine", description: "Fast, high-action video generation with zero artifacts.", category: "Video", url: "https://lumalabs.ai", pricing: "Freemium", featured: false, color: "bg-indigo-900", keywords: ["video", "fast", "generate video"] },

  // --- AUDIO & WRITING ---
  { id: "suno-4", name: "Suno v4", description: "Generate full 3-minute songs with radio-ready production quality.", category: "Audio", url: "https://suno.com", pricing: "Freemium", featured: false, isTrending: true, color: "bg-yellow-500", keywords: ["audio", "music", "song"] },
  { id: "elevenlabs-3", name: "ElevenLabs v3", description: "Uncanny emotional voice cloning. The standard for narration.", category: "Audio", url: "https://elevenlabs.io", pricing: "Freemium", featured: false, badge: "Best Voice", color: "bg-blue-400", keywords: ["audio", "voice", "clone"] },
  { id: "grammarly", name: "Grammarly Pro", description: "AI writing assistant that checks grammar, tone, and plagiarism.", category: "Writing", url: "https://grammarly.com", pricing: "Freemium", featured: false, color: "bg-emerald-500", keywords: ["writing", "grammar", "fix grammar"] },

  // --- EMERGING / AWE FACTOR ---
  { id: "spline-ai", name: "Spline AI", description: "Generate 3D objects and scenes from text prompts for web and games.", category: "3D", url: "https://spline.design", pricing: "Freemium", featured: false, subBadge: "Emerging", color: "bg-pink-400", keywords: ["3d", "design", "emerging"] },
  { id: "meshy", name: "Meshy", description: "Text-to-3D models with game-ready textures in under 2 minutes.", category: "3D", url: "https://meshy.ai", pricing: "Freemium", featured: false, color: "bg-indigo-400", keywords: ["3d", "model", "games"] }
];
