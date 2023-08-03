import { ButtonHTMLAttributes, forwardRef, type ForwardedRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/libs/utils/utils.helpers"
import { buttonVariants } from "./constants"

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button(props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
  const { asChild = false, variant, size, className, ...rest } = props

  const Component = asChild ? Slot : "button"

  return (
    <Component
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    />
  )
}

Button.displayName = "Button"

export default forwardRef<HTMLButtonElement, ButtonProps>(Button)
