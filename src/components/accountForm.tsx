"use client"
import { auth } from "@/auth";
import { createAccount, getAllAccounts } from "@/lib/actions/account.action";
import { IAccount } from "@/lib/models/account.model";
import { useEffect, useState } from "react";
import AccountCards from "./UI/AccountCards";
interface Props {
    user: string;
  }
export default function AccountForm({ user }: Props) {
    const [accountName, setAccountName] = useState("");
    const [amount, setAmount] = useState(""); 
    const [accounts, setAccounts] = useState<IAccount[]>([]);
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            const account = await createAccount(user, accountName, parseFloat(amount));
            console.log("Account created:", account);
            setAccountName("");
            setAmount("");

            fetchAccounts();
        } catch (error) {
            console.error("Failed to create account:", (error as Error).message);
        }
    }

    const fetchAccounts = async () => {
        const accounts = await getAllAccounts();
        setAccounts(accounts);
    };

    useEffect(() => {
        fetchAccounts();
    }, []);

    return (
        <div>
        
        <div>
            <AccountCards accounts={accounts} setAccounts={setAccounts}/>
        </div>
          
       <div>
        <form >
            <input type="text" value={accountName} onChange={(e) => { setAccountName(e.target.value) }} />
            <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} /> 
            <button onClick={(e) => {handleSubmit(e)}}>Add account</button>
          </form>
       </div>
  
      </div>
    );
}
