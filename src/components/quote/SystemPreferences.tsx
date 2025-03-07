
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, PanelTop } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type SystemPreferencesProps = {
  formData: {
    budgetRange: string;
    batteryPreference: string;
    financing: string;
    aestheticNeeds: string[];
    seasonalChange?: string;
    inverterEfficiency?: string;
    batteryEfficiency?: string;
  };
  updateFormData: (data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
};

const SystemPreferences = ({ formData, updateFormData, nextStep, prevStep }: SystemPreferencesProps) => {
  const [aestheticNeeds, setAestheticNeeds] = useState<string[]>(formData.aestheticNeeds || []);
  const [errors, setErrors] = useState<{
    budgetRange?: string;
    batteryPreference?: string;
    financing?: string;
  }>({});

  const handleAestheticChange = (need: string) => {
    const newNeeds = aestheticNeeds.includes(need)
      ? aestheticNeeds.filter(n => n !== need)
      : [...aestheticNeeds, need];
    
    setAestheticNeeds(newNeeds);
    updateFormData({ aestheticNeeds: newNeeds });
  };

  const validateForm = () => {
    const newErrors: {
      budgetRange?: string;
      batteryPreference?: string;
      financing?: string;
    } = {};
    
    if (!formData.budgetRange) {
      newErrors.budgetRange = "Please select your budget range";
    }
    
    if (!formData.batteryPreference) {
      newErrors.batteryPreference = "Please select your battery preference";
    }
    
    if (!formData.financing) {
      newErrors.financing = "Please select your financing preference";
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
          <PanelTop className="h-6 w-6" />
          <span>Solar System Preferences</span>
        </h2>
        <p className="text-gray-600">
          Tell us your preferences for the solar system to help us find the best match.
        </p>
      </div>

      <div className="space-y-6">
        {/* Budget Range section */}
        <div>
          <Label>Budget Range</Label>
          <RadioGroup
            value={formData.budgetRange || ''}
            onValueChange={(value) => updateFormData({ budgetRange: value })}
            className="flex flex-col space-y-2 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="500k-1M" id="budget-500k-1M" />
              <Label htmlFor="budget-500k-1M" className="cursor-pointer">₦500k–₦1M</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1M-2M" id="budget-1M-2M" />
              <Label htmlFor="budget-1M-2M" className="cursor-pointer">₦1M–₦2M</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="2M+" id="budget-2M" />
              <Label htmlFor="budget-2M" className="cursor-pointer">₦2M+</Label>
            </div>
          </RadioGroup>
          {errors.budgetRange && <p className="text-red-500 text-sm mt-1">{errors.budgetRange}</p>}
        </div>

        {/* Battery Preference section */}
        <div>
          <Label>Battery Preference</Label>
          <RadioGroup
            value={formData.batteryPreference || ''}
            onValueChange={(value) => updateFormData({ batteryPreference: value })}
            className="flex flex-col space-y-2 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lithium-ion" id="battery-lithium" />
              <Label htmlFor="battery-lithium" className="cursor-pointer">Lithium-Ion (Long lifespan, 10+ years)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lead-acid" id="battery-lead" />
              <Label htmlFor="battery-lead" className="cursor-pointer">Lead-Acid (Budget-friendly, 3–5 years)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="not-sure" id="battery-not-sure" />
              <Label htmlFor="battery-not-sure" className="cursor-pointer">Not Sure</Label>
            </div>
          </RadioGroup>
          {errors.batteryPreference && <p className="text-red-500 text-sm mt-1">{errors.batteryPreference}</p>}
        </div>

        {/* Financing section */}
        <div>
          <Label>Financing</Label>
          <RadioGroup
            value={formData.financing || ''}
            onValueChange={(value) => updateFormData({ financing: value })}
            className="flex flex-col space-y-2 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cash" id="financing-cash" />
              <Label htmlFor="financing-cash" className="cursor-pointer">Cash Payment</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="installment" id="financing-installment" />
              <Label htmlFor="financing-installment" className="cursor-pointer">Installment Plan (12–24 months)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="loan" id="financing-loan" />
              <Label htmlFor="financing-loan" className="cursor-pointer">Bank Loan</Label>
            </div>
          </RadioGroup>
          {errors.financing && <p className="text-red-500 text-sm mt-1">{errors.financing}</p>}
        </div>

        {/* Aesthetic Needs section */}
        <div>
          <Label>Aesthetic Needs</Label>
          <div className="flex flex-col space-y-2 mt-2">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="hide-wiring"
                checked={aestheticNeeds.includes('hide-wiring')}
                onChange={() => handleAestheticChange('hide-wiring')}
                className="rounded text-solar-blue focus:ring-solar-blue"
              />
              <Label htmlFor="hide-wiring" className="cursor-pointer">Hide wiring/conduits</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="compact-design"
                checked={aestheticNeeds.includes('compact-design')}
                onChange={() => handleAestheticChange('compact-design')}
                className="rounded text-solar-blue focus:ring-solar-blue"
              />
              <Label htmlFor="compact-design" className="cursor-pointer">Compact design</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="no-preference"
                checked={aestheticNeeds.includes('no-preference')}
                onChange={() => handleAestheticChange('no-preference')}
                className="rounded text-solar-blue focus:ring-solar-blue"
              />
              <Label htmlFor="no-preference" className="cursor-pointer">No preference</Label>
            </div>
          </div>
        </div>

        {/* Seasonal Changes - NEW */}
        <div>
          <Label>Does your energy usage change significantly between rainy/dry seasons?</Label>
          <RadioGroup
            value={formData.seasonalChange || ''}
            onValueChange={(value) => updateFormData({ seasonalChange: value })}
            className="flex flex-col space-y-2 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="seasonal-yes" />
              <Label htmlFor="seasonal-yes" className="cursor-pointer">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="seasonal-no" />
              <Label htmlFor="seasonal-no" className="cursor-pointer">No</Label>
            </div>
          </RadioGroup>
        </div>

        {/* System Efficiency Preferences - NEW */}
        <div>
          <Label>Inverter Efficiency Preference</Label>
          <Select
            value={formData.inverterEfficiency || ''}
            onValueChange={(value) => updateFormData({ inverterEfficiency: value })}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select inverter efficiency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="90">Standard (90%)</SelectItem>
              <SelectItem value="95">Premium (95%)</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Battery Round-Trip Efficiency</Label>
          <Select
            value={formData.batteryEfficiency || ''}
            onValueChange={(value) => updateFormData({ batteryEfficiency: value })}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select battery efficiency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lithium">Lithium-Ion (95%)</SelectItem>
              <SelectItem value="lead-acid">Lead-Acid (80%)</SelectItem>
            </SelectContent>
          </Select>
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

export default SystemPreferences;
