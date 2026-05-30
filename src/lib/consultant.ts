import { business } from "@/lib/constants";
import { prisma } from "@/lib/prisma";

export const defaultConsultantProfile = {
  name: business.founder,
  bio: "Founder of Daksha Real Estate, focused on verified property advisory, practical negotiation, and guided visits across Mumbai and Navi Mumbai.",
  experience: "Residential sales and rentals",
  areasServed: "Mumbai and Navi Mumbai",
  imageUrl: "/founder-placeholder.svg",
  whatsapp: business.whatsapp,
  phone: business.phone,
};

export async function getConsultantProfile() {
  if (!process.env.DATABASE_URL) return defaultConsultantProfile;
  try {
    return (await prisma.consultantProfile.findFirst()) ?? defaultConsultantProfile;
  } catch {
    return defaultConsultantProfile;
  }
}
