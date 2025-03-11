
import React from 'react';
import { Button } from '@/components/ui/button';
import { InfoCircle } from 'lucide-react';

type ProfileHeaderProps = {
  handleSave: () => void;
};

const ProfileHeader = ({ handleSave }: ProfileHeaderProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Company Profile <span className="text-sm text-blue-600 font-normal">(edit)</span></h1>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-md flex items-start gap-3">
        <InfoCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-blue-700">
            Complete your profile to appear in customer searches. More complete profiles rank higher.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
