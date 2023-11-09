'use client'
import { motion } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'
import { stone } from 'tailwindcss/colors'

interface Props {
  children: ReactNode
}

export function ScrollText({ children }: Props) {
  const [scrollOffset, setScrollOffset] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleScroll = () => {
    setWindowWidth(window.innerWidth)
    const scrollY = window.scrollY
    setScrollOffset(scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function getScrollSpeed() {
    if (windowWidth < 480) {
      return 6.7
    }
    if (windowWidth < 1280) {
      return 3
    }
    return 2.5
  }

  return (
    <div className="px-0 w-full aspect-video overflow-hidden">
      <svg
        id="text-curve__container"
        viewBox="0 -80 760 460"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="text-curve"
          d="M0 28.0c0 0 101-40 258 117.9S590 19.3 724.2 1.1s177 207 715,8"
          fill="none"
          stroke="none"
        ></path>
        <motion.text
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          className="font-extrabold sm:font-black z-10 sm:text-[4em] text-[8em]"
        >
          <textPath
            id="text-curve__path"
            href="#text-curve"
            fill={stone['300']}
            startOffset={`${1000 - scrollOffset * getScrollSpeed()}`}
          >
            {children}
          </textPath>
        </motion.text>
      </svg>
    </div>
  )
}
