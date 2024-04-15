"use client"
import { auth } from "@/auth";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { useEffect, useState } from "react";
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"



import { updateAccount, getAllAccounts, deleteAccount } from "@/lib/actions/account.action";

type Props = {
    id: string;
    user: string;
    setAccounts: React.Dispatch<React.SetStateAction<{}>>;
}

const AccountEdit = (props: Props) => {

    const [accountName, setAccountName] = useState("");
    const [amount, setAmount] = useState("")
    const [open, setOpen] = useState(false);
 
    const fetchAccounts = async () => {
        const a = await getAllAccounts(props.user);
        // console.log(a);
        props.setAccounts(a);
    };
    async function handleDelete(e: React.FormEvent) {
        e.preventDefault();
        deleteAccount(props.id,props.user)
        fetchAccounts();
        setOpen(false);
    }
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            const account = await updateAccount(props.id, props.user, accountName, Number(amount));
            setAccountName("");
            setAmount("");
            fetchAccounts();
            setOpen(false);


        } catch (error) {
            setOpen(false);
            console.error("Failed to create account:", (error as Error).message);
        }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen} >
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
                            <DialogTitle>Do you want to Edit the Account?</DialogTitle>
                            <DialogDescription>
                                <div className="flex flex-col gap-4 mt-6">
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="account" >Account Name</Label>
                                        <Input id="account" type="text" onChange={(e) => { setAccountName(e.target.value) }} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="Amount">Amount</Label>
                                        <Input id="Amount" type="number" onChange={(e) => { setAmount(e.target.value) }} />
                                    </div>
                                    <Button variant="default" onClick={(e) => { handleSubmit(e) }} >Update</Button>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </TabsContent>
                    <TabsContent value="Delete">
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will delete your Account
                                from our servers.
                            </DialogDescription>

                            <Button variant="default" onClick={(e)=>{handleDelete(e)}}>Delete</Button>
                        </DialogHeader>
                    </TabsContent>
                </Tabs>

            </DialogContent>
        </Dialog>

    )
}

export default AccountEdit
