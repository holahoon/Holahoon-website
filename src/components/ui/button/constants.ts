import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground hover:bg-accent/90",
        secondary: "bg-secondary",
        outline: "border",
        ghost: "hover:bg-accent",
        link: "text-link underline-offset-4 hover:underline",
      },
      size: {
        default: "py-2 px-4",
        sm: "px-3",
        lg: "px-8",
        icon: "w-10 h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
