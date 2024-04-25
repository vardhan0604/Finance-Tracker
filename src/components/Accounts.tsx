"use client"
import React, { useEffect, useState } from 'react'
import Account from './Account'
import { Button } from './ui/button'
import { createAccount, getAllAccounts } from "@/lib/actions/account.action";
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
import { generatePseudoTransactions } from '@/lib/actions/transations.action';
import { useRecoilState } from 'recoil';
import { accountsState, userState } from '@/state/atom';


type Props = {
    user: string;
}

const Accounts = (props: Props) => {

    const [user, setUser] = useRecoilState(userState);
    setUser(props.user);

    const [accounts, setAccounts] = useRecoilState(accountsState);
    const [accountName, setAccountName] = useState("");
    const [amount, setAmount] = useState("")
    const [open, setOpen] = useState(false);


    const fetchAccounts = async () => {
        const a = await getAllAccounts(user);
        setAccounts(a);
    };

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            const account = await createAccount(user, accountName, Number(amount));
            setAccountName("");
            setAmount("");
            fetchAccounts();
            setOpen(false);


        } catch (error) {
            setOpen(false);
            console.error("Failed to create account:", (error as Error).message);
        }
    }

    useEffect(() => {
        fetchAccounts();
        // console.log(props.user)

//    generatePseudoTransactions(props.user);

    }, []);

    return (
        <div>
            <div className="pt-3 pb-2 text-xl font-extrabold" >
                Accounts :
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
                {Object.values(accounts).map((account: any) => (
                    <Account
                    key={account._id}
                        AccountName={account.name}
                        AccountAmount={account.balance}
                        user={user}
                        setAccounts={setAccounts}
                        id={account._id}
                    />
                ))}


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
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="Amount">Amount</Label>
                                        <Input id="Amount" type="number" onChange={(e) => { setAmount(e.target.value) }} />
                                    </div>
                                    <Button variant="default" onClick={(e) => { handleSubmit(e) }} >Add</Button>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            </div>


        </div>

    )
}

export default Accounts
