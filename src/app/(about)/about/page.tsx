import { formatDate } from "@/libs/utils"
import { ExternalLink } from "@/components/ui/link"
import { Icons } from "@/components/icons"

const careerHistory = [
  {
    company: "3billion",
    position: "Front end web developer",
    descriptions: [
      "Develop an internal sales management web application and internal clinical curation web application.",
      "Participate in developing a clinical service ordering web application for medical professionals.",
      "Set up Github Actions CI/CD pipelines to automate testing and building process.",
      "Migrate React.js application from create-react-app(CRA) to Vite for better developer experience and reduce application build time by more than 50%.",
    ],
    location: "Seoul, South Korea.",
    link: "https://3billion.io",
    date: {
      start: "06/07/2021",
      end: "07/31/2023",
    },
  },
  {
    company: "Yeoboya Corp.",
    position: "Front end developer",
    link: "http://www.yeoboyacorp.com",
    descriptions: [
      "Participate in developing and maintaining a radio broadcast web application.",
      "Refactor legacy JavaScript based React.js components to TypeScript based.",
    ],
    location: "Seoul, South Korea.",
    date: {
      start: "01/04/2021",
      end: "04/30/2021",
    },
  },
  {
    company: "Luckie & Co.",
    position: "Front end developer",
    descriptions: [
      "Participate in developing and maintaining DTC and HCP pharmaceutical websites.",
      "Develop reusable components in Adobe Experience Manager(AEM) to reduce unnecessary development time.",
    ],
    location: "Duluth, GA, USA.",
    link: "https://luckie.com",
    date: {
      start: "10/15/2019",
      end: "08/30/2020",
    },
  },
] as const

async function Career() {
  return (
    <section className="mt-8">
      <h2 className="text-3xl font-semibold">Career</h2>

      <ul className="mt-4 space-y-6">
        {careerHistory.map((career) => (
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
              <time>{formatDate(career.date.end, "LLL yyyy")}</time>
            </span>

            <span className="inline-flex items-center text-sm text-primary/80">
              <Icons.mapPin width={12} className="mr-1" />
              {career.location}
            </span>

            <div className="mt-2">
              {career.descriptions.map((description) => (
                <p
                  key={`description-${description}`}
                  className="text-sm text-primary/80"
                >
                  {description}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Other() {
  return <h3></h3>
}

export default function ProjectsLayout() {
  return (
    <>
      <p>
        I am a dedicated front end web developer with 3 years of professional
        experience.
      </p>
      <Career />
    </>
  )
}
