import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const token = uuidv4();
  const phishingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/simulate/phishing?token=${token}`;

  try {
    await prisma.userInteraction.create({
      data: {
        email,
        token,
        clickedLink: false,
      },
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"CyberSim" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Security Alert: Action Required',
      html: `
        <p>Dear user,</p>
        <p>We've detected unusual activity in your account. Please <a href="${phishingLink}">click here</a> to secure your account.</p>
        <p>Thank you,<br/>CyberSim Security Team</p>
      `,
    });

    return NextResponse.json({
      message: 'Email sent successfully',
      phishingLink,
    });
  } catch (err) {
    console.error('[EMAIL_SEND_ERROR]', err);
    let errorMessage = 'Unknown error';
    if (err instanceof Error && typeof err.message === 'string') {
      errorMessage = err.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
