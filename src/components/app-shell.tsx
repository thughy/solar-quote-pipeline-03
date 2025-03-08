
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "sidebar";
}

export function AppShell({ 
  children, 
  className, 
  variant = "default" 
}: AppShellProps) {
  return (
    <div className={cn(
      "min-h-screen w-full bg-background", 
      variant === "sidebar" ? "flex" : "",
      className
    )}>
      {children}
    </div>
  );
}
