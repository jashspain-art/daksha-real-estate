import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const header = "createdAt,type,name,phone,email,budget,propertyId,message\n";
  if (!process.env.DATABASE_URL) {
    return new NextResponse(header, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=daksha-leads.csv",
      },
    });
  }

  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  const rows = leads.map((lead) =>
    [lead.createdAt.toISOString(), lead.type, lead.name, lead.phone, lead.email, lead.budget ?? "", lead.propertyId ?? "", lead.message ?? ""]
      .map((value) => `"${String(value).replaceAll('"', '""')}"`)
      .join(","),
  );

  return new NextResponse(header + rows.join("\n"), {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=daksha-leads.csv",
    },
  });
}
