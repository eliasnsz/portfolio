import { Container } from '@/components/container'

const caseInfo = {
  title: 'Recanto Andreeta',
  skills: ['Web Design', 'Website', 'AI', 'Panorams'],
  year: 2023,
  client: 'Recanto Andreeta',
  website: 'https://recantoandreeta.com.br/',
  imageUrl: 'https://i.imgur.com/qphPjud.jpg',
}

export default function RecantoAndreeta() {
  return (
    <div>
      <main className="relative overflow-x-hidden">
        {/* BackgroundImage */}
        <div
          style={{ backgroundImage: `url('${caseInfo.imageUrl}')` }}
          className="bg-cover bg-center lg:absolute lg:right-0 lg:w-[70%] sticky w-full lg:h-full 2xl:h-[70vh] 2xl:top-1/2 2xl:-translate-y-1/2 h-[calc(100vh-350px)]"
        >
          {/* Gradient */}
          <div className="lg:bg-gradient-to-r bg-gradient-to-t from-black to-transparent w-full h-full" />
        </div>

        {/* Case Main Info */}
        <Container className="relative px-4 lg:px-0 py-[6em] lg:py-[12em] grid place-items-center 2xl:py-[14em]">
          {/* BackgroundLines */}
          <div className="absolute lg:border-x -z-10 border-stone-800 -translate-x-1/2 w-full h-full left-1/2">
            <div className="m-auto w-px h-full border-l-stone-800 border-l" />
          </div>

          <div className="flex flex-col justify-end gap-12 z-10 w-full">
            {/* Title */}
            <div className="space-y-2 lg:text-start text-center">
              <p className="text-lg font-semibold text-stone-400">Case</p>
              <h1 className="italic uppercase leading-tight lg:w-1/2 text-[clamp(3em,48px+3.5vw,8em)] text-stone-200 font-extrabold">
                {caseInfo.title}
              </h1>
            </div>

            {/* Info */}
            <div className="grid sm:grid-cols-2 text-stone-300 w-full lg:w-[85%] 2xl:w-[65%] gap-4 sm:gap-8">
              {/* Skills */}
              <div className="space-y-1.5 border-b w-full lg:max-w-[390px] border-b-stone-800 min-w-full lg:min-w-fit pb-6">
                <h6 className="uppercase italic font-extrabold text-2xl">
                  Skills
                </h6>
                <p className="text-stone-400">{caseInfo.skills.join(', ')}</p>
              </div>

              {/* Year */}
              <div className="space-y-1.5 border-b w-full lg:max-w-[390px] border-b-stone-800 min-w-full lg:min-w-fit pb-6  ">
                <h6 className="uppercase italic font-extrabold text-2xl">
                  Year
                </h6>
                <p className="text-stone-400">{caseInfo.year}</p>
              </div>

              {/* Client */}
              <div className="space-y-1.5 border-b w-full lg:max-w-[390px] border-b-stone-800 min-w-full lg:min-w-fit pb-6">
                <h6 className="uppercase italic font-extrabold text-2xl">
                  Client
                </h6>
                <p className="text-stone-400">{caseInfo.client}</p>
              </div>

              {/* Website */}
              <div className="space-y-1.5 border-b w-full lg:max-w-[390px] border-b-stone-800 min-w-full lg:min-w-fit pb-6">
                <h6 className="uppercase italic font-extrabold text-2xl">
                  Website
                </h6>
                <a
                  rel="noreferrer "
                  target="_blank"
                  href={caseInfo.website}
                  className="block hover:underline text-stone-400"
                >
                  {caseInfo.website}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  )
}
