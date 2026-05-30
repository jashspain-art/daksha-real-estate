import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Daksha Real Estate for Mumbai and Navi Mumbai property requirements.",
};

export default function ContactPage() {
  return (
    <section className="bg-[#F8FAFC] py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E67A00]">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#0B2A6F]">Let us shortlist the right property</h1>
          <div className="mt-8 space-y-4 rounded-lg border border-slate-200 bg-white p-6 text-slate-700">
            <p><strong>Phone:</strong> {business.phone}</p>
            <p><strong>Secondary:</strong> {business.secondaryPhone}</p>
            <p><strong>Address:</strong> {business.address}</p>
          </div>
          <iframe title="Daksha Real Estate office map" className="mt-6 h-80 w-full rounded-lg border border-slate-200" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed`} />
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">General Inquiry</h2>
          <p className="mt-2 text-sm text-slate-600">Share your requirement and we will call you back.</p>
          <div className="mt-6"><LeadForm type="GENERAL" /></div>
        </div>
      </div>
    </section>
  );
}
