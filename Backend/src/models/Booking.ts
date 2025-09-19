import { Schema, model, Document } from 'mongoose';

export interface IBooking extends Document {
  user: Schema.Types.ObjectId;
  stylist: Schema.Types.ObjectId;
  service: Schema.Types.ObjectId;
  date: Date;
  status: 'pending' | 'confirmed' | 'canceled';
}

const bookingSchema = new Schema<IBooking>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  stylist: { type: Schema.Types.ObjectId, ref: 'Stylist', required: true },
  service: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'canceled'], default: 'pending' },
}, {
  timestamps: true,
});

const Booking = model<IBooking>('Booking', bookingSchema);

export default Booking;