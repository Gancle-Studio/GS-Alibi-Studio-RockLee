import type { NextApiRequest, NextApiResponse } from 'next';
import { render } from '@react-email/render';
import EmailTemplate from '../../../emails/EMailTemplate';
import { sendEmail } from 'lib/email';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;

  await sendEmail({
    to: 'alibi@alibistudio.pl',
    subject: `Nowa wiadomość od ${body.name}`,
    html: render(
      EmailTemplate({
        name: body.name,
        contact: body.contactData,
        message: body.message
      })
    )
  });

  return res.status(200).json({ message: 'Email sent successfully' });
}
