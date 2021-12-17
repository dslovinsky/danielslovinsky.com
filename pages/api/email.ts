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

  const {name, email, subject, message} = JSON.parse(req.body) as EmailType;

  const content = `Name: ${name}\n Email: ${email}\n Message: ${message}`;

  const data = {
    to: process.env.PERSONAL_EMAIL,
    from: 'contact@danielslovinsky.com',
    subject: subject ? subject : 'No Subject',
    text: content,
    html: content.replace(/\n/g, '<br>'),
  };

  const send = async () => {
    try {
      await sgMail.send(data);
    } catch (e) {
      console.error(e);

      // @ts-expect-error: catch err is unknown
      if (e.response) {
        // @ts-expect-error: catch err is unknown
        console.error(e.response.body);
      }

      res.status(500).end();
    }
  };

  await send();

  res.status(200).json({status: 'success'});
}
