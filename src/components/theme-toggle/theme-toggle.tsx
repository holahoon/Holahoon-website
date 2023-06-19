"use client"

import { useTheme } from "next-themes"

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ThemeToggle() {
   const { theme, setTheme } = useTheme()

   console.log("current theme: ", theme)

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <button>Open</button>
         </DropdownMenuTrigger>

         <DropdownMenuContent>
            <DropdownMenuItem>
               <button onClick={() => setTheme("light")}>light</button>
            </DropdownMenuItem>
            <DropdownMenuItem>
               <button onClick={() => setTheme("dark")}>dark</button>
            </DropdownMenuItem>
            <DropdownMenuItem>
               <button onClick={() => setTheme("system")}>system</button>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}
