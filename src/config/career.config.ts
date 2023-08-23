interface CareerHistory {
  company: string
  position: string
  descriptions: Array<string>
  keyPoints: Array<string>
  location: string
  link: string
  date: { start: string; end: string }
}
export type CareerHistories = Array<CareerHistory>

export const careerHistories: CareerHistories = [
  {
    company: "3billion",
    position: "Front end web developer",
    descriptions: [
      "Develop an internal sales management and clinical curation web application.",
      "Participate in developing a clinical service ordering web application for medical professionals.",
    ],
    keyPoints: [
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
    ],
    keyPoints: [
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
    ],
    keyPoints: [
      "Develop reusable components in Adobe Experience Manager(AEM) to reduce unnecessary development time.",
    ],
    location: "Duluth, GA, USA.",
    link: "https://luckie.com",
    date: {
      start: "10/15/2019",
      end: "08/30/2020",
    },
  },
]
