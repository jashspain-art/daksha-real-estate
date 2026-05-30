import { locationGroups } from "./constants";
import { slugify } from "./utils";

export type ListingType = "SALE" | "RENT";

export type Property = {
  id: string;
  title: string;
  slug: string;
  listingType: ListingType;
  propertyType: string;
  location: string;
  region: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  carpetArea: number;
  furnished: "Furnished" | "Semi furnished" | "Unfurnished";
  readyToMove: boolean;
  availability: string;
  status: "Available" | "Sold" | "Rented" | "Reserved";
  featured: boolean;
  images: string[];
  amenities: string[];
  overview: string;
  sensitive: { address: string; floorPlan: string; video: string; brochure: string };
  mapQuery: string;
};

const imageFor = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;

export const properties: Property[] = [
  {
    id: "DKS-1001",
    title: "Sea-facing 3 BHK Residence in Seawoods",
    slug: "sea-facing-3-bhk-residence-seawoods",
    listingType: "SALE",
    propertyType: "Apartment",
    location: "Seawoods",
    region: "Navi Mumbai",
    price: 28500000,
    bedrooms: 3,
    bathrooms: 3,
    carpetArea: 1240,
    furnished: "Semi furnished",
    readyToMove: true,
    availability: "Immediate",
    status: "Available",
    featured: true,
    images: [imageFor("1600585154340-be6161a56a0c"), imageFor("1600607687939-ce8a6c25118c")],
    amenities: ["Sea view", "Clubhouse", "Parking", "Security", "Gym"],
    overview: "A bright, high-floor home with generous living spaces, premium society amenities, and strong connectivity to Palm Beach Road.",
    sensitive: { address: "Seawoods Grand Central precinct, Navi Mumbai", floorPlan: "/sample-floor-plan.pdf", video: "https://www.youtube.com/embed/dQw4w9WgXcQ", brochure: "/sample-brochure.pdf" },
    mapQuery: "Seawoods Navi Mumbai",
  },
  {
    id: "DKR-2044",
    title: "Premium 2 BHK Rental Near Vashi Station",
    slug: "premium-2-bhk-rental-vashi-station",
    listingType: "RENT",
    propertyType: "Apartment",
    location: "Vashi",
    region: "Navi Mumbai",
    price: 68000,
    bedrooms: 2,
    bathrooms: 2,
    carpetArea: 790,
    furnished: "Furnished",
    readyToMove: true,
    availability: "Immediate",
    status: "Available",
    featured: true,
    images: [imageFor("1600566753086-00f18fb6b3ea"), imageFor("1600210492486-724fe5c67fb0")],
    amenities: ["Walk to station", "Modular kitchen", "Parking", "Power backup"],
    overview: "A polished rental apartment in a well-managed building, ideal for executives and families who need quick access to Vashi business hubs.",
    sensitive: { address: "Sector 17, Vashi, Navi Mumbai", floorPlan: "/sample-floor-plan.pdf", video: "https://www.youtube.com/embed/dQw4w9WgXcQ", brochure: "/sample-brochure.pdf" },
    mapQuery: "Sector 17 Vashi Navi Mumbai",
  },
  {
    id: "DKS-1188",
    title: "Spacious 4 BHK Family Home in Bandra West",
    slug: "spacious-4-bhk-family-home-bandra-west",
    listingType: "SALE",
    propertyType: "Apartment",
    location: "Bandra West",
    region: "Mumbai",
    price: 92500000,
    bedrooms: 4,
    bathrooms: 4,
    carpetArea: 2100,
    furnished: "Unfurnished",
    readyToMove: false,
    availability: "45 days",
    status: "Reserved",
    featured: true,
    images: [imageFor("1600047509807-ba8f99d2cdde"), imageFor("1616047006789-b7af5afb8c20")],
    amenities: ["Private deck", "Two parking spaces", "Concierge", "Pet friendly"],
    overview: "A rare large-format residence with elegant proportions, privacy, and easy access to Bandra's premium schools, restaurants, and promenades.",
    sensitive: { address: "Bandra West, Mumbai", floorPlan: "/sample-floor-plan.pdf", video: "https://www.youtube.com/embed/dQw4w9WgXcQ", brochure: "/sample-brochure.pdf" },
    mapQuery: "Bandra West Mumbai",
  },
  {
    id: "DKR-2180",
    title: "Corporate Lease 3 BHK in Powai",
    slug: "corporate-lease-3-bhk-powai",
    listingType: "RENT",
    propertyType: "Apartment",
    location: "Powai",
    region: "Mumbai",
    price: 145000,
    bedrooms: 3,
    bathrooms: 3,
    carpetArea: 1180,
    furnished: "Furnished",
    readyToMove: true,
    availability: "Immediate",
    status: "Available",
    featured: false,
    images: [imageFor("1600607687939-ce8a6c25118c"), imageFor("1600566752355-35792bedcfea")],
    amenities: ["Lake access", "Housekeeping option", "Clubhouse", "Pool"],
    overview: "A ready-to-move corporate lease option in Powai with refined interiors and dependable society services.",
    sensitive: { address: "Hiranandani Gardens, Powai, Mumbai", floorPlan: "/sample-floor-plan.pdf", video: "https://www.youtube.com/embed/dQw4w9WgXcQ", brochure: "/sample-brochure.pdf" },
    mapQuery: "Powai Mumbai",
  },
];

export const allLocations = locationGroups.flatMap((group) =>
  group.locations.map((name) => ({ name, slug: slugify(name), region: group.region, summary: `${name} is a high-demand ${group.region} micro-market with strong connectivity, established social infrastructure, and reliable residential demand.` })),
);

export const testimonials = [
  { name: "Rohit Mehta", quote: "Naveen guided us through every visit with clarity. The listings were verified and the negotiation was handled with real care." },
  { name: "Priya Shah", quote: "We found a rental in Vashi without wasting weekends on mismatched options. The process felt premium and practical." },
  { name: "Amit Kulkarni", quote: "Daksha Real Estate understood our budget, shortlisted sharply, and helped us close a Navi Mumbai home confidently." },
];

export const faqs = [
  ["Are properties verified?", "Yes. Public listings show verified photos, price, overview, and key features before a visit is scheduled."],
  ["Why are some details locked?", "Exact addresses, floor plans, walkthrough videos, and brochures are shared with serious buyers or tenants after a quick verification form."],
  ["Do you support both rent and sale?", "Yes. Daksha Real Estate serves rental and sale requirements across Mumbai and Navi Mumbai."],
  ["Can I schedule a visit on WhatsApp?", "Yes. You can use the floating WhatsApp button or the schedule visit form on any property page."],
];
