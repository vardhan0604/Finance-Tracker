//     **Users**:
// - _id (ObjectId)
// - email (String)
// - password (String) (hashed)
// - createdAt (Date)
// - updatedAt (Date)

import mongoose, { Schema, Document } from "mongoose";
export interface IUser extends Document {
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
