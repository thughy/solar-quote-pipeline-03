
import * as React from "react"
import { createContext, useContext, useEffect, useRef, useState } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Toggle } from "@/components/ui/toggle"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { PanelLeftIcon, PanelLeftCloseIcon } from "lucide-react"

import { cn } from "@/lib/utils"

interface SidebarContextType {
  expanded: boolean
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
  toggle: () => void
}

const SidebarContext = createContext<SidebarContextType | null>(null)

function useSidebar() {
  const context = useContext(SidebarContext)

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }

  return context
}

interface SidebarProviderProps {
  children: React.ReactNode
  defaultExpanded?: boolean
}

function SidebarProvider({
  children,
  defaultExpanded = true,
}: SidebarProviderProps) {
  const [expanded, setExpanded] = useState(defaultExpanded)

  function toggle() {
    setExpanded((prevExpanded) => !prevExpanded)
  }

  const value = {
    expanded,
    setExpanded,
    toggle,
  }

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  )
}

/****************************************************
 *                      Sidebar                     *
 ****************************************************/

const sidebarVariants = cva(
  "sidebar-background relative h-dvh shrink-0 grow-0 transform-gpu border-r transition-all duration-300 ease-in-out [&>div]:w-full",
  {
    variants: {
      expanded: {
        true: "translate-x-0 w-64",
        false: "w-16 translate-x-0 [&>div]:w-16",
      },
    },
  }
)

interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {}

function Sidebar({ className, ...props }: SidebarProps) {
  const { expanded } = useSidebar()

  return (
    <div
      data-expanded={expanded ? "true" : "false"}
      className={cn(sidebarVariants({ expanded, className }))}
      {...props}
    />
  )
}

/****************************************************
 *                    Sidebar Header                *
 ****************************************************/

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

function SidebarHeader({ className, ...props }: SidebarHeaderProps) {
  const { expanded } = useSidebar()

  return (
    <div
      data-expanded={expanded ? "true" : "false"}
      className={cn("sidebar-header", className)}
      {...props}
    />
  )
}

/****************************************************
 *                   Sidebar Trigger                *
 ****************************************************/

type SidebarTriggerProps = React.ComponentProps<typeof Toggle>

function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { expanded, toggle } = useSidebar()

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Toggle
          size="sm"
          pressed={expanded}
          onPressedChange={toggle}
          variant="default"
          className={cn("size-8 p-0", className)}
          {...props}
        >
          {expanded ? (
            <PanelLeftCloseIcon className="size-[1.1rem]" />
          ) : (
            <PanelLeftIcon className="size-[1.1rem]" />
          )}
          <span className="sr-only">Toggle Sidebar</span>
        </Toggle>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={15}>
        Toggle Sidebar
      </TooltipContent>
    </Tooltip>
  )
}

/****************************************************
 *                   Sidebar Content                *
 ****************************************************/

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {}

function SidebarContent({ className, ...props }: SidebarContentProps) {
  return <div className={cn("flex-1 overflow-hidden", className)} {...props} />
}

/****************************************************
 *                   Sidebar Group                  *
 ****************************************************/

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

function SidebarGroup({ className, ...props }: SidebarGroupProps) {
  return <div className={cn("py-2", className)} {...props} />
}

/****************************************************
 *                Sidebar Group Label               *
 ****************************************************/

const sidebarGroupLabelVariants = cva(
  "whitespace-nowrap px-4 py-1 text-xs font-medium sidebar-label",
  {
    variants: {
      expanded: {
        true: "text-left opacity-100",
        false: "overflow-hidden min-w-16 opacity-0",
      },
    },
  }
)

interface SidebarGroupLabelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarGroupLabelVariants> {}

function SidebarGroupLabel({
  className,
  children,
  ...props
}: SidebarGroupLabelProps) {
  const { expanded } = useSidebar()
  const [isVisible, setIsVisible] = useState(expanded)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!expanded) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 300)
      timerRef.current = timer
      return () => {
        clearTimeout(timer)
      }
    } else {
      setIsVisible(true)
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [expanded])

  return (
    <div
      className={cn(
        sidebarGroupLabelVariants({ expanded, className }),
        "uppercase tracking-wider text-muted-foreground"
      )}
      {...props}
    >
      {isVisible ? children : ""}
    </div>
  )
}

/****************************************************
 *              Sidebar Group Content               *
 ****************************************************/

interface SidebarGroupContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

function SidebarGroupContent({
  className,
  ...props
}: SidebarGroupContentProps) {
  return <div className={cn("", className)} {...props} />
}

/****************************************************
 *                   Sidebar Menu                   *
 ****************************************************/

interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {}

function SidebarMenu({ className, ...props }: SidebarMenuProps) {
  return (
    <ul className={cn("flex flex-col gap-1 text-sm py-1", className)} {...props} />
  )
}

/****************************************************
 *                Sidebar Menu Button               *
 ****************************************************/

interface SidebarMenuButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

function SidebarMenuButton({
  className,
  asChild = false,
  ...props
}: SidebarMenuButtonProps) {
  const { expanded } = useSidebar()
  const Component = asChild ? React.Fragment : "div"

  return (
    <Component
      data-sidebar-expanded={expanded ? true : false}
      className={cn(
        `flex items-center gap-3 rounded-md px-4 py-2 font-medium ring-offset-background transition-colors hover:bg-sidebar-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sidebar-menubutton`,
        expanded ? "[&>svg+span]:opacity-100" : "[&>svg+span]:opacity-0",
        className
      )}
      {...props}
    />
  )
}

/****************************************************
 *                Sidebar Menu Item                 *
 ****************************************************/

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {}

function SidebarMenuItem({ className, ...props }: SidebarMenuItemProps) {
  return <li className={cn("", className)} {...props} />
}

/****************************************************
 *                 Sidebar Footer                  *
 ****************************************************/

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

function SidebarFooter({ className, ...props }: SidebarFooterProps) {
  return <div className={cn("", className)} {...props} />
}

export {
  useSidebar,
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
}
