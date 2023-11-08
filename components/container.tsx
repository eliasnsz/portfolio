import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

type Props = ComponentProps<'section'>

export function Container({ children, className }: Props) {
  return (
    <section className={cn('max-w-8xl m-auto lg:px-24 px-3', className)}>
      {children}
    </section>
  )
}
