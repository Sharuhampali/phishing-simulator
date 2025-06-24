// //File: app/api/phishing/launch/route.ts
// import { NextResponse } from 'next/server';
// import { v4 as uuidv4 } from 'uuid';
// import nodemailer from 'nodemailer';
// import { prisma } from '@/lib/prisma';

// export async function POST(req: Request) {
//   const { email } = await req.json();

//   if (!email) {
//     return NextResponse.json({ error: 'Email is required' }, { status: 400 });
//   }

//   const token = uuidv4();
//   const phishingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/simulate/phishing?token=${token}`;

//   try {
//     await prisma.userInteraction.create({
//       data: {
//         email,
//         token,
//         clickedLink: false,
//       },
//     });

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `"CyberSim" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: 'Security Alert: Action Required',
//       html: `
//         <p>Dear user,</p>
//         <p>We've detected unusual activity in your account. Please <a href="${phishingLink}">click here</a> to secure your account.</p>
//         <p>Thank you,<br/>CyberSim Security Team</p>
//       `,
//     });

//     return NextResponse.json({
//       message: 'Email sent successfully',
//       phishingLink,
//     });
//   } catch (err) {
//     console.error('[EMAIL_SEND_ERROR]', err);
//     let errorMessage = 'Unknown error';
//     if (err instanceof Error && typeof err.message === 'string') {
//       errorMessage = err.message;
//     }
//     return NextResponse.json({ error: errorMessage }, { status: 500 });
//   }
// }
import { NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"
import nodemailer from "nodemailer"
import { prisma } from "@/lib/prisma"

interface LaunchRequest {
  email: string
}

interface LaunchResponse {
  message: string
  phishingLink: string
}

export async function POST(req: Request) {
  try {
    const { email }: LaunchRequest = await req.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const token = uuidv4()
    const phishingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/simulate/phishing?token=${token}`

    // Store the campaign in database
    await prisma.userInteraction.create({
      data: {
        email,
        token,
        clickedLink: false,
      },
    })

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Send phishing email
    await transporter.sendMail({
      from: `"CyberSim Security Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "🔒 URGENT: Security Alert - Action Required",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #dc2626, #b91c1c); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🛡️ Security Alert</h1>
          </div>
          
          <div style="padding: 30px; background-color: #fef2f2; border-left: 4px solid #dc2626;">
            <h2 style="color: #dc2626; margin-top: 0;">Unusual Activity Detected</h2>
            <p style="color: #374151; line-height: 1.6;">
              Dear valued user,
            </p>
            <p style="color: #374151; line-height: 1.6;">
              We've detected unusual login attempts on your account from an unrecognized device. 
              For your security, we've temporarily restricted access to your account.
            </p>
            <p style="color: #374151; line-height: 1.6;">
              <strong>Immediate action required:</strong> Please verify your identity to restore full access.
            </p>
          </div>
          
          <div style="padding: 30px; text-align: center;">
            <a href="${phishingLink}" 
               style="background: linear-gradient(135deg, #dc2626, #b91c1c); 
                      color: white; 
                      padding: 15px 30px; 
                      text-decoration: none; 
                      border-radius: 8px; 
                      font-weight: bold; 
                      display: inline-block;
                      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              🔐 Verify Account Now
            </a>
            <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
              This link will expire in 24 hours for security reasons.
            </p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px; margin: 0; text-align: center;">
              CyberSim Security Team | This is an automated security notification
            </p>
          </div>
        </div>
      `,
    })

    const response: LaunchResponse = {
      message: "Campaign launched successfully",
      phishingLink,
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error("[PHISHING_LAUNCH_ERROR]", error)

    let errorMessage = "Failed to launch campaign"
    if (error instanceof Error) {
      errorMessage = error.message
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
