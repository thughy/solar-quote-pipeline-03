
export type Component = {
  type: string;
  brandModel: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type InstallerFormData = {
  // Customer Information
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerLocation: string;
  propertyType: string;
  
  // System Design Details
  solarArraySize: string;
  batteryCapacity: string;
  inverterCapacity: string;
  systemType: string;
  components: Component[];
  totalSystemCost: number;
  
  // Financial Breakdown
  paymentOption: string;
  discountAmount: string;
  installmentDuration: string;
  installmentInterest: string;
  bankPartner: string;
  warrantyPanels: string;
  warrantyBatteries: string;
  warrantyInverter: string;
  warrantyWorkmanship: string;
  
  // Savings & ROI
  monthlyGridSavings: string;
  monthlyFuelSavings: string;
  roiPeriod: string;
  
  // Installation Timeline
  startDate: string;
  completionDate: string;
  additionalNotes: string;
  
  // Installer Details
  companyName: string;
  installerEmail: string;
  installerPhone: string;
  certifications: string;
  workSamples: File[];
  
  // Terms & Conditions
  confirmMeetsNeeds: boolean;
  agreeToSupport: boolean;
  certifyComponents: boolean;
};

export const defaultInstallerFormData: InstallerFormData = {
  customerName: "",
  customerEmail: "",
  customerPhone: "",
  customerLocation: "",
  propertyType: "",
  
  solarArraySize: "",
  batteryCapacity: "",
  inverterCapacity: "",
  systemType: "",
  components: [
    {
      type: "Solar Panels",
      brandModel: "",
      quantity: 0,
      unitPrice: 0,
      totalPrice: 0
    },
    {
      type: "Inverter",
      brandModel: "",
      quantity: 0,
      unitPrice: 0,
      totalPrice: 0
    },
    {
      type: "Batteries",
      brandModel: "",
      quantity: 0,
      unitPrice: 0,
      totalPrice: 0
    },
    {
      type: "Mounting Structure",
      brandModel: "",
      quantity: 0,
      unitPrice: 0,
      totalPrice: 0
    },
    {
      type: "Cables & Accessories",
      brandModel: "",
      quantity: 0,
      unitPrice: 0,
      totalPrice: 0
    },
    {
      type: "Installation Labor",
      brandModel: "",
      quantity: 0,
      unitPrice: 0,
      totalPrice: 0
    }
  ],
  totalSystemCost: 0,
  
  paymentOption: "",
  discountAmount: "",
  installmentDuration: "",
  installmentInterest: "",
  bankPartner: "",
  warrantyPanels: "",
  warrantyBatteries: "",
  warrantyInverter: "",
  warrantyWorkmanship: "",
  
  monthlyGridSavings: "",
  monthlyFuelSavings: "",
  roiPeriod: "",
  
  startDate: "",
  completionDate: "",
  additionalNotes: "",
  
  companyName: "",
  installerEmail: "",
  installerPhone: "",
  certifications: "",
  workSamples: [],
  
  confirmMeetsNeeds: false,
  agreeToSupport: false,
  certifyComponents: false,
};
