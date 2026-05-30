"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { leadSchema, type LeadInput } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function LeadForm({ type, propertyId, compact = false }: { type: LeadInput["type"]; propertyId?: string; compact?: boolean }) {
  const [status, setStatus] = useState<string | null>(null);
  const form = useForm<LeadInput>({ resolver: zodResolver(leadSchema), defaultValues: { type, propertyId, name: "", phone: "", email: "", budget: "", message: "" } });

  async function onSubmit(values: LeadInput) {
    setStatus("Saving your request...");
    const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    setStatus(response.ok ? "Thank you. We will contact you shortly." : "Something went wrong. Please call or WhatsApp us.");
    if (response.ok) form.reset({ type, propertyId, name: "", phone: "", email: "", budget: "", message: "" });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-3">
      <input type="hidden" {...form.register("type")} />
      <input type="hidden" {...form.register("propertyId")} />
      <Input placeholder="Name" {...form.register("name")} />
      <Input placeholder="Phone" {...form.register("phone")} />
      <Input placeholder="Email" type="email" {...form.register("email")} />
      <Input placeholder="Budget" {...form.register("budget")} />
      {!compact && <Textarea placeholder="Tell us what you are looking for" {...form.register("message")} />}
      <Button type="submit" variant="accent"><Send className="h-4 w-4" />Submit</Button>
      {status && <p className="text-sm text-slate-600">{status}</p>}
    </form>
  );
}
