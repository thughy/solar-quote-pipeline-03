
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Gavel } from "lucide-react";
import { InstallerFormData } from "@/types/installer";

type TermsSectionProps = {
  formData: InstallerFormData;
  updateFormData: (data: Partial<InstallerFormData>) => void;
  errors: Record<string, string>;
};

export const TermsSection = ({ 
  formData, 
  updateFormData, 
  errors 
}: TermsSectionProps) => {
  return (
    <div className="space-y-4 p-6 bg-gray-50 rounded-lg border border-gray-100">
      <div className="flex items-center gap-2 text-solar-blue-dark">
        <Gavel className="h-5 w-5" />
        <h3 className="text-xl font-semibold">Terms & Conditions</h3>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <Checkbox
            id="confirmMeetsNeeds"
            checked={formData.confirmMeetsNeeds}
            onCheckedChange={(checked) => 
              updateFormData({ confirmMeetsNeeds: checked as boolean })
            }
          />
          <Label htmlFor="confirmMeetsNeeds" className="text-sm">
            I confirm that the quoted system meets the customer's energy needs and backup requirements.
          </Label>
        </div>
        
        <div className="flex items-start space-x-3">
          <Checkbox
            id="agreeToSupport"
            checked={formData.agreeToSupport}
            onCheckedChange={(checked) => 
              updateFormData({ agreeToSupport: checked as boolean })
            }
          />
          <Label htmlFor="agreeToSupport" className="text-sm">
            I agree to provide after-sales support and honor warranty terms.
          </Label>
        </div>
        
        <div className="flex items-start space-x-3">
          <Checkbox
            id="certifyComponents"
            checked={formData.certifyComponents}
            onCheckedChange={(checked) => 
              updateFormData({ certifyComponents: checked as boolean })
            }
          />
          <Label htmlFor="certifyComponents" className="text-sm">
            I certify that all components are genuine and meet industry standards.
          </Label>
        </div>
      </div>
      {errors.terms && <p className="text-red-500 text-sm mt-2">{errors.terms}</p>}
      
      <div className="bg-yellow-50 p-4 rounded-md border border-yellow-100 mt-4">
        <h4 className="font-medium text-yellow-800">Installer Responsibility Notice:</h4>
        <p className="text-sm text-yellow-700 mt-1">
          By submitting this quote, you agree to be fully responsible for the accuracy of the information provided 
          and to honor all quotes and warranties as stated. SolarConnect will provide this quote directly to the customer.
        </p>
      </div>
    </div>
  );
};
