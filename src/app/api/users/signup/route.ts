import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { signupSchema } from "@/lib/website-user-validation";
import { hashPassword } from "@/lib/website-auth";

export async function POST(request: Request) {
  const parsed = signupSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Please complete all fields correctly." }, { status: 400 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: "Account storage is not configured yet." }, { status: 503 });

  const existing = await prisma.websiteUser.findUnique({ where: { email: parsed.data.email.toLowerCase() } });
  if (existing) return NextResponse.json({ error: "An account already exists for this email." }, { status: 409 });

  await prisma.websiteUser.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email.toLowerCase(),
      phone: parsed.data.phone,
      passwordHash: hashPassword(parsed.data.password),
    },
  });

  return NextResponse.json({ ok: true });
}
