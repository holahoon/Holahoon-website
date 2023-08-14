import Image from "next/image"

export default function Avatar() {
  return (
    <div className="hidden aspect-auto w-[210px] rounded-full border md:block">
      <Image src="/dk-avatar.png" alt="dk-avatar" width="300" height="300" />
    </div>
  )
}
