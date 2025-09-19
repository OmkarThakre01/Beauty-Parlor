// src/routes/user.ts
import { Router, Request, Response } from 'express';
import User from '../models/User';
import { authMiddleware } from '../middleware/authMiddleware';
import { IUser } from '../models/User'; // Import the new IUser interface
import multer from 'multer';
import path from 'path';

const router = Router();

// Custom interface to include userId from authMiddleware
interface AuthRequest extends Request {
  userId?: string;
}

// Configure Multer for file storage
const storage = multer.diskStorage({
  destination: (req: AuthRequest, file, cb) => {
    cb(null, 'uploads/profiles/');
  },
  filename: (req: AuthRequest, file, cb) => {
    // Use the userId from the authenticated request
    cb(null, req.userId + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Route to update user details
router.put('/profile', authMiddleware, async (req: AuthRequest, res: Response) => {
  const { firstName, lastName, ...rest } = req.body;

  try {
    // Use the correct Mongoose method to find and update
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Update the user properties
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    // ... add other updatable fields here

    await user.save();
    res.json({ message: 'Profile updated successfully.', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Route to upload profile photo
router.post('/profile/photo', authMiddleware, upload.single('profilePhoto'), async (req: AuthRequest, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Save the file path to the user's database record
    user.profilePhoto = `/uploads/profiles/${req.file.filename}`;
    await user.save();

    res.json({ message: 'Profile photo uploaded successfully.', filePath: user.profilePhoto });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

export default router;