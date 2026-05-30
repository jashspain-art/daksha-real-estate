import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-[#0B2A6F]">Privacy Policy</h1>
        <div className="mt-6 space-y-5 leading-7 text-slate-600">
          <p>Daksha Real Estate collects contact and requirement details submitted through inquiry, unlock, and visit forms to respond to property requests.</p>
          <p>Lead information may include name, phone, email, budget, preferred visit details, and property interest. This information is used only for property advisory, verification, scheduling, and related communication.</p>
          <p>We do not sell personal information. Data is stored in Supabase and access is restricted to authorized administrators.</p>
          <p>To request correction or deletion of your information, contact Daksha Real Estate using the contact details on this website.</p>
        </div>
      </div>
    </section>
  );
}
