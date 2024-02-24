// 4. **Budgets**:
//     - _id (ObjectId)
//     - userId (ObjectId) (Reference to Users collection)
//     - category (String)
//     - amount (Number)
//     - createdAt (Date)
//     - updatedAt (Date)

import mongoose, { Schema, Document } from 'mongoose';

interface IBudget extends Document {
  userId: Schema.Types.ObjectId;
  category: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}

const budgetSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Budget = mongoose.models.Budget || mongoose.model<IBudget>('Budget', budgetSchema);

export default Budget;