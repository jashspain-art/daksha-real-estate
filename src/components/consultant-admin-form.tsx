"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Profile = {
  name: string;
  bio: string;
  experience: string;
  areasServed: string;
  imageUrl: string | null;
  whatsapp: string;
  phone: string;
};

export function ConsultantAdminForm({ profile }: { profile: Profile }) {
  const [status, setStatus] = useState<string | null>(null);

  async function submit(formData: FormData) {
    setStatus("Saving consultant profile...");
    const response = await fetch("/api/admin/consultant", { method: "POST", body: formData });
    const result = await response.json();
    setStatus(response.ok ? "Consultant profile updated." : result.error ?? "Unable to save profile.");
  }

  return (
    <form action={submit} className="grid gap-4">
      <Input name="name" defaultValue={profile.name} placeholder="Consultant name" required />
      <Textarea name="bio" defaultValue={profile.bio} placeholder="Consultant description" required />
      <Input name="experience" defaultValue={profile.experience} placeholder="Experience" required />
      <Input name="areasServed" defaultValue={profile.areasServed} placeholder="Areas served" required />
      <Input name="phone" defaultValue={profile.phone} placeholder="Phone" required />
      <Input name="whatsapp" defaultValue={profile.whatsapp} placeholder="WhatsApp number" required />
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Replace profile image
        <Input name="image" type="file" accept="image/png,image/jpeg,image/webp" />
      </label>
      <Button type="submit">Save consultant profile</Button>
      {status && <p className="text-sm text-slate-600">{status}</p>}
    </form>
  );
}
