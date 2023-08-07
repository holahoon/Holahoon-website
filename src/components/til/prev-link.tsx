"use client"

import { useRouter } from "next/navigation"

import { Icons } from "@/components/icons"

export default function PrevLink() {
  const router = useRouter()

  return (
    <button onClick={router.back} className="flex items-center text-primary/80">
      <Icons.arrow.left width={16} className="mr-2" />
      back
    </button>
  )
}
