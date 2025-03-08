
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarClock } from "lucide-react";
import { InstallerFormData } from "@/types/installer";

type TimelineSectionProps = {
  formData: InstallerFormData;
  updateFormData: (data: Partial<InstallerFormData>) => void;
  errors: Record<string, string>;
};

export const TimelineSection = ({ 
  formData, 
  updateFormData, 
  errors 
}: TimelineSectionProps) => {
  return (
    <div className="space-y-4 p-6 bg-gray-50 rounded-lg border border-gray-100">
      <div className="flex items-center gap-2 text-solar-blue-dark">
        <CalendarClock className="h-5 w-5" />
        <h3 className="text-xl font-semibold">Installation Timeline</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="startDate">Proposed Start Date</Label>
          <Input
            id="startDate"
            type="date"
            value={formData.startDate}
            onChange={(e) => updateFormData({ startDate: e.target.value })}
          />
        </div>
        
        <div>
          <Label htmlFor="completionDate">Estimated Completion Date</Label>
          <Input
            id="completionDate"
            type="date"
            value={formData.completionDate}
            onChange={(e) => updateFormData({ completionDate: e.target.value })}
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="additionalNotes">Additional Notes</Label>
        <Textarea
          id="additionalNotes"
          value={formData.additionalNotes}
          onChange={(e) => updateFormData({ additionalNotes: e.target.value })}
          placeholder="Weather considerations, customizations, potential delays, etc."
          className="mt-1 h-24"
        />
      </div>
    </div>
  );
};
