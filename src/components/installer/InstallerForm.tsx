
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { InstallerFormData } from "@/types/installer";
import { FormData as CustomerFormData } from "@/types/quote";
import { CustomerSection } from "./CustomerSection";
import { SystemDesignSection } from "./SystemDesignSection";
import { FinancialSection } from "./FinancialSection";
import { SavingsSection } from "./SavingsSection";
import { TimelineSection } from "./TimelineSection";
import { InstallerDetailsSection } from "./InstallerDetailsSection";
import { TermsSection } from "./TermsSection";

type InstallerFormProps = {
  formData: InstallerFormData;
  updateFormData: (data: Partial<InstallerFormData>) => void;
  customerData: CustomerFormData | null;
  handleSubmit: () => void;
};

const InstallerForm = ({ 
  formData, 
  updateFormData, 
  customerData, 
  handleSubmit 
}: InstallerFormProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Basic validation for required fields
    if (!formData.customerName) newErrors.customerName = "Customer name is required";
    if (!formData.customerEmail) newErrors.customerEmail = "Customer email is required";
    if (!formData.solarArraySize) newErrors.solarArraySize = "Solar array size is required";
    if (!formData.batteryCapacity) newErrors.batteryCapacity = "Battery capacity is required";
    if (!formData.inverterCapacity) newErrors.inverterCapacity = "Inverter capacity is required";
    if (!formData.systemType) newErrors.systemType = "System type is required";
    if (!formData.paymentOption) newErrors.paymentOption = "Payment option is required";
    if (!formData.companyName) newErrors.companyName = "Company name is required";
    if (!formData.installerEmail) newErrors.installerEmail = "Installer email is required";
    
    // Component validation
    const invalidComponents = formData.components.some(comp => 
      comp.type && (!comp.brandModel || comp.quantity <= 0 || comp.unitPrice <= 0)
    );
    
    if (invalidComponents) {
      newErrors.components = "Please complete all component details or remove empty ones";
    }
    
    // Terms validation
    if (!formData.confirmMeetsNeeds || !formData.agreeToSupport || !formData.certifyComponents) {
      newErrors.terms = "You must agree to all terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call delay
      setTimeout(() => {
        handleSubmit();
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-solar-blue-dark">
          Installer Quote Submission Form
        </h2>
        <p className="text-gray-600">
          Please provide detailed information about your solar installation quote
        </p>
      </div>

      {/* Customer Information Section */}
      <CustomerSection 
        formData={formData} 
        updateFormData={updateFormData} 
        errors={errors} 
      />

      {/* System Design Section */}
      <SystemDesignSection 
        formData={formData} 
        updateFormData={updateFormData} 
        errors={errors} 
      />

      {/* Financial Breakdown Section */}
      <FinancialSection 
        formData={formData} 
        updateFormData={updateFormData} 
        errors={errors} 
      />

      {/* Savings & ROI Section */}
      <SavingsSection 
        formData={formData} 
        updateFormData={updateFormData} 
        errors={errors} 
      />

      {/* Installation Timeline Section */}
      <TimelineSection 
        formData={formData} 
        updateFormData={updateFormData} 
        errors={errors} 
      />

      {/* Installer Details Section */}
      <InstallerDetailsSection 
        formData={formData} 
        updateFormData={updateFormData} 
        errors={errors} 
      />

      {/* Terms & Conditions Section */}
      <TermsSection 
        formData={formData} 
        updateFormData={updateFormData} 
        errors={errors} 
      />

      <div className="pt-4 flex justify-end">
        <Button 
          type="submit" 
          className="bg-solar-orange hover:bg-solar-orange-dark"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span>Submitting...</span>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              <span>Submit Quote</span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default InstallerForm;
