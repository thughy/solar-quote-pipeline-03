
import { FormData } from "@/types/quote";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type MonthlyBillSectionProps = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  error?: string;
};

export const MonthlyBillSection = ({ 
  formData, 
  updateFormData, 
  error 
}: MonthlyBillSectionProps) => {
  return (
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
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
