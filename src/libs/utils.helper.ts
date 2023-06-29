import { clsx, type ClassValue } from "clsx"
import { format, formatDistanceToNow } from "date-fns"
import { twMerge } from "tailwind-merge"

/** Merges className values */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))

/** Formats dates */
export const formatDate = (date: string, dist = 1): string => {
  const now = Date.now()
  const d = new Date(date)

  const timeDiff = (now - d.getTime()) / 1000
  const days = 60 * 60 * 24 * dist
  if (timeDiff < days) return formatDistanceToNow(d, { addSuffix: true })
  return format(d, "LLL do yyy")
}
