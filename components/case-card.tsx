import Link from 'next/link'

type Props = {
  imageUrl: string
  title: string
  href: string
}

export function CaseCard({ imageUrl, title, href }: Props) {
  return (
    <Link href={`/cases/${href}`} className="group">
      <article
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="w-full relative bg-cover bg-center h-full min-h-[500px] max-h-[1000px] sm:h-[calc(100vh-120px)]"
      >
        <div className="flex lg:opacity-0 transition-opacity duration-700 lg:group-hover:opacity-100 bg-gradient-to-t flex-col p-8 lg:p-20 xl:p-36 justify-end from-black via-black/60 to-transparent pointer-events-none w-full h-full absolute inset-0">
          <div className="lg:translate-y-3 duration-700 lg:group-hover:translate-y-0 transition-all">
            <h6 className="uppercase italic text-[clamp(2.5em,20px+3vw,3.2em)] font-extrabold  leading-tight text-stone-300">
              {title}
            </h6>
            <p className="text-stone-400">View Case</p>
          </div>
        </div>
      </article>
    </Link>
  )
}
