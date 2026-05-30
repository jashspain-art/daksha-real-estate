import type { Metadata } from "next";
import { properties } from "@/lib/data";
import { PropertyCard } from "@/components/property-card";
import { SearchBar } from "@/components/search-bar";

export const metadata: Metadata = {
  title: "Properties For Rent",
  description: "Browse verified rental homes across Mumbai and Navi Mumbai with Daksha Real Estate.",
};

export default function RentPage() {
  const items = properties.filter((property) => property.listingType === "RENT");
  return (
    <section className="bg-[#F8FAFC] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-[#0B2A6F]">Properties For Rent</h1>
        <p className="mt-3 max-w-2xl text-slate-600">Ready-to-visit rental listings for families, professionals, and corporate leases.</p>
        <div className="mt-8"><SearchBar /></div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((property) => <PropertyCard key={property.id} property={property} />)}
        </div>
      </div>
    </section>
  );
}
