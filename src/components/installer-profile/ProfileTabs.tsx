
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AboutCompanySection from "./AboutCompanySection";
import TeamSection from "./TeamSection";
import WarrantiesSection from "./WarrantiesSection";
import FinancingSection from "./FinancingSection";
import PartnersSection from "./PartnersSection";
import LocationsSection from "./LocationsSection";

const ProfileTabs = () => {
  return (
    <Tabs defaultValue="about" className="w-full space-y-6">
      <TabsList className="grid grid-cols-6 w-full">
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
        <TabsTrigger value="warranties">Warranties</TabsTrigger>
        <TabsTrigger value="financing">Financing</TabsTrigger>
        <TabsTrigger value="partners">Partners</TabsTrigger>
        <TabsTrigger value="locations">Locations</TabsTrigger>
      </TabsList>
      
      <TabsContent value="about">
        <AboutCompanySection />
      </TabsContent>
      
      <TabsContent value="team">
        <TeamSection />
      </TabsContent>
      
      <TabsContent value="warranties">
        <WarrantiesSection />
      </TabsContent>
      
      <TabsContent value="financing">
        <FinancingSection />
      </TabsContent>
      
      <TabsContent value="partners">
        <PartnersSection />
      </TabsContent>
      
      <TabsContent value="locations">
        <LocationsSection />
      </TabsContent>
    </Tabs>
  );
};

export default ProfileTabs;
