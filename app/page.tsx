import { ScrollText } from '@/components/scroll-text'
import { Container } from '@/components/container'
import { CaseCard } from '@/components/case-card'
import { AboutMe } from '@/components/about-me'
import { Hero } from '@/components/hero'
import { Grain } from '@/components/grain'

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

      <Container
        id="about-me"
        className="flex px-0 sm:px-4 py-[8em] flex-col items-center gap-12 sm:gap-24"
      >
        <h4 className="uppercase italic text-[clamp(2.5em,20px+3vw,3.2em)] font-black leading-tight text-stone-300">
          Cases
        </h4>
        <section className="w-full flex flex-col gap-12 lg:gap-20">
          <CaseCard
            href="recanto-andreeta"
            title="Recanto Andreeta"
            imageUrl="https://i.imgur.com/qphPjud.jpeg"
          />
        </section>
      </Container>
    </div>
  )
}
