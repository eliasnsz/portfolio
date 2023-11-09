import { Container } from './container'

export function AboutMe() {
  return (
    <Container
      id="about-me"
      className="flex pb-[4em] flex-col lg:flex-row items-center gap-16 justify-between"
    >
      <div className="max-w-lg text-center lg:text-start w-full space-y-4 sm:space-y-8">
        <h4 className="uppercase italic text-[clamp(2.5em,20px+3vw,3.2em)] font-black leading-tight text-stone-300">
          Um pouco <br /> sobre mim
        </h4>
        <p className="text-stone-400 font-normal leading-loose">
          Sou um desenvolvedor apaixonado por tecnologia e design, com
          experiência em desenvolvimento web e mobile. Estou à disposição para
          trabalhar em novos projetos e ajudar a transformar suas ideias em
          realidade. Minha missão é fornecer soluções atraentes e funcionais que
          superem suas expectativas.
        </p>
      </div>
      <div className="max-w-lg text-center lg:text-end space-y-4 sm:space-y-8">
        <h4 className="text-[clamp(1.2em,20px+3vw,2.7em)] uppercase italic font-black text-stone-300">
          Skills
        </h4>
        <ul className="space-y-3 text-stone-400 font-normal leading-loose sm:text-xl text-lg">
          <li>Web Design</li>
          <li>Development</li>
          <li>Mobile Development</li>
          <li>UI/UX</li>
        </ul>
      </div>
    </Container>
  )
}
