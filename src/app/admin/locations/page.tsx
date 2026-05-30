import { allLocations } from "@/lib/data";

export default function AdminLocationsPage() {
  return (
    <section className="bg-[#F8FAFC] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-[#0B2A6F]">Location Management</h1>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {allLocations.map((location) => <div key={location.slug} className="rounded-lg border border-slate-200 bg-white p-4"><strong>{location.name}</strong><span className="mt-1 block text-xs text-slate-500">{location.region}</span></div>)}
        </div>
      </div>
    </section>
  );
}
