import mongoose from 'mongoose';
import { CompanyType } from './company';

export interface PromotionType extends mongoose.Document {
  title: string;
  description: string;
  discount: number;
  company: mongoose.Types.ObjectId;
  avatar?: string;
}

export interface PopulatedPromotionType extends Omit<PromotionType, 'company'> {
  company: CompanyType;
}

const promotionSchema = new mongoose.Schema<PromotionType>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    company: {
      type: mongoose.Schema.ObjectId,
      ref: 'Company',
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

const Promotion =
  mongoose.models.Promotion ||
  mongoose.model<PromotionType>('Promotion', promotionSchema);

export default Promotion;
