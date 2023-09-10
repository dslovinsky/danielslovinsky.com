/* eslint-disable import/prefer-default-export */
import sgMail, { type ResponseError } from '@sendgrid/mail';
import { type NextRequest, NextResponse } from 'next/server';

import type { ContactFormData } from 'components/Contact/ContactForm';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const POST = async (req: NextRequest) => {
  const { name, email, subject, message } = (await req.json()) as ContactFormData;

  const content = `Name: ${name}\n Email: ${email}\n Message: ${message}`;

  const data = {
    to: process.env.PERSONAL_EMAIL,
    from: 'contact@danielslovinsky.com',
    subject,
    text: content,
    html: content.replace(/\n/g, '<br>'),
  };

  const send = async () => {
    try {
      await sgMail.send(data);
    } catch (e) {
      console.error(e);

      const response = (e as ResponseError).response;
      if (response) {
        console.error(response.body);
      }

      return NextResponse.error();
    }
  };

  await send();

  return NextResponse.json({ status: 'success' });
};
