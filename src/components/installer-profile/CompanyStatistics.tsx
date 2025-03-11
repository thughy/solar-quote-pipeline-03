
import React from 'react';
import { Label } from '@/components/ui/label';
import { Award, Calendar, CheckSquare } from 'lucide-react';

const CompanyStatistics = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <h2 className="text-lg font-medium mb-4">Company Statistics</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Calendar className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <Label className="text-sm text-muted-foreground">Years in Business</Label>
            <p className="font-medium text-lg">10+</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckSquare className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
          <div>
            <Label className="text-sm text-muted-foreground">Installations Completed</Label>
            <p className="font-medium text-lg">500+</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Award className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <Label className="text-sm text-muted-foreground">Average Rating</Label>
            <p className="font-medium text-lg">4.8/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStatistics;
