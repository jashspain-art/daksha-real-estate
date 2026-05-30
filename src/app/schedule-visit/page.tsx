import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Schedule A Visit",
  description: "Schedule a property visit with Daksha Real Estate.",
};

export default function ScheduleVisitPage() {
  return (
    <section className="bg-[#F8FAFC] py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E67A00]">Visit Planning</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#0B2A6F]">Schedule A Visit</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">Tell us your preferred budget, location, and timing. Daksha Real Estate will help coordinate serious, efficient visits.</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <LeadForm type="SCHEDULE_VISIT" />
        </div>
      </div>
    </section>
  );
}
