import { Varela_Round } from 'next/font/google'
import localFont from 'next/font/local'

export const varelaRoundFont = Varela_Round({
  weight:'400',
  subsets: ['latin'],
  display:'swap',
})

export const plumpfullFont = localFont({
  src: './Plumpfull.ttf',
  display: 'swap',
})