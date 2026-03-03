export const calculatorMultipliers: Record<string, number> = {
  "construction": 0.05,
  "healthcare": 0.06,
  "finance-insurance": 0.07,
  "manufacturing": 0.05,
  "retail": 0.04,
  "energy-utilities": 0.06,
  "transportation": 0.04,
  "technology-information": 0.07,
  "professional-services": 0.05,
  "real-estate": 0.04,
  "education": 0.03,
  "entertainment": 0.04,
  "state-local": 0.04,
  "federal": 0.05,
};

export const maturityDiscounts: Record<string, number> = {
  exploring: 0.4,
  piloting: 0.7,
  scaling: 1.0,
};

export function calculateTrappedValue(
  revenue: number,
  industrySlug: string,
  maturity: string
): { low: number; high: number } {
  const baseRate = calculatorMultipliers[industrySlug] || 0.05;
  const discount = maturityDiscounts[maturity] || 0.4;
  const base = revenue * baseRate * discount;
  return {
    low: base * 0.6,
    high: base * 1.4,
  };
}
