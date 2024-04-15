"use client"
import React, { useState } from 'react'
import TransactionsTable from './transactionsTable'
import { Button } from './ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { createTransactions } from '@/lib/actions/transations.action';

type Props = {
    user: string;
}

const TransactionTable = (props: Props) => {
    const [accountName, setAccountName] = useState("");
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [type, setType] = useState("")
    const [open, setOpen] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log(props.user,accountName,Number(amount), category, type);
        try {
            const transaction = await createTransactions(props.user,  accountName,Number(amount), category, type); 

            setAccountName("");
            setAmount("");
            setCategory("");
            setType("");
            // fetchAccounts();
            setOpen(false);


        } catch (error) {
            setOpen(false);
            console.error("Failed to create transaction:", (error as Error).message);
        }
    }

  return (
    <div className="flex flex-col col-span-1 border-l-2" style={{ height: "inherit" }}>
          <div className="flex justify-between pl-4 pr-4 pt-2">
            <h1 className="text-2xl font-bold text-center mr-2">Your Transactions</h1>
         
            
            <Dialog open={open} onOpenChange={setOpen} >
                    <DialogTrigger className='w-full'>
                        <div className="h-10 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 w-fit items-center">Add
                        </div>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Do you want to Add Account?</DialogTitle>
                            <DialogDescription>
                                <div className="flex flex-col gap-4 mt-6">
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="account" >Account Name</Label>
                                        <Input id="account" type="text" onChange={(e) => { setAccountName(e.target.value) }} />
                                        <Label htmlFor="amount" >Amount</Label>
                                        <Input id="amount" type="number" onChange={(e) => { setAmount(e.target.value) }} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="category">Category</Label>
                                        <Input id="category" type="text" onChange={(e) => { setCategory(e.target.value) }} />
                                        <Label htmlFor="type">Type</Label>
                                        <Input id="type" type="text" onChange={(e) => { setType(e.target.value) }} />
                                    </div>
                                    <Button variant="default" onClick={(e) => { handleSubmit(e) }} >ssss</Button>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
          
          </div>
          <TransactionsTable user={props.user} />
        </div>
  )
}

export default TransactionTable