import { Container } from '@/components/container'
import { Grain } from '@/components/grain'

export default function About() {
  return (
    <>
      <div className="fixed inset-0 w-full h-screen -z-10">
        <Container className="w-full h-full border-x border-x-stone-800 flex justify-center">
          <div className="h-full ml-[1px] w-px bg-stone-800" />
        </Container>
      </div>
      <Grain />

      <Container className="items-start pt-[16em] pb-[8em] sm:pt-[16em] sm:px-0">
        About me
      </Container>
    </>
  )
}
