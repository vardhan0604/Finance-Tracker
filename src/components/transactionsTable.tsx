"use client"
import React, { useEffect, useState } from 'react'
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
import { Button } from './ui/button'

type Props = {
  user: string;
}

const TransactionsTable = (props: Props) => {
  const [transactions, setTransactions] = useRecoilState(transactionsState)
  const [user, setUser] = useRecoilState(userState)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const itemsPerPage = 10 // You can adjust this value

  useEffect(() => {
    fetchTransactions()
  }, [currentPage])

  const fetchTransactions = async () => {
    const result = await getAllTransactions(user, currentPage, itemsPerPage)
    setTransactions(result.transactions)
    setTotalPages(result.totalPages)
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div>
      <ScrollArea className="h-[calc(100vh-200px)]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='text-left'>Account</TableHead>
              <TableHead className='text-left'>Amount</TableHead>
              <TableHead className='text-left'>Category</TableHead>
              <TableHead className='text-left'>Type</TableHead>
              <TableHead className='text-left'> </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction: any) => (
              <TransactionRow
                key={transaction._id.toString()}
                id={transaction._id.toString()}
                Account={transaction.accountName}
                Amount={transaction.amount}
                Category={transaction.category}
                Type={transaction.type}
              />
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
      <div className="flex justify-between items-center mt-4">
        <Button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</Button>
      </div>
    </div>
  )
}

export default TransactionsTable;