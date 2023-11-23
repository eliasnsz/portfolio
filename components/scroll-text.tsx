'use client'
import { motion } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'
import { stone } from 'tailwindcss/colors'

interface Props {
  children: ReactNode
}

export function ScrollText({ children }: Props) {
  const [scrollOffset, setScrollOffset] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)

  const handleScroll = () => {
    setWindowWidth(window.innerWidth)
    setScrollOffset(window.scrollY)
  }

  useEffect(() => {
    if (window) {
      setWindowWidth(window.innerWidth)
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  function getScrollSpeed() {
    if (windowWidth < 480) {
      return 7.9
    }
    if (windowWidth < 1280) {
      return 3.4
    }
    return 3
  }

  return (
    <div className="px-0 sm:my-0 my-[4em] overflow-hidden w-full aspect-video">
      <svg
        id="text-curve__container"
        viewBox="0 -80 760 1460"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="text-curve"
          d="M0 28.0c0 0 101-40 258 117.9S590 19.3 724.2 1.1s177 207 715,8"
          fill="none"
          stroke="none"
        ></path>
        <motion.text className="font-extrabold uppercase z-10 sm:text-[3.2em] text-[8em]">
          <textPath
            id="text-curve__path"
            href="#text-curve"
            fill={stone['300']}
            startOffset={`${1400 - scrollOffset * getScrollSpeed()}`}
          >
            {children}
          </textPath>
        </motion.text>
      </svg>
    </div>
  )
}
