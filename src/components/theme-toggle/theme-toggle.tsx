"use client"

import { useTheme } from "next-themes"

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

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
               <button onClick={() => setTheme("light")}>
                  <Icons.sun />
               </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
               <button onClick={() => setTheme("dark")}>
                  <Icons.moon />
               </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
               <button onClick={() => setTheme("system")}>
                  <Icons.laptop />
               </button>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}
