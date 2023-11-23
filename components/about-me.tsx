import { Container } from './container'

const skills = [
  'Web Design',
  'Development',
  'Mobile Development',
  'UI/UX',
  'Video Editing',
]

export function AboutMe() {
  return (
    <Container
      id="about-me"
      className="flex py-[2em] flex-col lg:flex-row items-center gap-16 justify-between"
    >
      <div className="max-w-lg text-center lg:text-start w-full space-y-4 sm:space-y-8">
        <h4 className="uppercase italic text-[clamp(2.5em,20px+3vw,3.2em)] font-extrabold leading-tight text-stone-300">
          A little bit <br /> about me
        </h4>
        <p className="text-stone-400 sm:max-w-none max-w-xs sm:m-0 m-auto font-normal leading-loose">
          I am a developer passionate about technology and design, with 2 years
          of experience in web and mobile development. I&apos;m available to
          work on new projects and help bring your ideas to life. My mission is
          to craft attractive and functional solutions that exceed your
          expectations.
        </p>
      </div>
      <div className="max-w-lg text-center lg:text-end space-y-4 sm:space-y-8">
        <h4 className="text-[clamp(1.2em,20px+3vw,2.7em)] uppercase italic font-extrabold text-stone-300">
          Skills
        </h4>
        <ul className="space-y-3 text-stone-400 font-normal leading-loose sm:text-xl text-lg">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
