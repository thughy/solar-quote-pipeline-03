
import { AppContent } from '@/components/app-content';
import { AppHeader } from '@/components/app-header';
import { AppShell } from '@/components/app-shell';
import { BreadcrumbItem } from '@/types/navigation';
import { ReactNode } from 'react';

export default function AppHeaderLayout({ 
    children, 
    breadcrumbs 
}: { 
    children: ReactNode; 
    breadcrumbs?: BreadcrumbItem[] 
}) {
    return (
        <AppShell>
            <AppHeader breadcrumbs={breadcrumbs} />
            <AppContent>{children}</AppContent>
        </AppShell>
    );
}
