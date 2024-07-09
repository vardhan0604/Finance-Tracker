"use client"
import React, { useEffect, useState } from 'react'
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
import { createTransactions, getAllTransactions } from '@/lib/actions/transations.action';
import { useRecoilState } from 'recoil';
import { accountsState, transactionsState, userState } from '@/state/atom';
import { getAllAccounts } from '@/lib/actions/account.action';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { IAccount } from '@/lib/models/account.model';

type Props = {
    user: string;
}

const TransactionDialog = (props: Props) => {
    const [accountName, setAccountName] = useState("");
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [type, setType] = useState("")
    const [open, setOpen] = useState(false);
    const [accounts, setAccounts] = useRecoilState(accountsState);
    const [user, setuser] = useRecoilState(userState);
    const [transactions, setTransactions] = useRecoilState(transactionsState)
    const [allAccounts, setAllAccounts] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const itemsPerPage = 10 // Make sure this matches the value in TransactionsTable

    useEffect(() => {
        getAllAccounts(props.user).then((accounts) => {
            const accountNames = accounts.map((account: IAccount) => account.name);
            setAllAccounts(accountNames);
        });
        fetchTransactions();
    }, [props.user]);

    async function handleSubmit(e: any) {
        e.preventDefault();
        try {
            await createTransactions(props.user, accountName, Number(amount), category, type);
            setAccountName("");
            setAmount("");
            setCategory("");
            setType("");
            fetchAccounts();
            setOpen(false);
            fetchTransactions();
        } catch (error) {
            setOpen(false);
            console.error("Failed to create transaction:", (error as Error).message);
        }
    }

    const fetchAccounts = async () => {
        const a = await getAllAccounts(user);
        setAccounts(a);
    };

    const fetchTransactions = async () => {
        const result = await getAllTransactions(props.user, currentPage, itemsPerPage);
        setTransactions(result.transactions);
        setTotalPages(result.totalPages);
    };

    return (
        <div className="flex flex-col col-span-1 border-l-2" style={{ height: "inherit" }}>
            <div className="flex justify-between pl-4 pr-4 pt-2">
                <h1 className="text-2xl font-bold text-center mr-2">Your Transactions</h1>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger>
                        <div className="rounded-md px-3 text-primary underline-offset-4 hover:underline">Add</div>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Do you want add a new transaction?</DialogTitle>
                            <DialogDescription>
                                <div className="flex flex-col gap-8 mt-6">
                                    <div className="flex gap-6 justify-center	">
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="account" >Account</Label>
                                            <Select onValueChange={setAccountName}>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder={"Select Account"} />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {allAccounts.map((account) => (
                                                        <SelectItem key={account} value={account}>{account}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="Amount">Amount</Label>
                                            <Input width={"70%"}  id="Amount" type="number" onChange={(e) => { setAmount(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="flex gap-6 justify-center	">
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="Category">Category</Label>
                                            <Select onValueChange={setCategory}>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder={"Select Category"} />
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
                                                    <SelectValue placeholder={"Select Type"} />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Income">Income</SelectItem>
                                                    <SelectItem value="Expense">Expense</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <Button variant="default" onClick={(e) => { handleSubmit(e) }}>Add</Button>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
            <TransactionsTable 
                user={props.user}
                transactions={transactions}
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                fetchTransactions={fetchTransactions}
            />
        </div>
    )
}

export default TransactionDialog