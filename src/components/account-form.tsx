"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AccountForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const [status, setStatus] = useState<string | null>(null);
  const isSignup = mode === "signup";

  async function submit(formData: FormData) {
    setStatus("Saving...");
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch(`/api/users/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (!response.ok) {
      setStatus(result.error);
      return;
    }
    if (isSignup) {
      setStatus("Account created. You can sign in now.");
      router.push("/login");
      return;
    }
    setStatus("Signed in successfully.");
    router.push("/");
  }

  return (
    <form action={submit} className="grid gap-4">
      {isSignup && <Input name="name" placeholder="Full name" required />}
      {isSignup && <Input name="phone" placeholder="Phone number" required />}
      <Input name="email" type="email" placeholder="Email address" required />
      <Input name="password" type="password" placeholder="Password" minLength={8} required />
      <Button type="submit" variant="accent">{isSignup ? "Create account" : "Sign in"}</Button>
      {status && <p className="text-sm text-slate-600">{status}</p>}
      <p className="text-sm text-slate-600">
        {isSignup ? "Already have an account? " : "New to Daksha Real Estate? "}
        <Link className="font-semibold text-[#0B2A6F]" href={isSignup ? "/login" : "/signup"}>{isSignup ? "Sign in" : "Sign up"}</Link>
      </p>
    </form>
  );
}
