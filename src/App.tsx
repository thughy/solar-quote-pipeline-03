import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Quote from "./pages/Quote";
import InstallerQuote from "./pages/InstallerQuote";
import Layout from "./components/Layout";
import AppLayout from "./layouts/app-layout";
import InstallerDashboard from "./pages/InstallerDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import Installers from "./pages/Installers";
import InstallerProfile from "./pages/InstallerProfile";
import InstallerEditProfile from "./pages/InstallerEditProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/installers" element={<Installers />} />
            <Route path="/installer-profile" element={<InstallerProfile />} />
            <Route path="/installer-profile/:id" element={<InstallerProfile />} />
          </Route>
          
          {/* Installer Dashboard Routes */}
          <Route path="/installer-dashboard" element={
            <AppLayout breadcrumbs={[{ title: "Dashboard", href: "/installer-dashboard" }]}>
              <InstallerDashboard />
            </AppLayout>
          } />
          
          <Route path="/installer-quote" element={
            <AppLayout breadcrumbs={[
              { title: "Dashboard", href: "/installer-dashboard" },
              { title: "Quote Submission", href: "/installer-quote" }
            ]}>
              <InstallerQuote />
            </AppLayout>
          } />
          
          <Route path="/installer-edit-profile" element={
            <AppLayout breadcrumbs={[
              { title: "Dashboard", href: "/installer-dashboard" },
              { title: "Edit Profile", href: "/installer-edit-profile" }
            ]}>
              <InstallerEditProfile />
            </AppLayout>
          } />
          
          {/* Customer Dashboard Routes */}
          <Route path="/customer-dashboard" element={
            <AppLayout breadcrumbs={[{ title: "Dashboard", href: "/customer-dashboard" }]}>
              <CustomerDashboard />
            </AppLayout>
          } />
          
          <Route path="/customer-system" element={
            <AppLayout breadcrumbs={[
              { title: "Dashboard", href: "/customer-dashboard" },
              { title: "System Details", href: "/customer-system" }
            ]}>
              <div className="container mx-auto p-8">
                <h1 className="text-2xl font-bold mb-4">System Details</h1>
                <p>View detailed information about your solar system.</p>
              </div>
            </AppLayout>
          } />
          
          <Route path="/customer-billing" element={
            <AppLayout breadcrumbs={[
              { title: "Dashboard", href: "/customer-dashboard" },
              { title: "Billing & Payments", href: "/customer-billing" }
            ]}>
              <div className="container mx-auto p-8">
                <h1 className="text-2xl font-bold mb-4">Billing & Payments</h1>
                <p>Manage your billing information and payment history.</p>
              </div>
            </AppLayout>
          } />
          
          <Route path="/customer-support" element={
            <AppLayout breadcrumbs={[
              { title: "Dashboard", href: "/customer-dashboard" },
              { title: "Support", href: "/customer-support" }
            ]}>
              <div className="container mx-auto p-8">
                <h1 className="text-2xl font-bold mb-4">Support</h1>
                <p>Get help with your solar system or service.</p>
              </div>
            </AppLayout>
          } />
          
          {/* Existing Installer Routes */}
          <Route path="/calendar" element={
            <AppLayout breadcrumbs={[
              { title: "Dashboard", href: "/installer-dashboard" },
              { title: "Calendar", href: "/calendar" }
            ]}>
              <div className="container mx-auto p-8">
                <h1 className="text-2xl font-bold mb-4">Calendar</h1>
                <p>Calendar feature coming soon.</p>
              </div>
            </AppLayout>
          } />
          
          <Route path="/customers" element={
            <AppLayout breadcrumbs={[
              { title: "Dashboard", href: "/installer-dashboard" },
              { title: "Customers", href: "/customers" }
            ]}>
              <div className="container mx-auto p-8">
                <h1 className="text-2xl font-bold mb-4">Customer Management</h1>
                <p>Customer management feature coming soon.</p>
              </div>
            </AppLayout>
          } />
          
          <Route path="/settings" element={
            <AppLayout breadcrumbs={[
              { title: "Dashboard", href: "/installer-dashboard" },
              { title: "Settings", href: "/settings" }
            ]}>
              <div className="container mx-auto p-8">
                <h1 className="text-2xl font-bold mb-4">Settings</h1>
                <p>Settings feature coming soon.</p>
              </div>
            </AppLayout>
          } />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
