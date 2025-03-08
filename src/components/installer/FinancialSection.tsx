
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Banknote } from "lucide-react";
import { InstallerFormData } from "@/types/installer";

type FinancialSectionProps = {
  formData: InstallerFormData;
  updateFormData: (data: Partial<InstallerFormData>) => void;
  errors: Record<string, string>;
};

export const FinancialSection = ({ 
  formData, 
  updateFormData, 
  errors 
}: FinancialSectionProps) => {
  return (
    <div className="space-y-4 p-6 bg-gray-50 rounded-lg border border-gray-100">
      <div className="flex items-center gap-2 text-solar-blue-dark">
        <Banknote className="h-5 w-5" />
        <h3 className="text-xl font-semibold">Financial Breakdown</h3>
      </div>
      
      <div>
        <Label>Payment Options</Label>
        <RadioGroup
          value={formData.paymentOption}
          onValueChange={(value) => updateFormData({ paymentOption: value })}
          className="flex flex-col space-y-2 mt-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Full Payment" id="payment-full" />
            <Label htmlFor="payment-full">Full Payment with Discount</Label>
            {formData.paymentOption === "Full Payment" && (
              <div className="ml-4">
                <Input
                  placeholder="Discount Amount (₦)"
                  value={formData.discountAmount}
                  onChange={(e) => updateFormData({ discountAmount: e.target.value })}
                  className="w-40"
                />
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Installment Plan" id="payment-installment" />
            <Label htmlFor="payment-installment">Installment Plan</Label>
            {formData.paymentOption === "Installment Plan" && (
              <div className="ml-4 flex gap-2">
                <Input
                  placeholder="Duration (months)"
                  value={formData.installmentDuration}
                  onChange={(e) => updateFormData({ installmentDuration: e.target.value })}
                  className="w-40"
                />
                <Input
                  placeholder="Interest Rate (%)"
                  value={formData.installmentInterest}
                  onChange={(e) => updateFormData({ installmentInterest: e.target.value })}
                  className="w-40"
                />
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Bank Financing" id="payment-bank" />
            <Label htmlFor="payment-bank">Bank Financing</Label>
            {formData.paymentOption === "Bank Financing" && (
              <div className="ml-4">
                <Input
                  placeholder="Partner Bank"
                  value={formData.bankPartner}
                  onChange={(e) => updateFormData({ bankPartner: e.target.value })}
                  className="w-40"
                />
              </div>
            )}
          </div>
        </RadioGroup>
        {errors.paymentOption && <p className="text-red-500 text-sm mt-1">{errors.paymentOption}</p>}
      </div>
      
      <div className="mt-4">
        <Label>Warranty Details</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div>
            <Label htmlFor="warrantyPanels" className="text-sm">Solar Panels (years)</Label>
            <Input
              id="warrantyPanels"
              value={formData.warrantyPanels}
              onChange={(e) => updateFormData({ warrantyPanels: e.target.value })}
              placeholder="e.g., 25"
            />
          </div>
          
          <div>
            <Label htmlFor="warrantyBatteries" className="text-sm">Batteries (years)</Label>
            <Input
              id="warrantyBatteries"
              value={formData.warrantyBatteries}
              onChange={(e) => updateFormData({ warrantyBatteries: e.target.value })}
              placeholder="e.g., 10"
            />
          </div>
          
          <div>
            <Label htmlFor="warrantyInverter" className="text-sm">Inverter (years)</Label>
            <Input
              id="warrantyInverter"
              value={formData.warrantyInverter}
              onChange={(e) => updateFormData({ warrantyInverter: e.target.value })}
              placeholder="e.g., 5"
            />
          </div>
          
          <div>
            <Label htmlFor="warrantyWorkmanship" className="text-sm">Workmanship (years)</Label>
            <Input
              id="warrantyWorkmanship"
              value={formData.warrantyWorkmanship}
              onChange={(e) => updateFormData({ warrantyWorkmanship: e.target.value })}
              placeholder="e.g., 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
