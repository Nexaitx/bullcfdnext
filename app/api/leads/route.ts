import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/prisma/client";

const createLeadSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.email().min(1).max(255),
  phone: z.string().min(9).max(15),
  city: z.string().min(1).max(255),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createLeadSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error, { status: 400 });

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
