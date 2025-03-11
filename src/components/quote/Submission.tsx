
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import { ArrowLeft, Check, Send, AlertCircle, Calculator, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { FormData } from "@/types/quote";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/lib/utils";

type SubmissionProps = {
  formData: FormData;
  prevStep: () => void;
  resetForm: () => void;
};

// Helper functions for accurate solar calculations
const estimateSystemSize = (formData: FormData): number => {
  // Calculate from appliances
  let dailyConsumption = 0;
  formData.appliances.forEach(app => {
    if (app.name && app.quantity > 0 && app.power > 0 && app.hoursUsed > 0) {
      dailyConsumption += app.quantity * app.power * app.hoursUsed;
    }
  });
  
  // Convert Wh to kWh
  const dailyConsumptionKWh = dailyConsumption / 1000;
  
  // If appliance data isn't sufficient, estimate from monthly bill
  if (dailyConsumptionKWh < 1) {
    if (formData.monthlyBill === '0-20k') {
      dailyConsumptionKWh = 5; // ~150 kWh/month
    } else if (formData.monthlyBill === '20k-50k') {
      dailyConsumptionKWh = 10; // ~300 kWh/month
    } else if (formData.monthlyBill === '50k-100k') {
      dailyConsumptionKWh = 15; // ~450 kWh/month
    } else if (formData.monthlyBill === '100k+') {
      dailyConsumptionKWh = 25; // ~750 kWh/month
    }
  }
  
  // Factor in grid outages
  let reliabilityFactor = 1.0;
  if (formData.gridSupplyHours === '<12') {
    reliabilityFactor = 1.5; // Need more capacity for longer outages
  } else if (formData.gridSupplyHours === '12-18') {
    reliabilityFactor = 1.3;
  } else if (formData.gridSupplyHours === '18-20') {
    reliabilityFactor = 1.1;
  }
  
  // System size with solar irradiance factor for Nigeria (~5.5 sun hours/day)
  // Also factoring in system losses (~20%)
  return Math.ceil((dailyConsumptionKWh * reliabilityFactor) / (5.5 * 0.8));
};

const calculateSystemCost = (systemSizeKW: number, formData: FormData) => {
  // Base cost per kW (Nigeria market rates as of 2023)
  const baseRatePerKW = 400000; // ₦400,000 per kW
  
  // Battery preference impacts cost
  let batteryMultiplier = 1.0;
  if (formData.batteryPreference === 'lithium-ion') {
    batteryMultiplier = 1.3; // Premium for lithium
  } else if (formData.batteryPreference === 'lead-acid') {
    batteryMultiplier = 0.9; // Discount for lead-acid
  }
  
  // Backup requirement impacts cost
  let backupMultiplier = 1.0;
  if (formData.backupNeeded === 'full') {
    backupMultiplier = 1.4; // Premium for full backup
  } else if (formData.backupNeeded === 'partial') {
    backupMultiplier = 1.2; // Premium for partial backup
  } else if (formData.backupNeeded === 'critical') {
    backupMultiplier = 1.1; // Small premium for critical backup
  }
  
  // Inverter efficiency impacts cost
  let inverterMultiplier = 1.0;
  if (formData.inverterEfficiency === '95') {
    inverterMultiplier = 1.1; // Premium for high-efficiency inverter
  }
  
  const totalCost = systemSizeKW * baseRatePerKW * batteryMultiplier * backupMultiplier * inverterMultiplier;
  
  return Math.round(totalCost);
};

const calculateMonthlySavings = (formData: FormData, systemSizeKW: number) => {
  // Estimate current monthly bill
  let monthlyBillAmount = 0;
  if (formData.monthlyBill === '0-20k') {
    monthlyBillAmount = 15000;
  } else if (formData.monthlyBill === '20k-50k') {
    monthlyBillAmount = 35000;
  } else if (formData.monthlyBill === '50k-100k') {
    monthlyBillAmount = 75000;
  } else if (formData.monthlyBill === '100k+') {
    monthlyBillAmount = 125000;
  }
  
  // Average daily production in Nigeria (5.5 sun hours * system size * 0.8 efficiency)
  const dailyProductionKWh = systemSizeKW * 5.5 * 0.8;
  const monthlyProductionKWh = dailyProductionKWh * 30;
  
  // Current tariff (if provided) or estimate based on bill tier
  let tariffRate = parseFloat(formData.tariffRate || '0');
  if (!tariffRate) {
    if (formData.monthlyBill === '0-20k') {
      tariffRate = 85; // Basic tariff
    } else if (formData.monthlyBill === '20k-50k') {
      tariffRate = 100;
    } else if (formData.monthlyBill === '50k-100k') {
      tariffRate = 120;
    } else if (formData.monthlyBill === '100k+') {
      tariffRate = 140; // Premium tariff
    }
  }
  
  // Calculate monthly savings from grid replacement
  const monthlySavingsFromGrid = monthlyProductionKWh * tariffRate;
  
  // Calculate savings from generator displacement (if they have outages)
  let generatorSavings = 0;
  if (formData.gridSupplyHours === '<12') {
    // Heavy generator use - assume ~12 hours/day of generator use at ₦300/kWh
    generatorSavings = (12 * dailyProductionKWh * 0.5) * 30 * 300;
  } else if (formData.gridSupplyHours === '12-18') {
    // Medium generator use - assume ~6 hours/day
    generatorSavings = (6 * dailyProductionKWh * 0.5) * 30 * 300;
  } else if (formData.gridSupplyHours === '18-20') {
    // Light generator use - assume ~4 hours/day
    generatorSavings = (4 * dailyProductionKWh * 0.5) * 30 * 300;
  }
  
  // Total savings
  return Math.round(monthlySavingsFromGrid + generatorSavings);
};

const Submission = ({ formData, prevStep, resetForm }: SubmissionProps) => {
  const [consent, setConsent] = useState<boolean>(false);
  const [shareData, setShareData] = useState<boolean>(false);
  const [timeline, setTimeline] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { toast } = useToast();

  // Calculate system sizing and savings
  const systemSizeKW = estimateSystemSize(formData);
  const systemCost = calculateSystemCost(systemSizeKW, formData);
  const monthlySavings = calculateMonthlySavings(formData, systemSizeKW);
  const annualSavings = monthlySavings * 12;
  const roi = systemCost / annualSavings;
  const totalSavings25Years = annualSavings * 25; // Standard solar panel lifespan
  
  // Calculate CO2 reduction
  // Nigerian grid emissions factor ~0.43 kg CO2/kWh
  const dailyProductionKWh = systemSizeKW * 5.5 * 0.8;
  const annualProductionKWh = dailyProductionKWh * 365;
  const annualCO2Reduction = Math.round(annualProductionKWh * 0.43);

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
      
      setIsSubmitted(true);
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

      {isSubmitted && (
        <Alert className="bg-green-50 border-green-200">
          <AlertCircle className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Quote Request Successfully Submitted!</AlertTitle>
          <AlertDescription className="text-green-700">
            Your request has been sent to our network of verified installers. You'll receive 3 competitive quotes within 48 hours. Meanwhile, our team will review your energy requirements to ensure you get accurate recommendations.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - System specs */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-solar-blue-dark flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Recommended Solar System
            </CardTitle>
            <CardDescription>
              Based on your energy requirements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-sm text-blue-600 font-medium">System Size</div>
                <div className="text-3xl font-bold text-solar-blue-dark">{systemSizeKW} kW</div>
                <div className="text-sm text-blue-600">Solar PV System</div>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-sm text-green-600 font-medium">Battery Capacity</div>
                <div className="text-3xl font-bold text-green-700">{Math.round(systemSizeKW * 1.3 * 10) / 10} kWh</div>
                <div className="text-sm text-green-600">
                  {formData.batteryPreference === 'lithium-ion' ? 'Lithium-Ion' : 'Lead-Acid'}
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="text-sm font-medium mb-1">Daily Production</div>
                <div className="flex items-center">
                  <Progress value={80} className="h-2.5 flex-grow" />
                  <span className="ml-2 text-sm text-gray-600">{(systemSizeKW * 5.5 * 0.8).toFixed(1)} kWh</span>
                </div>
              </div>
              
              <div>
                <div className="text-sm font-medium mb-1">Monthly Production</div>
                <div className="flex items-center">
                  <Progress value={80} className="h-2.5 flex-grow" />
                  <span className="ml-2 text-sm text-gray-600">{Math.round(systemSizeKW * 5.5 * 0.8 * 30)} kWh</span>
                </div>
              </div>
              
              <div>
                <div className="text-sm font-medium mb-1">Backup Coverage</div>
                <div className="flex items-center">
                  <Progress 
                    value={
                      formData.backupNeeded === 'full' ? 100 :
                      formData.backupNeeded === 'partial' ? 60 :
                      formData.backupNeeded === 'critical' ? 30 : 15
                    } 
                    className="h-2.5 flex-grow" 
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    {formData.backupNeeded === 'full' ? 'Full home backup' :
                     formData.backupNeeded === 'partial' ? 'Partial backup' :
                     formData.backupNeeded === 'critical' ? 'Critical loads' : 'Minimal'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <h4 className="font-medium">System Components</h4>
              
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Solar Panels</span>
                <span className="font-medium">{Math.ceil(systemSizeKW / 0.4)} x 400W Panels</span>
              </div>
              
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Inverter</span>
                <span className="font-medium">{Math.ceil(systemSizeKW * 1.1)} kVA Hybrid Inverter</span>
              </div>
              
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Battery</span>
                <span className="font-medium">
                  {Math.round(systemSizeKW * 1.3 * 10) / 10} kWh {formData.batteryPreference === 'lithium-ion' ? 'Lithium' : 'Lead-Acid'}
                </span>
              </div>
              
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Mounting & Balance of System</span>
                <span className="font-medium">Included</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Right column - Economics */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-solar-blue-dark">Financial Benefits</CardTitle>
            <CardDescription>
              Estimated savings and ROI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-sm text-orange-600 font-medium">Estimated Cost</div>
              <div className="text-3xl font-bold text-solar-orange-dark">₦{formatCurrency(systemCost)}</div>
              <div className="text-sm text-orange-600">{formData.financing || 'One-time payment'}</div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg space-y-3">
              <div className="flex justify-between items-center py-1">
                <span className="text-gray-700">Monthly Savings</span>
                <span className="font-bold text-green-700">₦{formatCurrency(monthlySavings)}</span>
              </div>
              
              <div className="flex justify-between items-center py-1">
                <span className="text-gray-700">Annual Savings</span>
                <span className="font-bold text-green-700">₦{formatCurrency(annualSavings)}</span>
              </div>
              
              <div className="flex justify-between items-center py-1">
                <span className="text-gray-700">ROI Period</span>
                <span className="font-bold text-solar-blue-dark">{roi.toFixed(1)} years</span>
              </div>
              
              <div className="flex justify-between items-center py-1">
                <span className="text-gray-700">25-Year Savings</span>
                <span className="font-bold text-green-700">₦{formatCurrency(totalSavings25Years)}</span>
              </div>
              
              <div className="flex justify-between items-center py-1">
                <span className="text-gray-700">CO₂ Reduction</span>
                <span className="font-bold text-green-700">{annualCO2Reduction} kg/year</span>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 mt-2"
              type="button"
            >
              <Download className="h-4 w-4" />
              Download Full Report
            </Button>
          </CardContent>
        </Card>
      </div>

      {!isSubmitted && (
        <>
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
                className="rounded text-primary focus:ring-primary mt-1"
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
                className="rounded text-primary focus:ring-primary mt-1"
              />
              <Label htmlFor="share-data" className="cursor-pointer">
                I consent to SolarConnect sharing my data with verified installers.
              </Label>
            </div>
            
            {error && <p className="text-destructive text-sm">{error}</p>}
          </div>
        </>
      )}

      <div className="pt-4 flex justify-between">
        {!isSubmitted ? (
          <>
            <Button 
              type="button" 
              variant="outline" 
              onClick={prevStep}
              className="border-primary text-primary hover:bg-primary/10"
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
          </>
        ) : (
          <Button 
            type="button" 
            onClick={resetForm}
            className="ml-auto"
          >
            <span>Submit Another Quote</span>
          </Button>
        )}
      </div>
    </form>
  );
};

export default Submission;
