import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        gilroy: 'var(--font-gilroy)',
      },
      fontSize: {
        title: 'clamp(1em, 18px + 3vw, 3em)',
        paragraph: 'clamp(15px, 1vw, 18px)',
      },
      maxWidth: {
        '8xl': '1400px',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
export default config
