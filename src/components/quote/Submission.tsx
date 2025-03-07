
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import { ArrowLeft, Check, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

type SubmissionProps = {
  formData: any;
  prevStep: () => void;
  resetForm: () => void;
};

const Submission = ({ formData, prevStep, resetForm }: SubmissionProps) => {
  const [consent, setConsent] = useState<boolean>(false);
  const [shareData, setShareData] = useState<boolean>(false);
  const [timeline, setTimeline] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { toast } = useToast();

  // Calculate savings (simplified for demo)
  const calculateSavings = () => {
    let monthlySavings = 0;
    let estimatedCost = 0;
    
    // Basic estimation based on form data
    if (formData.monthlyBill === '0-20k') {
      monthlySavings = 12000;
      estimatedCost = 800000;
    } else if (formData.monthlyBill === '20k-50k') {
      monthlySavings = 30000;
      estimatedCost = 1500000;
    } else if (formData.monthlyBill === '50k-100k') {
      monthlySavings = 60000;
      estimatedCost = 2500000;
    } else if (formData.monthlyBill === '100k+') {
      monthlySavings = 90000;
      estimatedCost = 3500000;
    }
    
    // Adjust based on grid supply hours
    if (formData.gridSupplyHours === '20+') {
      monthlySavings *= 1.2; // Higher savings with higher tariff
    } else if (formData.gridSupplyHours === '<12') {
      monthlySavings *= 0.8; // Lower savings with lower grid availability
    }
    
    const roi = estimatedCost / (monthlySavings * 12);
    
    return {
      monthlySavings,
      estimatedCost,
      roi: parseFloat(roi.toFixed(1))
    };
  };

  const { monthlySavings, estimatedCost, roi } = calculateSavings();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!consent || !shareData) {
      setError("Please agree to both consent statements to proceed");
      return;
    }
    
    setError("");
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", { ...formData, timeline, consent, shareData });
      
      toast({
        title: "Quote Request Submitted!",
        description: "You'll receive 3 competitive quotes within 48 hours.",
      });
      
      resetForm();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-solar-blue-dark flex items-center gap-2">
          <Check className="h-6 w-6" />
          <span>Review & Submit</span>
        </h2>
        <p className="text-gray-600">
          Review your information and submit your request for solar quotes.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h3 className="text-xl font-semibold text-solar-blue-dark mb-4">Savings Calculator</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="text-gray-700">Estimated Monthly Grid Cost:</span>
              <span className="font-semibold text-solar-blue-dark">₦{formData.monthlyBill === '0-20k' ? '20,000' : 
                                                                    formData.monthlyBill === '20k-50k' ? '50,000' : 
                                                                    formData.monthlyBill === '50k-100k' ? '100,000' : 
                                                                    '150,000'}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="text-gray-700">Projected Solar Savings:</span>
              <span className="font-semibold text-green-600">₦{monthlySavings.toLocaleString()}/month</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="text-gray-700">ROI Period:</span>
              <span className="font-semibold text-solar-blue-dark">{roi} years</span>
            </div>
            
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700">Estimated System Cost:</span>
              <span className="font-semibold text-solar-blue-dark">₦{estimatedCost.toLocaleString()}</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Note: Final quotes may vary based on installer assessment and exact system specifications.
          </p>
        </div>

        <div>
          <Label htmlFor="timeline">Preferred Installation Timeline</Label>
          <Input
            id="timeline"
            placeholder="e.g., Within 1 month, As soon as possible, etc."
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="mt-1"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="rounded text-solar-blue focus:ring-solar-blue mt-1"
            />
            <Label htmlFor="consent" className="cursor-pointer">
              I agree to a follow-up call/onsite visit for final assessment.
            </Label>
          </div>
          
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="share-data"
              checked={shareData}
              onChange={(e) => setShareData(e.target.checked)}
              className="rounded text-solar-blue focus:ring-solar-blue mt-1"
            />
            <Label htmlFor="share-data" className="cursor-pointer">
              I consent to SolarConnect sharing my data with verified installers.
            </Label>
          </div>
          
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
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
              <span>Submit Quote Request</span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default Submission;
