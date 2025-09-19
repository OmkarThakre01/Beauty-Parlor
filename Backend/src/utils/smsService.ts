import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

interface ISms {
  to: string;
  body: string;
}

export const sendSms = async ({ to, body }: ISms) => {
  const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER || '';

  try {
    const message = await client.messages.create({
      body: body,
      from: TWILIO_PHONE_NUMBER,
      to: to,
    });
    console.log(`SMS sent to ${to}, SID: ${message.sid}`);
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw new Error('Failed to send SMS.');
  }
};