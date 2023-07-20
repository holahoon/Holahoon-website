import { Skeleton } from "@/components/ui/skeleton"

export default function NavSkeleton() {
  return (
    <div>
      <Skeleton className="mb-6 h-6 w-full" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-2 h-4 w-full" />
    </div>
  )
}
