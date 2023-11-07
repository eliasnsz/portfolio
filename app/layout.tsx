import type { Metadata } from 'next'
import './globals.css'
import { gilroy } from '@/public/fonts/gilroy'
import { Grain } from '@/components/grain'
import { Navbar } from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Elias Souza | Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${gilroy.variable} font-gilroy bg-black`}>
        <Navbar />
        <Grain />
        {children}
      </body>
    </html>
  )
}
