import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(value: number, listingType: "SALE" | "RENT") {
  if (listingType === "RENT") return `Rs. ${value.toLocaleString("en-IN")}/mo`;
  if (value >= 10000000) return `Rs. ${(value / 10000000).toFixed(value % 10000000 === 0 ? 0 : 1)} Cr`;
  return `Rs. ${(value / 100000).toFixed(value % 100000 === 0 ? 0 : 1)} L`;
}

export function slugify(value: string) {
  return value.toLowerCase().trim().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
