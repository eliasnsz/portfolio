import UnderDevelopmentPage from '@/components/under-development-page'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'About',
  description: 'A little about me.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  const isProduction = process.env.NODE_ENV === 'production'

  return isProduction ? <UnderDevelopmentPage /> : children
}
