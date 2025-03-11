
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const TeamSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="about-team">About Team</Label>
          <Textarea 
            id="about-team" 
            placeholder="Brief text about your team, expertise, and experience"
            className="min-h-[120px]"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Number of Employees</Label>
          <RadioGroup defaultValue="11-50">
            {[
              '0-1 employees',
              '2-10 employees',
              '11-50 employees',
              '51-200 employees',
              '201-500 employees',
              '501-1,000 employees',
              '1,001-5,000 employees',
              '5,001-10,000 employees',
              '10,001+ employees'
            ].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`employees-${option}`} />
                <Label htmlFor={`employees-${option}`} className="font-normal">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamSection;
