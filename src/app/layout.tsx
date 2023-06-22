import { Work_Sans } from "next/font/google"

import { ThemeProvider } from "@/providers/theme-provider"
import Navigation from "@/components/navigation/navigation"

import "../styles/globals.css"

import { cn } from "@/libs/utils.helper"

const font = Work_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "Hooniverse",
  description: "Hey! I'm DK! welcome to my hooniverse!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className, "bg-background")}>
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          themes={["light", "dark"]}
          enableSystem
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
