import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UseHub.ai - The AI Bible 2026 | Best AI Tools Directory',
  description: 'Discover the best AI tools of 2026. Curated directory for Agents, Video Generation, Coding, and Research. Verified LMARENA rankings.',
  keywords: 'AI tools, artificial intelligence, generative AI, AI agents, Sora 2, Gemini 3, AI directory',
  openGraph: {
    title: 'UseHub.ai - The AI Bible 2026',
    description: 'Stop searching. Start creating. The elite selection of AI tools.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
