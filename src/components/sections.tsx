import Image from "next/image";
import Link from "next/link";
import { Award, CheckCircle2, MapPin, Phone, ShieldCheck } from "lucide-react";
import { getConsultantProfile } from "@/lib/consultant";
import { allLocations, faqs, properties, testimonials } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { PropertyCard } from "@/components/property-card";

export function SectionHeading({ eyebrow, title, copy }: { eyebrow?: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E67A00]">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {copy && <p className="mt-4 text-base leading-7 text-slate-600">{copy}</p>}
    </div>
  );
}

export function FeaturedProperties() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Verified Listings" title="Featured Properties" copy="Handpicked homes with clear pricing, verified media, and a guided visit process." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.filter((property) => property.featured).map((property) => <PropertyCard key={property.id} property={property} />)}
        </div>
      </div>
    </section>
  );
}

export function PopularLocations() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Micro Markets" title="Popular Locations" copy="Explore high-demand neighbourhoods across Mumbai and Navi Mumbai." />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {allLocations.slice(0, 10).map((location) => (
            <Link key={location.slug} href={`/properties-in-${location.slug}`} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 hover:border-[#0B2A6F]">
              <MapPin className="mb-3 h-5 w-5 text-[#E67A00]" />
              {location.name}
              <span className="mt-1 block text-xs font-normal text-slate-500">{location.region}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  const items = [
    ["Verified before visit", "Photos, pricing, and key details are checked before listings are promoted.", ShieldCheck],
    ["Serious buyer privacy", "Sensitive documents are shared after an unlock request, protecting owners and buyers.", CheckCircle2],
    ["Local advisory", "Decisions are guided by practical Mumbai and Navi Mumbai micro-market experience.", Award],
  ] as const;

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Why Choose Daksha Real Estate" copy="A premium, minimal process built around trust, clarity, and efficient property visits." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map(([title, copy, Icon]) => (
            <div key={title} className="rounded-lg border border-slate-200 p-6">
              <Icon className="h-8 w-8 text-[#0B2A6F]" />
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function ConsultantSection() {
  const profile = await getConsultantProfile();
  return (
    <section className="bg-[#0B2A6F] py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-white/10">
          <Image src={profile.imageUrl ?? "/founder-placeholder.svg"} alt={profile.name} fill unoptimized className="object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E67A00]">Meet Your Consultant</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">{profile.name}</h2>
          <p className="mt-5 text-lg leading-8 text-white/80">{profile.bio}</p>
          <div className="mt-6 grid gap-3 text-sm text-white/80 sm:grid-cols-3">
            <div><strong className="block text-white">Experience</strong>{profile.experience}</div>
            <div><strong className="block text-white">Areas Served</strong>{profile.areasServed}</div>
            <div><strong className="block text-white">Approach</strong>Verified, private, visit-ready</div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className={buttonVariants({ variant: "accent" })} href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
            <a className={buttonVariants({ variant: "outline", className: "border-white/25 bg-white/10 text-white hover:bg-white/15" })} href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <Phone className="h-4 w-4" />
              Call
            </a>
          </div>
          <p className="mt-5 text-xs text-white/60">Profile image is managed from Admin Content Management.</p>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsFaqCta() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Client Testimonials" copy="Built on focused shortlists, clear communication, and confident visits." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="rounded-lg border border-slate-200 p-6">
                <p className="text-sm leading-6 text-slate-600">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-5 font-semibold text-slate-950">{item.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F8FAFC] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="FAQ" />
          <div className="mt-10 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group p-5">
                <summary className="cursor-pointer text-base font-semibold text-slate-950">{question}</summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Ready to shortlist verified properties?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">Share your requirement and Daksha Real Estate will help you plan focused visits across Mumbai and Navi Mumbai.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/properties/sale" className={buttonVariants()}>Browse Properties</Link>
            <Link href="/schedule-visit" className={buttonVariants({ variant: "accent" })}>Schedule A Visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
