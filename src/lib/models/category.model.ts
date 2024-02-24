import mongoose, { Schema, Document } from 'mongoose';

interface ICategory extends Document {
  name: string;
  userId: Schema.Types.ObjectId;
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const Category = mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);

export default Category;