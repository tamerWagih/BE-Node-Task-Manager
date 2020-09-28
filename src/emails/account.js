const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'mrtamerwagih@gmail.com',
    subject: 'Thanks for joining in',
    text: `Welcom to the app, ${name}. let me know how you get a long with the app.`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'mrtamerwagih@gmail.com',
    subject: 'We will miss you',
    text: `Goodbye ${name}. Hoping we support you with valiable service.`,
  });
};

module.exports = {
  sendWelcomeEmail: sendWelcomeEmail,
  sendCancellationEmail: sendCancellationEmail,
};
