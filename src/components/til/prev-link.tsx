"use client"

import { useRouter } from "next/navigation"

export default function PrevLink() {
  const router = useRouter()

  return <button onClick={router.back}>back</button>
}
