"use client";

import { Suspense } from "react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  async function submit(formData: FormData) {
    setError(null);
    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
      callbackUrl: searchParams.get("callbackUrl") ?? "/admin",
    });
    if (result?.error) {
      setError("Invalid admin credentials.");
      return;
    }
    router.push(result?.url ?? "/admin");
  }

  return (
    <section className="bg-[#F8FAFC] py-16">
      <div className="mx-auto max-w-md px-4">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-[#0B2A6F]">Admin Login</h1>
          <form action={submit} className="mt-6 grid gap-4">
            <Input name="email" type="email" placeholder="Admin email" required />
            <Input name="password" type="password" placeholder="Password" required />
            <Button type="submit">Sign in</Button>
            {error && <p className="text-sm text-red-600">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<section className="bg-[#F8FAFC] py-16" />}>
      <AdminLoginForm />
    </Suspense>
  );
}
