const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = req.body;

  const content = `
    <h2>${body.name}</h2>
    <h4>${body.contactData}</h4>
    <p>${body.message}</p>
  `;

  const data = {
    to: 'jakub.pisula@wp.pl',
    from: 'biuro@gancle-studio.pl',
    subject: 'Formularz kontaktowy',
    html: content
  };

  mail.send(data);

  res.status(200).json({ status: 'OK' });
};
