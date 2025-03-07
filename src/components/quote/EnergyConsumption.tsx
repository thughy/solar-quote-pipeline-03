import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, Zap } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Appliance, FormData } from "@/types/quote";

type EnergyConsumptionProps = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
};

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

const EnergyConsumption = ({ formData, updateFormData, nextStep, prevStep }: EnergyConsumptionProps) => {
  const [appliances, setAppliances] = useState<Appliance[]>(
    formData.appliances?.length ? formData.appliances : [{ name: "", quantity: 1, power: 0, hoursUsed: 0 }]
  );
  
  const [errors, setErrors] = useState<{
    gridSupplyHours?: string;
    monthlyBill?: string;
    appliances?: string;
  }>({});

  const handleApplianceChange = (index: number, field: keyof Appliance, value: string | number) => {
    const updatedAppliances = [...appliances];
    
    if (field === 'name') {
      updatedAppliances[index][field] = value as string;
      
      // Automatically set the power value based on the selected appliance
      if (value in appliancePowerMap) {
        updatedAppliances[index].power = appliancePowerMap[value as string];
      }
    } else {
      updatedAppliances[index][field] = Number(value) || 0;
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

  const validateForm = () => {
    const newErrors: {
      gridSupplyHours?: string;
      monthlyBill?: string;
      appliances?: string;
    } = {};
    
    if (!formData.gridSupplyHours) {
      newErrors.gridSupplyHours = "Please select daily grid supply hours";
    }
    
    if (!formData.monthlyBill) {
      newErrors.monthlyBill = "Please select your monthly bill range";
    }
    
    // Check if at least one appliance has complete information
    const hasCompleteAppliance = appliances.some(app => 
      app.name && app.quantity > 0 && app.power > 0 && app.hoursUsed > 0
    );
    
    if (!hasCompleteAppliance) {
      newErrors.appliances = "Please add at least one appliance with complete information";
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
          <Zap className="h-6 w-6" />
          <span>Energy Consumption & Tariff Band</span>
        </h2>
        <p className="text-gray-600">
          Help us understand your energy usage and current electricity situation.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <Label>Daily Grid Supply Hours</Label>
          <RadioGroup
            value={formData.gridSupplyHours || ''}
            onValueChange={(value) => updateFormData({ gridSupplyHours: value })}
            className="flex flex-col space-y-2 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="20+" id="hours-20" />
              <Label htmlFor="hours-20" className="cursor-pointer">20+ hours/day (Band A: ₦219.70–₦241.45/kWh)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="16-20" id="hours-16-20" />
              <Label htmlFor="hours-16-20" className="cursor-pointer">16–20 hours/day (Band B: ₦180.77–₦203/kWh)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="12-16" id="hours-12-16" />
              <Label htmlFor="hours-12-16" className="cursor-pointer">12–16 hours/day (Band C: ₦145–₦205/kWh)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="<12" id="hours-less-12" />
              <Label htmlFor="hours-less-12" className="cursor-pointer">{'<'}12 hours/day (Band D/E: ~₦174.67/kWh)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="not-sure" id="hours-not-sure" />
              <Label htmlFor="hours-not-sure" className="cursor-pointer">Not sure</Label>
            </div>
          </RadioGroup>
          {errors.gridSupplyHours && <p className="text-red-500 text-sm mt-1">{errors.gridSupplyHours}</p>}
        </div>

        <div>
          <Label htmlFor="tariffRate">Current Tariff Rate (if known)</Label>
          <div className="flex gap-2 items-center mt-1">
            <span className="text-gray-500">₦</span>
            <Input
              id="tariffRate"
              placeholder="e.g., 225"
              value={formData.tariffRate || ''}
              onChange={(e) => updateFormData({ tariffRate: e.target.value })}
            />
            <span className="text-gray-500">/kWh</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Optional: Leave blank if unknown</p>
        </div>

        <div>
          <Label>Average Monthly Grid Bill</Label>
          <RadioGroup
            value={formData.monthlyBill || ''}
            onValueChange={(value) => updateFormData({ monthlyBill: value })}
            className="flex flex-col space-y-2 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="0-20k" id="bill-0-20k" />
              <Label htmlFor="bill-0-20k" className="cursor-pointer">₦0–₦20k</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="20k-50k" id="bill-20k-50k" />
              <Label htmlFor="bill-20k-50k" className="cursor-pointer">₦20k–₦50k</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="50k-100k" id="bill-50k-100k" />
              <Label htmlFor="bill-50k-100k" className="cursor-pointer">₦50k–₦100k</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="100k+" id="bill-100k" />
              <Label htmlFor="bill-100k" className="cursor-pointer">₦100k+</Label>
            </div>
          </RadioGroup>
          {errors.monthlyBill && <p className="text-red-500 text-sm mt-1">{errors.monthlyBill}</p>}
        </div>

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
              <div key={index} className="grid grid-cols-12 gap-2 items-center bg-gray-50 p-3 rounded-md">
                <div className="col-span-12 sm:col-span-5">
                  <Label htmlFor={`appliance-name-${index}`} className="sr-only">Appliance Name</Label>
                  <Select
                    value={appliance.name}
                    onValueChange={(value) => handleApplianceChange(index, 'name', value)}
                  >
                    <SelectTrigger id={`appliance-name-${index}`}>
                      <SelectValue placeholder="Select appliance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AC">Air Conditioner (1500W)</SelectItem>
                      <SelectItem value="Fridge">Refrigerator (300W)</SelectItem>
                      <SelectItem value="TV">Television (150W)</SelectItem>
                      <SelectItem value="LED Bulb">LED Bulb (10W)</SelectItem>
                      <SelectItem value="Fan">Fan (80W)</SelectItem>
                      <SelectItem value="Microwave">Microwave (1200W)</SelectItem>
                      <SelectItem value="Water Pump">Water Pump (750W)</SelectItem>
                      <SelectItem value="Computer">Computer (200W)</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-4 sm:col-span-2">
                  <Label htmlFor={`appliance-qty-${index}`} className="sr-only">Quantity</Label>
                  <Input
                    id={`appliance-qty-${index}`}
                    type="number"
                    min="1"
                    placeholder="Qty"
                    value={appliance.quantity || ''}
                    onChange={(e) => handleApplianceChange(index, 'quantity', e.target.value)}
                  />
                </div>
                <div className="col-span-4 sm:col-span-2">
                  <Label htmlFor={`appliance-power-${index}`} className="sr-only">Power (Watts)</Label>
                  <Input
                    id={`appliance-power-${index}`}
                    type="number"
                    min="0"
                    placeholder="Watts"
                    value={appliance.power || ''}
                    onChange={(e) => handleApplianceChange(index, 'power', e.target.value)}
                  />
                </div>
                <div className="col-span-4 sm:col-span-2">
                  <Label htmlFor={`appliance-hours-${index}`} className="sr-only">Hours Used Daily</Label>
                  <Input
                    id={`appliance-hours-${index}`}
                    type="number"
                    min="0"
                    max="24"
                    placeholder="Hours"
                    value={appliance.hoursUsed || ''}
                    onChange={(e) => handleApplianceChange(index, 'hoursUsed', e.target.value)}
                  />
                </div>
                {appliances.length > 1 && (
                  <Button 
                    type="button" 
                    onClick={() => removeAppliance(index)} 
                    variant="ghost" 
                    size="sm"
                    className="col-span-12 sm:col-span-1 text-red-500 hover:text-red-700 hover:bg-red-50 p-2"
                  >
                    Remove
                  </Button>
                )}
              </div>
            ))}
          </div>
          {errors.appliances && <p className="text-red-500 text-sm mt-2">{errors.appliances}</p>}
          <p className="text-sm text-gray-500 mt-2">Tip: 1 AC ≈ 1500W, 1 Fridge ≈ 300W, 1 LED Bulb ≈ 10W</p>
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

export default EnergyConsumption;
