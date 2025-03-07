
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormEvent, useState } from "react";
import { ArrowRight, User } from "lucide-react";

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", 
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT - Abuja", "Gombe", 
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", 
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", 
  "Taraba", "Yobe", "Zamfara"
];

type CustomerDetailsProps = {
  formData: {
    fullName: string;
    email: string;
    phone: string;
    state: string;
    propertyType: string;
    energySources: string[];
  };
  updateFormData: (data: any) => void;
  nextStep: () => void;
};

const CustomerDetails = ({ formData, updateFormData, nextStep }: CustomerDetailsProps) => {
  const [energySources, setEnergySources] = useState<string[]>(formData.energySources || []);
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    phone?: string;
    state?: string;
    propertyType?: string;
  }>({});

  const handleEnergySourceChange = (source: string) => {
    const newSources = energySources.includes(source)
      ? energySources.filter(s => s !== source)
      : [...energySources, source];
    
    setEnergySources(newSources);
    updateFormData({ energySources: newSources });
  };

  const validateForm = () => {
    const newErrors: {
      fullName?: string;
      email?: string;
      phone?: string;
      state?: string;
      propertyType?: string;
    } = {};
    
    if (!formData.fullName?.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone?.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    if (!formData.state) {
      newErrors.state = "State is required";
    }
    
    if (!formData.propertyType) {
      newErrors.propertyType = "Property type is required";
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
          <User className="h-6 w-6" />
          <span>Customer & Property Details</span>
        </h2>
        <p className="text-gray-600">
          Tell us about yourself and your property to help us find the best solar solutions for you.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            value={formData.fullName || ''}
            onChange={(e) => updateFormData({ fullName: e.target.value })}
            className={errors.fullName ? "border-red-500" : ""}
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email || ''}
            onChange={(e) => updateFormData({ email: e.target.value })}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={formData.phone || ''}
            onChange={(e) => updateFormData({ phone: e.target.value })}
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <Label htmlFor="state">State</Label>
          <Select
            value={formData.state || ''}
            onValueChange={(value) => updateFormData({ state: value })}
          >
            <SelectTrigger className={errors.state ? "border-red-500" : ""}>
              <SelectValue placeholder="Select your state" />
            </SelectTrigger>
            <SelectContent>
              {nigerianStates.map((state) => (
                <SelectItem key={state} value={state}>{state}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
        </div>

        <div>
          <Label>Property Type</Label>
          <RadioGroup
            value={formData.propertyType || ''}
            onValueChange={(value) => updateFormData({ propertyType: value })}
            className="flex flex-col space-y-2 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="residential" id="residential" />
              <Label htmlFor="residential" className="cursor-pointer">Residential (Bungalow/Duplex)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="commercial" id="commercial" />
              <Label htmlFor="commercial" className="cursor-pointer">Commercial (Shop/Office/Factory)</Label>
            </div>
          </RadioGroup>
          {errors.propertyType && <p className="text-red-500 text-sm mt-1">{errors.propertyType}</p>}
        </div>

        <div>
          <Label>Current Energy Sources</Label>
          <div className="flex flex-col space-y-2 mt-2">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="grid"
                checked={energySources.includes('grid')}
                onChange={() => handleEnergySourceChange('grid')}
                className="rounded text-solar-blue focus:ring-solar-blue"
              />
              <Label htmlFor="grid" className="cursor-pointer">Grid</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="generator"
                checked={energySources.includes('generator')}
                onChange={() => handleEnergySourceChange('generator')}
                className="rounded text-solar-blue focus:ring-solar-blue"
              />
              <Label htmlFor="generator" className="cursor-pointer">Generator</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="existing-solar"
                checked={energySources.includes('existing-solar')}
                onChange={() => handleEnergySourceChange('existing-solar')}
                className="rounded text-solar-blue focus:ring-solar-blue"
              />
              <Label htmlFor="existing-solar" className="cursor-pointer">Existing Solar System</Label>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Button type="submit" className="bg-solar-blue hover:bg-solar-blue-dark w-full md:w-auto flex items-center gap-2">
          <span>Continue</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default CustomerDetails;
