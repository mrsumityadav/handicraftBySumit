import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: string;
  subCategory?: string;
  material: string;
  images: string[];
  featured: boolean;
  active: boolean;
  customizationAvailable: boolean;
  dimensions?: string;
  finish?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
    category: { type: String, required: true, index: true },
    subCategory: { type: String, index: true },
    material: { type: String, required: true, index: true },
    images: [{ type: String, required: true }],
    featured: { type: Boolean, default: false, index: true },
    active: { type: Boolean, default: true, index: true },
    customizationAvailable: { type: Boolean, default: true },
    dimensions: { type: String, default: 'Customizable on B2B request' },
    finish: { type: String, default: 'Hand-polished antique artisan finish' },
  },
  { timestamps: true }
);

export const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);