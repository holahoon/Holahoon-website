import { forwardRef, type ForwardedRef, type HTMLAttributes } from "react"

import { cn } from "@/libs/utils"

function AlertComponent(
  props: HTMLAttributes<HTMLDivElement>,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { className, children, ...rest } = props
  return (
    <div ref={ref} className={cn("rounded-md border", className)} {...rest}>
      {children}
    </div>
  )
}
AlertComponent.displayName = "Alert"
export const Alert = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  AlertComponent
)

function AlertTitleComponent(
  props: HTMLAttributes<HTMLHeadingElement>,
  ref: ForwardedRef<HTMLHeadingElement>
) {
  const { className, children, ...rest } = props
  return (
    <h5 ref={ref} className={cn("", className)} {...rest}>
      {children}
    </h5>
  )
}
AlertTitleComponent.displayName = "AlertTitle"
export const AlertTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(AlertTitleComponent)

function AlertDescriptionComponent(
  props: HTMLAttributes<HTMLParagraphElement>,
  ref: ForwardedRef<HTMLParagraphElement>
) {
  const { className, children, ...rest } = props
  return (
    <p ref={ref} className={cn("text-sm", className)} {...rest}>
      {children}
    </p>
  )
}
AlertDescriptionComponent.displayName = "AlertDescription"
export const AlertDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(AlertDescriptionComponent)
