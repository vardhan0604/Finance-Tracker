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

export const getTransaction= async (transactionId: string) => {
  try {
    const transaction = await Transaction.findById(transactionId);
    if (!transaction) {
      throw new Error("Transaction not found");
    }
    const data = JSON.parse(JSON.stringify(transaction))
    return data;
  } catch (error: any) {
    throw new Error(`Failed to get transaction: ${error.message}`);
  }
}

// export const getAllTransactions = async (email: string) => {
//   try {
//     const transactions = await Transaction.find({ email: email });
//     const data = JSON.parse(JSON.stringify(transactions))
//     return data;
//   } catch (error: any) {
//     throw new Error(`Failed to update account: ${error.message}`);
//   }
// };

export const getAllTransactions = async (
  email: string,
  page: number = 1,
  limit: number = 10
) => {
  try {
    const skip = (page - 1) * limit;
    
    const data = await Transaction.find({ email: email })
      .skip(skip)
      .limit(limit)
      .lean();
    
    const totalCount = await Transaction.countDocuments({ email: email });
    
    const totalPages = Math.ceil(totalCount / limit);
    const transactions = JSON.parse(JSON.stringify(data))
    return {
      transactions,
      currentPage: page,
      totalPages,
      totalCount
    };
  } catch (error: any) {
    throw new Error(`Failed to fetch transactions: ${error.message}`);
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
    const data = JSON.parse(JSON.stringify(updatedTransaction))

    return data;
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

export async function generatePseudoTransactions(email: string) {
  const currentDate = new Date();
  const startDate = new Date(currentDate);
  startDate.setDate(startDate.getDate() - 28);

  for (let date = new Date(startDate); date <= currentDate; date.setDate(date.getDate() + 1)) {
    const pseudoTransactions = generatePseudoTransactionsForDay(date, email);
    console.log(pseudoTransactions);

    await Transaction.insertMany(pseudoTransactions);
  }

  console.log("Pseudo transactions generated and added to the database successfully.");
}

function generatePseudoTransactionsForDay(date: Date, email: string) {
  const categories = ['Food', 'Clothes', 'Entertainment', 'Rent', 'Subscription'];
  const types = ["Expense", "Income"];
  const accounts = ['Kotak', 'PNB'];
  const numTransactions = Math.floor(Math.random() * 5) + 1;

  const pseudoTransactions = [];
  for (let i = 0; i < numTransactions; i++) {
    const amount = parseFloat((Math.random() * 1000).toFixed(2));
    const category = categories[Math.floor(Math.random() * categories.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const accountName = accounts[Math.floor(Math.random() * accounts.length)];
    const createdAt = new Date(date);

    const pseudoTransaction = {
      email,
      accountName,
      amount,
      category,
      type,
      date: createdAt,
      notes: "Generated pseudo transaction",
      createdAt,
      updatedAt: createdAt,
    };

    pseudoTransactions.push(pseudoTransaction);
  }

  return pseudoTransactions;
}


export const getTotalTransactionsperCategory = async (email: string) => {
  try {
    const transactions = await Transaction.aggregate([
      { $match: { email: email } },
      { $group: { _id: "$category", totalAmount: { $sum: "$amount" } } },
    ]);

    return transactions;
    
  } catch (error: any) {
    throw new Error(`Failed to get transactions: ${error.message}`);
  }
};
