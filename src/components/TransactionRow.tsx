import React from 'react'
import { TableCell, TableRow } from './ui/table'

type Props = {
    Account: string;
    Amount: string;
    Category: string;
    Type: string;
}

export const TransactionRow = (props: Props) => {
    return (
        <TableRow>
            <TableCell className="font-medium">{props.Account}</TableCell>
            <TableCell>{`₹${props.Amount}`}</TableCell>
            <TableCell>{props.Category}</TableCell>
            <TableCell>{props.Type}</TableCell>
        </TableRow>
    )
}

export default TransactionRow