import Link from "next/link"

import { navList } from "@/libs/nav-list"

export default function navigation() {
   return (
      <header className="lg:px-6 sticky top-0 mx-auto flex max-w-screen-full items-center px-4 py-4">
         <Link href="/" className="text-2xl font-bold text-alpha">
            Hooniverse
         </Link>

         <nav className="ml-10 flex">
            <ul className="flex">
               {navList.map(({ label, link }) => (
                  <li key={label}>
                     <Link
                        href={link}
                        className="mr-6 inline-block px-4 py-2 text-alpha last-of-type:mr-0"
                     >
                        {label}
                     </Link>
                  </li>
               ))}
            </ul>

            <ul className="ml-auto flex">{/* TODO: toggle mode */}</ul>
         </nav>
      </header>
   )
}
