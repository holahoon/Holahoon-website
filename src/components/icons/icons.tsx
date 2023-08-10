import {
  ArrowLeft,
  AtSign,
  Binary,
  Calendar,
  Clock3,
  Code2,
  Construction,
  Database,
  Eye,
  Github,
  Laptop,
  Laugh,
  Linkedin,
  Mail,
  MessageCircle,
  Moon,
  MoveDown,
  MoveLeft,
  MoveRight,
  MoveUp,
  SunMedium,
  Workflow,
  type Icon as LucideIcon,
  // type LucideProps,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  calendar: Calendar,
  code: Code2,
  devops: Workflow,
  database: Database,
  algorithm: Binary,
  move: {
    up: MoveUp,
    down: MoveDown,
    right: MoveRight,
    left: MoveLeft,
  },
  arrow: {
    left: ArrowLeft,
  },
  laugh: Laugh,
  eye: Eye,
  clock: Clock3,
  social: {
    email: Mail,
    github: Github,
    linkedin: Linkedin,
  },
  at: AtSign,
  construction: Construction,
  messageCircle: MessageCircle,
}

export type IconsType = typeof Icons
