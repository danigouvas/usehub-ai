# 🎯 UseHub.ai - The Action-First AI Tools Search

> **Don't search for tools. Search for results.**

A premium, visually stunning search engine for AI tools built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **🔍 Zero-Latency Search**: Instant results from local data
- **🎨 Beautiful UI**: Glassmorphism effects, smooth animations, and neon glows
- **📱 Responsive**: Mobile-first design that works everywhere
- **🎭 Category Filtering**: Quick access to Image, Video, Code, Writing, Audio, and Productivity tools
- **⚡ Real-Time Filtering**: Searches across tool names, descriptions, AND use cases
- **🌙 Dark Mode**: Eye-friendly interface with premium aesthetics

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter

## 📦 Installation

```bash
# Clone or navigate to the project
cd ~/Documents/usehub-ai

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design Philosophy - "The Bento Search"

### Hero Section
- Minimalist design with glowing, centered search bar
- Glassmorphism effects with backdrop blur
- Headline: "Don't search for tools. Search for results."

### The Grid
- Responsive Bento Grid layout
- 1 column on mobile, 2 on tablet, 3 on desktop

### The Card
- Dark grey cards with subtle borders
- Soft neon glow (purple/blue) on hover
- Shows: Tool Icon, Name, Use Case badges, Pricing, and "Visit" button

## 🏗️ Project Structure

```
usehub-ai/
├── app/
│   ├── globals.css       # Global styles & animations
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page with search logic
├── components/
│   ├── SearchBar.tsx     # Glassmorphism search input
│   ├── ToolCard.tsx      # Animated tool cards
│   └── CategoryPills.tsx # Category filters
├── data/
│   └── tools.ts          # 10 high-quality AI tools
└── public/               # Static assets
```

## 🎯 Key Features Explained

### Real-Time Search
The search filters across three dimensions:
- Tool name
- Description
- Use cases

### Category Filtering
Click any category pill to filter:
- 🎨 Image
- 🎬 Video
- 💻 Code
- ✍️ Writing
- 🎙️ Audio
- 📝 Productivity

### Animations
Built with Framer Motion for:
- Fade-in-up card animations (staggered)
- Glow pulse effects
- Smooth hover transitions
- Entry animations

## 🎨 Customization

### Adding New Tools
Edit `data/tools.ts`:

```typescript
{
  id: "11",
  name: "Your Tool",
  description: "What it does",
  use_cases: ["use case 1", "use case 2"],
  pricing: "Free" | "Paid" | "Freemium",
  url: "https://...",
  category: "Image" | "Video" | "Code" | "Writing" | "Audio" | "Productivity",
  icon: "🚀",
}
```

### Styling
- Colors: Edit `tailwind.config.ts`
- Animations: Modify in `app/globals.css` or component files
- Typography: Change font in `app/layout.tsx`

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Other Platforms
```bash
npm run build
npm start
```

## 📈 Performance

- **First Load**: < 1s
- **Search Latency**: 0ms (local filtering)
- **Animation**: 60 FPS with Framer Motion
- **Bundle Size**: Optimized with Next.js 14

## 🎓 What Makes This Special

1. **Action-First**: Users search for tasks, not tool names
2. **Premium Feel**: Glassmorphism, gradients, and smooth animations
3. **Instant Results**: No API calls, zero latency
4. **Mobile-First**: Beautiful on any device
5. **Curated**: High-quality tools only

## 🔮 Future Enhancements

- [ ] Keyboard shortcuts (⌘K to focus search)
- [ ] Advanced filters (pricing, popularity)
- [ ] Tool comparison mode
- [ ] User favorites with localStorage
- [ ] Dark/light theme toggle
- [ ] Tool submission form

## 📝 License

MIT License - Feel free to use for personal or commercial projects

---

**Built with 💜 for the AI community**

*UseHub.ai - Where tasks meet tools*
