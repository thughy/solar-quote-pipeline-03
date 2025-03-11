
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, User, UserHardHat } from "lucide-react";

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to="/" className="flex items-center justify-center">
          <Sun className="h-6 w-6 text-yellow-500" />
          <span className="ml-2 text-xl font-bold">SolarConnect</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
            How It Works
          </Link>
          <Link to="/installers" className="text-sm font-medium hover:underline underline-offset-4">
            Find Installers
          </Link>
          <Link to="/quote" className="text-sm font-medium hover:underline underline-offset-4">
            Get a Quote
          </Link>
        </nav>
      </header>
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Welcome to SolarConnect
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  The platform connecting solar customers and installers across Nigeria
                </p>
              </div>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:flex-row">
                <Link to="/quote">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600">Get Started</Button>
                </Link>
                <Link to="/installers">
                  <Button size="lg" variant="outline">Find Installers</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Dashboard Access Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-2xl font-bold text-center">Access Your Dashboard</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Customer Dashboard Card */}
              <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg border border-blue-100">
                <User className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Customer Dashboard</h3>
                <p className="text-center mb-6 text-gray-600">
                  Monitor your solar system performance, energy savings, and manage your account.
                </p>
                <Link to="/customer-dashboard" className="w-full">
                  <Button className="w-full">Access Customer Dashboard</Button>
                </Link>
              </div>
              
              {/* Installer Dashboard Card */}
              <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg border border-green-100">
                <UserHardHat className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Installer Dashboard</h3>
                <p className="text-center mb-6 text-gray-600">
                  Manage quotes, installations, customers, and your company profile.
                </p>
                <Link to="/installer-dashboard" className="w-full">
                  <Button className="w-full">Access Installer Dashboard</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Additional marketing sections can remain */}
      </main>
      
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 SolarConnect. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link to="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
