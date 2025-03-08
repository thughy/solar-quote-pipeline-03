
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Sun, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InstallerFormData, Component } from "@/types/installer";
import { useState, useEffect } from "react";

type SystemDesignSectionProps = {
  formData: InstallerFormData;
  updateFormData: (data: Partial<InstallerFormData>) => void;
  errors: Record<string, string>;
};

export const SystemDesignSection = ({ 
  formData, 
  updateFormData, 
  errors 
}: SystemDesignSectionProps) => {
  const [components, setComponents] = useState<Component[]>(formData.components);

  useEffect(() => {
    // Update the formData whenever components change
    // Ensure we pass totalSystemCost as a number, not a string
    const totalCost = calculateTotalCost();
    updateFormData({ 
      components, 
      totalSystemCost: totalCost 
    });
  }, [components, updateFormData]);

  const handleComponentChange = (index: number, field: keyof Component, value: string | number) => {
    const updatedComponents = [...components];
    
    if (field === 'quantity' || field === 'unitPrice') {
      const numValue = Number(value) || 0;
      updatedComponents[index][field] = numValue;
      
      // Recalculate total price for this component
      updatedComponents[index].totalPrice = 
        updatedComponents[index].quantity * updatedComponents[index].unitPrice;
    } else {
      // Handle string fields (type, brandModel)
      updatedComponents[index][field] = value as string;
    }
    
    setComponents(updatedComponents);
  };

  const calculateTotalCost = (): number => {
    return components.reduce((total, component) => total + component.totalPrice, 0);
  };

  return (
    <div className="space-y-4 p-6 bg-gray-50 rounded-lg border border-gray-100">
      <div className="flex items-center gap-2 text-solar-blue-dark">
        <Sun className="h-5 w-5" />
        <h3 className="text-xl font-semibold">System Design Details</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="solarArraySize">Solar Array Size (kW)</Label>
          <Input
            id="solarArraySize"
            value={formData.solarArraySize}
            onChange={(e) => updateFormData({ solarArraySize: e.target.value })}
            placeholder="e.g., 5"
            className={errors.solarArraySize ? "border-red-500" : ""}
          />
          {errors.solarArraySize && <p className="text-red-500 text-sm mt-1">{errors.solarArraySize}</p>}
        </div>
        
        <div>
          <Label htmlFor="batteryCapacity">Battery Capacity (kWh)</Label>
          <Input
            id="batteryCapacity"
            value={formData.batteryCapacity}
            onChange={(e) => updateFormData({ batteryCapacity: e.target.value })}
            placeholder="e.g., 10"
            className={errors.batteryCapacity ? "border-red-500" : ""}
          />
          {errors.batteryCapacity && <p className="text-red-500 text-sm mt-1">{errors.batteryCapacity}</p>}
        </div>
        
        <div>
          <Label htmlFor="inverterCapacity">Inverter Capacity (kW)</Label>
          <Input
            id="inverterCapacity"
            value={formData.inverterCapacity}
            onChange={(e) => updateFormData({ inverterCapacity: e.target.value })}
            placeholder="e.g., 5"
            className={errors.inverterCapacity ? "border-red-500" : ""}
          />
          {errors.inverterCapacity && <p className="text-red-500 text-sm mt-1">{errors.inverterCapacity}</p>}
        </div>
      </div>
      
      <div className="mt-4">
        <Label>System Type</Label>
        <RadioGroup
          value={formData.systemType}
          onValueChange={(value) => updateFormData({ systemType: value })}
          className="flex flex-col md:flex-row gap-4 mt-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Grid-Tied" id="system-grid-tied" />
            <Label htmlFor="system-grid-tied">Grid-Tied</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Hybrid" id="system-hybrid" />
            <Label htmlFor="system-hybrid">Hybrid (Solar + Battery + Grid)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Off-Grid" id="system-off-grid" />
            <Label htmlFor="system-off-grid">Off-Grid</Label>
          </div>
        </RadioGroup>
        {errors.systemType && <p className="text-red-500 text-sm mt-1">{errors.systemType}</p>}
      </div>
      
      <div className="mt-6">
        <div className="flex justify-between items-center mb-3">
          <Label>Components Breakdown</Label>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Component</th>
                <th className="px-4 py-2 text-left">Brand/Model</th>
                <th className="px-4 py-2 text-left">Quantity</th>
                <th className="px-4 py-2 text-left">Unit Price (₦)</th>
                <th className="px-4 py-2 text-left">Total Price (₦)</th>
              </tr>
            </thead>
            <tbody>
              {components.map((component, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="px-4 py-2">{component.type}</td>
                  <td className="px-4 py-2">
                    <Input
                      value={component.brandModel}
                      onChange={(e) => handleComponentChange(index, 'brandModel', e.target.value)}
                      placeholder="Brand/Model"
                      className="w-full"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <Input
                      type="number"
                      value={component.quantity || ''}
                      onChange={(e) => handleComponentChange(index, 'quantity', e.target.value)}
                      min="0"
                      className="w-20"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <Input
                      type="number"
                      value={component.unitPrice || ''}
                      onChange={(e) => handleComponentChange(index, 'unitPrice', e.target.value)}
                      min="0"
                      className="w-32"
                    />
                  </td>
                  <td className="px-4 py-2">
                    ₦{component.totalPrice.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50 font-semibold">
                <td colSpan={4} className="px-4 py-2 text-right">Total System Cost:</td>
                <td className="px-4 py-2">₦{calculateTotalCost().toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        {errors.components && <p className="text-red-500 text-sm mt-1">{errors.components}</p>}
      </div>
    </div>
  );
};
