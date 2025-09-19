// src/models/User.ts
import { Schema, model, Document } from 'mongoose';
import { IBooking } from './Booking'; // You will create this later

// Define the interface for a Mongoose document
export interface IUser extends Document {
  email: string;
  mobile: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  profilePhoto?: string;
  isVerified: boolean;
  otp?: string;
  otpExpires?: Date;
  bookings: IBooking[];
  role: 'user' | 'admin';
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    profilePhoto: { type: String, required: false },
    isVerified: { type: Boolean, default: false },
    otp: { type: String },
    otpExpires: { type: Date },
    bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>('User', userSchema);

export default User;