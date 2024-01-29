import type { Metadata } from 'next'
import './globals.css'
import { gilroy } from '@/public/fonts/gilroy'
import { Navbar } from '@/components/navbar'
import { GlobalScrollBar } from '@/components/global-scrollbar'
import { MenuContextProvider } from '@/contexts/menu-context'
import { Menu } from '@/components/menu'
import { Footer } from '@/components/footer'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: {
    default: 'Porfólio — Elias Souza',
    template: '%s — Elias Souza',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          name="google-site-verification"
          content="GhAs9_JqW7gRz0yeT2YAUApA8WxDCofnAxkcEkvaxXQ"
        />
      </head>
      <body
        className={`${gilroy.variable} text-paragraph font-gilroy bg-black`}
      >
        <MenuContextProvider>
          <Navbar />
          <Menu />
          {children}
          <Analytics />
          <Footer />
          <GlobalScrollBar />
        </MenuContextProvider>
      </body>
    </html>
  )
}
