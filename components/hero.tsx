import { HeroPattern } from './hero-pattern'
import { ScrollDown } from './scroll-down'
import { Container } from './container'

const actions = [
  {
    label: 'Projetos',
    href: '/cases',
  },
  {
    label: 'Contato',
    href: '/contact',
  },
]

export function Hero() {
  return (
    <main className="flex items-center justify-between overflow-hidden relative xl:pt-[4em] pt-[8em] h-screen">
      {/* SVG Background Animation */}
      <HeroPattern />
      {/* Main Title Container */}
      <Container className="flex flex-col gap-16 justify-center h-full">
        <div className="text-center flex flex-col gap-4">
          {/* Sob Title */}
          <h6 className="text-stone-400 font-semibold">
            Elias Souza — Fullstack Developer
          </h6>
          {/* Main Title */}
          <h1 className="italic uppercase tracking-tight leading-[1.2] text-title text-stone-200 font-extrabold m-auto">
            Criando experiências <br /> digitais inesquecíveis
          </h1>
        </div>
        {/* CTA Buttons */}
        <div>
          {actions.map((item) => (
            <button
              key={item.href}
              className="block w-full h-fit max-w-sm after:-z-10 hover:after:translate-y-0 after:transition-all overflow-hidden transition-all after:translate-y-full after:w-full after:bg-stone-300 after:block after:absolute after:inset-0 relative m-auto -mb-[1px] p-3 border-stone-400 font-bold text-stone-300 text-sm sm:text-lg border"
            >
              <span className="mix-blend-difference">{item.label}</span>
            </button>
          ))}
        </div>
        <ScrollDown targetId="about-me" className="group w-fit self-center" />
      </Container>
    </main>
  )
}
