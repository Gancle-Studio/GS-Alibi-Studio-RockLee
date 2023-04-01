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
    to: 'sz.chwila@gmail.com',
    from: 'biuro@gancle-studio.pl',
    subject: 'Tytul maili ze stronki alibi',
    html: content
  };

  mail.send(data);

  res.status(200).json({ status: 'OK' });
};
