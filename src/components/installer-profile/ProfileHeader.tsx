
import React from 'react';
import { Button } from '@/components/ui/button';

type ProfileHeaderProps = {
  handleSave: () => void;
};

const ProfileHeader = ({ handleSave }: ProfileHeaderProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Company Profile <span className="text-sm text-blue-600 font-normal">(edit)</span></h1>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-md">
        <p className="text-blue-700">
          Complete your profile to appear in customer searches. More complete profiles rank higher.
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
