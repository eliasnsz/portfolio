import { Container } from '@/components/container'
import { Grain } from '@/components/grain'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <>
      <Grain />
      <Container className="relative grid place-items-center h-screen">
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 opacity-5 -translate-y-1/2 text-[clamp(10em,8em+25vw,24em)] text-center font-black">
          404
        </h2>
        <div className="sm:space-y-6 space-y-4">
          <h1 className="text-title leading-[1.15] uppercase italic text-center text-stone-200 font-extrabold">
            Page Not Found
          </h1>
          <Link
            href="/"
            className="block text-center w-full h-fit after:-z-10 hover:after:translate-y-0 after:transition-all overflow-hidden transition-all after:translate-y-full after:w-full after:bg-stone-300 after:block after:absolute after:inset-0 relative m-auto -mb-[1px] p-3 border-stone-400 font-bold text-stone-300 text-sm sm:text-lg border"
          >
            <span className="mix-blend-difference">Return back home</span>
          </Link>
        </div>
      </Container>
    </>
  )
}
