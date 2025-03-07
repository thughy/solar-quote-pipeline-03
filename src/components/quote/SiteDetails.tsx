
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, Home, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";

type SiteDetailsProps = {
  formData: {
    roofType: string;
    shading: string;
    availableSpace: string;
    otherRoofType: string;
    roofOrientation?: string; // Add the new field
  };
  updateFormData: (data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
};

const SiteDetails = ({ formData, updateFormData, nextStep, prevStep }: SiteDetailsProps) => {
  const [errors, setErrors] = useState<{
    roofType?: string;
    shading?: string;
    availableSpace?: string;
    roofOrientation?: string; // Add validation for new field
  }>({});

  const validateForm = () => {
    const newErrors: {
      roofType?: string;
      shading?: string;
      availableSpace?: string;
      roofOrientation?: string; // Add validation for new field
    } = {};
    
    if (!formData.roofType) {
      newErrors.roofType = "Please select your roof type";
    }
    
    if (!formData.shading) {
      newErrors.shading = "Please select the level of shading";
    }
    
    if (!formData.availableSpace) {
      newErrors.availableSpace = "Please select the available space for solar panels";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      nextStep();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-solar-blue-dark flex items-center gap-2">
          <Home className="h-6 w-6" />
          <span>Site Details</span>
        </h2>
        <p className="text-gray-600">
          Help us understand your property's specifics for accurate installer quotes.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <Label>Roof Type</Label>
          <RadioGroup
            value={formData.roofType || ''}
            onValueChange={(value) => updateFormData({ roofType: value })}
            className="flex flex-col space-y-2 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="corrugated-iron" id="roof-corrugated" />
              <Label htmlFor="roof-corrugated" className="cursor-pointer">Corrugated Iron</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="concrete" id="roof-concrete" />
              <Label htmlFor="roof-concrete" className="cursor-pointer">Concrete</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="roof-other" />
              <Label htmlFor="roof-other" className="cursor-pointer">Other</Label>
            </div>
          </RadioGroup>
          {formData.roofType === 'other' && (
            <Input
              placeholder="Please specify roof type"
              value={formData.otherRoofType || ''}
              onChange={(e) => updateFormData({ otherRoofType: e.target.value })}
              className="mt-2"
            />
          )}
          {errors.roofType && <p className="text-red-500 text-sm mt-1">{errors.roofType}</p>}
        </div>

        {/* Add new roof orientation field */}
        <div>
          <Label>Roof Orientation</Label>
          <RadioGroup
            value={formData.roofOrientation || ''}
            onValueChange={(value) => updateFormData({ roofOrientation: value })}
            className="flex flex-col space-y-2 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="north" id="orientation-north" />
              <Label htmlFor="orientation-north" className="cursor-pointer">North-Facing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="south" id="orientation-south" />
              <Label htmlFor="orientation-south" className="cursor-pointer">South-Facing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="east-west" id="orientation-east-west" />
              <Label htmlFor="orientation-east-west" className="cursor-pointer">East/West-Facing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="not-sure" id="orientation-not-sure" />
              <Label htmlFor="orientation-not-sure" className="cursor-pointer">Not Sure</Label>
            </div>
          </RadioGroup>
          {errors.roofOrientation && <p className="text-red-500 text-sm mt-1">{errors.roofOrientation}</p>}
        </div>

        <div>
          <Label>Shading</Label>
          <RadioGroup
            value={formData.shading || ''}
            onValueChange={(value) => updateFormData({ shading: value })}
            className="flex flex-col space-y-2 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="heavy" id="shading-heavy" />
              <Label htmlFor="shading-heavy" className="cursor-pointer">Heavy (Trees/Buildings nearby)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="moderate" id="shading-moderate" />
              <Label htmlFor="shading-moderate" className="cursor-pointer">Moderate</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="minimal" id="shading-minimal" />
              <Label htmlFor="shading-minimal" className="cursor-pointer">Minimal</Label>
            </div>
          </RadioGroup>
          {errors.shading && <p className="text-red-500 text-sm mt-1">{errors.shading}</p>}
        </div>

        <div>
          <Label>Available Space for Solar Panels</Label>
          <RadioGroup
            value={formData.availableSpace || ''}
            onValueChange={(value) => updateFormData({ availableSpace: value })}
            className="flex flex-col space-y-2 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="<10" id="space-less-10" />
              <Label htmlFor="space-less-10" className="cursor-pointer">{'<'}10 sqm</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="10-20" id="space-10-20" />
              <Label htmlFor="space-10-20" className="cursor-pointer">10–20 sqm</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="20+" id="space-20" />
              <Label htmlFor="space-20" className="cursor-pointer">20+ sqm</Label>
            </div>
          </RadioGroup>
          {errors.availableSpace && <p className="text-red-500 text-sm mt-1">{errors.availableSpace}</p>}
        </div>

        <div>
          <Label className="mb-2 block">Upload Photos (Optional)</Label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center hover:bg-gray-50 cursor-pointer transition-colors">
              <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Roof</p>
              <input type="file" className="hidden" />
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center hover:bg-gray-50 cursor-pointer transition-colors">
              <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Electrical Panel</p>
              <input type="file" className="hidden" />
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center hover:bg-gray-50 cursor-pointer transition-colors">
              <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Generator (if any)</p>
              <input type="file" className="hidden" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Optional: Upload photos to help installers provide more accurate quotes.
          </p>
        </div>
      </div>

      <div className="pt-4 flex justify-between">
        <Button 
          type="button" 
          variant="outline" 
          onClick={prevStep}
          className="border-solar-blue text-solar-blue hover:bg-solar-blue/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Previous</span>
        </Button>
        <Button type="submit" className="bg-solar-blue hover:bg-solar-blue-dark">
          <span>Continue</span>
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </form>
  );
};

export default SiteDetails;
