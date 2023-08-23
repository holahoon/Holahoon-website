import { clsx, type ClassValue } from "clsx"
import { differenceInDays, format, formatDistanceToNow } from "date-fns"
import { twMerge } from "tailwind-merge"

import { CareerHistories } from "@/config/career.config"

/** Merges className values */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))

/** format date using date-fns format function */
export const formatDate = (date: string, formatMethod: string) => {
  const d = new Date(date)
  return format(d, formatMethod)
}

/** format date from now */
// TODO: Need hours and minutes to be worked on
export const formatDateFromNow = (date: string, dist = 3): string => {
  const DATE_FORMAT = "LLL do yyy"
  const now = Date.now()
  const d = new Date(date)

  const timeDiff = (now - d.getTime()) / 1000
  const days = 60 * 60 * 24 * dist
  if (timeDiff < days) return formatDistanceToNow(d, { addSuffix: true })
  return format(d, DATE_FORMAT)
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
