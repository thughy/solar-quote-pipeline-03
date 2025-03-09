
import React from 'react';
import { Label } from '@/components/ui/label';

const CompanyStatistics = () => {
  return (
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
  );
};

export default CompanyStatistics;
