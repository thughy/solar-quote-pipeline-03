
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LocationSection = () => {
  return (
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
  );
};

export default LocationSection;
