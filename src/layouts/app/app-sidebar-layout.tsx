
import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { BreadcrumbItem } from '@/types/navigation';
import { ReactNode, useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function AppSidebarLayout({ 
    children, 
    breadcrumbs = [] 
}: { 
    children: ReactNode; 
    breadcrumbs?: BreadcrumbItem[] 
}) {
    return (
        <SidebarProvider>
            <div className="min-h-screen flex w-full">
                <AppShell variant="sidebar">
                    <AppSidebar />
                    <AppContent variant="sidebar">
                        <AppSidebarHeader breadcrumbs={breadcrumbs} />
                        {children}
                    </AppContent>
                </AppShell>
            </div>
        </SidebarProvider>
    );
}
