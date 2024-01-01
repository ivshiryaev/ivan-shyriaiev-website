import './globals.css'

import localFont from 'next/font/local'
import DarkModeToggle from '@/components/DarkModeToggle'

// @ts-ignore
const sequelFont = localFont({
  src: './sequel.ttf',
  display: 'swap',
})

import type { Metadata } from 'next'
import Providers from './Providers'

export const metadata: Metadata = {
  title: 'Ivan Shyriaiev.',
  description: 'Full stack developer.',
}

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={`
            transition
            dark:bg-black
            leading-none
            text-whiteText
            min-h-screen
            bg-darkText
            py-1 lg:py-2
            flex flex-col justify-center
            ${sequelFont.className}
          `}
        >
          <Providers>
            <aside className='
                fixed
                z-30
                top-2 right-2
                lg:top-6 lg:right-6
            '>
                <DarkModeToggle/>
            </aside>
            {children}
          </Providers>
        </body>
      </html>
    </>
  )
}

export default RootLayout