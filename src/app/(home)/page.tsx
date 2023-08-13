import Avatar from "@/components/home/avatar"

export default async function Home() {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-5xl font-bold">
          Hi 👋 I&apos;m David Kim
          <span className="ml-2 text-base font-bold text-primary/80">DK</span>
        </h1>

        <h2 className="mt-2 text-3xl font-semibold text-primary/80">
          A Frontend Web Developer
        </h2>

        <div className="mt-8 border-l-2 pl-4 text-primary/80">
          <p>Currently based in Seoul, Korea.</p>
          <p>Love building cool things on the web.</p>
          <p>Open for new opportunities.</p>
        </div>
      </div>

      <Avatar />
    </div>
  )
}
