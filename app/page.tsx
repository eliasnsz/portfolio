import { ScrollText } from '@/components/scroll-text'
import { AboutMe } from '@/components/about-me'
import { Hero } from '@/components/hero'
import { Grain } from '@/components/grain'
import { Cases } from '@/components/cases'
import { Container } from '@/components/container'

import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const socials = [
  { href: 'https://www.linkedin.com/in/eliasnsz/', icon: FaLinkedin },
  { href: 'https://instagram.com/eliasnsz', icon: FaInstagram },
  { href: 'https://www.youtube.com/@eliasnsz', icon: FaYoutube },
]

export default function Home() {
  return (
    <div>
      <Grain />
      <Hero />
      <ScrollText>
        &ldquo; A única maneira de fazer algo com excelência é amar o que você
        faz. &rdquo; (Steve Jobs)
      </ScrollText>
      <AboutMe />
      <Cases />
      <Container className="flex items-center py-[8em] justify-center">
        <button className="relative group">
          <h2 className="text-[clamp(1em,18px+4vw,5em)] hover:drop-shadow-[0px_0px_25px_#ffffff22] whitespace-nowrap font-extrabold text-stone-300 hover:text-stone-100 transition-all">
            {"Let's work together"} <span className="pt-3">&rarr;</span>
          </h2>
          <div className="sticky -bottom-2 left-0 bg-transparent group-hover:bg-stone-100 transition-colors w-full h-1.5"></div>
        </button>
      </Container>

      <Container className="mb-[4em]">
        <footer className="lg:border grid text-base text-stone-400 border-stone-400 lg:divide-stone-400 grid-rows-[min-content_min-content_min-content] lg:grid-cols-[2fr_3fr_2fr] lg:divide-x">
          <div className="p-6 lg:order-1 text-center order-3">
            &copy; Todos os direitos reservados.
          </div>
          <div className="p-6 order-1 lg:order-2 text-center flex items-center justify-center gap-3">
            <div className="h-2 flex items-center justify-center aspect-square w-2 rounded-full bg-green-500">
              <div className="h-4 w-4 animate-ping rounded-full aspect-square bg-green-600/50" />
            </div>
            <a href="#" className="text-stone-300 underline">
              Disponível para novos projetos.
            </a>
          </div>
          <div className="p-6 lg:order-3 order-2 text-center flex items-center justify-center gap-4">
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
        </footer>
      </Container>
    </div>
  )
}
