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
        <footer className="border text-base text-stone-500 border-stone-600 flex items-center divide-x divide-stone-600 justify-between">
          <div className="p-6 flex-1 text-center">
            <p>&copy; Todos os direitos reservados.</p>
          </div>
          <div className="p-6 flex-1 text-center flex items-center gap-3 justify-center">
            <div className="h-2 w-2 rounded-full flex items-center justify-center bg-green-500">
              <div className="h-3 w-3 aspect-square rounded-full bg-green-500 animate-ping" />
            </div>

            <a
              href="#"
              className="text-stone-300 underline hover:text-stone-200 transition-colors"
            >
              Disponível para novos projetos.
            </a>
          </div>
          <div className="p-6 flex gap-4 justify-center flex-1 text-center">
            {socials.map(({ href, icon: Icon }) => (
              <a href={href} target="_blank" rel="noreferer" key={Icon}>
                <Icon
                  size={20}
                  className="text-stone-400 hover:text-stone-300 transition-colors"
                />
              </a>
            ))}
          </div>
        </footer>
      </Container>
    </div>
  )
}
