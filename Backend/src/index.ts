// src/index.ts

import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

// Import database connection
import connectDB from './config/db';

// Import routes
import authRoutes from './routes/auth';
import userRoutes from './routes/user';
import bookingRoutes from './routes/booking';
import adminRoutes from './routes/admin';

// Initialize environment variables
dotenv.config();

// Initialize express app
const app = express();

// Connect to database
connectDB();

// --- Middleware Setup ---
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// --- Static File Serving ---
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// --- Main API Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/admin', adminRoutes);

// Test route
app.get('/api/test', (req, res) => {
  res.send('API is working ✅');
});

// Server listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});