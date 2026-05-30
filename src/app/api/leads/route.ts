import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validations";
import { getSupabaseAdmin } from "@/lib/supabase";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid lead details" }, { status: 400 });
  }

  const data = parsed.data;
  const supabase = getSupabaseAdmin();

  if (supabase) {
    const { error } = await supabase.from("leads").insert({
      type: data.type,
      name: data.name,
      phone: data.phone,
      email: data.email,
      budget: data.budget,
      message: data.message,
      property_id: data.propertyId,
      preferred_date: data.preferredDate,
    });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  }

  if (process.env.DATABASE_URL) {
    await prisma.lead.create({
      data: {
        type: data.type,
        name: data.name,
        phone: data.phone,
        email: data.email,
        budget: data.budget,
        message: data.message,
        propertyId: data.propertyId,
        preferredDate: data.preferredDate ? new Date(data.preferredDate) : undefined,
      },
    });
  }

  return NextResponse.json({ ok: true });
}
