import { Work_Sans } from "next/font/google"

import { ThemeProvider } from "@/providers/theme-provider"
import { cn } from "@/libs/utils/utils.helpers"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation/navigation"

import "../styles/globals.css"

const font = Work_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "DK",
  description: "Hey! I'm DK! welcome to my DK!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          font.className,
          "mx-auto max-w-screen-full px-4 md:px-12"
        )}
      >
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          themes={["light", "dark"]}
          enableSystem
        >
          <Navigation />
          <main className="mt-12">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
