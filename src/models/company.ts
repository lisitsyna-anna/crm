import mongoose from 'mongoose';
import { CategoryType } from './category';
import { CountryType } from './country';

export enum CompanyStatus {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface CompanyType extends mongoose.Document {
  title: string;
  description: string;
  status: CompanyStatus;
  joinedDate: string;
  hasPromotions: boolean;
  category: mongoose.Types.ObjectId;
  country: mongoose.Types.ObjectId;
  avatar?: string;
}

export interface PopulatedCompanyType
  extends Omit<CompanyType, 'category' | 'country'> {
  category: CategoryType;
  country: CountryType;
}

const dateRegexp = /^\d{4}-\d{2}-\d{2}$/;

const companySchema = new mongoose.Schema<CompanyType>(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(CompanyStatus),
      required: true,
    },

    joinedDate: {
      type: String,
      match: dateRegexp,
    },
    hasPromotions: {
      type: Boolean,
      default: false,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Country',
      required: true,
    },
    avatar: {
      type: String,
      default: '',
    },
  },
  { versionKey: false, timestamps: true },
);

const Company =
  mongoose.models?.Company ||
  mongoose.model<CompanyType>('Company', companySchema);

export default Company;
