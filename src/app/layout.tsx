import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import { type ReactNode } from "react"
import { Analytics } from "@vercel/analytics/react"

import { ThemeProvider } from "@/providers/theme-provider"
import { cn } from "@/libs/utils/utils.helpers"
import Footer from "@/components/footer"
import LayoutWrapper from "@/components/layout/layout-wrapper"
import Navigation from "@/components/navigation/navigation"
import { siteConfig } from "@/config/site.config"

import "../styles/globals.css"

interface RootLayoutProps {
  children: ReactNode
}

const font = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server components",
    "DK",
    "Holahoon",
    "Blog",
    "TIL",
  ],
  authors: [{ name: "David Kim", url: siteConfig.url }],
  creator: "David Kim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  // twitter: {
  //   card: "summary_large_image",
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   images: [siteConfig.ogImage],
  //   creator: `@{siteConfig.author}`,
  // },
  icons: {
    // TODO: change favicon
    icon: "/favicon.ico",
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
}

const themes = ["light", "dark"]

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className, "bg-background")}>
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          themes={themes}
          enableSystem
        >
          <div className="flex min-h-[100vh] flex-col">
            <Navigation />

            <main className="flex-1">
              <div className="mt-12 md:mt-16">
                <LayoutWrapper className="h-full">{children}</LayoutWrapper>
              </div>
            </main>

            <Footer />
          </div>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}
