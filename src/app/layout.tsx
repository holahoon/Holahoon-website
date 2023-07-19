import { Work_Sans } from "next/font/google"
import type { ReactNode } from "react"

import { ThemeProvider } from "@/providers/theme-provider"
import { cn } from "@/libs/utils/utils.helpers"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation/navigation"

import "../styles/globals.css"

interface RootLayoutProps {
  children: ReactNode
}

const font = Work_Sans({ subsets: ["latin"] })

// TODO: needs work
export const metadata = {
  title: "DK",
  description: "HI! I'm DK, a web developer.",
}

const themes = ["light", "dark"]

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          font.className,
          "mx-auto min-h-screen max-w-screen-full px-4 md:px-12"
        )}
      >
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          themes={themes}
          enableSystem
        >
          <div className="flex min-h-screen flex-col">
            <Navigation />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
