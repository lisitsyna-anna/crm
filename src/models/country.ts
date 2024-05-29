import mongoose from 'mongoose';

export interface CountryType extends mongoose.Document {
  title: string;
}

const countrySchema = new mongoose.Schema<CountryType>(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

const Country =
  mongoose.models.Country ||
  mongoose.model<CountryType>('Country', countrySchema);

export default Country;
