//            **Accounts**:
//     - _id (ObjectId)
//     - userId (ObjectId) (Reference to Users collection)
//     - name (String) (e.g., "Main Account", "Savings Account")
//     - balance (Number)
//     - createdAt (Date)
//     - updatedAt (Date)



import mongoose, { Schema, Document } from 'mongoose'
import User from './users.model';
export interface IAccount extends Document {
    // accountId: Schema.Types.ObjectId;
    email: string;
    name: string;
    balance: number;
    createdAt: Date;
    updatedAt: Date;
}
const accountSchema = new mongoose.Schema({
    //  accountId: { type: mongoose.Types.ObjectId, required: true},/
    email: { type: String,ref:User, required: true},
    name: { type: String, required: true},
    balance: {type: Number, required: true},
    createdAt:{ type: Date, default: Date.now },
    updatedAt:{ type: Date, default: Date.now }
  });

  const Account = mongoose.models.Account || mongoose.model<IAccount>("Account", accountSchema);

  export default Account;