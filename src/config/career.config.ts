interface CareerHistory {
  company: string
  position: string
  // descriptions: Array<string>
  keyPoints: Array<string>
  location: string
  link: string
  date: { start: string; end: string }
}
export type CareerHistories = Array<CareerHistory>

export const careerHistories: CareerHistories = [
  {
    company: "Freelance",
    position: "Web developer",
    link: "https://holahoon.com",
    // descriptions: [
    //   "Develop an internal sales management and clinical curation web application.",
    //   "Participate in developing a clinical service ordering web application for medical professionals.",
    // ],
    keyPoints: [
      "Led a team of three frontend developers in rebuilding a healthcare website to modernize design and UX using Next.js static site generation for optimized performance.",
      "Architected reusable React.js components, empowering the team to customize and extend both style and functionality.",
      "Collaborated with backend developers to refactor APls, consolidating multiple network requests into one.",
    ],
    location: "Seoul, South Korea.",
    date: {
      start: "06/07/2021",
      end: "current",
    },
  },
  {
    company: "3billion",
    position: "Frontend developer",
    link: "https://3billion.io/index",
    // descriptions: [
    //   "Participate in developing and maintaining a radio broadcast web application.",
    // ],
    keyPoints: [
      "Successfully migrated the React.js bundler from Webpack to Vite, resulting in a 50% reduction in build and deployment time for one of the company's largest applications. This improvement notably enhanced the overall development experience within the team.",
      "Automated data processing by creating an intuitive user interface for patient data entry, complete with rigorous form validation. This led to an 80% reduction ni data entry time, ensuring clean data submissions and minimizing rework for bioinformatic engineers in downstream workflows.",
      "Implemented the design system and Ul for user authentication and order history for healthcare professionals seeking patient diagnosis. Improved UX through internationalization, email verification, and address population.",
      "Rebuilt a Laboratory Information System for the sales, marketing, and accounting team, enabling better data analysis and strategy creation to enhance relationships with healthcare professionals and increase sales.",
      "Enhanced features by incorporating data visualization and data export tools, empowering the sales team to illustrate campaign effectiveness and set targets for future sales.",
      "Regularly engaged with cross-functional team members to discuss feature requests, address application issues, assess development feasibility, and share best practices in Ul/UX.",
    ],
    location: "Seoul, South Korea.",
    date: {
      start: "01/04/2021",
      end: "04/30/2021",
    },
  },
  {
    company: "Yeoboya Corp.",
    position: "Frontend developer",
    link: "https://www.dallalive.com/",
    // descriptions: [
    //   "Participate in developing and maintaining DTC and HCP pharmaceutical websites.",
    // ],
    keyPoints: [
      "Combined mobile and desktop codebases into a single codebase for a responsive web application to reduce maintenance burdens and expedite development.",
      "Refactored the codebase from JavaScript to TypeScript resulting in increased readability and streamlined debugging processes.",
    ],
    location: "Duluth, GA, USA.",
    date: {
      start: "10/15/2019",
      end: "08/30/2020",
    },
  },
  {
    company: "Luckie & Co.",
    position: "Front end developer",
    link: "https://luckie.com",
    // descriptions: [
    //   "Participate in developing and maintaining DTC and HCP pharmaceutical websites.",
    // ],
    keyPoints: [
      "Maintained and implemented a precise design for several pharmaceutical websites using an enterprise CMS, Adobe Experience Manager (AEM), to prepare for a meticulous FDA approval process.",
      "Collaborated closely with project managers and quality assurance team to ensure that specific business rules and technical requirements were met and websites delivered on time.",
    ],
    location: "Duluth, GA, USA.",
    date: {
      start: "10/15/2019",
      end: "08/30/2020",
    },
  },
]
