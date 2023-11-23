import { CaseCard } from './case-card'
import { Container } from './container'

export function Cases() {
  return (
    <Container
      id="about-me"
      className="flex px-0 sm:px-4 pt-[8em] flex-col items-center gap-12 sm:gap-24"
    >
      <h4 className="uppercase italic text-[clamp(2.5em,20px+3vw,3.2em)] font-extrabold leading-[1.2] text-stone-300">
        Cases
      </h4>
      <section className="w-full flex flex-col sm:gap-12 lg:gap-20">
        <CaseCard
          href="recanto-andreeta"
          title="Recanto Andreeta"
          imageUrl="https://i.imgur.com/qphPjud.jpeg"
        />
      </section>
    </Container>
  )
}
