export default function Home() {
  return (
    <div>
      {/* hero */}
      <div className="h-screen m-auto max-w-8xl w-full">
        <div className="relative py-64 space-y-3 text-center">
          <div className="absolute pointer-events-none inset-0 w-full bg-cover h-full bg-[url('https://imgur.com/YeEUV9r')]"></div>
          <h6 className="text-stone-400 font-semibold text-lg">
            Elias Souza — Software Engineer
          </h6>
          <h2 className="text-5xl italic in-range:bg-red-500 uppercase leading-tight text-stone-300 font-black m-auto max-w-xl">
            Criando experiências digitais inesquecíveis
          </h2>
        </div>
      </div>
    </div>
  )
}
