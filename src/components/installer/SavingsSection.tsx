
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PiggyBank } from "lucide-react";
import { InstallerFormData } from "@/types/installer";

type SavingsSectionProps = {
  formData: InstallerFormData;
  updateFormData: (data: Partial<InstallerFormData>) => void;
  errors: Record<string, string>;
};

export const SavingsSection = ({ 
  formData, 
  updateFormData, 
  errors 
}: SavingsSectionProps) => {
  return (
    <div className="space-y-4 p-6 bg-gray-50 rounded-lg border border-gray-100">
      <div className="flex items-center gap-2 text-solar-blue-dark">
        <PiggyBank className="h-5 w-5" />
        <h3 className="text-xl font-semibold">Savings & ROI Projections</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="monthlyGridSavings">Monthly Grid Savings (₦)</Label>
          <Input
            id="monthlyGridSavings"
            value={formData.monthlyGridSavings}
            onChange={(e) => updateFormData({ monthlyGridSavings: e.target.value })}
            placeholder="e.g., 50,000"
          />
        </div>
        
        <div>
          <Label htmlFor="monthlyFuelSavings">Monthly Fuel Savings (₦)</Label>
          <Input
            id="monthlyFuelSavings"
            value={formData.monthlyFuelSavings}
            onChange={(e) => updateFormData({ monthlyFuelSavings: e.target.value })}
            placeholder="e.g., 25,000"
          />
        </div>
        
        <div>
          <Label htmlFor="roiPeriod">ROI Period (years)</Label>
          <Input
            id="roiPeriod"
            value={formData.roiPeriod}
            onChange={(e) => updateFormData({ roiPeriod: e.target.value })}
            placeholder="e.g., 3.5"
          />
        </div>
      </div>
      
      <div className="mt-2 bg-blue-50 p-4 rounded-md border border-blue-100">
        <h4 className="font-medium text-solar-blue-dark">ROI Calculation Guide:</h4>
        <p className="text-sm text-gray-600 mt-1">
          Consider recent tariff hikes (₦99/kWh → ₦240/kWh for Band A) and rising fuel costs when calculating savings. 
          Typical ROI periods range from 3-5 years.
        </p>
      </div>
    </div>
  );
};
