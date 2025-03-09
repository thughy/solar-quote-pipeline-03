
import { Appliance } from "@/types/quote";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type ApplianceItemProps = {
  appliance: Appliance;
  index: number;
  onRemove: (index: number) => void;
  onChange: (index: number, field: keyof Appliance, value: string | number) => void;
  canRemove: boolean;
};

export const ApplianceItem = ({ 
  appliance, 
  index, 
  onRemove, 
  onChange, 
  canRemove 
}: ApplianceItemProps) => {
  return (
    <div className="grid grid-cols-12 gap-2 items-center bg-gray-50 p-3 rounded-md">
      <div className="col-span-12 sm:col-span-3">
        <Label htmlFor={`appliance-name-${index}`} className="sr-only">Appliance Name</Label>
        <Select
          value={appliance.name}
          onValueChange={(value) => onChange(index, 'name', value)}
        >
          <SelectTrigger id={`appliance-name-${index}`}>
            <SelectValue placeholder="Select appliance" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="AC_1HP">Air Conditioner (1HP - 900W)</SelectItem>
            <SelectItem value="AC_1.5HP">Air Conditioner (1.5HP - 1119W)</SelectItem>
            <SelectItem value="AC_2HP">Air Conditioner (2-2.5HP - 1700W)</SelectItem>
            <SelectItem value="AC_3HP">Air Conditioner (3HP+ - 2700W)</SelectItem>
            <SelectItem value="Air_Fryer">Air Fryer (2000W)</SelectItem>
            <SelectItem value="Blender">Blender (600W)</SelectItem>
            <SelectItem value="Fan_Ceiling">Fan - Ceiling (85W)</SelectItem>
            <SelectItem value="Fan_Standing">Fan - Standing (70W)</SelectItem>
            <SelectItem value="Fan_Standing_Large">Standing Fan (130W)</SelectItem>
            <SelectItem value="Deep_Freezer">Deep Freezer (100W)</SelectItem>
            <SelectItem value="Computer">Desktop Computer (200W)</SelectItem>
            <SelectItem value="Monitor">Desktop Monitor (60W)</SelectItem>
            <SelectItem value="Fridge">Fridge (100W)</SelectItem>
            <SelectItem value="Fridge_Energy">Fridge - Energy Saving (60W)</SelectItem>
            <SelectItem value="Fridge_Mini">Fridge - Mini (80W)</SelectItem>
            <SelectItem value="Game_Console">Game Console (250W)</SelectItem>
            <SelectItem value="Hair_Dryer">Hair Dryer/Straightener (2000W)</SelectItem>
            <SelectItem value="Kettle">Kettle (2000W)</SelectItem>
            <SelectItem value="Laptop">Laptop Charging (65W)</SelectItem>
            <SelectItem value="LED_TV">LED TV (100W)</SelectItem>
            <SelectItem value="TV">Non-LED TV (300W)</SelectItem>
            <SelectItem value="Lightbulb">Lightbulb (60W)</SelectItem>
            <SelectItem value="Lightbulb_Energy">Lightbulb - Energy Saving (15W)</SelectItem>
            <SelectItem value="Microwave">Microwave (1400W)</SelectItem>
            <SelectItem value="Phone">Phone Charging (10W)</SelectItem>
            <SelectItem value="POS">POS System (35W)</SelectItem>
            <SelectItem value="Iron">Pressing Iron (1200W)</SelectItem>
            <SelectItem value="Printer_Large">Printer - Large (500W)</SelectItem>
            <SelectItem value="Printer_Small">Printer - Small (300W)</SelectItem>
            <SelectItem value="Projector">Projector (150W)</SelectItem>
            <SelectItem value="Speaker_Commercial">Speaker - Commercial (200W)</SelectItem>
            <SelectItem value="Speaker_Home">Speaker - Residential (50W)</SelectItem>
            <SelectItem value="Toaster">Toaster (1400W)</SelectItem>
            <SelectItem value="Washing_Machine">Washing and Drying Machine (2100W)</SelectItem>
            <SelectItem value="CCTV">CCTV Camera (300W)</SelectItem>
            <SelectItem value="Packaging_Machine">Automatic Packaging Machine (380W)</SelectItem>
            <SelectItem value="Water_Dispenser">Water Dispenser (1000W)</SelectItem>
            <SelectItem value="Fuel_Pump">Fuel Pump (750W)</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="col-span-3 sm:col-span-1">
        <Label htmlFor={`appliance-qty-${index}`} className="sr-only">Quantity</Label>
        <Input
          id={`appliance-qty-${index}`}
          type="number"
          min="1"
          placeholder="Qty"
          value={appliance.quantity || ''}
          onChange={(e) => onChange(index, 'quantity', e.target.value)}
        />
      </div>
      <div className="col-span-3 sm:col-span-2">
        <Label htmlFor={`appliance-power-${index}`} className="sr-only">Power (Watts)</Label>
        <Input
          id={`appliance-power-${index}`}
          type="number"
          min="0"
          placeholder="Watts"
          value={appliance.power || ''}
          onChange={(e) => onChange(index, 'power', e.target.value)}
          className={appliance.name && appliance.name !== 'Other' ? "bg-gray-100" : ""}
          readOnly={!!appliance.name && appliance.name !== 'Other'}
        />
      </div>
      <div className="col-span-3 sm:col-span-2">
        <Label htmlFor={`appliance-peakPower-${index}`} className="sr-only">Peak Power</Label>
        <Input
          id={`appliance-peakPower-${index}`}
          type="number"
          min="0"
          placeholder="Peak W"
          value={appliance.peakPower || ''}
          onChange={(e) => onChange(index, 'peakPower', e.target.value)}
          className={appliance.name && appliance.name !== 'Other' ? "bg-gray-100" : ""}
          readOnly={!!appliance.name && appliance.name !== 'Other'}
        />
      </div>
      <div className="col-span-3 sm:col-span-1">
        <Label htmlFor={`appliance-hours-${index}`} className="sr-only">Hours Used Daily</Label>
        <Input
          id={`appliance-hours-${index}`}
          type="number"
          min="0"
          max="24"
          placeholder="Hours"
          value={appliance.hoursUsed || ''}
          onChange={(e) => onChange(index, 'hoursUsed', e.target.value)}
        />
      </div>
      <div className="col-span-6 sm:col-span-2">
        <Label htmlFor={`appliance-usage-${index}`} className="sr-only">Usage Timing</Label>
        <Select
          value={appliance.usageTiming || ''}
          onValueChange={(value) => onChange(index, 'usageTiming', value)}
        >
          <SelectTrigger id={`appliance-usage-${index}`}>
            <SelectValue placeholder="Usage time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Daytime</SelectItem>
            <SelectItem value="night">Nighttime</SelectItem>
            <SelectItem value="both">Both</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {canRemove && (
        <Button 
          type="button" 
          onClick={() => onRemove(index)} 
          variant="ghost" 
          size="sm"
          className="col-span-12 sm:col-span-1 text-red-500 hover:text-red-700 hover:bg-red-50 p-2"
        >
          Remove
        </Button>
      )}
    </div>
  );
};
