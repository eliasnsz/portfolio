import { ScrollText } from '@/components/scroll-text'
import { AboutMe } from '@/components/about-me'
import { Hero } from '@/components/hero'

export default function Home() {
  return (
    <div>
      <Hero />

      <ScrollText>
        &ldquo; A única maneira de fazer algo com excelência é amar o que você
        faz. &rdquo; (Steve Jobs)
      </ScrollText>

      <AboutMe />
    </div>
  )
}
