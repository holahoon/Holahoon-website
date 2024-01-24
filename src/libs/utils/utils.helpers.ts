import { clsx, type ClassValue } from "clsx"
import { differenceInDays, format, formatDistanceToNow } from "date-fns"
import { twMerge } from "tailwind-merge"

import { CareerHistories } from "@/config/career.config"

/** Merges className values */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))

/** format date using date-fns format function */
export const formatDate = (date: string, formatMethod = "LLL do yyy") => {
  const d = new Date(date)
  return format(d, formatMethod)
}

/** Capitalizes first letter */
export const capitalizeWord = (word: string): string => {
  const firstLetterUpperCased = word.charAt(0).toUpperCase()
  const restOfLetter = word.substring(1).toLowerCase()
  return firstLetterUpperCased + restOfLetter
}

/** return years of work experience and round it up */
export const calculateWorkExperience = (
  careerHistories: CareerHistories
): number => {
  const diffDays = Object.values(careerHistories).reduce((initial, career) => {
    const startDate = new Date(career.date.start)
    const endDate = new Date(career.date.end)
    const diffDays = differenceInDays(endDate, startDate)
    return initial + diffDays
  }, 0)

  return Math.round(diffDays / 365)
}
