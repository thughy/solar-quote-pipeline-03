
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type StepIndicatorProps = {
  steps: string[];
  currentStep: number;
};

const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="mb-8">
      <div className="hidden sm:flex items-center justify-between relative">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div 
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm relative z-10",
                index < currentStep 
                  ? "bg-solar-blue text-white" 
                  : index === currentStep 
                    ? "bg-solar-blue-dark text-white" 
                    : "bg-gray-200 text-gray-500"
              )}
            >
              {index < currentStep ? <Check className="w-5 h-5" /> : index + 1}
            </div>
            <span 
              className={cn(
                "mt-2 text-sm font-medium",
                index <= currentStep ? "text-solar-blue-dark" : "text-gray-500"
              )}
            >
              {step}
            </span>
          </div>
        ))}
        
        {/* Connecting lines */}
        <div className="absolute top-5 left-0 right-0 h-0.5 -translate-y-1/2 z-0">
          <div className="h-full bg-gray-200"></div>
          <div 
            className="h-full bg-solar-blue absolute top-0 left-0 transition-all duration-300"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Mobile view - current step only */}
      <div className="sm:hidden flex flex-col items-center">
        <div className="bg-solar-blue-dark text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm mb-2">
          {currentStep + 1}
        </div>
        <span className="text-solar-blue-dark font-medium">{steps[currentStep]}</span>
        <span className="text-gray-500 text-sm mt-1">Step {currentStep + 1} of {steps.length}</span>
      </div>
    </div>
  );
};

export default StepIndicator;
