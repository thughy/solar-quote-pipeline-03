
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AppContentProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "sidebar";
}

export function AppContent({ 
  children, 
  className,
  variant = "default"
}: AppContentProps) {
  return (
    <main className={cn(
      "flex flex-col flex-1 p-4 md:p-6",
      variant === "sidebar" ? "w-full" : "",
      className
    )}>
      {children}
    </main>
  );
}
