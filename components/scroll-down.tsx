'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ComponentProps } from 'react'

type Props = ComponentProps<'button'>

export function ScrollDown(props: Props) {
  return (
    <button className={cn('group w-fit', props.className)} {...props}>
      <div className="flex flex-col gap-1 items-center">
        <span className="group-hover:text-stone-300 transition-colors text-stone-400 font-extrabold uppercase italic text-xs">
          Scroll
        </span>

        <div className="relative overflow-hidden h-8 w-5 grid place-items-center border border-stone-300 rounded-xl">
          <motion.div
            initial={{ y: -5 }}
            animate={{ y: [-5, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 1,
              ease: 'easeInOut',
            }}
            className="h-1.5 w-1 mix-blend-difference bg-stone-300 rounded-xl"
          />
          <div className="absolute -z-10 w-full group-hover:h-full h-0 transition-all bg-stone-300" />
        </div>

        <span className="text-stone-400 group-hover:text-stone-300 transition-colors font-extrabold uppercase italic text-xs">
          Down
        </span>
      </div>
    </button>
  )
}
