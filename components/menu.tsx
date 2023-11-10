'use client'
import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Variants, motion } from 'framer-motion'

import { Container } from './container'
import useMenu from '@/contexts/menu-context'

const navigation = [
  { href: '/', title: 'Sobre' },
  { href: '/', title: 'Projetos' },
  { href: '/', title: 'Contato' },
  { href: '/', title: 'Github' },
]

const socials = [
  { href: 'https://www.linkedin.com/in/eliasnsz/', icon: FaLinkedin },
  { href: 'https://instagram.com/eliasnsz', icon: FaInstagram },
  { href: 'https://www.youtube.com/@eliasnsz', icon: FaYoutube },
]

const menuContainerVariants: Variants = {
  closed: {
    translateY: '-100%',
    transition: {
      duration: 0.85,
      delay: 0.3,
      ease: [0.5, 0, 0.25, 1],
    },
  },
  open: {
    translateY: 0,
    transition: {
      duration: 0.85,
      ease: [0.5, 0, 0.25, 1],
    },
  },
}

const menuContentVariants: Variants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.5, 0, 0.25, 1],
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.7,
      ease: [0.5, 0, 0.25, 1],
    },
  },
}

export function Menu() {
  const { isOpen } = useMenu()

  return (
    <motion.menu
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={menuContainerVariants}
      className="fixed inset-0 w-screen h-screen bg-black z-30"
    >
      <Container className="relative h-full border-x border-stone-800">
        {/* Center Line */}
        <div className="absolute h-full border-l -z-10 border-l-stone-800 bg-stone-800 left-1/2" />
        <motion.div
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={menuContentVariants}
          className="flex items-center justify-center gap-4 flex-col h-full "
        >
          <h6 className="text-xl text-stone-500 font-semibold">Menu</h6>

          <ul className="flex flex-col gap-6">
            {navigation.map(({ href, title }) => (
              <Link href={href} key={title}>
                <li className="text-5xl font-black hover:text-stone-200 hover:drop-shadow-[0px_0px_15px_#ffffff22] transition-all text-stone-400 italic uppercase text-center">
                  {title}
                </li>
              </Link>
            ))}
          </ul>

          <div className="border mt-[4em] flex border-stone-400 divide-x divide-stone-400">
            {socials.map(({ href, icon: Icon }) => (
              <a
                className="p-3 hover:shadow-[0px_0px_15px_#ffffff44] transition-shadow group"
                target="_blank"
                rel="noreferer"
                key={href}
                href={href}
              >
                <Icon
                  size={24}
                  className="text-stone-400 transition-colors group-hover:text-stone-200"
                />
              </a>
            ))}
          </div>

          <p className="text-xs text-stone-500">
            &copy; Todos os direitos reservados.
          </p>
        </motion.div>
      </Container>
    </motion.menu>
  )
}
