import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Cases',
}

export default function CasesLayout({ children }: { children: ReactNode }) {
  return children
}