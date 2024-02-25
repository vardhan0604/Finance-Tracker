// 4. **Budgets**:
//     - _id (ObjectId)
//     - userId (ObjectId) (Reference to Users collection)
//     - category (String)
//     - amount (Number)
//     - createdAt (Date)
//     - updatedAt (Date)

import mongoose, { Schema, Document } from 'mongoose';
import User from './users.model';

interface IBudget extends Document {
  // userId: Schema.Types.ObjectId;
  email: string;
  category: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}

const budgetSchema = new mongoose.Schema({
  email: { type: String, ref: User, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Budget = mongoose.models.Budget || mongoose.model<IBudget>('Budget', budgetSchema);

export default Budget;