
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const AboutCompanySection = () => {
  return (
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
  );
};

export default AboutCompanySection;
