import "./globals.css"

import localFont from "next/font/local"

// @ts-ignore
const sequelFont = localFont({
    src: "./sequel.ttf",
    display: "swap",
})

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Ivan Shyriaiev | Full stack developer | theshirya",
    description:
        "Full stack dev. Custom website design and development. Third parties integrations. SEO optimization. Fast and responsive websites.",
    metadataBase: process.env.VERCEL_ENV
        ? new URL("https://theshirya.com")
        : new URL("http://localhost:3000"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Ivan Shyriaiev | Full stack developer | theshirya",
        description:
            "Full stack dev. Custom website design and development. Third parties integrations. SEO optimization. Fast and responsive websites.",
        url: "/",
        type: "website",
    },
    robots: {
        follow: true,
        index: true,
    },
}

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning className="dark">
            <body
                className={`
                  dark              
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
                {children}
            </body>
        </html>
    )
}

export default RootLayout
