import mongoose from 'mongoose';
import { CompanyType } from './company';

export interface SaleType extends mongoose.Document {
  company: mongoose.Schema.Types.ObjectId;
  sold: number;
  income: number;
}

export interface PopulatedSaleType extends Omit<SaleType, 'company'> {
  company: CompanyType;
}

const saleSchema = new mongoose.Schema<SaleType>(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
    sold: {
      type: Number,
      required: true,
    },
    income: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

const Sale =
  mongoose.models.Sale || mongoose.model<SaleType>('Sale', saleSchema);

export default Sale;
