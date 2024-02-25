// 3. **Transactions**:
//     - _id (ObjectId)
//     - userId (ObjectId) (Reference to Users collection)
//     - accountId (ObjectId) (Reference to Accounts collection)
//     - amount (Number)
//     - category (String) (e.g., "Food", "Transportation", "Utilities")
//     - type (String) (e.g., "Income", "Expense")
//     - date (Date)
//     - notes (String)
//     - createdAt (Date)
//     - updatedAt (Date)

import mongoose, { Schema, Document } from 'mongoose';

interface ITransaction extends Document {
    // userId: Schema.Types.ObjectId;
    email: string;
    accountId: Schema.Types.ObjectId;
    amount: number;
    category: string;
    type: string;
    date: Date;
    notes: string;
    createdAt: Date;
    updatedAt: Date;
}

const transactionSchema = new mongoose.Schema({
    // userId: { type: mongoose.Types.ObjectId, ref: 'User'},
    email: { type: String, ref: 'User'},
    accountId: { type: mongoose.Types.ObjectId,  ref: 'Account'},
    amount: {type: Number, required: true},
    category: { type: String, required: true},
    type: { type: String, required: true},
    date: { type: Date, required: true },
    notes: String,
    createdAt:{ type: Date, default: Date.now },
    updatedAt:{ type: Date, default: Date.now }
  });

  const Transaction = mongoose.models.Account || mongoose.model<ITransaction>("Transaction", transactionSchema);

  export default Transaction;