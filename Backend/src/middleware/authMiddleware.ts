// src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Extend the Request object with our custom types
interface AuthRequest extends Request {
  userId?: string;
  role?: string;
}

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Authorization token not found.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string, role: string };
    req.userId = decoded.userId;
    req.role = decoded.role;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
};