
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, Battery } from "lucide-react";

type BackupRequirementsProps = {
  formData: {
    criticalAppliances: string[];
    backupDuration: string;
    outageFrequency: string;
    otherAppliances: string;
  };
  updateFormData: (data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
};

const BackupRequirements = ({ formData, updateFormData, nextStep, prevStep }: BackupRequirementsProps) => {
  const [criticalAppliances, setCriticalAppliances] = useState<string[]>(formData.criticalAppliances || []);
  const [errors, setErrors] = useState<{
    criticalAppliances?: string;
    backupDuration?: string;
    outageFrequency?: string;
  }>({});

  const handleApplianceChange = (appliance: string) => {
    const newAppliances = criticalAppliances.includes(appliance)
      ? criticalAppliances.filter(a => a !== appliance)
      : [...criticalAppliances, appliance];
    
    setCriticalAppliances(newAppliances);
    updateFormData({ criticalAppliances: newAppliances });
  };

  const validateForm = () => {
    const newErrors: {
      criticalAppliances?: string;
      backupDuration?: string;
      outageFrequency?: string;
    } = {};
    
    if (!criticalAppliances.length) {
      newErrors.criticalAppliances = "Please select at least one critical appliance";
    }
    
    if (!formData.backupDuration) {
      newErrors.backupDuration = "Please select your required backup duration";
    }
    
    if (!formData.outageFrequency) {
      newErrors.outageFrequency = "Please select your grid outage frequency";
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
          <Battery className="h-6 w-6" />
          <span>Backup Requirements</span>
        </h2>
        <p className="text-gray-600">
          98% of customers need backup! Help us understand your power backup needs during outages.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <Label>Critical Appliances During Outages</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
            {[
              { id: "lights", label: "Lights" },
              { id: "fans-ac", label: "Fans/AC" },
              { id: "refrigerator", label: "Refrigerator" },
              { id: "tvs-electronics", label: "TVs/Electronics" },
              { id: "water-pump", label: "Water Pump" },
            ].map((item) => (
              <div key={item.id} className="flex items-center space-x-2 bg-gray-50 p-3 rounded-md">
                <input
                  type="checkbox"
                  id={item.id}
                  checked={criticalAppliances.includes(item.id)}
                  onChange={() => handleApplianceChange(item.id)}
                  className="rounded text-solar-blue focus:ring-solar-blue"
                />
                <Label htmlFor={item.id} className="cursor-pointer">{item.label}</Label>
              </div>
            ))}
            <div className="col-span-2 md:col-span-3 flex items-start space-x-2 bg-gray-50 p-3 rounded-md">
              <input
                type="checkbox"
                id="other"
                checked={criticalAppliances.includes("other")}
                onChange={() => handleApplianceChange("other")}
                className="rounded text-solar-blue focus:ring-solar-blue mt-2"
              />
              <div className="flex-1">
                <Label htmlFor="other" className="cursor-pointer">Other:</Label>
                <Input
                  placeholder="Please specify"
                  value={formData.otherAppliances || ''}
                  onChange={(e) => updateFormData({ otherAppliances: e.target.value })}
                  className="mt-1"
                  disabled={!criticalAppliances.includes("other")}
                />
              </div>
            </div>
          </div>
          {errors.criticalAppliances && <p className="text-red-500 text-sm mt-2">{errors.criticalAppliances}</p>}
        </div>

        <div>
          <Label>Daily Backup Duration Needed</Label>
          <RadioGroup
            value={formData.backupDuration || ''}
            onValueChange={(value) => updateFormData({ backupDuration: value })}
            className="flex flex-col space-y-2 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="4-6" id="backup-4-6" />
              <Label htmlFor="backup-4-6" className="cursor-pointer">4–6 hours</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="6-8" id="backup-6-8" />
              <Label htmlFor="backup-6-8" className="cursor-pointer">6–8 hours</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="8+" id="backup-8" />
              <Label htmlFor="backup-8" className="cursor-pointer">8+ hours</Label>
            </div>
          </RadioGroup>
          {errors.backupDuration && <p className="text-red-500 text-sm mt-1">{errors.backupDuration}</p>}
        </div>

        <div>
          <Label>Grid Outage Frequency</Label>
          <RadioGroup
            value={formData.outageFrequency || ''}
            onValueChange={(value) => updateFormData({ outageFrequency: value })}
            className="flex flex-col space-y-2 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="daily" id="outage-daily" />
              <Label htmlFor="outage-daily" className="cursor-pointer">Daily</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="weekly" id="outage-weekly" />
              <Label htmlFor="outage-weekly" className="cursor-pointer">Weekly</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="unpredictable" id="outage-unpredictable" />
              <Label htmlFor="outage-unpredictable" className="cursor-pointer">Unpredictable</Label>
            </div>
          </RadioGroup>
          {errors.outageFrequency && <p className="text-red-500 text-sm mt-1">{errors.outageFrequency}</p>}
        </div>

        <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
          <h3 className="font-semibold text-solar-blue-dark mb-2">Why Solar Backup?</h3>
          <p className="text-gray-700">
            "With Band A tariffs now over ₦240/kWh (up from ₦99/kWh in 2024), solar + batteries can cut your grid/generator costs by 60–70%."
          </p>
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
        <Button type="submit" className="bg-solar-blue hover:bg-solar-blue-dark">
          <span>Continue</span>
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </form>
  );
};

export default BackupRequirements;
