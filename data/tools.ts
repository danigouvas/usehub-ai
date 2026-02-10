import { Tool } from "@/types";

export const tools: Tool[] = [
  // --- OS REIS (FEATURED) ---
  {
    id: "gemini-3-pro",
    name: "Gemini 3 Pro",
    description: "The 2026 leader. Multimodal powerhouse with 1M+ context. Best for long document analysis and complex tasks.",
    category: "Chat",
    url: "https://gemini.google.com",
    pricing: "Freemium",
    featured: true,
    badge: "🏆 #1 Overall",
    color: "bg-blue-500",
    iconName: "Sparkles",
    keywords: ["chat", "conversation", "ai", "assistant", "multimodal", "document", "analysis", "reasoning"],
  },
  {
    id: "claude-4-5",
    name: "Claude 4.5 Opus",
    description: "The logic specialist. Unmatched for coding and nuanced instructions. The most 'human-like' reasoning.",
    category: "Code",
    url: "https://claude.ai",
    pricing: "Paid",
    featured: true,
    badge: "🧠 Smartest Logic",
    color: "bg-amber-700",
    iconName: "BrainCircuit",
    keywords: ["code", "coding", "programming", "developer", "logic", "reasoning", "ai", "assistant", "write", "writing", "text"],
  },
  {
    id: "nano-banana",
    name: "Nano Banana",
    description: "Google's premium visual engine. Perfect texture, lighting, and pixel-perfect prompt adherence.",
    category: "Image",
    url: "https://deepmind.google/technologies/imagen",
    pricing: "Freemium",
    featured: true,
    badge: "🎨 Best Visuals",
    color: "bg-purple-500",
    iconName: "Palette",
    keywords: ["image", "visual", "art", "design", "generate", "create", "picture", "photo"],
  },
  {
    id: "cursor-2026",
    name: "Cursor Pro",
    description: "The IDE that took over the world. Fully integrated with local LLMs to build apps from natural language.",
    category: "Code",
    url: "https://cursor.sh",
    pricing: "Freemium",
    featured: true,
    badge: "🚀 Dev Choice",
    color: "bg-neutral-200",
    iconName: "Code2",
    keywords: ["code", "coding", "ide", "editor", "developer", "build", "app", "programming", "software"],
  },
  {
    id: "perplexity-2026",
    name: "Perplexity",
    description: "The definitive search killer. Zero hallucination search with real-time academic citations.",
    category: "Productivity",
    url: "https://perplexity.ai",
    pricing: "Freemium",
    featured: true,
    badge: "🔎 Best Search",
    color: "bg-teal-500",
    iconName: "Search",
    keywords: ["search", "research", "find", "discover", "citation", "academic", "information", "query"],
  },

  // --- CHAT & CONVERSAÇÃO ---
  { id: "gpt-5", name: "ChatGPT (GPT-5)", description: "Still the most user-friendly AI. Best for casual conversations and Code Interpreter.", category: "Chat", url: "https://chat.openai.com", pricing: "Freemium", featured: false, badge: "🔷 Classic", color: "bg-emerald-600", iconName: "MessageSquare", keywords: ["chat", "conversation", "ai", "assistant", "gpt", "openai", "write", "text"], isClassic: true },
  { id: "meta-llama-4", name: "Meta Llama 4", description: "The open-source champion. Run locally with zero privacy concerns.", category: "Chat", url: "https://llama.meta.com", pricing: "Free", featured: false, badge: "🔓 Open Source", color: "bg-blue-700", iconName: "Unlock", keywords: ["chat", "conversation", "open source", "local", "privacy", "llm", "ai"], openSource: true },
  { id: "x-grok-3", name: "Grok 3 (X.AI)", description: "Real-time Twitter integration. Best for breaking news and cultural context.", category: "Chat", url: "https://x.ai", pricing: "Paid", featured: false, color: "bg-gray-900", iconName: "Twitter", keywords: ["chat", "news", "twitter", "real-time", "social", "ai"] },
  { id: "poe-premium", name: "Poe Premium", description: "Access to ALL major LLMs (GPT-5, Claude, Gemini) in one subscription.", category: "Chat", url: "https://poe.com", pricing: "Paid", featured: false, badge: "🎯 All-in-One", color: "bg-red-500", iconName: "Layers", keywords: ["chat", "multi-model", "llm", "subscription", "all-in-one", "ai"] },

  // --- IMAGEM & DESIGN ---
  { id: "mj-v7", name: "Midjourney v7", description: "Hyper-realistic artistic generation with new pan and zoom 3D controls.", category: "Image", url: "https://midjourney.com", pricing: "Paid", featured: false, badge: "🖌️ Artistic", color: "bg-indigo-500", iconName: "Brush", keywords: ["image", "art", "generate", "create", "design", "artistic", "visual", "photo"], isClassic: true },
  { id: "flux-2", name: "Flux.2 Pro", description: "The open-weight king for photorealism and perfect typography in images.", category: "Image", url: "https://blackforestlabs.ai", pricing: "Free", featured: false, badge: "🃏 Wild Card", color: "bg-green-600", iconName: "Camera", keywords: ["image", "photo", "realistic", "typography", "text", "open source", "generate"], openSource: true },
  { id: "canva-magic", name: "Canva Magic Studio", description: "Design for non-designers. Instant brand kits and social media layouts.", category: "Image", url: "https://canva.com", pricing: "Freemium", featured: false, color: "bg-cyan-500", iconName: "Layers", keywords: ["design", "graphic", "social media", "brand", "marketing", "layout", "create"], isViral: true },
  { id: "adobe-firefly", name: "Adobe Firefly 4", description: "Ethical AI trained on Adobe Stock. Perfect for commercial enterprise use.", category: "Image", url: "https://adobe.com", pricing: "Paid", featured: false, color: "bg-red-600", iconName: "Wind", keywords: ["image", "design", "commercial", "enterprise", "adobe", "generate", "create"] },
  { id: "stable-diffusion-4", name: "Stable Diffusion 4", description: "Community-driven open model. Infinite customization with LoRAs and ControlNet.", category: "Image", url: "https://stability.ai", pricing: "Free", featured: false, badge: "🧪 Experimental", color: "bg-violet-600", iconName: "Wand2", keywords: ["image", "open source", "custom", "lora", "controlnet", "generate", "ai"], openSource: true },
  { id: "leonardo-ai", name: "Leonardo.AI", description: "Game asset specialist. Consistent character generation for indie devs.", category: "Image", url: "https://leonardo.ai", pricing: "Freemium", featured: false, color: "bg-orange-600", iconName: "Gamepad2", keywords: ["image", "game", "asset", "character", "design", "generate", "3d"] },
  { id: "ideogram-v2", name: "Ideogram v2", description: "The typography specialist. Perfect text rendering in any style or language.", category: "Image", url: "https://ideogram.ai", pricing: "Freemium", featured: false, badge: "✍️ Text Master", color: "bg-pink-600", iconName: "Type", keywords: ["image", "typography", "text", "font", "design", "generate", "create"] },

  // --- VÍDEO & ANIMAÇÃO ---
  { id: "veo-3", name: "Google Veo 3", description: "Hollywood-grade video with 4K resolution and temporal consistency.", category: "Video", url: "https://deepmind.google/veo", pricing: "Paid", featured: false, badge: "🎬 Cinema", color: "bg-rose-500", iconName: "Video", keywords: ["video", "generate", "create", "4k", "cinema", "film", "movie", "animation"] },
  { id: "runway-gen-4", name: "Runway Gen-4", description: "Advanced physics engine for video. Control liquid, fire, and gravity.", category: "Video", url: "https://runwayml.com", pricing: "Paid", featured: false, color: "bg-neutral-900", iconName: "Film", keywords: ["video", "generate", "physics", "effects", "create", "animation", "vfx"] },
  { id: "heygen-pro", name: "HeyGen Avatars", description: "Instant video translation with perfect lip-sync in 50+ languages.", category: "Video", url: "https://heygen.com", pricing: "Freemium", featured: false, badge: "🗣️ Avatars", color: "bg-blue-400", iconName: "User", keywords: ["video", "avatar", "translation", "lip-sync", "voice", "multilingual", "dubbing"], isViral: true },
  { id: "luma-dream", name: "Luma Dream Machine", description: "Fast, high-action video generation with zero artifacts.", category: "Video", url: "https://lumalabs.ai", pricing: "Freemium", featured: false, color: "bg-orange-500", iconName: "Zap", keywords: ["video", "generate", "fast", "action", "create", "animation"] },
  { id: "pika-2", name: "Pika 2.0", description: "Creative video effects with lip-sync and scene transitions.", category: "Video", url: "https://pika.art", pricing: "Freemium", featured: false, color: "bg-fuchsia-500", iconName: "Clapperboard", keywords: ["video", "effects", "lip-sync", "transitions", "create", "edit"] },
  { id: "kling-ai", name: "Kling AI", description: "Chinese competitor with stunning cinematic quality at 1/3 the price.", category: "Video", url: "https://klingai.com", pricing: "Freemium", featured: false, badge: "💎 Value", color: "bg-red-700", iconName: "PlayCircle", keywords: ["video", "generate", "cinema", "affordable", "create", "film"] },

  // --- PRODUTIVIDADE & TRABALHO ---
  { id: "m365-copilot", name: "M365 Copilot", description: "The ultimate work assistant. Deeply integrated into Excel, PPT and Outlook.", category: "Productivity", url: "https://microsoft.com", pricing: "Paid", featured: false, badge: "🏢 Business", color: "bg-blue-800", iconName: "Briefcase", keywords: ["productivity", "work", "office", "excel", "powerpoint", "outlook", "business", "assistant"] },
  { id: "gamma-app", name: "Gamma", description: "Create stunning presentations and websites from a single text prompt.", category: "Productivity", url: "https://gamma.app", pricing: "Freemium", featured: false, badge: "🔥 Viral", color: "bg-pink-500", iconName: "Presentation", keywords: ["presentation", "slides", "website", "create", "design", "pitch", "deck"], isViral: true },
  { id: "fireflies-ai", name: "Fireflies.ai", description: "Automatically transcribe and summarize your meetings across all platforms.", category: "Productivity", url: "https://fireflies.ai", pricing: "Freemium", featured: false, color: "bg-blue-600", iconName: "Calendar", keywords: ["meeting", "transcribe", "notes", "summary", "productivity", "work", "record"] },
  { id: "notion-q", name: "Notion Q&A", description: "Chat with your entire company knowledge base instantly.", category: "Productivity", url: "https://notion.so", pricing: "Paid", featured: false, color: "bg-black", iconName: "FileText", keywords: ["notes", "knowledge", "chat", "search", "productivity", "organize", "work"] },
  { id: "tome-ai", name: "Tome", description: "Narrative presentations that design themselves with AI-generated visuals.", category: "Productivity", url: "https://tome.app", pricing: "Freemium", featured: false, color: "bg-purple-600", iconName: "BookOpen", keywords: ["presentation", "slides", "storytelling", "create", "design", "pitch"] },
  { id: "otter-ai", name: "Otter.ai", description: "Live meeting transcription with speaker identification and action items.", category: "Productivity", url: "https://otter.ai", pricing: "Freemium", featured: false, color: "bg-sky-600", iconName: "AudioLines", keywords: ["meeting", "transcribe", "notes", "voice", "productivity", "record", "work"] },
  { id: "mem-ai", name: "Mem", description: "Self-organizing notes that surface connections automatically.", category: "Productivity", url: "https://mem.ai", pricing: "Paid", featured: false, color: "bg-indigo-500", iconName: "Network", keywords: ["notes", "organize", "knowledge", "productivity", "write", "memory", "ai"] },
  { id: "reclaim-ai", name: "Reclaim.ai", description: "Smart calendar that auto-schedules your tasks based on priorities.", category: "Productivity", url: "https://reclaim.ai", pricing: "Freemium", featured: false, color: "bg-green-500", iconName: "CalendarClock", keywords: ["calendar", "schedule", "time", "productivity", "organize", "planning", "work"] },

  // --- ÁUDIO & VOZ ---
  { id: "eleven-v3", name: "ElevenLabs v3", description: "Uncanny emotional voice cloning. The standard for narration and dubbing.", category: "Audio", url: "https://elevenlabs.io", pricing: "Freemium", featured: false, badge: "🎙️ Best Voice", color: "bg-stone-800", iconName: "Mic", keywords: ["voice", "audio", "clone", "narration", "dubbing", "speech", "tts", "generate"] },
  { id: "suno-v4", name: "Suno v4", description: "Generate full 3-minute songs with radio-ready production quality.", category: "Audio", url: "https://suno.com", pricing: "Freemium", featured: false, color: "bg-neutral-700", iconName: "Music", keywords: ["music", "audio", "song", "generate", "create", "compose", "production"], isViral: true },
  { id: "udio-v2", name: "Udio v2", description: "Musician's choice for complex song structures and high-fidelity audio.", category: "Audio", url: "https://udio.com", pricing: "Freemium", featured: false, color: "bg-indigo-900", iconName: "Music2", keywords: ["music", "audio", "song", "generate", "create", "compose", "musician"] },
  { id: "murf-ai", name: "Murf AI", description: "Professional voiceovers in 120+ voices across 20+ languages.", category: "Audio", url: "https://murf.ai", pricing: "Freemium", featured: false, color: "bg-teal-700", iconName: "Radio", keywords: ["voice", "audio", "voiceover", "narration", "speech", "tts", "generate"] },
  { id: "descript-overdub", name: "Descript Overdub", description: "Clone your voice to fix podcast mistakes by typing corrections.", category: "Audio", url: "https://descript.com", pricing: "Paid", featured: false, color: "bg-violet-700", iconName: "Waveform", keywords: ["voice", "audio", "clone", "podcast", "edit", "transcribe", "speech"] },

  // --- CÓDIGO & TECH ---
  { id: "github-copilot", name: "GitHub Copilot", description: "The most robust autocomplete for enterprise software development.", category: "Code", url: "https://github.com/features/copilot", pricing: "Paid", featured: false, color: "bg-slate-900", iconName: "Github", keywords: ["code", "coding", "autocomplete", "developer", "programming", "github", "ai"], isClassic: true },
  { id: "replit-agent", name: "Replit Agent", description: "Deploy full-stack applications by just describing them to an agent.", category: "Code", url: "https://replit.com", pricing: "Paid", featured: false, badge: "⚡ Fast Build", color: "bg-orange-700", iconName: "Terminal", keywords: ["code", "coding", "build", "deploy", "app", "fullstack", "programming"] },
  { id: "hugging-face", name: "Hugging Face", description: "Central hub for open-source AI. Access millions of free models.", category: "Code", url: "https://huggingface.co", pricing: "Free", featured: false, badge: "🤗 Community", color: "bg-yellow-400", iconName: "Database", keywords: ["code", "ai", "models", "open source", "ml", "machine learning", "community"], openSource: true },
  { id: "v0-vercel", name: "v0 by Vercel", description: "Generate production-ready React components from screenshots or text.", category: "Code", url: "https://v0.dev", pricing: "Freemium", featured: false, badge: "⚛️ React", color: "bg-cyan-600", iconName: "Component", keywords: ["code", "react", "component", "generate", "frontend", "ui", "web"], isViral: true },
  { id: "tabnine", name: "Tabnine", description: "Privacy-first code completion. Runs on-device with no data leaks.", category: "Code", url: "https://tabnine.com", pricing: "Paid", featured: false, color: "bg-blue-900", iconName: "Shield", keywords: ["code", "coding", "autocomplete", "privacy", "developer", "programming", "ai"] },
  { id: "codeium", name: "Codeium", description: "Free alternative to Copilot with comparable autocomplete quality.", category: "Code", url: "https://codeium.com", pricing: "Free", featured: false, badge: "💸 Free", color: "bg-green-700", iconName: "Code", keywords: ["code", "coding", "autocomplete", "free", "developer", "programming", "ai"] },

  // --- ESCRITA & CONTEÚDO ---
  { id: "jasper-ai", name: "Jasper AI", description: "Enterprise content engine. SEO-optimized blog posts at scale.", category: "Writing", url: "https://jasper.ai", pricing: "Paid", featured: false, color: "bg-purple-700", iconName: "FileText", keywords: ["write", "writing", "text", "content", "blog", "seo", "article", "copy", "marketing"] },
  { id: "grammarly-ai", name: "Grammarly Pro", description: "AI writing assistant that checks grammar, tone, and plagiarism everywhere.", category: "Writing", url: "https://grammarly.com", pricing: "Freemium", featured: false, color: "bg-green-800", iconName: "Check", keywords: ["write", "writing", "text", "grammar", "edit", "check", "assistant", "correction"], isClassic: true },
  { id: "writesonic", name: "Writesonic", description: "Fast article generation with built-in SEO optimization tools.", category: "Writing", url: "https://writesonic.com", pricing: "Freemium", featured: false, color: "bg-blue-600", iconName: "PenTool", keywords: ["write", "writing", "text", "article", "blog", "seo", "content", "generate"] },
  { id: "copy-ai", name: "Copy.ai", description: "Marketing copy for social media, emails, and ads in seconds.", category: "Writing", url: "https://copy.ai", pricing: "Freemium", featured: false, color: "bg-cyan-700", iconName: "PenLine", keywords: ["write", "writing", "text", "copy", "marketing", "ads", "social media", "content"] },
  { id: "quillbot", name: "QuillBot", description: "Paraphrasing and summarization tool for students and researchers.", category: "Writing", url: "https://quillbot.com", pricing: "Freemium", featured: false, color: "bg-amber-600", iconName: "BookMarked", keywords: ["write", "writing", "text", "paraphrase", "summary", "rewrite", "edit", "academic"] },

  // --- 3D & ESPACIAL ---
  { id: "spline-ai", name: "Spline AI", description: "Generate 3D objects and scenes from text prompts for web and games.", category: "3D", url: "https://spline.design", pricing: "Freemium", featured: false, badge: "🆕 Emerging", color: "bg-purple-600", iconName: "Box", keywords: ["3d", "model", "generate", "scene", "game", "web", "design", "create"] },
  { id: "luma-nerf", name: "Luma NeRF", description: "Capture real-world objects in 3D using just your smartphone camera.", category: "3D", url: "https://lumalabs.ai", pricing: "Freemium", featured: false, color: "bg-cyan-600", iconName: "ScanLine", keywords: ["3d", "scan", "capture", "camera", "model", "nerf", "ar", "vr"] },
  { id: "meshy-ai", name: "Meshy", description: "Text-to-3D models with game-ready textures in under 2 minutes.", category: "3D", url: "https://meshy.ai", pricing: "Freemium", featured: false, color: "bg-lime-600", iconName: "Layers3", keywords: ["3d", "model", "generate", "texture", "game", "create", "fast"] },
  { id: "csm-ai", name: "CSM.ai", description: "Image-to-3D converter for rapid prototyping and concept visualization.", category: "3D", url: "https://csm.ai", pricing: "Freemium", featured: false, color: "bg-orange-600", iconName: "Cuboid", keywords: ["3d", "model", "convert", "image", "prototype", "visualization", "create"] },
];

// Utility functions
export const getCategories = (): string[] => {
  return Array.from(new Set(tools.map((tool) => tool.category)));
};

export const getFeaturedTools = (): Tool[] => {
  return tools.filter((tool) => tool.featured);
};

export const getToolsByCategory = (category: string): Tool[] => {
  return tools.filter((tool) => tool.category === category);
};
