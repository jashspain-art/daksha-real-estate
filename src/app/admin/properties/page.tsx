import { properties } from "@/lib/data";

export default function AdminPropertiesPage() {
  return (
    <section className="bg-[#F8FAFC] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-[#0B2A6F]">Property Management</h1>
        <div className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-slate-50 text-slate-500"><tr><th className="p-4">ID</th><th>Title</th><th>Type</th><th>Location</th><th>Status</th><th>Media</th></tr></thead>
            <tbody className="divide-y divide-slate-100">
              {properties.map((property) => (
                <tr key={property.id}><td className="p-4 font-semibold">{property.id}</td><td>{property.title}</td><td>{property.listingType}</td><td>{property.location}</td><td>{property.status}</td><td>{property.images.length} images, video, brochure</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
