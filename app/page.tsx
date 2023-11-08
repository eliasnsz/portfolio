import { Container } from '@/components/container'
import { HeroPattern } from '@/components/hero-pattern'
import { ScrollDown } from '@/components/scroll-down'
import Balancer from 'react-wrap-balancer'

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

export default function Home() {
  return (
    <div className="h-screen relative min-h-[600px] max-h-[1200px]">
      {/* Hero Section */}
      <main className="grid place-items-center h-full">
        {/* SVG Background Animation */}
        <HeroPattern className="absolute mb-16 -z-10 pointer-events-none" />
        {/* Main Title Container */}
        <Container className="flex flex-col gap-16">
          <div className="text-center flex flex-col gap-4">
            {/* Sob Title */}
            <h6 className="text-stone-400 font-semibold text-sm sm:text-lg">
              <Balancer>Elias Souza — Fullstack Developer</Balancer>
            </h6>
            {/* Main Title */}
            <h1 className="sm:text-5xl max-w-sm text-3xl italic uppercase sm:max-w-2xl text-stone-300 font-black m-auto">
              <Balancer className="leading-tight">
                Criando experiências digitais inesquecíveis
              </Balancer>
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
          <ScrollDown className="group sm:block hidden absolute -translate-x-1/2 bottom-10 left-1/2" />
        </Container>
      </main>

      <Container className="my-16 flex flex-col lg:flex-row items-center gap-16 justify-between">
        <div className="max-w-lg text-center lg:text-start w-full space-y-8">
          <h4 className="sm:text-5xl uppercase text-4xl italic font-black leading-tight text-stone-300">
            Um pouco <br /> sobre mim
          </h4>
          <p className="text-stone-300 font-normal leading-loose text-base lg:text-lg">
            Sou um desenvolvedor apaixonado por tecnologia e design, com
            experiência em desenvolvimento web e mobile. Estou à disposição para
            trabalhar em novos projetos e ajudar a transformar suas ideias em
            realidade. Minha missão é fornecer soluções atraentes e funcionais
            que superem suas expectativas.
          </p>
        </div>
        <div className="max-w-lg text-center lg:text-end space-y-8">
          <h4 className="sm:text-4xl uppercase text-3xl italic font-black leading-tight text-stone-300">
            Skills
          </h4>
          <ul className="space-y-5 text-stone-300 font-normal leading-loose sm:text-xl text-lg">
            <li>Web Design</li>
            <li>Development</li>
            <li>Mobile Development</li>
            <li>UI/UX</li>
          </ul>
        </div>
      </Container>

      <div className="h-screen"></div>
    </div>
  )
}
