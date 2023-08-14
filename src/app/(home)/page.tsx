import { Avatar, Description, Greetings, RecentTil } from "@/components/home"

export default async function Home() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Greetings />
          <Description />
        </div>
        <Avatar />
      </div>

      <RecentTil />
    </>
  )
}
