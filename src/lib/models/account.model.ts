//            **Accounts**:
//     - _id (ObjectId)
//     - userId (ObjectId) (Reference to Users collection)
//     - name (String) (e.g., "Main Account", "Savings Account")
//     - balance (Number)
//     - createdAt (Date)
//     - updatedAt (Date)



import mongoose, { Schema, Document } from 'mongoose'
interface IAccount extends Document {
    userId: Schema.Types.ObjectId;
    name: string;
    balance: number;
    createdAt: Date;
    updatedAt: Date;
}
const accountSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, required: true},
    name: { type: String, required: true},
    balance: {type: Number, required: true},
    createdAt:{ type: Date, default: Date.now },
    updatedAt:{ type: Date, default: Date.now }
  });

  const Account = mongoose.models.Account || mongoose.model<IAccount>("Account", accountSchema);

  export default Account;