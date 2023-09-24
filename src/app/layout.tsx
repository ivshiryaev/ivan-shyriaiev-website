import './globals.css'

import localFont from 'next/font/local'
export const sequelFont = localFont({
  src: './sequel.ttf',
  display: 'swap',
})

import type { Metadata } from 'next'

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
    <html lang="en">
        <body 
            className={`
                leading-none
                text-whiteText
                min-h-screen
                bg-darkText
                ${sequelFont.className}
            `}
        >
            {children}
        </body>
    </html>
  )
}
