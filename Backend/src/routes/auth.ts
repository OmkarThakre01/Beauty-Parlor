// src/routes/auth.ts
import { Router, Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sendEmail } from '../utils/emailService'; // Import the email service
import { sendSms } from '../utils/smsService';   // Import the SMS service

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Route: Send OTP
router.post('/send-otp', async (req: Request, res: Response) => {
  const { email, mobile } = req.body;

  if (!email || !mobile) {
    return res.status(400).json({ message: 'Email and mobile are required.' });
  }

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ email, mobile });
    }

    const otp = generateOTP();
    user.otp = otp;
    user.otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
    await user.save();

    // Send OTP via both email and SMS
    await sendEmail({
      to: email,
      subject: 'Parlor Website OTP Verification',
      text: `Your OTP for parlor website is: ${otp}`,
      html: `<p>Your OTP for parlor website is: <strong>${otp}</strong></p>`,
    });

    await sendSms({
      to: mobile,
      body: `Your OTP for parlor website is: ${otp}`,
    });

    res.status(200).json({ message: 'OTP sent successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please check your credentials.' });
  }
});

// ... (keep the other routes like /verify-otp and /login as they are)

export default router;