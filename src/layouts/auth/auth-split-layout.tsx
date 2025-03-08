
import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface AuthLayoutProps {
    title?: string;
    description?: string;
}

export default function AuthSplitLayout({ 
    children, 
    title, 
    description 
}: { 
    children: ReactNode 
} & AuthLayoutProps) {
    // Dummy quote for demonstration
    const quote = {
        message: "Solar energy is not just sustainable, it is renewable and this means we will have it as long as the sun is there.",
        author: "Alex Smith, Solar Installer"
    };

    return (
        <div className="relative grid h-dvh flex-col items-center justify-center px-8 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
                <div className="absolute inset-0 bg-zinc-900" />
                <Link to="/" className="relative z-20 flex items-center text-lg font-medium">
                    <AppLogoIcon className="mr-2 h-8 w-8 text-white" />
                    SolarConnect
                </Link>
                {quote && (
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">&ldquo;{quote.message}&rdquo;</p>
                            <footer className="text-sm text-neutral-300">{quote.author}</footer>
                        </blockquote>
                    </div>
                )}
            </div>
            <div className="w-full lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <Link to="/" className="relative z-20 flex items-center justify-center lg:hidden">
                        <AppLogoIcon className="h-10 text-black sm:h-12" />
                    </Link>
                    <div className="flex flex-col items-start gap-2 text-left sm:items-center sm:text-center">
                        <h1 className="text-xl font-medium">{title}</h1>
                        <p className="text-muted-foreground text-sm text-balance">{description}</p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
