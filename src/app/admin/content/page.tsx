import { faqs, testimonials } from "@/lib/data";
import { business } from "@/lib/constants";

export default function AdminContentPage() {
  return (
    <section className="bg-[#F8FAFC] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-[#0B2A6F]">Content Management</h1>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Consultant Profile</h2>
            <p className="mt-2 text-sm text-slate-600">{business.founder}</p>
            <div className="mt-4 rounded-md bg-[#F8FAFC] p-4 text-sm text-slate-600">Upload and replace profile image through Supabase Storage using the consultantProfile.imageUrl field.</div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Testimonials</h2>
            <p className="mt-2 text-sm text-slate-600">{testimonials.length} active testimonials</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold">FAQ</h2>
            <div className="mt-4 grid gap-3">
              {faqs.map(([question]) => <div key={question} className="rounded-md bg-[#F8FAFC] p-3 text-sm">{question}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
