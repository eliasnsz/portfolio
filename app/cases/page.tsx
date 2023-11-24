import { CaseCard } from '@/components/case-card'
import { Container } from '@/components/container'
import { Grain } from '@/components/grain'
import { HeroPattern } from '@/components/hero-pattern'

import { cases } from '@/components/cases'
import { ScrollDown } from '@/components/scroll-down'

export default function CasesPage() {
  return (
    <>
      <div className="fixed inset-0 w-full h-screen -z-10">
        <Container className="w-full h-full border-x border-x-stone-800 flex justify-center">
          <div className="h-full ml-[1px] w-px bg-stone-800" />
        </Container>
      </div>
      <Grain />
      <HeroPattern />

      <Container className="items-start px-0 sm:pt-[12em] pt-[16em] sm:px-0">
        <div className="flex flex-col items-center gap-16">
          <div className="text-center space-y-4">
            <h6 className="font-semibold text-sm sm:text-xl text-stone-400">
              Cases
            </h6>
            <h1 className="text-title text-stone-200 uppercase italic leading-[1.15] font-extrabold">
              MADE WITH <br /> LOVE & ATTENTION{' '}
            </h1>
          </div>
          <ScrollDown targetId="cases" block="start" />
        </div>

        <section
          id="cases"
          className="sm:gap-12 flex flex-col lg:gap-20 mt-[12em]"
        >
          {cases.map(({ href, imageUrl, title }) => (
            <CaseCard
              key={imageUrl}
              href={href}
              title={title}
              imageUrl={imageUrl}
            />
          ))}
        </section>
      </Container>
    </>
  )
}
