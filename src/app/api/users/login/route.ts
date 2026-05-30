import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createWebsiteSession, verifyPassword } from "@/lib/website-auth";
import { loginSchema } from "@/lib/website-user-validation";

export async function POST(request: Request) {
  const parsed = loginSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Enter a valid email and password." }, { status: 400 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: "Account storage is not configured yet." }, { status: 503 });

  const user = await prisma.websiteUser.findUnique({ where: { email: parsed.data.email.toLowerCase() } });
  if (!user || !verifyPassword(parsed.data.password, user.passwordHash)) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  await prisma.loginEvent.create({ data: { userId: user.id } });
  const response = NextResponse.json({ ok: true, name: user.name });
  response.cookies.set("daksha_user", createWebsiteSession(user.id), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
  return response;
}
