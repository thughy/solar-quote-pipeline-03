
import { useState } from "react";
import { Appliance, FormData } from "@/types/quote";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ApplianceItem } from "./ApplianceItem";

// Define default power values for common appliances
const appliancePowerMap: Record<string, number> = {
  "AC": 1500,
  "Fridge": 300,
  "TV": 150,
  "LED Bulb": 10,
  "Fan": 80,
  "Microwave": 1200,
  "Water Pump": 750,
  "Computer": 200,
  "Other": 0
};

// Define peak power multipliers for motor-driven appliances
const peakPowerMultiplier: Record<string, number> = {
  "AC": 3, // AC compressor has high startup current
  "Fridge": 3, // Fridge compressor has high startup current
  "Water Pump": 3, // Water pumps have high startup current
  "Other": 1 // Default no multiplier
};

type ApplianceListSectionProps = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  error?: string;
};

export const ApplianceListSection = ({ 
  formData, 
  updateFormData, 
  error 
}: ApplianceListSectionProps) => {
  const [appliances, setAppliances] = useState<Appliance[]>(
    formData.appliances?.length ? formData.appliances : [{ name: "", quantity: 1, power: 0, hoursUsed: 0 }]
  );

  const handleApplianceChange = (index: number, field: keyof Appliance, value: string | number) => {
    const updatedAppliances = [...appliances];
    
    if (field === 'name') {
      updatedAppliances[index][field] = value as string;
      
      // Automatically set the power value based on the selected appliance
      if (value in appliancePowerMap) {
        const applianceName = value as string;
        updatedAppliances[index].power = appliancePowerMap[applianceName];
        
        // Calculate and set peak power for motor-driven appliances
        if (applianceName in peakPowerMultiplier) {
          updatedAppliances[index].peakPower = appliancePowerMap[applianceName] * peakPowerMultiplier[applianceName];
        }
      }
    } else if (field === 'quantity' || field === 'power' || field === 'hoursUsed' || field === 'peakPower') {
      // Explicitly cast these numeric fields
      updatedAppliances[index][field] = Number(value) || 0;
    } else if (field === 'usageTiming') {
      // Handle string field
      updatedAppliances[index][field] = value as string;
    }
    
    setAppliances(updatedAppliances);
    updateFormData({ appliances: updatedAppliances });
  };

  const addAppliance = () => {
    const updatedAppliances = [...appliances, { name: "", quantity: 1, power: 0, hoursUsed: 0 }];
    setAppliances(updatedAppliances);
    updateFormData({ appliances: updatedAppliances });
  };

  const removeAppliance = (index: number) => {
    if (appliances.length > 1) {
      const updatedAppliances = appliances.filter((_, i) => i !== index);
      setAppliances(updatedAppliances);
      updateFormData({ appliances: updatedAppliances });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <Label>Appliance List (Critical for Load Calculation)</Label>
        <Button 
          type="button" 
          onClick={addAppliance} 
          variant="outline"
          size="sm"
          className="text-solar-blue hover:text-solar-blue-dark border-solar-blue hover:border-solar-blue-dark"
        >
          Add Appliance
        </Button>
      </div>
      
      <div className="space-y-4">
        {appliances.map((appliance, index) => (
          <ApplianceItem
            key={index}
            appliance={appliance}
            index={index}
            onChange={handleApplianceChange}
            onRemove={removeAppliance}
            canRemove={appliances.length > 1}
          />
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <p className="text-sm text-gray-500 mt-2">
        Tip: Peak power is important for motor-driven appliances like ACs, refrigerators, and pumps that require 2-3x their rated power during startup.
      </p>
    </div>
  );
};
