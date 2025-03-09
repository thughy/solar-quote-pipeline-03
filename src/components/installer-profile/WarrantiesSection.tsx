
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const WarrantiesSection = () => {
  return (
    <div className="space-y-6 pt-4 border-t">
      <h2 className="text-xl font-semibold">Warranties</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="space-y-3">
          <Label>Workmanship</Label>
          <RadioGroup defaultValue="10">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="5" id="workmanship-5" />
              <Label htmlFor="workmanship-5" className="font-normal">5 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="10" id="workmanship-10" />
              <Label htmlFor="workmanship-10" className="font-normal">10 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="15" id="workmanship-15" />
              <Label htmlFor="workmanship-15" className="font-normal">15 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="20" id="workmanship-20" />
              <Label htmlFor="workmanship-20" className="font-normal">20 years</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label>Watertight Guarantee (Roof Penetration)</Label>
          <RadioGroup defaultValue="10">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="5" id="roof-5" />
              <Label htmlFor="roof-5" className="font-normal">5 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="10" id="roof-10" />
              <Label htmlFor="roof-10" className="font-normal">10 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="15" id="roof-15" />
              <Label htmlFor="roof-15" className="font-normal">15 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="20" id="roof-20" />
              <Label htmlFor="roof-20" className="font-normal">20 years</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label>System Warranty</Label>
          <RadioGroup defaultValue="10">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="5" id="system-5" />
              <Label htmlFor="system-5" className="font-normal">5 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="10" id="system-10" />
              <Label htmlFor="system-10" className="font-normal">10 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="15" id="system-15" />
              <Label htmlFor="system-15" className="font-normal">15 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="20" id="system-20" />
              <Label htmlFor="system-20" className="font-normal">20 years</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label>Inverter Warranty</Label>
          <RadioGroup defaultValue="10">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="5" id="inverter-5" />
              <Label htmlFor="inverter-5" className="font-normal">5 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="10" id="inverter-10" />
              <Label htmlFor="inverter-10" className="font-normal">10 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="15" id="inverter-15" />
              <Label htmlFor="inverter-15" className="font-normal">15 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="20" id="inverter-20" />
              <Label htmlFor="inverter-20" className="font-normal">20 years</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label>Solar Panel Warranty</Label>
          <RadioGroup defaultValue="15">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="5" id="panel-5" />
              <Label htmlFor="panel-5" className="font-normal">5 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="10" id="panel-10" />
              <Label htmlFor="panel-10" className="font-normal">10 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="15" id="panel-15" />
              <Label htmlFor="panel-15" className="font-normal">15 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="20" id="panel-20" />
              <Label htmlFor="panel-20" className="font-normal">20 years</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label>Battery Warranty</Label>
          <RadioGroup defaultValue="10">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="5" id="battery-5" />
              <Label htmlFor="battery-5" className="font-normal">5 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="10" id="battery-10" />
              <Label htmlFor="battery-10" className="font-normal">10 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="15" id="battery-15" />
              <Label htmlFor="battery-15" className="font-normal">15 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="20" id="battery-20" />
              <Label htmlFor="battery-20" className="font-normal">20 years</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label>Full System Monitoring</Label>
          <RadioGroup defaultValue="yes">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="monitoring-yes" />
              <Label htmlFor="monitoring-yes" className="font-normal">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="monitoring-no" />
              <Label htmlFor="monitoring-no" className="font-normal">No</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default WarrantiesSection;
