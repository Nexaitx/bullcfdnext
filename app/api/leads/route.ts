import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import { createLeadSchema } from "../../validationSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createLeadSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newLead = await prisma.lead.create({
    data: {
      name: body.name,
      email: body.email,
      phone: body.phone,
      city: body.city,
    },
  });

  return NextResponse.json(newLead, { status: 201 });
}
