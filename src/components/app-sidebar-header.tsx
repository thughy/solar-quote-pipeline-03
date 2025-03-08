
import { BreadcrumbItem } from "@/types/navigation";
import { Breadcrumb, BreadcrumbItem as BreadcrumbItemComponent, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "./ui/breadcrumb";
import { Home } from "lucide-react";

interface AppSidebarHeaderProps {
  breadcrumbs?: BreadcrumbItem[];
}

export function AppSidebarHeader({ breadcrumbs = [] }: AppSidebarHeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItemComponent>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4" />
                <span className="sr-only">Home</span>
              </BreadcrumbLink>
            </BreadcrumbItemComponent>
            <BreadcrumbSeparator />
            
            {breadcrumbs.map((item, index) => (
              <BreadcrumbItemComponent key={index}>
                <BreadcrumbLink href={item.href}>
                  {item.title}
                </BreadcrumbLink>
                {index < breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator />
                )}
              </BreadcrumbItemComponent>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
