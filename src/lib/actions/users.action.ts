"use server";
import User, { IUser } from "../models/users.model";
import { connectToDB } from "../mongoose";

export async function checkUser(email: string) {
  try {
    connectToDB();
    const user = await User.findOne({ email: email });

    return user ? true : false;
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

interface UserData {
  email: string;
  password: string;
}


export async function addUser({ data }: { data: UserData }) {
    try {
      connectToDB();
      const newUser: IUser = new User({
        email: data.email,
        password: data.password,
      });
      await newUser.save();
      return newUser;
    } catch (error: any) {
      throw new Error(`Failed to add user: ${error.message}`);
    }
  }
