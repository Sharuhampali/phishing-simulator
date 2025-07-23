// // //File: app/api/phishing/launch/route.ts
// // import { NextResponse } from 'next/server';
// // import { v4 as uuidv4 } from 'uuid';
// // import nodemailer from 'nodemailer';
// // import { prisma } from '@/lib/prisma';

// // export async function POST(req: Request) {
// //   const { email } = await req.json();

// //   if (!email) {
// //     return NextResponse.json({ error: 'Email is required' }, { status: 400 });
// //   }

// //   const token = uuidv4();
// //   const phishingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/simulate/phishing?token=${token}`;

// //   try {
// //     await prisma.userInteraction.create({
// //       data: {
// //         email,
// //         token,
// //         clickedLink: false,
// //       },
// //     });

// //     const transporter = nodemailer.createTransport({
// //       service: 'gmail',
// //       auth: {
// //         user: process.env.EMAIL_USER,
// //         pass: process.env.EMAIL_PASS,
// //       },
// //     });

// //     await transporter.sendMail({
// //       from: `"CyberSim" <${process.env.EMAIL_USER}>`,
// //       to: email,
// //       subject: 'Security Alert: Action Required',
// //       html: `
// //         <p>Dear user,</p>
// //         <p>We've detected unusual activity in your account. Please <a href="${phishingLink}">click here</a> to secure your account.</p>
// //         <p>Thank you,<br/>CyberSim Security Team</p>
// //       `,
// //     });

// //     return NextResponse.json({
// //       message: 'Email sent successfully',
// //       phishingLink,
// //     });
// //   } catch (err) {
// //     console.error('[EMAIL_SEND_ERROR]', err);
// //     let errorMessage = 'Unknown error';
// //     if (err instanceof Error && typeof err.message === 'string') {
// //       errorMessage = err.message;
// //     }
// //     return NextResponse.json({ error: errorMessage }, { status: 500 });
// //   }
// // }
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
// import { NextResponse } from "next/server"
// import { v4 as uuidv4 } from "uuid"
// import nodemailer from "nodemailer"
// import { prisma } from "@/lib/prisma"

// interface LaunchRequest {
//   email: string
// }

// interface LaunchResponse {
//   message: string
//   phishingLink: string
// }

// export async function POST(req: Request) {
//   try {
//     const { email }: LaunchRequest = await req.json()

//     if (!email) {
//       return NextResponse.json({ error: "Email is required" }, { status: 400 })
//     }

//     const token = uuidv4()
//     const phishingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/simulate/phishing?token=${token}`

//     // Store the campaign in database
//     await prisma.userInteraction.create({
//       data: {
//         email,
//         token,
//         clickedLink: false,
//       },
//     })

//     // Configure email transporter
//     const transporter = nodemailer.createTransporter({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     })

//     // Send enhanced phishing email
//     await transporter.sendMail({
//       from: `"Google Security Team" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "🔒 Critical Security Alert - Immediate Action Required",
//       html: `
//         <div style="font-family: 'Google Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
//           <!-- Google Header -->
//           <div style="padding: 20px; border-bottom: 1px solid #dadce0;">
//             <div style="display: flex; align-items: center; gap: 8px;">
//               <div style="width: 32px; height: 32px; background: #4285f4; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
//                 <span style="color: white; font-weight: bold; font-size: 18px;">G</span>
//               </div>
//               <span style="color: #5f6368; font-size: 22px; font-weight: 400;">Google</span>
//             </div>
//           </div>
          
//           <!-- Security Alert -->
//           <div style="padding: 32px 24px; background-color: #fef7e0; border-left: 4px solid #f9ab00;">
//             <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
//               <div style="width: 24px; height: 24px; background: #f9ab00; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
//                 <span style="color: white; font-size: 14px;">⚠</span>
//               </div>
//               <h2 style="color: #ea4335; margin: 0; font-size: 18px; font-weight: 500;">Critical Security Alert</h2>
//             </div>
//             <p style="color: #3c4043; line-height: 1.5; margin: 0;">
//               We detected unusual sign-in activity on your Google Account from an unrecognized device in <strong>Moscow, Russia</strong>.
//             </p>
//           </div>
          
//           <!-- Main Content -->
//           <div style="padding: 32px 24px;">
//             <p style="color: #3c4043; line-height: 1.5; margin: 0 0 16px 0;">
//               Hi,
//             </p>
//             <p style="color: #3c4043; line-height: 1.5; margin: 0 0 16px 0;">
//               Someone just used your password to try to sign in to your Google Account <strong>${email}</strong>.
//             </p>
//             <p style="color: #3c4043; line-height: 1.5; margin: 0 0 24px 0;">
//               <strong>Details:</strong><br>
//               • Time: ${new Date().toLocaleString()}<br>
//               • Location: Moscow, Russia<br>
//               • Device: Unknown Windows PC<br>
//               • IP: 185.220.101.42
//             </p>
//             <p style="color: #3c4043; line-height: 1.5; margin: 0 0 32px 0;">
//               If this was you, you can ignore this email. If not, we recommend you secure your account immediately.
//             </p>
            
//             <!-- CTA Button -->
//             <div style="text-align: center; margin: 32px 0;">
//               <a href="${phishingLink}" 
//                  style="background: #1a73e8; 
//                         color: white; 
//                         padding: 12px 24px; 
//                         text-decoration: none; 
//                         border-radius: 4px; 
//                         font-weight: 500; 
//                         display: inline-block;
//                         font-size: 14px;">
//                 Secure your account
//               </a>
//             </div>
            
//             <p style="color: #5f6368; font-size: 12px; line-height: 1.4; margin: 24px 0 0 0;">
//               You can also secure your account by going to 
//               <a href="${phishingLink}" style="color: #1a73e8;">https://myaccount.google.com/security</a>
//             </p>
//           </div>
          
//           <!-- Footer -->
//           <div style="background-color: #f8f9fa; padding: 24px; border-top: 1px solid #dadce0;">
//             <p style="color: #5f6368; font-size: 12px; margin: 0; text-align: center;">
//               This email was sent to ${email} because it's the recovery email for your Google Account.
//             </p>
//             <p style="color: #5f6368; font-size: 12px; margin: 8px 0 0 0; text-align: center;">
//               © 2024 Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
//             </p>
//           </div>
//         </div>
//       `,
//     })

//     const response: LaunchResponse = {
//       message: "Campaign launched successfully",
//       phishingLink,
//     }

//     return NextResponse.json(response)
//   } catch (error) {
//     console.error("[PHISHING_LAUNCH_ERROR]", error)

//     let errorMessage = "Failed to launch campaign"
//     if (error instanceof Error) {
//       errorMessage = error.message
//     }

//     return NextResponse.json({ error: errorMessage }, { status: 500 })
//   }
// }
