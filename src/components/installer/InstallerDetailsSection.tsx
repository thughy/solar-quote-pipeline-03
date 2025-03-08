
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Building, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InstallerFormData } from "@/types/installer";
import { ChangeEvent, useRef } from "react";

type InstallerDetailsSectionProps = {
  formData: InstallerFormData;
  updateFormData: (data: Partial<InstallerFormData>) => void;
  errors: Record<string, string>;
};

export const InstallerDetailsSection = ({ 
  formData, 
  updateFormData, 
  errors 
}: InstallerDetailsSectionProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      updateFormData({ workSamples: [...formData.workSamples, ...newFiles] });
    }
  };

  const removeFile = (index: number) => {
    const updatedFiles = [...formData.workSamples];
    updatedFiles.splice(index, 1);
    updateFormData({ workSamples: updatedFiles });
  };

  return (
    <div className="space-y-4 p-6 bg-gray-50 rounded-lg border border-gray-100">
      <div className="flex items-center gap-2 text-solar-blue-dark">
        <Building className="h-5 w-5" />
        <h3 className="text-xl font-semibold">Installer Details</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            value={formData.companyName}
            onChange={(e) => updateFormData({ companyName: e.target.value })}
            className={errors.companyName ? "border-red-500" : ""}
          />
          {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
        </div>
        
        <div>
          <Label htmlFor="installerEmail">Installer Email</Label>
          <Input
            id="installerEmail"
            type="email"
            value={formData.installerEmail}
            onChange={(e) => updateFormData({ installerEmail: e.target.value })}
            className={errors.installerEmail ? "border-red-500" : ""}
          />
          {errors.installerEmail && <p className="text-red-500 text-sm mt-1">{errors.installerEmail}</p>}
        </div>
        
        <div>
          <Label htmlFor="installerPhone">Installer Phone</Label>
          <Input
            id="installerPhone"
            value={formData.installerPhone}
            onChange={(e) => updateFormData({ installerPhone: e.target.value })}
          />
        </div>
        
        <div>
          <Label htmlFor="certifications">Certifications (e.g., NABCEP, TUV)</Label>
          <Input
            id="certifications"
            value={formData.certifications}
            onChange={(e) => updateFormData({ certifications: e.target.value })}
            placeholder="List your certifications"
          />
        </div>
      </div>
      
      <div className="mt-4">
        <Label>Previous Work Samples</Label>
        <div className="mt-2 border-2 border-dashed border-gray-300 p-4 rounded-md">
          <div className="flex flex-col items-center justify-center gap-2">
            <Upload className="h-8 w-8 text-gray-400" />
            <p className="text-sm text-gray-600">Drag & drop image files or click to browse</p>
            <Button 
              type="button" 
              variant="secondary" 
              onClick={() => fileInputRef.current?.click()}
              className="mt-2"
            >
              Upload Photos
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              multiple
              accept="image/*"
              className="hidden"
            />
          </div>
        </div>
        
        {formData.workSamples.length > 0 && (
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
            {formData.workSamples.map((file, index) => (
              <div key={index} className="relative">
                <div className="relative h-24 bg-gray-100 rounded-md overflow-hidden">
                  <img 
                    src={URL.createObjectURL(file)} 
                    alt={`Sample ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 h-5 w-5 flex items-center justify-center text-xs"
                  >
                    ×
                  </button>
                </div>
                <Badge variant="secondary" className="mt-1 text-xs truncate w-full justify-center">
                  {file.name}
                </Badge>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
