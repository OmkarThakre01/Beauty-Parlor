// src/routes/booking.ts
import { Router, Request, Response } from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import Booking from '../models/Booking';
import Stylist from '../models/Stylist';
import Service from '../models/Service';
import { IBooking } from '../models/Booking'; // Import the IBooking interface
import { IStylist } from '../models/Stylist'; // Import the IStylist interface

const router = Router();

// Define a custom Request interface that includes the userId
interface AuthRequest extends Request {
  userId?: string;
}

// Function to generate all possible time slots for a day
const generateTimeSlots = (date: Date): Date[] => {
  const slots: Date[] = [];
  const startHour = 9; // 9:00 AM
  const endHour = 18;  // 6:00 PM
  const interval = 30; // 30-minute intervals

  for (let h = startHour; h < endHour; h++) {
    for (let m = 0; m < 60; m += interval) {
      const slot = new Date(date);
      slot.setHours(h, m, 0, 0);
      slots.push(slot);
    }
  }
  return slots;
};

// Route to get available slots for a stylist on a specific date
router.get('/slots/:stylistId/:date', async (req: Request, res: Response) => {
  const { stylistId, date } = req.params;

  try {
    const queryDate = new Date(date);
    const startOfDay = new Date(queryDate.setHours(0, 0, 0, 0));
    const endOfDay = new Date(queryDate.setHours(23, 59, 59, 999));
    
    // Find all booked slots for the stylist on that day
    const bookedSlots = await Booking.find({
      stylist: stylistId,
      date: { $gte: startOfDay, $lte: endOfDay },
      status: { $ne: 'canceled' },
    });
    
    // Generate all possible slots and filter out the booked ones
    const allSlots: Date[] = generateTimeSlots(queryDate);
    const availableSlots = allSlots.filter(
      (slot) => !bookedSlots.some((booked) => booked.date.getTime() === slot.getTime())
    );

    res.json({ availableSlots });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Route to book a new slot
router.post('/book', authMiddleware, async (req: AuthRequest, res: Response) => {
  const { stylistId, serviceId, date } = req.body;

  try {
    const newBooking = new Booking({
      user: req.userId,
      stylist: stylistId,
      service: serviceId,
      date: new Date(date),
    });

    await newBooking.save();
    res.status(201).json({ message: 'Booking successful!', booking: newBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

export default router;