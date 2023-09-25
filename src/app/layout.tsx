import './globals.css'

import localFont from 'next/font/local'
export const sequelFont = localFont({
  src: './sequel.ttf',
  display: 'swap',
})

import type { Metadata } from 'next'
import Providers from './Providers'

export const metadata: Metadata = {
  title: 'Ivan Shyriaiev.',
  description: 'Full stack developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={`
            leading-none
            text-whiteText
            min-h-screen
            bg-darkText
            ${sequelFont.className}
          `}
        >
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </>
  )
}
