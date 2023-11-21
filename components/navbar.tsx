'use client'
import Image from 'next/image'
import { Variants, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { TbMenu } from 'react-icons/tb'
import { MdClose } from 'react-icons/md'

import useMenu from '@/contexts/menu-context'

const menuTriggerVariants: Variants = {
  closed: {
    translateX: '-16px',
    transition: {
      ease: 'easeInOut',
    },
  },
  open: {
    translateX: '40px',
    transition: {
      delay: 0.03,
      ease: 'easeInOut',
    },
  },
}

const menuTriggerContainerVariants: Variants = {
  closed: {
    translateX: '0%',
    transition: {
      ease: 'easeInOut',
    },
  },
  open: {
    translateX: '-50%',
    x: 1,
    transition: {
      ease: 'easeInOut',
    },
  },
}

const logoAnchorContainerVariants: Variants = {
  closed: {
    translateX: '0%',
    transition: {
      ease: 'easeInOut',
    },
  },
  open: {
    translateX: '50%',
    transition: {
      ease: 'easeInOut',
    },
  },
}

export function Navbar() {
  const router = useRouter()
  const { isOpen, setIsOpen } = useMenu()

  return (
    <nav className="fixed pointer-events-none w-full flex justify-center top-12 z-50">
      <div className="flex w-fit pointer-events-auto">
        {/*  */}
        <motion.a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            router.push('/')
          }}
          initial={'closed'}
          animate={isOpen ? 'open' : 'closed'}
          variants={logoAnchorContainerVariants}
          className="w-14 aspect-square border bg-stone-950 border-stone-300 flex items-center justify-center"
        >
          <Image src="/svg/logo.svg" alt="logo" width={32} height={32} />
        </motion.a>

        {/* Menu Trigger */}
        <motion.button
          onClick={() => setIsOpen((state) => !state)}
          initial={'closed'}
          animate={isOpen ? 'open' : 'closed'}
          variants={menuTriggerContainerVariants}
          className="p-2 overflow-hidden  bg-stone-950 text-stone-300 border border-stone-300 -ml-[1px] hover:border-violet-500 transition-colors w-14 flex items-center justify-center"
        >
          <motion.div
            initial={'closed'}
            animate={isOpen ? 'open' : 'closed'}
            variants={menuTriggerVariants}
            className="flex -translate-x-[16px]"
          >
            <div className="w-14">
              <MdClose size={32} className="text-stone-400" />
            </div>
            <div className="w-14">
              <TbMenu size={32} strokeWidth={1.4} />
            </div>
          </motion.div>
        </motion.button>
      </div>
    </nav>
  )
}
