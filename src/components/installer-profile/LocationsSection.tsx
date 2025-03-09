
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const LocationsSection = () => {
  return (
    <div className="space-y-6 pt-4 border-t">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Other Locations</h2>
        <p className="text-sm text-muted-foreground">(for installers and others with multiple branches)</p>
        
        <div>
          <Label htmlFor="location1">Address 1</Label>
          <Input id="location1" placeholder="Enter address" />
        </div>
        <div>
          <Label htmlFor="location2">Address 2</Label>
          <Input id="location2" placeholder="Enter address" />
        </div>
        <div>
          <Label htmlFor="location3">Address 3</Label>
          <Input id="location3" placeholder="Enter address" />
        </div>
        <div>
          <Label htmlFor="location4">Address 4</Label>
          <Input id="location4" placeholder="Enter address" />
        </div>
      </div>
      
      <div className="space-y-4 pt-4 border-t">
        <h2 className="text-xl font-semibold">Warehouse Location</h2>
        <p className="text-sm text-muted-foreground">(for manufacturers only)</p>
        
        <div>
          <Label htmlFor="warehouse1">Address 1</Label>
          <Input id="warehouse1" placeholder="Enter address" />
        </div>
        <div>
          <Label htmlFor="warehouse2">Address 2</Label>
          <Input id="warehouse2" placeholder="Enter address" />
        </div>
        <div>
          <Label htmlFor="warehouse3">Address 3</Label>
          <Input id="warehouse3" placeholder="Enter address" />
        </div>
        <div>
          <Label htmlFor="warehouse4">Address 4</Label>
          <Input id="warehouse4" placeholder="Enter address" />
        </div>
      </div>
      
      <div className="space-y-4 pt-4 border-t">
        <h2 className="text-xl font-semibold">Service Centers in Nigeria</h2>
        <p className="text-sm text-muted-foreground">(for manufacturers only)</p>
        
        <div>
          <Label htmlFor="service1">Address 1</Label>
          <Input id="service1" placeholder="Enter address" />
        </div>
        <div>
          <Label htmlFor="service2">Address 2</Label>
          <Input id="service2" placeholder="Enter address" />
        </div>
        <div>
          <Label htmlFor="service3">Address 3</Label>
          <Input id="service3" placeholder="Enter address" />
        </div>
        <div>
          <Label htmlFor="service4">Address 4</Label>
          <Input id="service4" placeholder="Enter address" />
        </div>
      </div>
    </div>
  );
};

export default LocationsSection;
