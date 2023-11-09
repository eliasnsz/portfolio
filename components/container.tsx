import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

type Props = ComponentProps<'section'>

export function Container({ children, className, ...props }: Props) {
  return (
    <section
      className={cn('max-w-[1600px] px-4 xs:w-[72vw] m-auto', className)}
      {...props}
    >
      {children}
    </section>
  )
}
