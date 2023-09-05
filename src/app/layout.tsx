import './globals.css'

import { varelaRoundFont } from './fonts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ivan Shyriaiev. Full stack developer',
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
                text-textPrimary
                container mx-auto
                min-h-screen
                bg-background
                ${varelaRoundFont.className}
            `}
        >
            {children}
        </body>
    </html>
  )
}
