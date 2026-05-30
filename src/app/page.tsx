import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { business } from "@/lib/constants";
import { properties } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { SearchBar } from "@/components/search-bar";
import { PropertyCard } from "@/components/property-card";
import { ConsultantSection, FeaturedProperties, PopularLocations, TestimonialsFaqCta, WhyChoose } from "@/components/sections";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(11,42,111,0.10),rgba(230,122,0,0.05),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SearchBar />
          </div>
          <div className="grid min-h-[calc(100vh-210px)] content-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E67A00]">Mumbai and Navi Mumbai</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-[#0B2A6F] sm:text-6xl lg:text-7xl">Find Your Next Home With Confidence</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Browse verified rental and sale properties before scheduling a visit.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/properties/sale" className={buttonVariants({ size: "lg" })}>Browse Properties <ArrowRight className="h-4 w-4" /></Link>
              <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "accent", size: "lg" })}><MessageCircle className="h-4 w-4" />WhatsApp Us</a>
            </div>
            </div>
            <div className="grid content-end gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {properties.slice(0, 2).map((property) => <PropertyCard key={property.id} property={property} />)}
            </div>
          </div>
        </div>
      </section>
      <FeaturedProperties />
      <PopularLocations />
      <WhyChoose />
      <section className="bg-[#F8FAFC] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E67A00]">Fresh Inventory</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-950">Recently Added Properties</h2>
            </div>
            <Link href="/properties/rent" className="text-sm font-semibold text-[#0B2A6F]">View all</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {properties.map((property) => <PropertyCard key={property.id} property={property} />)}
          </div>
        </div>
      </section>
      <ConsultantSection />
      <TestimonialsFaqCta />
    </>
  );
}
