import localFont from 'next/font/local'

export const gilroy = localFont({
  src: [
    {
      path: './Gilroy-Heavy.ttf',
      weight: '900',
    },
    {
      path: './Gilroy-HeavyItalic.ttf',
      style: 'italic',
      weight: '900',
    },
    {
      path: './Gilroy-ExtraBold.ttf',
      weight: '800',
    },
    {
      path: './Gilroy-ExtraBoldItalic.ttf',
      style: 'italic',
      weight: '800',
    },
    {
      path: './Gilroy-Bold.ttf',
      weight: '700',
    },
    {
      path: './Gilroy-BoldItalic.ttf',
      style: 'italic',
      weight: '700',
    },
    {
      path: './Gilroy-SemiBold.ttf',
      weight: '600',
    },
    {
      path: './Gilroy-SemiBoldItalic.ttf',
      style: 'italic',
      weight: '600',
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
