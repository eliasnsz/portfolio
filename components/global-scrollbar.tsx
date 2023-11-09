'use client'
import { useScroll, motion } from 'framer-motion'

export function GlobalScrollBar() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="fixed w-[2px] lg:block hidden h-32 bg-stone-700 top-1/2 right-12 -translate-y-1/2">
      <motion.div
        className="bg-stone-400 origin-top w-full h-full"
        style={{
          scaleY: scrollYProgress,
        }}
      />
    </div>
  )
}
