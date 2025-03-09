
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import AboutCompanySection from './AboutCompanySection';
import TeamSection from './TeamSection';
import WarrantiesSection from './WarrantiesSection';
import FinancingSection from './FinancingSection';
import PartnersSection from './PartnersSection';
import LocationsSection from './LocationsSection';

const ProfileTabs = () => {
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="w-full justify-start mb-6 bg-white border-b rounded-none p-0 h-auto">
        <TabsTrigger 
          value="about" 
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent py-3"
        >
          About
        </TabsTrigger>
        <TabsTrigger 
          value="team" 
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent py-3"
        >
          Team
        </TabsTrigger>
        <TabsTrigger 
          value="warranties" 
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent py-3"
        >
          Warranties
        </TabsTrigger>
        <TabsTrigger 
          value="financing" 
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent py-3"
        >
          Financing
        </TabsTrigger>
        <TabsTrigger 
          value="partners" 
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent py-3"
        >
          Partners
        </TabsTrigger>
        <TabsTrigger 
          value="locations" 
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent py-3"
        >
          Locations
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="about" className="mt-4">
        <AboutCompanySection />
      </TabsContent>
      
      <TabsContent value="team" className="mt-4">
        <TeamSection />
      </TabsContent>
      
      <TabsContent value="warranties" className="mt-4">
        <WarrantiesSection />
      </TabsContent>
      
      <TabsContent value="financing" className="mt-4">
        <FinancingSection />
      </TabsContent>
      
      <TabsContent value="partners" className="mt-4">
        <PartnersSection />
      </TabsContent>
      
      <TabsContent value="locations" className="mt-4">
        <LocationsSection />
      </TabsContent>
    </Tabs>
  );
};

export default ProfileTabs;
