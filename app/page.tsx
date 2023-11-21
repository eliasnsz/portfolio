import { ScrollText } from '@/components/scroll-text'
import { AboutMe } from '@/components/about-me'
import { Hero } from '@/components/hero'
import { Grain } from '@/components/grain'
import { Cases } from '@/components/cases'
import { Container } from '@/components/container'

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
    </div>
  )
}
