import { ScrollText } from '@/components/scroll-text'
import { AboutMe } from '@/components/about-me'
import { Hero } from '@/components/hero'
import { HeroPattern } from '@/components/hero-pattern'
import { Grain } from '@/components/grain'
import { Cases } from '@/components/cases'

export default function Home() {
  return (
    <div>
      <Grain />
      <HeroPattern />
      <Hero />
      <ScrollText>
        &ldquo; the only way to do great work is to love what you do. &rdquo;
        (Steve Jobs)
      </ScrollText>
      <AboutMe />
      <Cases />
    </div>
  )
}
