import { clsx, type ClassValue } from "clsx"
import { format, formatDistanceToNow } from "date-fns"
import { twMerge } from "tailwind-merge"

/** Merges className values */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))

/** Formats dates */
// TODO: Need hours and minutes to be worked on
export const formatDate = (date: string, dist = 3): string => {
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
