import Image from 'next/image'
import Link from 'next/link'
import { TbMenu } from 'react-icons/tb'

export function Navbar() {
  return (
    <nav className="fixed w-full flex justify-center top-12 z-50">
      <div className="flex w-fit bg-stone-950/40 backdrop-blur-md">
        <Link
          href="/"
          className="w-14 aspect-square border border-stone-300 flex items-center justify-center"
        >
          <Image src="/svg/logo.svg" alt="logo" width={32} height={32} />
        </Link>
        <button className="p-2 text-stone-300 border border-stone-300 -ml-[1px] hover:border-violet-500 transition-colors w-14 flex items-center justify-center">
          <TbMenu size={32} strokeWidth={1.4} />
        </button>
      </div>
    </nav>
  )
}
