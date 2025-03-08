
import { FormData } from "@/types/quote";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type MonthlyUsageSectionProps = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
};

export const MonthlyUsageSection = ({ 
  formData, 
  updateFormData 
}: MonthlyUsageSectionProps) => {
  return (
    <div>
      <Label htmlFor="exactMonthlyUsage">Exact Monthly kWh Usage (if known)</Label>
      <div className="flex gap-2 items-center mt-1">
        <Input
          id="exactMonthlyUsage"
          placeholder="e.g., 450"
          value={formData.exactMonthlyUsage || ''}
          onChange={(e) => updateFormData({ exactMonthlyUsage: e.target.value })}
        />
        <span className="text-gray-500">kWh</span>
      </div>
      <p className="text-xs text-gray-500 mt-1">Optional: Leave blank if unknown</p>
    </div>
  );
};
