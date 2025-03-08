
export interface BreadcrumbItem {
  title: string;
  href: string;
}

export interface NavItem {
  title: string;
  url: string;
  icon?: React.ComponentType<{ className?: string }>;
}
