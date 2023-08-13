import Image from "next/image"

export default function Avatar() {
  return (
    <div className="h-[200px] w-[200px] rounded-full border">
      <Image src="/dk-avatar.png" alt="dk-avatar" width="400" height="400" />
    </div>
  )
}
