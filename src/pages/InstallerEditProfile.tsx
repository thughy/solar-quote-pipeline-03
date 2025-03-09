
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Upload, UserCircle, Building, Phone, Mail, Globe, MapPin } from 'lucide-react';

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
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Company Profile <span className="text-sm text-blue-600 font-normal">(edit)</span></h1>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
      
      <p className="text-muted-foreground">
        [Provide company information so that potential customers can find you.]
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column - 2/3 width */}
        <div className="md:col-span-2 space-y-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" defaultValue="SolarPro Solutions" />
              </div>
              <div>
                <Label htmlFor="companyType">Company Type</Label>
                <Input id="companyType" defaultValue="Solar Installer" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" defaultValue="+2348123456789" />
              </div>
              <div>
                <Label htmlFor="emailAddress">Email Address</Label>
                <Input id="emailAddress" defaultValue="info@solarpro.com" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="website">Company Website</Label>
              <Input id="website" defaultValue="solarpro.com" />
            </div>
          </div>
          
          {/* Company Location */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Location</h2>
            <p className="text-sm text-muted-foreground">
              This helps match you with nearby customers.
            </p>
            
            <div>
              <Label htmlFor="streetAddress">Street Address</Label>
              <Input id="streetAddress" defaultValue="123 Solar Street, Lekki" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="country">Country</Label>
                <Input id="country" defaultValue="Nigeria" />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input id="state" defaultValue="Lagos" />
              </div>
            </div>
          </div>
          
          {/* About Company */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">About Company</h2>
            
            <div>
              <Label htmlFor="shortBio">Short Bio</Label>
              <Textarea 
                id="shortBio" 
                placeholder="Brief description of your company (150 characters max)"
                defaultValue="Leading solar installation company with over 10 years of experience in residential and commercial projects."
                className="h-20"
              />
            </div>
            
            <div>
              <Label htmlFor="fullOverview">Full Company Overview</Label>
              <Textarea 
                id="fullOverview" 
                placeholder="Comprehensive description of your company, services, history, etc."
                defaultValue="SolarPro Solutions is a leading solar energy company in Nigeria dedicated to providing reliable, efficient, and sustainable solar power solutions. With over a decade of experience in the renewable energy sector, we specialize in designing, installing, and maintaining solar systems for residential, commercial, and industrial clients."
                className="h-40"
              />
            </div>
          </div>
        </div>
        
        {/* Right column - 1/3 width */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h2 className="text-lg font-medium mb-4">Company Logo/Profile Photo</h2>
            
            <div className="flex flex-col items-center justify-center">
              <div className="w-48 h-48 bg-gray-100 rounded-md overflow-hidden mb-4 flex items-center justify-center">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Company profile" 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <Building className="h-24 w-24 text-gray-400" />
                )}
              </div>
              
              <Button 
                type="button" 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => document.getElementById('profile-upload')?.click()}
              >
                <Upload className="h-4 w-4" />
                Upload Logo
              </Button>
              <input
                id="profile-upload"
                type="file"
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Upload a company logo or profile photo.
                <br />Recommended size: 300x300px
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h2 className="text-lg font-medium mb-4">Company Statistics</h2>
            <div className="space-y-3">
              <div>
                <Label className="text-sm text-muted-foreground">Years in Business</Label>
                <p className="font-medium">10+</p>
              </div>
              <div>
                <Label className="text-sm text-muted-foreground">Installations Completed</Label>
                <p className="font-medium">500+</p>
              </div>
              <div>
                <Label className="text-sm text-muted-foreground">Average Rating</Label>
                <p className="font-medium">4.8/5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional sections */}
      <div className="pt-4 border-t">
        <h2 className="text-xl font-semibold mb-4">Team Information</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="teamDescription">About Team</Label>
            <Textarea 
              id="teamDescription" 
              placeholder="Brief text about your team, expertise, and experience"
              defaultValue="Our team consists of certified solar technicians, engineers, and customer service professionals dedicated to delivering top-quality solar solutions."
              className="h-28"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallerEditProfile;
