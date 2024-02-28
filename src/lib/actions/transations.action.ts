"use server";

import { Schema } from "mongoose";
import Transaction ,{ITransaction}from "../models/transaction.model";

interface ITransactionData extends Document{
        email: string;
        accountId: Schema.Types.ObjectId;
        amount: number;
        category: string;
        type: string;
        date: Date;
        notes: string;
}

export const createTransactions = async ({ email, accountId, amount, category, type, date, notes }: ITransactionData) => {
    try {
        const newTransaction: ITransaction = new Transaction({
            email,
            accountId,
            amount,
            category,
            type,
            date,
            notes,
        });
        const createdTransaction = await newTransaction.save();
        console.log(createTransactions);
        return createTransactions;
    } catch (error: any) {
        throw new Error(`Failed to update account: ${error.message}`);
    }
}


export const getAllTransactions=async(email :string)=>{
    try{
        const transactions = await Transaction.find({ email: email });
        return transactions;
    }catch(error:any){
        throw new Error(`Failed to update account: ${error.message}`);
    }
}

export const updateTransaction=async(transactionId :string)=>{
    try{

    }catch(error:any){
        throw new Error(`Failed to update account: ${error.message}`);
    }
}

export const deleteTransaction=async(transactionId :string)=>{
    try{
        const transaction= await Transaction.findById(transactionId);
        if(!transaction){
            throw new Error("Account not found");
        }
        await Transaction.deleteOne({_id: transactionId})
        
    }catch(error:any){
        throw new Error(`Failed to update account: ${error.message}`);
    }
}



// export interface ITransaction extends Document {
//     // userId: Schema.Types.ObjectId;
//     email: string;
//     accountId: Schema.Types.ObjectId;
//     amount: number;
//     category: string;
//     type: string;
//     date: Date;
//     notes: string;
//     createdAt: Date;
//     updatedAt: Date;
// }