import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: "Database storage is not configured yet." }, { status: 503 });

  const formData = await request.formData();
  const image = formData.get("image");
  let imageUrl: string | undefined;

  if (image instanceof File && image.size > 0) {
    const supabase = getSupabaseAdmin();
    if (!supabase) return NextResponse.json({ error: "Supabase Storage is not configured yet." }, { status: 503 });
    const extension = image.name.split(".").pop() ?? "jpg";
    const path = `consultant-${Date.now()}.${extension}`;
    const { error } = await supabase.storage.from("consultant-profile").upload(path, image, {
      contentType: image.type,
      upsert: true,
    });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    imageUrl = supabase.storage.from("consultant-profile").getPublicUrl(path).data.publicUrl;
  }

  const data = {
    name: String(formData.get("name") ?? ""),
    bio: String(formData.get("bio") ?? ""),
    experience: String(formData.get("experience") ?? ""),
    areasServed: String(formData.get("areasServed") ?? ""),
    whatsapp: String(formData.get("whatsapp") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    ...(imageUrl ? { imageUrl } : {}),
  };

  const current = await prisma.consultantProfile.findFirst();
  if (current) {
    await prisma.consultantProfile.update({ where: { id: current.id }, data });
  } else {
    await prisma.consultantProfile.create({ data });
  }

  return NextResponse.json({ ok: true });
}
