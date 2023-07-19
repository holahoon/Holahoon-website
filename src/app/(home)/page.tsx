import { Icons } from "@/components/icons"

export default async function Home() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold">Hi! I&apos;m David</h1>
        <h2 className="mt-4 text-2xl font-semibold text-primary/90">
          A Web Developer
        </h2>
        <p className="mt-1 text-primary/80">
          with an immense passion for building cool things on the web
        </p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        <Icons.construction width={100} height={100} />
        <p className="mt-8 text-center text-primary/80">
          In the delightful process of
          <br />
          deciding what exciting content to feature here 🤔
        </p>
      </div>
    </>
  )
}
