import mongoose from 'mongoose';

export interface CategoryType extends mongoose.Document {
  title: string;
}

const categorySchema = new mongoose.Schema<CategoryType>(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

const Category =
  mongoose.models.Category ||
  mongoose.model<CategoryType>('Category', categorySchema);

export default Category;
