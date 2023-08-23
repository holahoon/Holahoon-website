import { calculateWorkExperience } from "@/libs/utils"
import { careerHistories } from "@/config/career.config"

export default function Introduction() {
  const yearsOfExp = calculateWorkExperience(careerHistories)

  return (
    <section>
      <h2 className="text-3xl font-semibold">Introduction</h2>

      <div className="mt-6 space-y-4 text-primary/90">
        <p>
          I am a <b>front end web developer</b> with {yearsOfExp} years of
          professional experience who finds joy in crafting immersive and
          user-centric UI experiences.
        </p>
        <p>
          I vividly remember that day from my early career when I push my six
          lines code and got an <i>LGTM</i> approval. I crossed my fingers while
          deploying to production, hoping that it wouldn&apos;t break 🤞. I
          experienced a mixture of anxiety and excitement. Although it was a
          modest task, the sight of my creation in the vast world of the web
          genuinely captured my heart.
          <br />
          Since that very moment, my enthusiasm has only grown stronger. I
          eagerly embrace each new challenge, finding joy in every achievement
          that comes my way.
        </p>
        <p>
          In my free time, I often immerse myself in reading or watching
          articles related to software development. Additionally, I enjoy
          documenting my learning experiences and experimenting with new
          technology stacks.
        </p>
      </div>
    </section>
  )
}
