import mongoose, { Schema, Document } from 'mongoose';
import User from './users.model';

interface ICategory extends Document {
  name: string;
  email: string;
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, ref: User, required: true },
});

const Category = mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);

export default Category;