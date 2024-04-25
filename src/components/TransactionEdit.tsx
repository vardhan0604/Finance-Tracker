"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import React, { useState } from 'react'
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { deleteTransaction, getAllTransactions, updateTransaction } from "@/lib/actions/transations.action"
import { useRecoilState } from "recoil"
import { transactionsState, userState } from "@/state/atom"

type Props = {
    id: string;
}

const TransactionEdit = (props: Props) => {
    const [transactions, setTransactions] = useRecoilState(transactionsState) 
    const [user, setUser] = useRecoilState(userState) 
    const [open, setOpen] = useState(false);
    const [account, setAccount] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");

    const ondelete = () => {
        deleteTransaction(props.id);
        getAllTransactions(user).then((t) => {
            setTransactions(t)
          }
          )
          setOpen(false);

    }

    const onEdit = () => {
        console.log(account, amount, category, type);
        updateTransaction(props.id , {account, amount, category, type});
    }   
    return (

        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
            <div className="rounded-md px-3 text-primary underline-offset-4 hover:underline">Edit</div>
            </DialogTrigger>
            <DialogContent>
                <Tabs defaultValue="account" className="w-full pt-4 ">
                    <TabsList className="mb-4">
                        <TabsTrigger value="Update">Edit</TabsTrigger>
                        <TabsTrigger value="Delete">Delete</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Update">
                        <DialogHeader>
                            <DialogTitle>Do you want to Edit the transaction?</DialogTitle>
                            <DialogDescription>
                                <div className="flex flex-col gap-4 mt-6">
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="account" >Account</Label>
                                        <Input id="account" type="text" onChange={(e)=>{setAccount(e.target.value)}} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="Amount">Amount</Label>
                                        <Input id="Amount" type="number" onChange={(e)=>{setAmount(Number(e.target.value))}}/>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="Category">Category</Label>
                                            <Select  onValueChange={setCategory}>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder={"Category"} />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Food">Food</SelectItem>
                                                    <SelectItem value="Clothes">Clothes</SelectItem>
                                                    <SelectItem value="Entertainment">Entertainment</SelectItem>
                                                    <SelectItem value="Rent">Rent</SelectItem>
                                                    <SelectItem value="Subscription">Subscription</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="Type">Type</Label>
                                            <Select onValueChange={setType}>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder={"Expense"} />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Income">Income</SelectItem>
                                                    <SelectItem value="Expense">Expense</SelectItem>
                                                </SelectContent>
                                            </Select>

                                        </div>
                                    </div>

                                    <Button variant="default" onClick={()=>{onEdit()}}>Update</Button>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </TabsContent>
                    <TabsContent value="Delete">
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will delete your transaction
                               from our servers.
                            </DialogDescription>

                            <Button variant="default" onClick={()=>{ondelete()}}>Delete</Button>
                        </DialogHeader>
                    </TabsContent>
                </Tabs>

            </DialogContent>
        </Dialog>

    )
}

export default TransactionEdit
