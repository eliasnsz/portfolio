import Link from 'next/link'
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'

import { Container } from './container'

export const socials = [
  { href: 'https://www.github.com/eliasnsz', icon: FaGithub },
  { href: 'https://instagram.com/eliasnsz', icon: FaInstagram },
  { href: 'https://www.youtube.com/@eliasnsz', icon: FaYoutube },
]

export function Footer() {
  return (
    <>
      <Container className="flex items-center py-[8em] sm:py-[12em] justify-center">
        <Link href="/contact" className="relative group">
          <h2 className="text-[clamp(1em,18px+4vw,5em)] hover:drop-shadow-[0px_0px_25px_#ffffff22] whitespace-nowrap font-extrabold text-stone-300 hover:text-stone-100 transition-all">
            {"Let's work together"} <span className="pt-3">&rarr;</span>
          </h2>
          <div className="sticky -bottom-2 left-0 bg-transparent group-hover:bg-stone-100 transition-colors w-full h-1.5"></div>
        </Link>
      </Container>

      <footer className="mb-[4em]">
        <Container className="lg:border grid text-base text-stone-400 border-stone-400 lg:divide-stone-400 grid-rows-[min-content_min-content_min-content] lg:grid-cols-[2fr_3fr_2fr] lg:divide-x">
          <div className="lg:p-6 p-3 lg:order-1 text-center order-3">
            &copy; All rights reserved.
          </div>
          <div className="lg:p-6 p-3 order-1 lg:order-2 text-center flex items-center justify-center gap-3">
            <div className="h-2 flex items-center justify-center aspect-square w-2 rounded-full bg-green-500">
              <div className="h-4 w-4 animate-ping rounded-full aspect-square bg-green-600/50" />
            </div>
            <Link href="/contact" className="text-stone-300 underline">
              Available for new projects.
            </Link>
          </div>
          <div className="lg:p-6 p-3 lg:order-3 order-2 text-center flex items-center justify-center gap-4">
            {socials.map(({ href, icon: Icon }) => (
              <a
                href={href}
                className="transition-colors hover:text-stone-200"
                key={href}
                target="_blank"
                rel="noreferer"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </Container>
      </footer>
    </>
  )
}
