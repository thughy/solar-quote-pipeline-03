
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FormData as CustomerFormData } from "@/types/quote";
import { defaultInstallerFormData, InstallerFormData } from "@/types/installer";
import InstallerForm from "@/components/installer/InstallerForm";
import InstallerThankYou from "@/components/installer/InstallerThankYou";

const InstallerQuote = () => {
  const [formData, setFormData] = useState<InstallerFormData>(defaultInstallerFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // This would typically be passed from the previous page or fetched from an API
  // For now, we'll use dummy customer data
  const customerData: CustomerFormData | null = null;

  const updateFormData = (data: Partial<InstallerFormData>) => {
    setFormData({ ...formData, ...data });
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log("Installer form submitted with data:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-solar-blue">
          Solar Installer Quote Submission
        </h1>
        
        <Card>
          <CardContent className="pt-6">
            {!isSubmitted ? (
              <InstallerForm 
                formData={formData} 
                updateFormData={updateFormData} 
                customerData={customerData}
                handleSubmit={handleSubmit}
              />
            ) : (
              <InstallerThankYou />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InstallerQuote;
