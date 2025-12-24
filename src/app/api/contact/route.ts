/* eslint-disable import/prefer-default-export */
import { type NextRequest, NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

import type { ContactFormData } from 'components/Contact/ContactForm';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const POST = async (req: NextRequest) => {
  const { name, email, subject, message } = (await req.json()) as ContactFormData;

  const content = `Name: ${name}\n Email: ${email}\n Message: ${message}`;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Contact Form Submission: ${subject}`,
      text: content,
      html: content.replace(/\n/g, '<br>'),
    });

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Email sending error:', error);

    return NextResponse.error();
  }
};
