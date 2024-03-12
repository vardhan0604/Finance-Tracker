import React from 'react'
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

type Props = {}

const TransactionsTable = (props: Props) => {
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
          <TableHead className='text-left'>Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TransactionRow Account="Kotak" Amount="1221" Category="Food" Type="Expense"/>
        <TransactionRow Account="Kotak" Amount="1221" Category="Food" Type="Expense"/>
        <TransactionRow Account="Kotak" Amount="1221" Category="Food" Type="Expense"/>
        <TransactionRow Account="Kotak" Amount="1221" Category="Food" Type="Expense"/>
        <TransactionRow Account="Kotak" Amount="1221" Category="Food" Type="Expense"/>
        <TransactionRow Account="Kotak" Amount="1221" Category="Food" Type="Expense"/>
        <TransactionRow Account="Kotak" Amount="1221" Category="Food" Type="Expense"/>
        <TransactionRow Account="Kotak" Amount="1221" Category="Food" Type="Expense"/>
        <TransactionRow Account="Kotak" Amount="1221" Category="Food" Type="Expense"/>
        <TransactionRow Account="Kotak" Amount="1221" Category="Food" Type="Expense"/>
        <TransactionRow Account="Kotak" Amount="1221" Category="Food" Type="Expense"/>
        <TransactionRow Account="Kotak" Amount="1221" Category="Food" Type="Expense"/>
        <TransactionRow Account="Kotak" Amount="1221" Category="Food" Type="Expense"/>
        <TransactionRow Account="Kotak" Amount="1221" Category="Food" Type="Expense"/>
        <TransactionRow Account="Kotak" Amount="1221" Category="Food" Type="Expense"/>
      </TableBody>
    </Table>
    </ScrollArea>

  )
}


export default TransactionsTable;