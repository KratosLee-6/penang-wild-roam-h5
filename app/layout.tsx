import type { Metadata } from 'next'
import { Noto_Sans_SC, Playfair_Display } from 'next/font/google'
import './globals.css'

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-noto-sans-sc',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: '槟城野生漫游 | Penang Wild Roam',
  description: '野是生活态度，食是城市灵魂。5天4晚，本地老友陪你漫游南洋。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={`${notoSansSC.variable} ${playfair.variable} font-sans bg-white text-text overflow-x-hidden antialiased`}>
        {children}
      </body>
    </html>
  )
}
