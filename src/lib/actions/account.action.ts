"use server";
import Account,{IAccount} from "../models/account.model";
// import { IAccount } from "../models/account.model";

export const createAccount = async (email: string, name: string, balance: number) => {
    try{
        const newAccount: IAccount = new Account({
            email,
            name,
            balance,
        });
        // await newAccount.save();
        const createdAccount = await newAccount.save();
        console.log(createdAccount)
        return createdAccount;
    }catch(error:any){
        throw new Error(`Failed to add user: ${error.message}`)
    }
};

export const getAllAccounts= async()=>{
    try{
        const accounts = await Account.find();
        return accounts;
    }catch(error:any){
        throw new Error(`Failed to update user : ${error.message}`)
    }
}
