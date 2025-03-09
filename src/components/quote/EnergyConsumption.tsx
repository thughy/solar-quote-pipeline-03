
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, Zap } from "lucide-react";
import { FormData } from "@/types/quote";
import { GridSupplySection } from "./GridSupplySection";
import { TariffRateSection } from "./TariffRateSection";
import { MonthlyBillSection } from "./MonthlyBillSection";
import { MonthlyUsageSection } from "./MonthlyUsageSection";
import ApplianceListSection from "./ApplianceListSection";

type EnergyConsumptionProps = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
};

const EnergyConsumption = ({ formData, updateFormData, nextStep, prevStep }: EnergyConsumptionProps) => {
  const [errors, setErrors] = useState<{
    gridSupplyHours?: string;
    monthlyBill?: string;
    appliances?: string;
  }>({});

  const validateForm = () => {
    const newErrors: {
      gridSupplyHours?: string;
      monthlyBill?: string;
      appliances?: string;
    } = {};
    
    if (!formData.gridSupplyHours) {
      newErrors.gridSupplyHours = "Please select daily grid supply hours";
    }
    
    if (!formData.monthlyBill) {
      newErrors.monthlyBill = "Please select your monthly bill range";
    }
    
    // Check if at least one appliance has complete information
    const hasCompleteAppliance = formData.appliances.some(app => 
      app.name && app.quantity > 0 && app.power > 0 && app.hoursUsed > 0
    );
    
    if (!hasCompleteAppliance) {
      newErrors.appliances = "Please add at least one appliance with complete information";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      nextStep();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-solar-blue-dark flex items-center gap-2">
          <Zap className="h-6 w-6" />
          <span>Energy Consumption & Tariff Band</span>
        </h2>
        <p className="text-gray-600">
          Help us understand your energy usage and current electricity situation.
        </p>
      </div>

      <div className="space-y-6">
        {/* Grid Supply Hours section */}
        <GridSupplySection 
          formData={formData}
          updateFormData={updateFormData}
          error={errors.gridSupplyHours}
        />

        {/* Tariff Rate section */}
        <TariffRateSection 
          formData={formData}
          updateFormData={updateFormData}
        />

        {/* Monthly Bill section */}
        <MonthlyBillSection 
          formData={formData}
          updateFormData={updateFormData}
          error={errors.monthlyBill}
        />

        {/* Exact Monthly Usage field */}
        <MonthlyUsageSection 
          formData={formData}
          updateFormData={updateFormData}
        />

        {/* Appliance List section */}
        <ApplianceListSection 
          formData={formData}
          updateFormData={updateFormData}
          error={errors.appliances}
        />
      </div>

      <div className="pt-4 flex justify-between">
        <Button 
          type="button" 
          variant="outline" 
          onClick={prevStep}
          className="border-solar-blue text-solar-blue hover:bg-solar-blue/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Previous</span>
        </Button>
        <Button type="submit" className="bg-solar-blue hover:bg-solar-blue-dark">
          <span>Continue</span>
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </form>
  );
};

export default EnergyConsumption;
