import type { Metadata } from "next";
import { properties } from "@/lib/data";
import { PropertyCard } from "@/components/property-card";
import { SearchBar } from "@/components/search-bar";

export const metadata: Metadata = {
  title: "Properties For Sale",
  description: "Browse verified homes for sale across Mumbai and Navi Mumbai with Daksha Real Estate.",
};

export default function SalePage() {
  const items = properties.filter((property) => property.listingType === "SALE");
  return (
    <section className="bg-[#F8FAFC] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-[#0B2A6F]">Properties For Sale</h1>
        <p className="mt-3 max-w-2xl text-slate-600">Verified sale properties across Mumbai and Navi Mumbai with transparent previews before visit scheduling.</p>
        <div className="mt-8"><SearchBar /></div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((property) => <PropertyCard key={property.id} property={property} />)}
        </div>
      </div>
    </section>
  );
}
