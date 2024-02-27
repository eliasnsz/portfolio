import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Cases',
  description: 'Made with love and attention.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function CasesLayout({ children }: { children: ReactNode }) {
  return children
}
