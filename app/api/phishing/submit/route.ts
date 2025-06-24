//File: app/api/phishing/submit/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { email, password, token } = await req.json();

  if (!email || !password || !token) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    // Store the credentials in the database
    await prisma.userInteraction.create({
      data: {
        email,       // ← You must have added this field in schema.prisma
        token,
        clickedLink: true,
      },
    });

    return NextResponse.json({ message: "Credentials recorded" });
  } catch (error) {
    console.error("[PHISHING_SUBMIT_ERROR]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
