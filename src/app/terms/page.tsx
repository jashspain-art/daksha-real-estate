import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-[#0B2A6F]">Terms</h1>
        <div className="mt-6 space-y-5 leading-7 text-slate-600">
          <p>Property information is provided for guidance and may change due to availability, owner decisions, market conditions, or documentation updates.</p>
          <p>Photos, price, overview, and key features are public previews. Exact addresses, floor plans, walkthroughs, brochures, and sensitive documents may require lead verification.</p>
          <p>Visitors should independently verify legal, financial, and technical aspects before making property decisions.</p>
          <p>Use of this website indicates acceptance of these terms.</p>
        </div>
      </div>
    </section>
  );
}
