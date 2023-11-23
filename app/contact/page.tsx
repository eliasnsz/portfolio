import { ArrowSvg } from '@/components/arrow-svg'
import { Container } from '@/components/container'
import { Grain } from '@/components/grain'

const contactMethods = [
  { name: 'Whatsapp', href: 'https://wa.me/5519971495393' },
  { name: 'E-mail', href: 'mailto:eliasnsouza1245@gmail.com' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/eliasnsz/' },
]

export default function Contact() {
  return (
    <>
      <div className="fixed inset-0 w-full h-screen -z-10">
        <Container className="w-full h-full border-x border-x-stone-800 flex justify-center">
          <div className="h-full ml-[1px] w-px bg-stone-800" />
        </Container>
      </div>
      <Grain />

      <Container className="items-start pt-[16em] pb-[8em] sm:py-[8em] sm:px-0">
        <div className="flex lg:flex-row flex-col lg:items-start gap-12 items-center">
          <div className="flex flex-1 flex-col text-center lg:text-start gap-4">
            <h6 className="font-semibold text-stone-400 text-xl">Contact</h6>
            <h2 className="text-title text-center lg:text-start leading-[1.15] uppercase text-stone-200 italic max-w-md font-extrabold">
              Let&apos;s bring your idea to life!
            </h2>
          </div>

          <div className="flex-1 flex justify-end text-center lg:text-start">
            <div className="flex lg:mr-8 xl:mr-16 flex-col gap-12 w-fit">
              <div className="flex flex-col gap-4">
                <h6 className="font-semibold lg:block hidden text-lg xl:text-xl text-stone-400">
                  Contact
                </h6>
                <ul className="text-stone-400 text-base xl:text-lg flex flex-col gap-1.5">
                  <li>
                    <a href="mailto:eliasnsouza1245@gmail.com">
                      eliasnsouza1245@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+5519971495393">+55 19 97149 5393</a>
                  </li>
                </ul>
              </div>

              <div className="lg:flex hidden flex-col gap-4">
                <h6 className="font-semibold text-lg xl:text-xl text-stone-400">
                  Address
                </h6>
                <ul className="text-stone-400 text-base xl:text-lg flex flex-col gap-1.5">
                  <li>Dr. Arthur Vieira de Moraes, 444</li>
                  <li>Jd. Veneza — Pirassununga, São Paulo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="mt-[8em] px-0">
        <ul>
          {contactMethods.map(({ href, name }, index) => (
            <li className="flex border-b border-b-stone-300" key={href}>
              <a
                className="flex px-4 sm:px-0 justify-between items-center pr-4 group hover:text-white flex-1"
                href={href}
                target="_blank"
                rel="noreferer"
              >
                <div className="w-fit gap-8 py-8 transition-colors items-baseline flex">
                  <span className="text-base sm:text-2xl font-light">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="uppercase italic text-[clamp(16px,16px+4vw,2.4em)] font-extrabold">
                    {name}
                  </span>
                </div>
                <ArrowSvg className="stroke-stone-300 group-hover:stroke-transparent fill-transparent transition-colors group-hover:fill-stone-300" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}
