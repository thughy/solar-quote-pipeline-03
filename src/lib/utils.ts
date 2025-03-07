
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Appliance } from "@/types/quote"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateTotalPower(appliances: Appliance[]): number {
  return appliances.reduce((total, appliance) => {
    return total + (appliance.quantity * appliance.power * appliance.hoursUsed);
  }, 0);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function estimateMonthlySavings(
  monthlyBill: string, 
  gridSupplyHours: string, 
  tariffRate: string
): number {
  // Simple calculation for demonstration purposes
  // In a real app, this would be more sophisticated
  let billAmount = 0;
  
  if (monthlyBill === "₦0–₦20k") billAmount = 10000;
  else if (monthlyBill === "₦20k–₦50k") billAmount = 35000;
  else if (monthlyBill === "₦50k–₦100k") billAmount = 75000;
  else if (monthlyBill === "₦100k+") billAmount = 150000;
  
  // Assuming solar can offset 60-70% of grid costs
  return billAmount * 0.65;
}

export function calculateROI(
  savings: number,
  budgetRange: string
): number {
  let investmentAmount = 0;
  
  if (budgetRange === "₦500k–₦1M") investmentAmount = 750000;
  else if (budgetRange === "₦1M–₦2M") investmentAmount = 1500000;
  else if (budgetRange === "₦2M+") investmentAmount = 3000000;
  
  // Monthly savings to annual
  const annualSavings = savings * 12;
  
  // Simple ROI calculation (years to break even)
  return annualSavings > 0 ? investmentAmount / annualSavings : 0;
}
