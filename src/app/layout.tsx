import { Work_Sans } from "next/font/google"
import { type ReactNode } from "react"

import { ThemeProvider } from "@/providers/theme-provider"
import { cn } from "@/libs/utils/utils.helpers"
import Footer from "@/components/footer"
import LayoutWrapper from "@/components/layout/layout-wrapper"
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
      </body>
    </html>
  )
}
