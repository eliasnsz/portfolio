import { ScrollDown } from './scroll-down'
import { Container } from './container'
import Link from 'next/link'

const actions = [
  {
    label: 'Cases',
    href: '/cases',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export function Hero() {
  return (
    <main className="grid place-items-center w-full overflow-hidden mt-[16em]">
      {/* Main Title Container */}
      <Container className="flex flex-col gap-16 justify-center h-full">
        <div className="text-center flex flex-col gap-4">
          {/* Sob Title */}
          <h6 className="text-stone-400 font-semibold">
            Elias Souza — Fullstack Developer
          </h6>
          {/* Main Title */}
          <h1 className="italic uppercase tracking-tight leading-[1.2] text-title text-stone-200 font-extrabold m-auto">
            Crafting unique <br /> and unforgettable <br /> digital experiences
          </h1>
        </div>
        {/* CTA Buttons */}
        <div>
          {actions.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-center w-full h-fit max-w-sm after:-z-10 hover:after:translate-y-0 after:transition-all overflow-hidden transition-all after:translate-y-full after:w-full after:bg-stone-300 after:block after:absolute after:inset-0 relative m-auto -mb-[1px] p-3 border-stone-400 font-bold text-stone-300 text-sm sm:text-lg border"
            >
              <span className="mix-blend-difference">{item.label}</span>
            </Link>
          ))}
        </div>
        <ScrollDown targetId="about-me" className="group w-fit self-center" />
      </Container>
    </main>
  )
}
