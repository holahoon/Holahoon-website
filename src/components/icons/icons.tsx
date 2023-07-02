import {
  Binary,
  Calendar,
  Code2,
  Database,
  Eye,
  Laptop,
  Laugh,
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
  arrow: {
    up: MoveUp,
    down: MoveDown,
    right: MoveRight,
    left: MoveLeft,
  },
  laugh: Laugh,
  eye: Eye,
}
