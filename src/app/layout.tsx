import "./globals.css"

import type { Metadata } from "next"
import localFont from "next/font/local"
import { ReactNode } from "react"

import { Header } from "@/components/navigation/header"
import { Providers } from "@/components/shared/providers"
import { cn } from "@/lib/utils"

const eiko = localFont({
  src: [
    {
      path: "../../public/fonts/eiko/eiko-thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/eiko/eiko-thin_italic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/eiko/eiko-extra_light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/eiko/eiko-extralight_italic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/eiko/eiko-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/eiko/eiko-light_italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/eiko/eiko-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/eiko/eiko-regular_italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/eiko/eiko-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/eiko/eiko-medium_italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/eiko/eiko-bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/eiko/eiko-bold_italic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/eiko/eiko-black.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/eiko/eiko-black_italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/eiko/eiko-heavy.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/eiko/eiko-heavy_italic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-eiko",
})

const mori = localFont({
  src: [
    {
      path: "../../public/fonts/mori/mori-extralight.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/mori/mori-extralight_italic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/mori/mori-light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/mori/mori-light_italic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/mori/mori-book.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/mori/mori-book_italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/mori/mori-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/mori/mori-regular_italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/mori/mori-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/mori/mori-medium_italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/mori/mori-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/mori/mori-semibold_italic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/mori/mori-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/mori/mori-bold_italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/mori/mori-extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/mori/mori-extrabold_italic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-mori",
})

export const metadata: Metadata = {
  title: "The Year in Books",
  description:
    "An annual reading challenge that helps you rediscover your love for books.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "relative h-screen font-sans antialiased",
          eiko.variable,
          mori.variable
        )}
      >
        {/* <AnalyticsPageView /> */}
        <Providers>
          <main className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1 grow">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
