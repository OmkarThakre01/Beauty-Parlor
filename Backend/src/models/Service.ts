import { Schema, model, Document } from 'mongoose';

export interface IService extends Document {
  name: string;
  description: string;
  price: number;
  duration: number; // Duration in minutes
}

const serviceSchema = new Schema<IService>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
});

const Service = model<IService>('Service', serviceSchema);

export default Service;