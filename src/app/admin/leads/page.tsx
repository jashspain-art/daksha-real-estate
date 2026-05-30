import { Download } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function AdminLeadsPage() {
  return (
    <section className="bg-[#F8FAFC] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-[#0B2A6F]">Lead Management</h1>
            <p className="mt-2 text-sm text-slate-600">Leads are stored in Supabase/Postgres through the lead submission API.</p>
          </div>
          <Link href="/api/admin/leads/export" className={buttonVariants({ variant: "outline" })}><Download className="h-4 w-4" />Export CSV</Link>
        </div>
        <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6">
          <input className="h-11 w-full rounded-md border border-slate-200 px-3 text-sm" placeholder="Search leads by name, phone, email, property ID" />
          <div className="mt-6 rounded-md bg-[#F8FAFC] p-5 text-sm text-slate-600">Connect Supabase environment variables and deploy migrations to view live lead rows here.</div>
        </div>
      </div>
    </section>
  );
}
