import Image from 'next/image'
import Link from 'next/link'
import { TbMenu } from 'react-icons/tb'

export function Navbar() {
  return (
    <nav className="sticky top-10 flex  w-fit z-50 m-auto">
      <Link
        href="/"
        className="w-14 aspect-square grid border place-items-center"
      >
        <Image src="/svg/logo.svg" alt="logo" width={32} height={32} />
      </Link>
      <button className="p-2 text-stone-300 border -ml-[1px] hover:border-violet-500 transition-colors w-14 grid place-items-center">
        <TbMenu size={32} strokeWidth={1.4} />
      </button>
    </nav>
  )
}
