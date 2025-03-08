
import { FormData } from "@/types/quote";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type GridSupplySectionProps = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  error?: string;
};

export const GridSupplySection = ({ 
  formData, 
  updateFormData, 
  error 
}: GridSupplySectionProps) => {
  return (
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
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
