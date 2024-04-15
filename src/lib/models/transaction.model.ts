
import mongoose, { Schema, Document } from 'mongoose';

export interface ITransaction extends Document {
    email: string;
    accountName: string;
    amount: number;
    category: string;
    type: string;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
}

const transactionSchema = new mongoose.Schema({
    email: { type: String},
    accountName: { type: String, required: true},
    amount: {type: Number, required: true},
    category: { type: String, required: true},
    type: { type: String, required: true},
    date: { type: Date, default: Date.now},
    // notes: String,
    createdAt:{ type: Date, default: Date.now },
    updatedAt:{ type: Date, default: Date.now }
  });

const Transaction = mongoose.models.Transaction || mongoose.model<ITransaction>("Transaction", transactionSchema);


  export default Transaction;