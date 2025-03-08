
import { FormData } from "@/types/quote";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type TariffRateSectionProps = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
};

export const TariffRateSection = ({ 
  formData, 
  updateFormData 
}: TariffRateSectionProps) => {
  return (
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
  );
};
