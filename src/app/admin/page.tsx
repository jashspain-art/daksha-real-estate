import Link from "next/link";
import { Building2, FileText, Map, MessageSquare, UserRound, UsersRound } from "lucide-react";
import { properties } from "@/lib/data";
import { allLocations } from "@/lib/data";

const cards = [
  { title: "Property Management", href: "/admin/properties", icon: Building2, copy: "Add, edit, delete, sold, rented, and reserved status workflows." },
  { title: "Lead Management", href: "/admin/leads", icon: MessageSquare, copy: "View, search, and export general, unlock, and visit leads." },
  { title: "Location Management", href: "/admin/locations", icon: Map, copy: "Add and edit Mumbai and Navi Mumbai micro-markets." },
  { title: "Content Management", href: "/admin/content", icon: FileText, copy: "Homepage, testimonials, FAQ, and consultant profile controls." },
  { title: "Website Accounts", href: "/admin/users", icon: UsersRound, copy: "Review customer registrations and successful login activity." },
];

export default function AdminPage() {
  return (
    <section className="bg-[#F8FAFC] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E67A00]">Secure Dashboard</p>
        <h1 className="mt-2 text-4xl font-semibold text-[#0B2A6F]">Admin Dashboard</h1>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-5"><strong className="text-2xl text-slate-950">{properties.length}</strong><span className="mt-1 block text-sm text-slate-500">Seed properties</span></div>
          <div className="rounded-lg border border-slate-200 bg-white p-5"><strong className="text-2xl text-slate-950">{allLocations.length}</strong><span className="mt-1 block text-sm text-slate-500">Locations</span></div>
          <div className="rounded-lg border border-slate-200 bg-white p-5"><UserRound className="h-7 w-7 text-[#0B2A6F]" /><span className="mt-2 block text-sm text-slate-500">Founder profile enabled</span></div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {cards.map(({ title, href, icon: Icon, copy }) => (
            <Link key={href} href={href} className="rounded-lg border border-slate-200 bg-white p-6 hover:border-[#0B2A6F]">
              <Icon className="h-7 w-7 text-[#E67A00]" />
              <h2 className="mt-4 text-xl font-semibold text-slate-950">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
