/* eslint-disable import/prefer-default-export */
import sgMail, { type ResponseError } from '@sendgrid/mail';
import { type NextRequest, NextResponse } from 'next/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const POST = async (request: NextRequest) => {
  const formData = await request.formData();

  const name = `${formData.get('name') || 'No name'}`;
  const email = `${formData.get('email') || 'No email'}`;
  const subject = `${formData.get('subject') || 'No subject'}`;
  const message = `${formData.get('message') || 'No message'}`;

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
