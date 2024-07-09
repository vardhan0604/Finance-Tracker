"use server";
import Account,{IAccount} from "../models/account.model";
import { auth } from "@/auth";

export const createAccount = async (email: string, name: string, balance: number) => {
    try {
        const account = await Account.findOne({  email: email,name:name });    
        if (account) {
            throw new Error("Account already exist found");
        }
        const newAccount: IAccount = new Account({
            email,
            name,
            balance,
        });
        const createdAccount = await newAccount.save();
        console.log(createdAccount)
        const data = JSON.parse(JSON.stringify(createdAccount))
        return data;
    }   
    catch (error: any) {
        throw new Error(`Failed to get account: ${error.message}`);
    }   
}

export const getAccounts= async (accountId: string,email: string)=>{
    try{
        const account = await Account.findOne({ _id: accountId, email: email });    
        if (!account) {
            throw new Error("Account not found");
        }
        const data = JSON.parse(JSON.stringify(account))
        return data;
    }
    catch (error: any) {
        throw new Error(`Failed to get account: ${error.message}`);
    }
}


export const getAllAccounts = async (email: string) => {
    try {
        const accounts = await Account.find({ email: email });
        const data = JSON.parse(JSON.stringify(accounts))
        return data;
    } catch (error: any) {
        throw new Error(`Failed to get accounts : ${error.message}`)
    }
}

export const updateAccount = async (accountId: string, email: string, name?: string, balance?: number) => {
    try {
        const account = await Account.findOne({ _id: accountId, email: email });
        if (!account) {
            throw new Error("Account not found");
        }

        if (name) {
            account.name = name;
        }

        if (balance) {
            account.balance = balance;
        }

        account.updatedAt = Date.now();

        const updatedAccount = await account.save();
        console.log(updatedAccount);
        const data = JSON.parse(JSON.stringify(updatedAccount))

        return data;
    } catch (error: any) {
        throw new Error(`Failed to update account: ${error.message}`);
    }
};

export const deleteAccount = async(accountId: string,email: string)=>{
    try{
        const account = await Account.findOne({ _id: accountId, email: email });
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

export const getUser = async () => {
    let session = await auth();
    if(session?.user?.email) {
        return session?.user?.email;
    }
}