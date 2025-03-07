
export type Appliance = {
  name: string;
  quantity: number;
  power: number;
  hoursUsed: number;
  usageTiming?: string; // Added for day/night usage tracking
  peakPower?: number; // Added for motor-driven appliances
};

export type FormData = {
  // Customer Details
  fullName: string;
  email: string;
  phone: string;
  state: string; 
  propertyType: string;
  energySources: string[];
  generatorCapacity?: string;
  generatorFuelCost?: string;
  existingSolarSystem?: string;
  
  // Energy Consumption
  gridSupplyHours: string;
  tariffRate: string;
  monthlyBill: string;
  appliances: Appliance[];
  exactMonthlyUsage?: string; // Added for exact kWh usage if known
  
  // Backup Requirements
  criticalAppliances: string[];
  otherCriticalAppliance?: string;
  otherAppliances: string;
  backupDuration: string;
  outageFrequency: string;
  
  // System Preferences
  budgetRange: string;
  batteryPreference: string;
  financing: string;
  aestheticNeeds: string[];
  
  // Site Details
  roofType: string;
  otherRoofType: string;
  roofOrientation: string;
  shading: string;
  availableSpace: string;
  photos: File[];
  
  // Seasonal & Efficiency Factors
  seasonalChange?: string; // Added for seasonal usage changes
  inverterEfficiency?: string; // Added for inverter efficiency preference
  batteryEfficiency?: string; // Added for battery efficiency preference
  
  // Submission
  agreeToFollowUp: boolean;
  agreeToDataSharing: boolean;
  installationTimeline: string;
};

export type QuoteStepProps = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  nextStep?: () => void;
  prevStep?: () => void;
  handleSubmit?: () => void;
};

export const defaultFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  state: "",
  propertyType: "",
  energySources: [],
  gridSupplyHours: "",
  tariffRate: "",
  monthlyBill: "",
  appliances: [{ name: "", quantity: 1, power: 0, hoursUsed: 0 }],
  criticalAppliances: [],
  otherAppliances: "",
  backupDuration: "",
  outageFrequency: "",
  budgetRange: "",
  batteryPreference: "",
  financing: "",
  aestheticNeeds: [],
  roofType: "",
  otherRoofType: "",
  roofOrientation: "",
  shading: "",
  availableSpace: "",
  photos: [],
  agreeToFollowUp: false,
  agreeToDataSharing: false,
  installationTimeline: "",
};
