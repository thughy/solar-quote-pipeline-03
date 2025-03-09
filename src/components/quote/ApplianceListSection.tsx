
import { useState } from "react";
import { Appliance, FormData } from "@/types/quote";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ApplianceItem } from "./ApplianceItem";

// Define default power values for common appliances
const appliancePowerMap: Record<string, number> = {
  "AC_1HP": 900,
  "AC_1.5HP": 1119,
  "AC_2HP": 1700,
  "AC_3HP": 2700,
  "Air_Fryer": 2000,
  "Blender": 600,
  "Fan_Ceiling": 85,
  "Fan_Standing": 70,
  "Fan_Standing_Large": 130,
  "Deep_Freezer": 100,
  "Computer": 200,
  "Monitor": 60,
  "Fridge": 100,
  "Fridge_Energy": 60,
  "Fridge_Mini": 80,
  "Game_Console": 250,
  "Hair_Dryer": 2000,
  "Kettle": 2000,
  "Laptop": 65,
  "LED_TV": 100,
  "TV": 300,
  "Lightbulb": 60,
  "Lightbulb_Energy": 15,
  "Microwave": 1400,
  "Phone": 10,
  "POS": 35,
  "Iron": 1200,
  "Printer_Large": 500,
  "Printer_Small": 300,
  "Projector": 150,
  "Speaker_Commercial": 200,
  "Speaker_Home": 50,
  "Toaster": 1400,
  "Washing_Machine": 2100,
  "CCTV": 300,
  "Packaging_Machine": 380,
  "Water_Dispenser": 1000,
  "Fuel_Pump": 750,
  "Other": 0
};

// Define peak power multipliers for motor-driven appliances
const peakPowerMultiplier: Record<string, number> = {
  "AC_1HP": 3,
  "AC_1.5HP": 3,
  "AC_2HP": 3,
  "AC_3HP": 3,
  "Fridge": 3,
  "Fridge_Energy": 3,
  "Fridge_Mini": 3,
  "Deep_Freezer": 3,
  "Washing_Machine": 3,
  "Fuel_Pump": 3,
  "Water_Dispenser": 2,
  "Blender": 2,
  "Fan_Ceiling": 2,
  "Fan_Standing": 2,
  "Fan_Standing_Large": 2,
  "Packaging_Machine": 2,
  "Other": 1
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
