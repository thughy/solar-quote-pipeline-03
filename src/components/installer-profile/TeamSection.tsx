
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const TeamSection = () => {
  return (
    <div className="space-y-6 pt-4 border-t">
      <h2 className="text-xl font-semibold">Team</h2>
      
      <div>
        <Label htmlFor="teamDescription">About Team</Label>
        <Textarea 
          id="teamDescription" 
          placeholder="Brief text about your team, expertise, and experience"
          defaultValue="Our team consists of certified solar technicians, engineers, and customer service professionals dedicated to delivering top-quality solar solutions."
          className="h-28"
        />
      </div>
      
      <div className="space-y-3">
        <Label>Number of Employees</Label>
        <RadioGroup defaultValue="2-10">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="0-1" id="employees-0-1" />
            <Label htmlFor="employees-0-1" className="font-normal">0-1 employees</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2-10" id="employees-2-10" />
            <Label htmlFor="employees-2-10" className="font-normal">2-10 employees</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="11-50" id="employees-11-50" />
            <Label htmlFor="employees-11-50" className="font-normal">11-50 employees</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="51-200" id="employees-51-200" />
            <Label htmlFor="employees-51-200" className="font-normal">51-200 employees</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="201-500" id="employees-201-500" />
            <Label htmlFor="employees-201-500" className="font-normal">201-500 employees</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="501-1000" id="employees-501-1000" />
            <Label htmlFor="employees-501-1000" className="font-normal">501-1,000 employees</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1001-5000" id="employees-1001-5000" />
            <Label htmlFor="employees-1001-5000" className="font-normal">1,001-5,000 employees</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="5001-10000" id="employees-5001-10000" />
            <Label htmlFor="employees-5001-10000" className="font-normal">5,001-10,000 employees</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="10001+" id="employees-10001+" />
            <Label htmlFor="employees-10001+" className="font-normal">10,001+ employees</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default TeamSection;
