
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import StepIndicator from "@/components/quote/StepIndicator";
import CustomerDetails from "@/components/quote/CustomerDetails";
import EnergyConsumption from "@/components/quote/EnergyConsumption";
import BackupRequirements from "@/components/quote/BackupRequirements";
import SystemPreferences from "@/components/quote/SystemPreferences";
import SiteDetails from "@/components/quote/SiteDetails";
import Submission from "@/components/quote/Submission";
import ThankYou from "@/components/quote/ThankYou";
import { FormData, defaultFormData } from "@/types/quote";

const Quote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const updateFormData = (step: number, data: Partial<FormData>) => {
    setFormData({ ...formData, ...data });
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log("Form submitted with data:", formData);
    setIsSubmitted(true);
    setCurrentStep(7); // Move to Thank You step
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-solar-blue">
          Solar Quote Request
        </h1>
        
        <StepIndicator currentStep={currentStep} />
        
        <Card className="mt-8">
          <CardContent className="pt-6">
            {!isSubmitted ? (
              <>
                {currentStep === 1 && (
                  <CustomerDetails 
                    formData={formData} 
                    updateFormData={(data) => updateFormData(1, data)} 
                    nextStep={nextStep} 
                  />
                )}
                
                {currentStep === 2 && (
                  <EnergyConsumption 
                    formData={formData} 
                    updateFormData={(data) => updateFormData(2, data)} 
                    nextStep={nextStep} 
                    prevStep={prevStep} 
                  />
                )}
                
                {currentStep === 3 && (
                  <BackupRequirements 
                    formData={formData} 
                    updateFormData={(data) => updateFormData(3, data)} 
                    nextStep={nextStep} 
                    prevStep={prevStep} 
                  />
                )}
                
                {currentStep === 4 && (
                  <SystemPreferences 
                    formData={formData} 
                    updateFormData={(data) => updateFormData(4, data)} 
                    nextStep={nextStep} 
                    prevStep={prevStep} 
                  />
                )}
                
                {currentStep === 5 && (
                  <SiteDetails 
                    formData={formData} 
                    updateFormData={(data) => updateFormData(5, data)} 
                    nextStep={nextStep} 
                    prevStep={prevStep} 
                  />
                )}
                
                {currentStep === 6 && (
                  <Submission 
                    formData={formData} 
                    updateFormData={(data) => updateFormData(6, data)} 
                    prevStep={prevStep} 
                    handleSubmit={handleSubmit}
                  />
                )}
              </>
            ) : (
              <ThankYou />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quote;
