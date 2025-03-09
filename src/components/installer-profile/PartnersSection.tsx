
import React from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const PartnersSection = () => {
  return (
    <div className="space-y-6 pt-4 border-t">
      <h2 className="text-xl font-semibold">Associated Installers</h2>
      <p className="text-sm text-muted-foreground">(for manufacturers only)</p>
      
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox id="partner1" />
          <Label htmlFor="partner1" className="font-normal">Solar company name here</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="partner2" />
          <Label htmlFor="partner2" className="font-normal">Solar company name here</Label>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
