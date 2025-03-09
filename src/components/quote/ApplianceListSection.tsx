import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, Trash } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { FormData } from '@/types/quote';

type ApplianceListSectionProps = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  error?: string;
};

const ApplianceListSection = ({ formData, updateFormData, error }: ApplianceListSectionProps) => {
  const [appliances, setAppliances] = useState(formData.appliances);

  const addAppliance = () => {
    const newAppliances = [...appliances, { name: "", quantity: 1, power: 0, hoursUsed: 0 }];
    setAppliances(newAppliances);
    updateFormData({ appliances: newAppliances });
  };

  const updateAppliance = (index: number, field: string, value: any) => {
    const newAppliances = [...appliances];
    newAppliances[index][field] = value;
    setAppliances(newAppliances);
    updateFormData({ appliances: newAppliances });
  };

  const removeAppliance = (index: number) => {
    const newAppliances = [...appliances];
    newAppliances.splice(index, 1);
    setAppliances(newAppliances);
    updateFormData({ appliances: newAppliances });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">List your Appliances</h3>
      <p className="text-gray-600">
        Add each appliance you use and estimate its power consumption and usage hours.
      </p>
      {error && <p className="text-red-500">{error}</p>}
      {appliances.map((appliance, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          <div>
            <label htmlFor={`applianceName-${index}`} className="block text-sm font-medium text-gray-700">
              Appliance Name
            </label>
            <Input
              type="text"
              id={`applianceName-${index}`}
              value={appliance.name}
              onChange={(e) => updateAppliance(index, "name", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={`applianceQuantity-${index}`} className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <Input
              type="number"
              id={`applianceQuantity-${index}`}
              value={appliance.quantity}
              onChange={(e) => updateAppliance(index, "quantity", parseInt(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor={`appliancePower-${index}`} className="block text-sm font-medium text-gray-700">
              Power (Watts)
            </label>
            <Input
              type="number"
              id={`appliancePower-${index}`}
              value={appliance.power}
              onChange={(e) => updateAppliance(index, "power", parseInt(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor={`applianceHours-${index}`} className="block text-sm font-medium text-gray-700">
              Hours Used Daily
            </label>
            <Input
              type="number"
              id={`applianceHours-${index}`}
              value={appliance.hoursUsed}
              onChange={(e) => updateAppliance(index, "hoursUsed", parseInt(e.target.value))}
            />
          </div>
          <div className="flex justify-center">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => removeAppliance(index)}
              className="border-red-500 text-red-500 hover:bg-red-500/10"
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
      <Button type="button" variant="secondary" onClick={addAppliance}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Add Appliance
      </Button>
    </div>
  );
};

export default ApplianceListSection;
