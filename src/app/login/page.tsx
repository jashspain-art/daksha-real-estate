import type { Metadata } from "next";
import { AccountForm } from "@/components/account-form";

export const metadata: Metadata = { title: "Sign in" };

export default function LoginPage() {
  return (
    <section className="bg-[#F8FAFC] py-16">
      <div className="mx-auto max-w-md px-4">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-semibold text-[#0B2A6F]">Sign in</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">Access a smoother property inquiry experience.</p>
          <div className="mt-6"><AccountForm mode="login" /></div>
        </div>
      </div>
    </section>
  );
}
