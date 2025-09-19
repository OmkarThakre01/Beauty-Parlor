import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '';
sgMail.setApiKey(SENDGRID_API_KEY);

interface IEmail {
  to: string;
  subject: string;
  text: string;
  html: string;
}

export const sendEmail = async ({ to, subject, text, html }: IEmail) => {
  const SENDER_EMAIL = process.env.SENDER_EMAIL || 'default@email.com';
  const msg = {
    to,
    from: SENDER_EMAIL,
    subject,
    text,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${to}`);
  } catch (error: any) {
    console.error('Error sending email:', error.response.body);
    throw new Error('Failed to send email.');
  }
};