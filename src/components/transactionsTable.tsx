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
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Account</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Type</TableHead>
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