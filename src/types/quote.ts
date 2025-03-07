
export type Appliance = {
  name: string;
  quantity: number;
  power: number;
  hoursUsed: number;
};

export type FormData = {
  // Customer Details
  fullName: string;
  email: string;
  phone: string;
  location: string;
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
  
  // Backup Requirements
  criticalAppliances: string[];
  otherCriticalAppliance?: string;
  backupDuration: string;
  outageFrequency: string;
  
  // System Preferences
  budgetRange: string;
  batteryPreference: string;
  financing: string;
  aestheticNeeds: string[];
  
  // Site Details
  roofType: string;
  otherRoofType?: string;
  shading: string;
  availableSpace: string;
  photos: File[];
  
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
  location: "",
  propertyType: "",
  energySources: [],
  gridSupplyHours: "",
  tariffRate: "",
  monthlyBill: "",
  appliances: [{ name: "", quantity: 1, power: 0, hoursUsed: 0 }],
  criticalAppliances: [],
  backupDuration: "",
  outageFrequency: "",
  budgetRange: "",
  batteryPreference: "",
  financing: "",
  aestheticNeeds: [],
  roofType: "",
  shading: "",
  availableSpace: "",
  photos: [],
  agreeToFollowUp: false,
  agreeToDataSharing: false,
  installationTimeline: "",
};
