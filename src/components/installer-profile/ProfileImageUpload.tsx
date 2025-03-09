
import React from 'react';
import { Button } from '@/components/ui/button';
import { Building, Upload } from 'lucide-react';

type ProfileImageUploadProps = {
  profileImage: string | null;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ProfileImageUpload = ({ profileImage, handleImageUpload }: ProfileImageUploadProps) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <h2 className="text-lg font-medium mb-4">Company Logo/Profile Photo</h2>
      
      <div className="flex flex-col items-center justify-center">
        <div className="w-48 h-48 bg-gray-100 rounded-md overflow-hidden mb-4 flex items-center justify-center">
          {profileImage ? (
            <img 
              src={profileImage} 
              alt="Company profile" 
              className="w-full h-full object-cover" 
            />
          ) : (
            <Building className="h-24 w-24 text-gray-400" />
          )}
        </div>
        
        <Button 
          type="button" 
          variant="outline" 
          className="flex items-center gap-2"
          onClick={() => document.getElementById('profile-upload')?.click()}
        >
          <Upload className="h-4 w-4" />
          Upload Logo
        </Button>
        <input
          id="profile-upload"
          type="file"
          onChange={handleImageUpload}
          accept="image/*"
          className="hidden"
        />
        
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Upload a company logo or profile photo.
          <br />Recommended size: 300x300px
        </p>
      </div>
    </div>
  );
};

export default ProfileImageUpload;
