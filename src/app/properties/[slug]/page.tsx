import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BedDouble, FileText, LockKeyhole, MapPin, PlayCircle, Ruler } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { PropertyCard } from "@/components/property-card";
import { buttonVariants } from "@/components/ui/button";
import { business } from "@/lib/constants";
import { properties } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);
  if (!property) return {};
  return {
    title: property.title,
    description: `${property.title} in ${property.location}. View photos, price, key features, and request unlock for sensitive documents.`,
  };
}

export default async function PropertyDetailPage({ params }: Params) {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);
  if (!property) notFound();
  const similar = properties.filter((item) => item.slug !== property.slug && item.location === property.location).concat(properties.filter((item) => item.slug !== property.slug)).slice(0, 3);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-slate-100">
            <Image src={property.images[0]} alt={property.title} fill className="object-cover" priority />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {property.images.slice(1).map((image) => (
              <div key={image} className="relative min-h-56 overflow-hidden rounded-lg bg-slate-100">
                <Image src={image} alt={property.title} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E67A00]">{property.id}</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[#0B2A6F]">{property.title}</h1>
            <p className="mt-3 flex items-center gap-2 text-slate-600"><MapPin className="h-4 w-4" />{property.location}, {property.region}</p>
            <div className="mt-6 text-3xl font-semibold text-slate-950">{formatPrice(property.price, property.listingType)}</div>

            <div className="mt-8 grid gap-3 sm:grid-cols-4">
              <div className="rounded-lg border border-slate-200 p-4"><BedDouble className="h-5 w-5 text-[#0B2A6F]" /><strong className="mt-2 block">{property.bedrooms} BHK</strong><span className="text-sm text-slate-500">Bedrooms</span></div>
              <div className="rounded-lg border border-slate-200 p-4"><Ruler className="h-5 w-5 text-[#0B2A6F]" /><strong className="mt-2 block">{property.carpetArea} sq.ft.</strong><span className="text-sm text-slate-500">Carpet Area</span></div>
              <div className="rounded-lg border border-slate-200 p-4"><strong>{property.furnished}</strong><span className="mt-2 block text-sm text-slate-500">Furnishing</span></div>
              <div className="rounded-lg border border-slate-200 p-4"><strong>{property.availability}</strong><span className="mt-2 block text-sm text-slate-500">Availability</span></div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-slate-950">Overview</h2>
              <p className="mt-4 leading-7 text-slate-600">{property.overview}</p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-slate-950">Amenities</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {property.amenities.map((amenity) => <span key={amenity} className="rounded-md bg-[#F8FAFC] px-3 py-2 text-sm text-slate-700">{amenity}</span>)}
              </div>
            </div>

            <div className="mt-10 rounded-lg border border-slate-200 bg-[#F8FAFC] p-6">
              <div className="flex items-center gap-3">
                <LockKeyhole className="h-6 w-6 text-[#E67A00]" />
                <h2 className="text-2xl font-semibold text-slate-950">Serious Buyer Unlock</h2>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">Exact address, floor plans, walkthrough video, brochures, and sensitive owner information are protected. Submit your details to unlock them.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-md border border-slate-200 bg-white p-4 text-sm"><MapPin className="mb-2 h-5 w-5 text-slate-400" />Exact address locked</div>
                <div className="rounded-md border border-slate-200 bg-white p-4 text-sm"><PlayCircle className="mb-2 h-5 w-5 text-slate-400" />Video walkthrough locked</div>
                <div className="rounded-md border border-slate-200 bg-white p-4 text-sm"><FileText className="mb-2 h-5 w-5 text-slate-400" />Brochure locked</div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-slate-950">Map</h2>
              <iframe title={`${property.location} map`} className="mt-4 h-80 w-full rounded-lg border border-slate-200" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(property.mapQuery)}&output=embed`} />
            </div>
          </div>

          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <h2 className="text-xl font-semibold text-slate-950">Unlock details</h2>
            <p className="mt-2 text-sm text-slate-600">Submit your details and the team will verify and share the locked documents.</p>
            <div className="mt-5"><LeadForm type="PROPERTY_UNLOCK" propertyId={property.id} compact /></div>
            <a className={buttonVariants({ variant: "outline", className: "mt-4 w-full" })} href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Hi Daksha Real Estate, I am interested in property ${property.id}.`)}`} target="_blank" rel="noreferrer">WhatsApp property ID</a>
          </aside>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-950">Similar Properties</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {similar.map((item) => <PropertyCard key={item.id} property={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
