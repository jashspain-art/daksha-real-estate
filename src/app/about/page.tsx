import type { Metadata } from "next";
import { ConsultantSection, WhyChoose } from "@/components/sections";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Daksha Real Estate and founder Naveen B. Thakkar.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#F8FAFC] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E67A00]">About</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#0B2A6F]">{business.name}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Daksha Real Estate is a premium property advisory practice serving Mumbai and Navi Mumbai with verified sale and rental listings, clear shortlists, and guided property visits.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {business.markets.map((market) => <div key={market} className="rounded-lg border border-slate-200 bg-white p-5 font-semibold text-slate-950">{market}</div>)}
            <div className="rounded-lg border border-slate-200 bg-white p-5 font-semibold text-slate-950">Founder-led advisory</div>
          </div>
        </div>
      </section>
      <WhyChoose />
      <ConsultantSection />
    </>
  );
}
