
import { Calendar, ClipboardList, Home, Sun, User, Settings } from "lucide-react";
import AppLogoIcon from "./app-logo-icon";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import { NavItem } from "@/types/navigation";

// Menu items.
const items: NavItem[] = [
  {
    title: "Home",
    url: "/installer-dashboard",
    icon: Home,
  },
  {
    title: "Quotes",
    url: "/installer-quote",
    icon: ClipboardList,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Customers",
    url: "/customers",
    icon: User,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { expanded } = useSidebar();
  const location = useLocation();
  
  return (
    <Sidebar>
      <SidebarHeader className="flex h-14 items-center border-b px-4">
        <Link to="/" className="flex items-center gap-2">
          <AppLogoIcon className="h-6 w-6" />
          {expanded && (
            <span className="font-semibold text-solar-blue-dark">SolarConnect</span>
          )}
        </Link>
        <SidebarTrigger className="ml-auto" />
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = location.pathname === item.url;
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <Link to={item.url}>
                      <SidebarMenuButton 
                        className={isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
                      >
                        {item.icon && <item.icon className="h-5 w-5" />}
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-2">
          <Sun className="h-5 w-5 text-solar-orange" />
          {expanded && (
            <span className="text-sm text-muted-foreground">Solar Installer Dashboard</span>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
