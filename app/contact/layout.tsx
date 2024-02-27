import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Let's bring your ideia to life!`,
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
