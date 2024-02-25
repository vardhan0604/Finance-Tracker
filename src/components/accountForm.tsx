"use client"
import { auth } from "@/auth";
import { createAccount } from "@/lib/actions/account.action";
import { useState } from "react";
interface Props {
    user: string;
  }
export default function AccountForm({ user }: Props) {
    const [accountName, setAccountName] = useState("");
    const [amount, setAmount] = useState(""); 
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        
        try {
            const account = await createAccount(user, accountName, parseFloat(amount));
            console.log("Account created:", account);
            setAccountName("");
            setAmount("");
        } catch (error) {
            console.error("Failed to create account:", (error as Error).message);
        }
    }

    return (
        <div>
        <h2>hello</h2>
        
          <form >
            <input type="text" value={accountName} onChange={(e) => { setAccountName(e.target.value) }} />
            <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} /> 
            <button onClick={(e) => {handleSubmit(e)}}>Add account</button>
          </form>
       
  
      </div>
    );
}
