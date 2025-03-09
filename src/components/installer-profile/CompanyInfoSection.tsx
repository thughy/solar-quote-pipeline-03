
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const CompanyInfoSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Company Information</h2>
      
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
  );
};

export default CompanyInfoSection;
