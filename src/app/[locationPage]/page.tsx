import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/lead-form";
import { PropertyCard } from "@/components/property-card";
import { seoLocationSlugs } from "@/lib/constants";
import { allLocations, faqs, properties } from "@/lib/data";

type Params = { params: Promise<{ locationPage: string }> };

function getLocation(slug: string) {
  if (!slug.startsWith("properties-in-")) return null;
  const locationSlug = slug.replace("properties-in-", "");
  return allLocations.find((location) => location.slug === locationSlug) ?? null;
}

export function generateStaticParams() {
  return seoLocationSlugs.map((location) => ({ locationPage: `properties-in-${location}` }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locationPage } = await params;
  const item = getLocation(locationPage);
  if (!item) return {};
  return {
    title: `Properties in ${item.name}`,
    description: `Verified properties in ${item.name}. Browse sale and rent options with Daksha Real Estate.`,
  };
}

export default async function LocationPage({ params }: Params) {
  const { locationPage } = await params;
  const item = getLocation(locationPage);
  if (!item) notFound();
  const listings = properties.filter((property) => property.location === item.name);
  const fallback = listings.length ? listings : properties.slice(0, 3);

  return (
    <section className="bg-[#F8FAFC] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E67A00]">{item.region}</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[#0B2A6F]">Properties in {item.name}</h1>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">{item.summary} Daksha Real Estate helps buyers and tenants shortlist verified homes, understand availability, and schedule focused visits.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {fallback.map((property) => <PropertyCard key={property.id} property={property} />)}
            </div>
            <div className="mt-12 rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-semibold text-slate-950">{item.name} property advisory</h2>
              <p className="mt-3 leading-7 text-slate-600">Whether you are comparing sale inventory, rental budgets, building quality, commute patterns, or possession timelines, Daksha Real Estate can help you evaluate practical options in {item.name} and nearby micro-markets.</p>
            </div>
            <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-semibold text-slate-950">FAQ</h2>
              <div className="mt-4 divide-y divide-slate-200">
                {faqs.slice(0, 3).map(([question, answer]) => (
                  <details key={question} className="py-4">
                    <summary className="cursor-pointer font-semibold">{question}</summary>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <h2 className="text-xl font-semibold text-slate-950">Get {item.name} options</h2>
            <p className="mt-2 text-sm text-slate-600">Share your requirement and receive a practical shortlist.</p>
            <div className="mt-5"><LeadForm type="GENERAL" compact /></div>
          </aside>
        </div>
      </div>
    </section>
  );
}
