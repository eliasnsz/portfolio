import { Container } from '@/components/container'

const caseInfo = {
  title: 'Recanto Andreeta',
  skills: ['Web Design', 'Website', 'AI', 'Panorams'],
  year: 2023,
  client: 'Recanto Andreeta',
  website: 'https://recantoandreeta.com.br/',
}

export default function RecantoAndreeta() {
  return (
    <div>
      <main className="relative overflow-x-hidden">
        {/* Case Main Info */}
        <Container className="relative px-4 lg:border-x lg:px-0 grid place-items-center 2xl:py-[10em] border-stone-800">
          {/* BackgroundLines */}
          <div className="absolute hidden sm:block h-full border-l border-l-stone-800 bg-stone-800 left-1/2" />
          <div className="flex flex-col pt-[56em] sm:py-[5em] justify-end gap-12 h-[700px] z-10 w-full">
            <div className="space-y-2 lg:text-start text-center">
              <p className="text-lg font-semibold text-stone-400">Case</p>
              <h1 className="italic uppercase leading-tight lg:w-1/2 text-[clamp(2em,32px+3vw,6.5em)] text-stone-200 font-extrabold">
                {caseInfo.title}
              </h1>
            </div>

            <div className="grid sm:grid-cols-2 text-stone-300 w-full lg:w-[85%] 2xl:w-[65%] gap-8">
              <div className="space-y-1.5 border-b w-full lg:max-w-[390px] border-b-stone-800 min-w-full lg:min-w-fit pb-6">
                <h6 className="uppercase italic font-extrabold text-2xl">
                  Skills
                </h6>
                <p className="text-stone-400">{caseInfo.skills.join(', ')}</p>
              </div>

              <div className="space-y-1.5 border-b w-full lg:max-w-[390px] border-b-stone-800 min-w-full lg:min-w-fit pb-6  ">
                <h6 className="uppercase italic font-extrabold text-2xl">
                  Year
                </h6>
                <p className="text-stone-400">{caseInfo.year}</p>
              </div>

              <div className="space-y-1.5 border-b w-full lg:max-w-[390px] border-b-stone-800 min-w-full lg:min-w-fit pb-6  ">
                <h6 className="uppercase italic font-extrabold text-2xl">
                  Client
                </h6>
                <p className="text-stone-400">{caseInfo.client}</p>
              </div>

              <div className="space-y-1.5 border-b w-full lg:max-w-[390px] border-b-stone-800 min-w-full lg:min-w-fit pb-6  ">
                <h6 className="uppercase italic font-extrabold text-2xl">
                  Website
                </h6>
                <a
                  rel="noreferer"
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
        {/* BackgroundImage */}
        <div
          style={{ backgroundImage: 'url("https://i.imgur.com/qphPjud.jpeg")' }}
          className="2xl:bg-[5%] bg-[center_40%] bg-[size:1300px] bg-no-repeat w-full lg:h-full h-[50%] 2xl:h-[700px] absolute inset-0 lg:top-1/2 lg:-translate-y-1/2 lg:left-1/3"
        >
          {/* Horizontal Gradient */}
          <div className="lg:bg-gradient-to-r bg-gradient-to-t sm:from-[black_15%] lg:from-[black_45%] from-[black_40%] 2xl:from-[black_15%] to-transparent lg:w-1/2 h-full" />
        </div>
      </main>
    </div>
  )
}
