
import React from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const FinancingSection = () => {
  return (
    <div className="space-y-6 pt-4 border-t">
      <h2 className="text-xl font-semibold">Associated Financing Companies</h2>
      
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox id="payhippo" />
          <Label htmlFor="payhippo" className="font-normal">Payhippo</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="sunfi" defaultChecked />
          <Label htmlFor="sunfi" className="font-normal">Sunfi</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="uwana" />
          <Label htmlFor="uwana" className="font-normal">Uwana</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="bank" />
          <Label htmlFor="bank" className="font-normal">(Bank Name)</Label>
        </div>
      </div>
    </div>
  );
};

export default FinancingSection;
