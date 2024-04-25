"use client"
import React, { use, useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import TransactionRow from './TransactionRow'
import { getAllTransactions } from '@/lib/actions/transations.action'
import { useRecoilState } from 'recoil'
import { transactionsState, userState } from '@/state/atom'


type Props = {
  user: string;
}

const TransactionsTable = (props: Props) => {
   
  //create state transaction which stores array of transactions and it should have the type of transaction array
  const [transactions, setTransactions] = useRecoilState(transactionsState) 
  const [user, setUser] = useRecoilState(userState) 






  console.log(props.user)

  useEffect(() => {
    getAllTransactions(user).then((t) => {
      setTransactions(t)
    }
    )
  }
  ,[])

  console.log(transactions)

  return (
    <ScrollArea className="h-full">
      <Table>
        <TableCaption>A list of your recent transactions</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='text-left'>Account</TableHead>
            <TableHead className='text-left'>Amount</TableHead>
            <TableHead className='text-left'>Category</TableHead>
            <TableHead className='text-left'> Type</TableHead>
            <TableHead className='text-left'> </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction: any) => (
            <TransactionRow
              id={transaction._id}
              Account={transaction.accountName}
              Amount={transaction.amount}
              Category={transaction.category}
              Type={transaction.type}
            />
          ))}
        </TableBody>
      </Table>
    </ScrollArea>

  )
}



export default TransactionsTable;