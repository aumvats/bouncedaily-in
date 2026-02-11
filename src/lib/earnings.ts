export type Platform = "swiggy" | "zomato" | "blinkit" | "zepto" | "other";
export type City = "bengaluru" | "hyderabad" | "delhi" | "mumbai" | "pune";

export interface EarningsInput {
  platform: Platform;
  city: City;
  hoursPerDay: number;
}

export interface EarningsResult {
  bounceNetMonthly: number;
  petrolNetMonthly: number;
  monthlyAdvantage: number;
  fuelSavedMonthly: number;
  ordersPerDay: number;
  grossDaily: number;
}

const ordersPerHour: Record<Platform, number> = {
  swiggy: 2.8,
  zomato: 2.5,
  blinkit: 3.5,
  zepto: 3.8,
  other: 2.5,
};

const earningsPerOrder: Record<City, number> = {
  bengaluru: 42,
  hyderabad: 38,
  delhi: 45,
  mumbai: 48,
  pune: 36,
};

const dailyPetrolCost: Record<City, number> = {
  bengaluru: 180,
  hyderabad: 170,
  delhi: 200,
  mumbai: 210,
  pune: 165,
};

const BOUNCE_DAILY_RENTAL = 199;
const WORKING_DAYS_PER_MONTH = 26;
const PETROL_MAINTENANCE_DAILY = 25;

export function calculateEarnings(input: EarningsInput): EarningsResult {
  const ordersDay = ordersPerHour[input.platform] * input.hoursPerDay;
  const grossDaily = ordersDay * earningsPerOrder[input.city];

  const bounceNetDaily = grossDaily - BOUNCE_DAILY_RENTAL;
  const bounceNetMonthly = bounceNetDaily * WORKING_DAYS_PER_MONTH;

  const petrolNetDaily =
    grossDaily - dailyPetrolCost[input.city] - PETROL_MAINTENANCE_DAILY;
  const petrolNetMonthly = petrolNetDaily * WORKING_DAYS_PER_MONTH;

  const monthlyAdvantage = bounceNetMonthly - petrolNetMonthly;
  const fuelSavedMonthly =
    dailyPetrolCost[input.city] * WORKING_DAYS_PER_MONTH;

  return {
    bounceNetMonthly: Math.round(bounceNetMonthly),
    petrolNetMonthly: Math.round(petrolNetMonthly),
    monthlyAdvantage: Math.round(monthlyAdvantage),
    fuelSavedMonthly: Math.round(fuelSavedMonthly),
    ordersPerDay: Math.round(ordersDay),
    grossDaily: Math.round(grossDaily),
  };
}

export const platformOptions: { value: Platform; label: string }[] = [
  { value: "swiggy", label: "Swiggy" },
  { value: "zomato", label: "Zomato" },
  { value: "blinkit", label: "Blinkit" },
  { value: "zepto", label: "Zepto" },
  { value: "other", label: "Other" },
];

export const cityOptions: { value: City; label: string }[] = [
  { value: "bengaluru", label: "Bengaluru" },
  { value: "hyderabad", label: "Hyderabad" },
  { value: "delhi", label: "Delhi NCR" },
  { value: "mumbai", label: "Mumbai" },
  { value: "pune", label: "Pune" },
];
