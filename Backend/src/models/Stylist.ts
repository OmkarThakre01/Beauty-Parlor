import { Schema, model, Document } from 'mongoose';

export interface IStylist extends Document {
  name: string;
  specialty: string;
}

const stylistSchema = new Schema<IStylist>({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
});

const Stylist = model<IStylist>('Stylist', stylistSchema);

export default Stylist;