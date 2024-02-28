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

export const updateAccount = async (accountId: string, name?: string, balance?: number) => {
    try {
        const account = await Account.findById(accountId);
        if (!account) {
            throw new Error("Account not found");
        }

        if (name) {
            account.name = name;
        }

        if (balance) {
            account.balance = balance;
        }

        const updatedAccount = await account.save();
        console.log(updatedAccount);
        return updatedAccount;
    } catch (error: any) {
        throw new Error(`Failed to update account: ${error.message}`);
    }
};

export const deleteAccount = async(accountId: string)=>{
    try{
        const account = await Account.findById(accountId);
        if (!account) {
            throw new Error("Account not found");
        }
        await Account.deleteOne({ _id: accountId });
        // console.log("Account deleted");
    }catch(error:any){
        throw new Error(`Failed to update account: ${error.message}`);
    }
}

export const deductAmount = async (accountId: string, deductAmount: number) => {
    try {
        const account = await Account.findById(accountId);
        if (!account) {
            throw new Error("Account not found");
        }
        account.balance -= deductAmount

        await account.save();
    } catch (error: any) {
        throw new Error(`Failed to add user: ${error.message}`);
    }
}