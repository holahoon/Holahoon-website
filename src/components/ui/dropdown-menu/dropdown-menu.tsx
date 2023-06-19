"use client"

import {
   forwardRef,
   type ComponentPropsWithoutRef,
   type ElementRef,
} from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

import { cn } from "@/libs/utils.helper"

export const DropdownMenu = DropdownMenuPrimitive.Root

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

export const DropdownMenuGroup = DropdownMenuPrimitive.Group

export const DropdownMenuPortal = DropdownMenuPrimitive.Portal

export const DropdownMenuSub = DropdownMenuPrimitive.Sub

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

/** Dropdown content */
export const DropdownMenuContent = forwardRef<
   ElementRef<typeof DropdownMenuPrimitive.Content>,
   ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>((props, ref) => {
   const { className, sideOffset = 4, ...rest } = props
   return (
      <DropdownMenuPrimitive.Portal>
         <DropdownMenuPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(
               "z-50 overflow-hidden rounded-md border p-1",
               className
            )}
            {...rest}
         ></DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
   )
})
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

/** Dropdown item */
export const DropdownMenuItem = forwardRef<
   ElementRef<typeof DropdownMenuPrimitive.Item>,
   ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
      inset?: boolean
   }
>((props, ref) => {
   const { className, inset, ...rest } = props
   return (
      <DropdownMenuPrimitive.Item
         ref={ref}
         className={cn(
            "relative flex cursor-default select-none items-center rounded-sm px-2",
            inset && "pl-8",
            className
         )}
         {...rest}
      />
   )
})
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

/** Dropdown label */
export const DropdownMenuLabel = forwardRef<
   ElementRef<typeof DropdownMenuPrimitive.Label>,
   ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
      inset?: boolean
   }
>((props, ref) => {
   const { className, inset, ...rest } = props
   return (
      <DropdownMenuPrimitive.Label
         ref={ref}
         className={cn("", inset && "pl-8", className)}
         {...rest}
      />
   )
})
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

/** Dropdown separator */
export const DropdownMenuSeparator = forwardRef<
   React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
   <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn("bg-muted -mx-1 my-1 h-px", className)}
      {...props}
   />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

/** Dropdown shortcut */
export const DropdownMenuShortcut = ({
   className,
   ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
   return (
      <span
         className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
         {...props}
      />
   )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"
