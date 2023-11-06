import localFont from 'next/font/local'

export const gilroy = localFont({
  src: [
    {
      path: './Gilroy-ExtraBold.ttf',
      weight: '900',
    },
    {
      path: './Gilroy-ExtraBoldItalic.ttf',
      style: 'italic',
      weight: '900',
    },
    {
      path: './Gilroy-Medium.ttf',
      weight: '500',
    },
    {
      path: './Gilroy-MediumItalic.ttf',
      style: 'italic',
      weight: '500',
    },
    {
      path: './Gilroy-Regular.ttf',
      weight: '400',
    },
    {
      path: './Gilroy-RegularItalic.ttf',
      style: 'italic',
      weight: '400',
    },
    {
      path: './Gilroy-Light.ttf',
      weight: '300',
    },
    {
      path: './Gilroy-LightItalic.ttf',
      style: 'italic',
      weight: '300',
    },
  ],
  variable: '--font-gilroy',
})
