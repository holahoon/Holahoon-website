import { formatDate } from "@/libs/utils"
import { ExternalLink } from "@/components/ui/link"
import { Icons } from "@/components/icons"
import { careerHistories } from "@/config/career.config"

export default function Career() {
  return (
    <section>
      <h2 className="text-3xl font-semibold">Career</h2>

      <ul className="mt-6 space-y-8">
        {careerHistories.map((career) => (
          <li key={`career-${career.company}`} className="flex flex-col">
            <span className="inline-flex items-end ">
              <h3 className="text-xl font-semibold">{career.company}</h3>

              <ExternalLink href={career.link} className="ml-2 text-primary/70">
                <Icons.externalLink width={14} />
              </ExternalLink>
            </span>

            <h4 className="font-medium">{career.position}</h4>

            <span className="text-sm text-primary/80">
              <time>{formatDate(career.date.start, "LLL yyyy")}</time>
              <span className="mx-2">-</span>
              <time>
                {career.date.end === "current"
                  ? "Current"
                  : formatDate(career.date.end, "LLL yyyy")}
              </time>
            </span>

            <span className="inline-flex items-center text-sm text-primary/80">
              <Icons.mapPin width={12} className="mr-1" />
              {career.location}
            </span>

            <div className="mt-2 text-sm text-primary/80">
              {/* {career.descriptions.map((description) => (
                <p key={`description-${description}`}>{description}</p>
              ))} */}
              <ul className="ml-4 mt-1 list-disc space-y-1">
                {career.keyPoints.map((keyPoint) => (
                  <li key={`keyPoint-${keyPoint}`}>{keyPoint}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
