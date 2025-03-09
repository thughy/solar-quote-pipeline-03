
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import ProfileHeader from '@/components/installer-profile/ProfileHeader';
import CompanyInfoSection from '@/components/installer-profile/CompanyInfoSection';
import LocationSection from '@/components/installer-profile/LocationSection';
import ProfileImageUpload from '@/components/installer-profile/ProfileImageUpload';
import CompanyStatistics from '@/components/installer-profile/CompanyStatistics';
import ProfileTabs from '@/components/installer-profile/ProfileTabs';

const InstallerEditProfile = () => {
  const { toast } = useToast();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  
  const handleSave = () => {
    toast({
      title: "Profile updated",
      description: "Your profile changes have been saved successfully.",
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setProfileImage(event.target.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <ProfileHeader handleSave={handleSave} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column - 2/3 width */}
        <div className="md:col-span-2 space-y-8">
          {/* Company Info Section */}
          <CompanyInfoSection />
          
          {/* Company Location */}
          <LocationSection />
          
          {/* Tabbed sections */}
          <ProfileTabs />
        </div>
        
        {/* Right column - 1/3 width */}
        <div className="space-y-6">
          <ProfileImageUpload 
            profileImage={profileImage} 
            handleImageUpload={handleImageUpload} 
          />
          
          <CompanyStatistics />
        </div>
      </div>
    </div>
  );
};

export default InstallerEditProfile;
