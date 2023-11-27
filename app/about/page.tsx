import UnderDevelopmentPage from '@/components/under-development-page'

export default function About() {
  const isProduction = process.env.NODE_ENV === 'production'

  return isProduction ? <UnderDevelopmentPage /> : <h1>Sobre</h1>
}
