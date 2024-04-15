"use server";

import Account from "../models/account.model";
import Transaction from "../models/transaction.model";
// import Account from "../models/account.model";

interface ITransactionData extends Document {
  email: string;
  accountName: string;
  amount: number;
  category: string;
  type: string;
}

export const createTransactions = async (
  email : string,
  accountName : string,
  amount : number,
  category :    string,
  type : string,
) => {
    // console.log("Inside the createTransactions function");
    // console.log(email,accountName,amount,category,type);
    try {
    const newTransaction = new Transaction({
      email,
      accountName,
      amount,
      category,
      type,
    });

    const createdTransaction = await newTransaction.save();

    const updateAmount = type === "Expense" ? -amount : amount;
    //UPDATE THE ACCOUNT BALANCE

    const account = await Account.findOne({ email: email, name: accountName });
    if (!account) {
      throw new Error("Account not found");
    }
    //IF THE ACCOUNT IS FOUND, UPDATE THE BALANCE
    //ADD THE UPDATED AMOUNT TO THE BALANCE
    account.balance += updateAmount;
    await account.save();

    // await Account.findByIdAndUpdate(
    //     { name: accountName ,email:email},
    //     { $inc: { balance: updateAmount } },
    //     { new: true }
    //   );
  
    console.log("Transaction created:", createdTransaction);
    return createdTransaction;
  } catch (error: any) {
    throw new Error(`Failed to create transaction: ${error.message}`);
  }
};

export const getAllTransactions = async (email: string) => {
  try {
    const transactions = await Transaction.find({ email: email });
    return transactions;
  } catch (error: any) {
    throw new Error(`Failed to update account: ${error.message}`);
  }
};

export const updateTransaction = async (
  transactionId: string,
  updatedData: Partial<ITransactionData>
) => {
  try {
    // Find the transaction by its ID and update it with the provided data
    const originalTransaction = await Transaction.findById(transactionId);

    if (!originalTransaction) {
      throw new Error("Transaction not found");
    }

    // Get the original amount of the transaction
    const originalAmount = originalTransaction.amount;

    // Update the transaction
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      transactionId,
      updatedData,
      { new: true }
    );

    if (!updatedTransaction) {
      throw new Error("Failed to update transaction");
    }

    // If the amount has changed, update the account balance
    // if (updatedData.amount && updatedData.amount !== originalAmount) {
    //   const amountDifference = updatedData.amount - originalAmount;
    //   await Account.findByIdAndUpdate(
    //     updatedTransaction.accountId,
    //     { $inc: { balance: amountDifference } },
    //     { new: true }
    //   );
    // }

    console.log("Transaction updated:", updatedTransaction);
    return updatedTransaction;
  } catch (error: any) {
    throw new Error(`Failed to update transaction: ${error.message}`);
  }
};

export const deleteTransaction = async (transactionId: string) => {
  try {
    const transaction = await Transaction.findById(transactionId);
    if (!transaction) {
      throw new Error("Account not found");
    }
    await Transaction.deleteOne({ _id: transactionId });
  } catch (error: any) {
    throw new Error(`Failed to update account: ${error.message}`);
  }
};

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

export async function generatePseudoTransactions(email: String) {
  // console.log("Inside the generatePseudoTransactions function");
  const currentDate = new Date(); // Current date
  const startDate = new Date(currentDate); // Start date for the past 4 weeks
  startDate.setDate(startDate.getDate() - 28); // Subtract 28 days for 4 weeks

  // Loop through each day for the last 4 weeks
  for (
    let date = new Date(startDate);
    date <= currentDate;
    date.setDate(date.getDate() + 1)
  ) {
    // Generate pseudo transactions for each day
    const pseudoTransactions = generatePseudoTransactionsForDay(date, email);
    console.log(pseudoTransactions);

    // Insert pseudo transactions into the database
    await Transaction.insertMany(pseudoTransactions);
  }

  console.log(
    "Pseudo transactions generated and added to the database successfully."
  );
}

// Function to generate pseudo transactions for a specific day
function generatePseudoTransactionsForDay(date: Date, email: String) {
  // Assuming you want to generate random amounts and categories
  const categories = [
    "Food",
    "Transportation",
    "Utilities",
    "Shopping",
    "Entertainment",
  ];
  const types = ["Expense", "Income"];

  // Generate a random number of transactions for the day (you can adjust this range as needed)
  const numTransactions = Math.floor(Math.random() * 5) + 1;

  const pseudoTransactions = [];
  for (let i = 0; i < numTransactions; i++) {
    const amount = Math.floor(Math.random() * 1000) + 1; // Random amount between 1 and 1000
    const category = categories[Math.floor(Math.random() * categories.length)]; // Random category
    const type = types[Math.floor(Math.random() * types.length)]; // Random type
    const notes = "Generated pseudo transaction";
    const createdAt = new Date(date); // Set createdAt to the specific day

    // Create pseudo transaction object
    const pseudoTransaction = {
      email,
      amount,
      category,
      type,
      date,
      notes,
      createdAt,
      updatedAt: createdAt, // Assuming updatedAt is the same as createdAt initially
    };

    pseudoTransactions.push(pseudoTransaction);
  }

  return pseudoTransactions;
}
