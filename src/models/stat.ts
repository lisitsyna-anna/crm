import mongoose from 'mongoose';

export interface StatType extends mongoose.Document {
  promotions: number;
  categories: number;
  newCompanies: number;
  activeCompanies: number;
}

const statSchema = new mongoose.Schema<StatType>(
  {
    promotions: {
      type: Number,
      required: true,
    },
    categories: {
      type: Number,
      required: true,
    },
    newCompanies: {
      type: Number,
      required: true,
    },
    activeCompanies: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

const Stat =
  mongoose.models.Stat || mongoose.model<StatType>('Stat', statSchema);

export default Stat;
