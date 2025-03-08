
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User } from "lucide-react";
import { InstallerFormData } from "@/types/installer";

type CustomerSectionProps = {
  formData: InstallerFormData;
  updateFormData: (data: Partial<InstallerFormData>) => void;
  errors: Record<string, string>;
};

export const CustomerSection = ({ 
  formData, 
  updateFormData, 
  errors 
}: CustomerSectionProps) => {
  return (
    <div className="space-y-4 p-6 bg-gray-50 rounded-lg border border-gray-100">
      <div className="flex items-center gap-2 text-solar-blue-dark">
        <User className="h-5 w-5" />
        <h3 className="text-xl font-semibold">Customer Information</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="customerName">Customer Name</Label>
          <Input
            id="customerName"
            value={formData.customerName}
            onChange={(e) => updateFormData({ customerName: e.target.value })}
            className={errors.customerName ? "border-red-500" : ""}
          />
          {errors.customerName && <p className="text-red-500 text-sm mt-1">{errors.customerName}</p>}
        </div>
        
        <div>
          <Label htmlFor="customerEmail">Customer Email</Label>
          <Input
            id="customerEmail"
            type="email"
            value={formData.customerEmail}
            onChange={(e) => updateFormData({ customerEmail: e.target.value })}
            className={errors.customerEmail ? "border-red-500" : ""}
          />
          {errors.customerEmail && <p className="text-red-500 text-sm mt-1">{errors.customerEmail}</p>}
        </div>
        
        <div>
          <Label htmlFor="customerPhone">Customer Phone</Label>
          <Input
            id="customerPhone"
            value={formData.customerPhone}
            onChange={(e) => updateFormData({ customerPhone: e.target.value })}
          />
        </div>
        
        <div>
          <Label htmlFor="customerLocation">Location</Label>
          <Input
            id="customerLocation"
            value={formData.customerLocation}
            onChange={(e) => updateFormData({ customerLocation: e.target.value })}
          />
        </div>
        
        <div className="md:col-span-2">
          <Label>Property Type</Label>
          <RadioGroup
            value={formData.propertyType}
            onValueChange={(value) => updateFormData({ propertyType: value })}
            className="flex gap-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Residential" id="property-residential" />
              <Label htmlFor="property-residential">Residential</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Commercial" id="property-commercial" />
              <Label htmlFor="property-commercial">Commercial</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};
