import { Tool } from '../types';

export const tools: Tool[] = [
  // --- CHAT & KNOWLEDGE ---
  { id: "gpt-5", name: "ChatGPT", description: "The gold standard for conversational AI and tasks.", category: "Chat", url: "https://chat.openai.com", pricing: "Free", featured: true, badge: "#1 Overall", color: "bg-emerald-600", iconName: "MessageSquare", keywords: ["chat", "gpt", "openai"], rating: 4.9 },
  { id: "claude-4", name: "Claude 4.5", description: "Most human-like responses and elite coding logic.", category: "Chat", url: "https://claude.ai", pricing: "Free", featured: true, badge: "Smartest", color: "bg-orange-600", iconName: "Brain", keywords: ["chat", "anthropic", "logic"], rating: 4.8 },
  { id: "perplexity", name: "Perplexity", description: "Search engine replacement with real-time citations.", category: "Chat", url: "https://perplexity.ai", pricing: "Free", featured: true, badge: "Best Search", color: "bg-cyan-600", iconName: "Search", keywords: ["search", "knowledge", "answers"], rating: 4.9 },
  { id: "gemini-3", name: "Gemini 3 Pro", description: "Google's ultra-fast multimodal AI model.", category: "Chat", url: "https://gemini.google.com", pricing: "Free", featured: true, badge: "Google Elite", color: "bg-blue-600", iconName: "Zap", keywords: ["google", "chat", "multimodal"], rating: 4.6 },
  { id: "grok-3", name: "Grok 3", description: "Real-time X integration for cultural trends.", category: "Chat", url: "https://x.ai", pricing: "Paid", featured: false, color: "bg-gray-900", iconName: "Twitter", keywords: ["twitter", "real-time", "x"], rating: 4.5 },
  { id: "pi", name: "Pi AI", description: "Emotional support and personal assistant AI.", category: "Chat", url: "https://pi.ai", pricing: "Free", featured: false, color: "bg-yellow-600", iconName: "Heart", keywords: ["personal", "emotional", "voice"], rating: 4.7 },

  // --- CODE ---
  { id: "cursor", name: "Cursor", description: "The AI code editor that's replacing VS Code.", category: "Code", url: "https://cursor.sh", pricing: "Free", featured: true, badge: "Dev Choice", color: "bg-blue-500", iconName: "Code", keywords: ["editor", "coding", "programming"], rating: 4.9 },
  { id: "v0-dev", name: "v0.dev", description: "Generates full UI components from simple prompts.", category: "Code", url: "https://v0.dev", pricing: "Free", featured: false, color: "bg-black", iconName: "Layout", keywords: ["ui", "frontend", "react"], rating: 4.8 },
  { id: "replit", name: "Replit Ghostwriter", description: "Online IDE with powerful AI pair programming.", category: "Code", url: "https://replit.com", pricing: "Free", featured: false, color: "bg-orange-500", iconName: "Globe", keywords: ["online", "coding", "ide"], rating: 4.5 },
  { id: "bolt-new", name: "Bolt.new", description: "Build and deploy full-stack apps in seconds.", category: "Code", url: "https://bolt.new", pricing: "Free", featured: false, color: "bg-indigo-600", iconName: "Lightning", keywords: ["fullstack", "deploy", "apps"], rating: 4.8 },

  // --- IMAGE & DESIGN ---
  { id: "midjourney-v7", name: "Midjourney", description: "Highest quality artistic image generation.", category: "Image", url: "https://midjourney.com", pricing: "Paid", featured: true, badge: "Elite Art", color: "bg-purple-600", iconName: "Image", keywords: ["art", "design", "realistic"], rating: 4.9 },
  { id: "flux-1", name: "Flux.1", description: "The new king of open-weight image generation.", category: "Image", url: "https://blackforestlabs.ai", pricing: "Free", featured: true, badge: "Open King", color: "bg-pink-600", iconName: "Camera", keywords: ["stable", "diffusion", "open"], rating: 4.8 },
  { id: "canva-magic", name: "Canva Magic", description: "Complete design suite powered by AI tools.", category: "Image", url: "https://canva.com", pricing: "Free", featured: false, color: "bg-blue-400", iconName: "Palette", keywords: ["design", "easy", "social"], rating: 4.7 },
  { id: "leonardo", name: "Leonardo.ai", description: "Visual assets for gaming and creative design.", category: "Image", url: "https://leonardo.ai", pricing: "Free", featured: false, color: "bg-orange-600", iconName: "Sparkles", keywords: ["game", "assets", "creativity"], rating: 4.6 },

  // --- VIDEO ---
  { id: "sora", name: "Sora", description: "Hyper-realistic video from text by OpenAI.", category: "Video", url: "https://openai.com/sora", pricing: "Paid", featured: true, badge: "Visual King", color: "bg-red-600", iconName: "Video", keywords: ["realistic", "cinema", "openai"], rating: 4.9 },
  { id: "runway-g3", name: "Runway Gen-3", description: "The professional standard for AI video production.", category: "Video", url: "https://runwayml.com", pricing: "Free", featured: false, color: "bg-pink-500", iconName: "Film", keywords: ["pro", "editing", "generation"], rating: 4.7 },
  { id: "heygen", name: "HeyGen", description: "Create talking avatars with perfect lip-sync.", category: "Video", url: "https://heygen.com", pricing: "Free", featured: false, color: "bg-indigo-500", iconName: "User", keywords: ["avatar", "spokesperson", "ads"], rating: 4.8 },
  { id: "luma-dream", name: "Luma Dream Machine", description: "Fast, high-quality video generation for free.", category: "Video", url: "https://lumalabs.ai", pricing: "Free", featured: false, color: "bg-blue-800", iconName: "Zap", keywords: ["fast", "free", "video"], rating: 4.6 },

  // --- PRODUCTIVITY ---
  { id: "notion-ai", name: "Notion AI", description: "Write, plan, and organize inside your notes.", category: "Productivity", url: "https://notion.so", pricing: "Free", featured: true, badge: "All-in-One", color: "bg-gray-100", iconName: "BookOpen", keywords: ["notes", "workspace", "writing"], rating: 4.7 },
  { id: "gamma", name: "Gamma", description: "Create beautiful presentations in 30 seconds.", category: "Productivity", url: "https://gamma.app", pricing: "Free", featured: false, color: "bg-purple-500", iconName: "Presentation", keywords: ["slides", "decks", "pitch"], rating: 4.8 },
  { id: "otter", name: "Otter.ai", description: "Meeting notes and transcription in real-time.", category: "Productivity", url: "https://otter.ai", pricing: "Free", featured: false, color: "bg-blue-500", iconName: "Mic", keywords: ["meetings", "notes", "transcribe"], rating: 4.5 }
];
