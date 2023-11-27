import Link from 'next/link'

import { Grain } from './grain'
import { Container } from './container'

export default function UnderDevelopmentPage() {
  return (
    <>
      <Grain />

      <Container className="relative overflow-x-hidden grid place-items-center h-screen">
        <div className="absolute w-[75%] top-1/2 left-1/2 -translate-x-1/2 min-h-[640px] min-w-[640px] -translate-y-1/2 opacity-5 bg-contain h-[75%] bg-no-repeat bg-center invert bg-[url('https://uxwing.com/wp-content/themes/uxwing/download/traffic-road-sign/under-construction-sign-icon.png')]"></div>
        <div className="sm:space-y-8 space-y-6">
          <div className="space-y-2">
            <h6 className="text-center text-stone-500 italic uppercase sm:text-lg text-sm font-extrabold">
              Coming Soon
            </h6>
            <h1 className="text-title max-w-lg leading-[1.15] uppercase italic text-center text-stone-200 font-extrabold">
              This page is under development
            </h1>
          </div>
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
