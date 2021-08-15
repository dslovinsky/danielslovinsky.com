import {NextApiRequest, NextApiResponse} from 'next';
import sgMail from '@sendgrid/mail';

import {Email as EmailType} from '@interfaces/email';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function Email(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  if (!req.body) {
    res.status(400).end();
  }

  const body = JSON.parse(req.body) as EmailType;

  const message = `Name: ${body.name}\n Email: ${body.email}\n Message: ${body.message}`;

  const data = {
    to: process.env.PERSONAL_EMAIL,
    from: 'contact@danielslovinsky.com',
    subject: body.subject,
    text: message,
    html: message.replace(/\n/g, '<br>'),
  };

  const send = async () => {
    try {
      await sgMail.send(data);
    } catch (e) {
      console.error(e);

      if (e.response) {
        console.error(e.response.body);
      }

      res.status(500).end();
    }
  };

  await send();

  res.status(200).json({status: 'success'});
}
