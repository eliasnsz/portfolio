import { HeroPattern } from './hero-pattern'
import { ScrollDown } from './scroll-down'
import { Container } from './container'

const actions = [
  {
    label: 'Cases',
    href: '/cases',
  },
  {
    label: 'Contato',
    href: '/contact',
  },
]

export function Hero() {
  return (
    <main className="grid overflow-hidden relative place-items-center pt-[16em] pb-[14em] h-full">
      {/* SVG Background Animation */}
      <HeroPattern />
      {/* Main Title Container */}
      <Container className="flex flex-col gap-16">
        <div className="text-center flex flex-col gap-4">
          {/* Sob Title */}
          <h6 className="text-stone-400 font-semibold">
            Elias Souza — Fullstack Developer
          </h6>
          {/* Main Title */}
          <h1 className="italic uppercase leading-tight text-title text-stone-300 font-black m-auto">
            Criando experiências <br /> digitais inesquecíveis
          </h1>
        </div>
        {/* CTA Buttons */}
        <div>
          {actions.map((item) => (
            <button
              key={item.href}
              className="block w-full h-full max-w-sm after:-z-10 hover:after:translate-y-0 after:transition-all overflow-hidden transition-all after:translate-y-full after:w-full after:bg-stone-300 after:block after:absolute after:inset-0 relative m-auto -mb-[1px] p-3 border-stone-400 font-bold text-stone-300 text-sm sm:text-lg border"
            >
              <span className="mix-blend-difference">{item.label}</span>
            </button>
          ))}
        </div>
        <ScrollDown
          targetId="about-me"
          className="group absolute -translate-x-1/2 bottom-10 left-1/2"
        />
      </Container>
    </main>
  )
}
